"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (opts: any) => void;
      };
    };
  }
}

// ---- HubSpot script loader (loads once per session) ----
let hubspotLoader: Promise<void> | null = null;

function loadHubspotForms(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.hbspt?.forms?.create) return Promise.resolve();
  if (hubspotLoader) return hubspotLoader;

  hubspotLoader = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="js.hsforms.net/forms/embed/v2.js"]'
    );

    if (existing) {
      const t = window.setInterval(() => {
        if (window.hbspt?.forms?.create) {
          window.clearInterval(t);
          resolve();
        }
      }, 50);

      window.setTimeout(() => {
        window.clearInterval(t);
        if (window.hbspt?.forms?.create) resolve();
        else reject(new Error("HubSpot script present but hbspt not available."));
      }, 8000);

      return;
    }

    const s = document.createElement("script");
    s.src = "https://js.hsforms.net/forms/embed/v2.js";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("Failed to load HubSpot forms script."));
    document.head.appendChild(s);
  });

  return hubspotLoader;
}

type HubspotFormModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;

  portalId: string;
  formId: string;
  region?: string;

  ctaSource: string;
  extraHiddenFields?: Record<string, string>;
};

function getUtmParams(): Record<string, string> {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  const out: Record<string, string> = {};
  for (const k of keys) {
    const v = params.get(k);
    if (v) out[k] = v;
  }
  return out;
}

export default function HubspotFormModal({
  open,
  onOpenChange,
  title,
  portalId,
  formId,
  region = "na1",
  ctaSource,
  extraHiddenFields = {},
}: HubspotFormModalProps) {
  // stable mount id
  const targetId = React.useMemo(
    () => `hubspot-form-${Math.random().toString(36).slice(2)}`,
    []
  );

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // prevents double-create per open cycle
  const createdForThisOpenRef = React.useRef(false);

  // IMPORTANT: prevents StrictMode double-effect from re-triggering create
  const prevOpenRef = React.useRef(false);

  const createForm = React.useCallback(async () => {
    if (!open) return;
    if (createdForThisOpenRef.current) return;
    createdForThisOpenRef.current = true;

    setLoading(true);
    setError(null);

    try {
      await loadHubspotForms();

      if (!window.hbspt?.forms?.create) {
        throw new Error("HubSpot forms API not available after script load.");
      }

      const mount = document.getElementById(targetId);
      if (!mount) throw new Error("HubSpot mount element not found.");

      // Clear previous content on open
      mount.innerHTML = "";

      const pageUrl = window.location.href;
      const referrer = document.referrer || "";
      const utms = getUtmParams();

      window.hbspt.forms.create({
        region,
        portalId,
        formId,
        target: `#${targetId}`,

        onFormReady: (form: HTMLFormElement) => {
          const hidden: Record<string, string> = {
            cta_source: ctaSource,
            page_url: pageUrl,
            referrer,
            ...utms,
            ...extraHiddenFields,
          };

          Object.entries(hidden).forEach(([name, value]) => {
            if (!value) return;

            const existing = form.querySelector<HTMLInputElement>(`input[name="${name}"]`);
            if (existing) {
              existing.value = value;
              return;
            }

            const input = document.createElement("input");
            input.type = "hidden";
            input.name = name;
            input.value = value;
            form.appendChild(input);
          });

          // Helps HubSpot layout/iframe sizing inside modal
          requestAnimationFrame(() => window.dispatchEvent(new Event("resize")));

          setLoading(false);
        },

        onFormSubmitted: () => {
          // optional
          // onOpenChange(false);
        },
      });
    } catch (e: any) {
      setLoading(false);
      setError(e?.message || "Failed to load form.");
      createdForThisOpenRef.current = false; // allow retry
    }
  }, [open, region, portalId, formId, targetId, ctaSource, extraHiddenFields, onOpenChange]);

  // ONLY run on false -> true transition (prevents strobe in dev StrictMode)
  React.useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (open && !wasOpen) {
      createdForThisOpenRef.current = false;

      const t = window.setTimeout(() => {
        void createForm();
      }, 0);

      return () => window.clearTimeout(t);
    }

    if (!open && wasOpen) {
      const mount = document.getElementById(targetId);
      if (mount) mount.innerHTML = "";
    }
  }, [open, createForm, targetId]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[640px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        {error ? (
          <div className="rounded-lg border p-4">
            <p className="text-sm font-medium">Something went wrong loading the form.</p>
            <p className="text-sm text-muted-foreground mt-1">{error}</p>
            <div className="mt-3 flex gap-2">
              <Button onClick={createForm}>Retry</Button>
              <Button variant="outline" onClick={() => onOpenChange(false)}>
                Close
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative">
            {loading && (
              <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/60 backdrop-blur-sm">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Loading form…
                </div>
              </div>
            )}

            <div id={targetId} />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}