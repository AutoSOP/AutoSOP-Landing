"use client";

import React from "react";

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Security & Data Protection
      </h1>

      <p className="text-muted-foreground">
        AutoSOP is designed to support businesses handling sensitive operational
        workflows, including payroll, HR, onboarding, and compliance-driven processes.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Encryption</h2>
        <p className="text-muted-foreground">
          All data is encrypted in transit using HTTPS/TLS and encrypted at rest
          using industry-standard encryption protocols.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Access Controls</h2>
        <p className="text-muted-foreground">
          AutoSOP supports role-based access controls, ensuring that users only
          access workflows and documentation appropriate to their role.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Redaction & Sensitive Data Handling</h2>
        <p className="text-muted-foreground">
          Configurable redaction tools help prevent exposure of sensitive fields
          such as Social Security Numbers, payroll amounts, or confidential
          customer information within documentation.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Audit & Version History</h2>
        <p className="text-muted-foreground">
          Every SOP maintains version history, enabling traceability,
          accountability, and governance across teams and locations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Incident Response</h2>
        <p className="text-muted-foreground">
          In the event of a security incident, AutoSOP will investigate promptly
          and notify affected customers in accordance with applicable laws.
        </p>
      </section>

      <p className="text-sm text-muted-foreground pt-8">
        For security inquiries, please contact: support@autosop.ai
      </p>
    </div>
  );
}
