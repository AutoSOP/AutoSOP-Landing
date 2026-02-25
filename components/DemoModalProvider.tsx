"use client";

import * as React from "react";
import HubspotFormModal from "@/components/HubspotFormModal";

type DemoModalCtx = {
  openDemo: () => void;
  openSales: () => void;
};

const Ctx = React.createContext<DemoModalCtx | null>(null);

export function useDemoModal() {
  const ctx = React.useContext(Ctx);
  if (!ctx) throw new Error("useDemoModal must be used within DemoModalProvider");
  return ctx;
}

const HUBSPOT_PORTAL_ID = "50269348";
const HUBSPOT_FORM_ID = "e9bc35cf-a443-41d0-9807-a3069a66f008";

export default function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [demoOpen, setDemoOpen] = React.useState(false);
  const [salesOpen, setSalesOpen] = React.useState(false);

  const value = React.useMemo(
    () => ({
      openDemo: () => setDemoOpen(true),
      openSales: () => setSalesOpen(true),
    }),
    []
  );

  return (
    <Ctx.Provider value={value}>
      {children}

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
    </Ctx.Provider>
  );
}