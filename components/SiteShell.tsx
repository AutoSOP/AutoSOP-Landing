"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HubspotFormModal from "@/components/HubspotFormModal";

const HUBSPOT_PORTAL_ID = "50269348";
const HUBSPOT_FORM_ID = "e9bc35cf-a443-41d0-9807-a3069a66f008";

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [demoOpen, setDemoOpen] = React.useState(false);
  const [salesOpen, setSalesOpen] = React.useState(false);

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <img
                src="/assets/autoSOP-logo.png"
                alt="AutoSOP ai"
                className="h-7 w-auto cursor-pointer"
              />
            </Link>

            <Badge variant="outline" className="ml-3 hidden md:inline-flex">
              White Label Opportunities
            </Badge>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {/* On non-home pages these anchor links won’t help much — optional:
                You can keep them, or replace with real pages later */}
            <Link href="/#how" className="hover:underline">How it works</Link>
            <Link href="/#features" className="hover:underline">Features</Link>
            <Link href="/#pricing" className="hover:underline">Pricing</Link>
            <Link href="/security" className="hover:underline">Security</Link>
            <Link href="/#faq" className="hover:underline">FAQ</Link>
          </nav>

          <div className="flex items-center gap-2">
            <a href="https://app.autosop.ai/users/sign_in" className="hidden md:inline-flex">
              <Button variant="ghost">Sign in</Button>
            </a>

            <Button
              onClick={() => setDemoOpen(true)}
              className="group bg-primary text-primary-foreground hover:bg-[#c3181d]"
            >
              Book a demo
            </Button>
          </div>
        </Section>
      </header>

      {/* Page */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t py-10">
        <Section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/autoSOP-logo.png" alt="AutoSOP.ai" className="h-8 w-auto" />
            <div>
              <div className="font-semibold">AutoSOP.ai</div>
              <div className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} AutoSOP. All rights reserved.
              </div>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/security" className="hover:underline">Security</Link>
            <Link href="/status" className="hover:underline">Status</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
            
          </div>
        </Section>
      </footer>

      {/* HubSpot Modals (mounted once globally) */}
      <HubspotFormModal
        open={demoOpen}
        onOpenChange={setDemoOpen}
        title="Book a demo"
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region="na1"
        ctaSource="book_demo"
      />

      <HubspotFormModal
        open={salesOpen}
        onOpenChange={setSalesOpen}
        title="Talk to Sales"
        portalId={HUBSPOT_PORTAL_ID}
        formId={HUBSPOT_FORM_ID}
        region="na1"
        ctaSource="talk_to_sales"
      />
    </div>
  );
}