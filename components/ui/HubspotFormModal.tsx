"use client";

import * as React from "react";
import Script from "next/script";
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
  const reactId = React.useId().replace(/:/g, "");
  const formTargetId = `hubspot-form-${reactId}`;

  const [scriptReady, setScriptReady] = React.useState(false);
  const [isLoadingForm, setIsLoadingForm] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  // Prevent double create() calls (strict mode + re-renders)
  const createdForOpenRef = React.useRef(false);

  const createForm = React.useCallback(() => {
    if (!open) return;
    if (typeof window === "undefined") return;

    if (!window.hbspt?.forms?.create) {
      setError("HubSpot form library not loaded yet.");
      return;
    }

    const targetEl = document.getElementById(formTargetId);
    if (!targetEl) return;

    // Guard: only create once per modal-open
    if (createdForOpenRef.current) return;
    createdForOpenRef.current = true;

    setIsLoadingForm(true);
    setError(null);

    // Clear container before injection (HubSpot sometimes leaves junk behind)
    targetEl.innerHTML = "";

    const pageUrl = window.location.href;
    const referrer = document.referrer || "";
    const utms = getUtmParams();

    window.hbspt.forms.create({
      region,
      portalId,
      formId,
      target: `#${formTargetId}`,

      onFormReady: (form: HTMLFormElement) => {
        try {
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

          setIsLoadingForm(false);
        } catch {
          setIsLoadingForm(false);
          setError("Form loaded but failed to initialize hidden fields.");
        }
      },

      onFormSubmitted: () => {
        // Optional: close after submit
        // onOpenChange(false);
      },
    });
  }, [open, region, portalId, formId, formTargetId, ctaSource, extraHiddenFields]);

  // Reset guard when modal closes so it can be created again next open
  React.useEffect(() => {
    if (!open) {
      createdForOpenRef.current = false;
      setIsLoadingForm(false);
      setError(null);
    }
  }, [open]);

  // Detect script already present (navigations / hot reloads)
  React.useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.hbspt?.forms?.create) setScriptReady(true);
  }, []);

  // Create form when modal opens and script is ready
  React.useEffect(() => {
    if (!open) return;
    if (!scriptReady) return;

    // Defer one tick so Dialog mounts
    const t = setTimeout(() => createForm(), 0);
    return () => clearTimeout(t);
  }, [open, scriptReady, createForm]);

  return (
    <>
      <Script
        id="hubspot-forms-v2"
        src="//js.hsforms.net/forms/embed/v2.js"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />

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
                <Button
                  onClick={() => {
                    createdForOpenRef.current = false;
                    createForm();
                  }}
                >
                  Retry
                </Button>
                <Button variant="outline" onClick={() => onOpenChange(false)}>
                  Close
                </Button>
              </div>
            </div>
          ) : (
            <div className="relative min-h-[220px]">
              {isLoadingForm && (
                <div className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-background/60 backdrop-blur-sm">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Loading…
                  </div>
                </div>
              )}

              <div id={formTargetId} />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
