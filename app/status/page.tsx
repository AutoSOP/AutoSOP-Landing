"use client";

import React from "react";

export default function StatusPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-8 lg:px-16 max-w-3xl mx-auto py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        System Status
      </h1>

      <div className="rounded-2xl border p-6 bg-green-50 border-green-200">
        <h2 className="text-xl font-semibold text-green-700">
          All Systems Operational
        </h2>
        <p className="text-sm text-green-700 mt-2">
          The AutoSOP platform is currently operating normally.
        </p>
      </div>

      <section className="space-y-3">
        <h3 className="font-semibold">Components</h3>
        <ul className="text-sm text-muted-foreground space-y-2">
          <li>✔ Web Application</li>
          <li>✔ Authentication Services</li>
          <li>✔ API Services</li>
          <li>✔ Export Services (PDF / DOCX)</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h3 className="font-semibold">Scheduled Maintenance</h3>
        <p className="text-sm text-muted-foreground">
          No scheduled maintenance at this time.
        </p>
      </section>

      <p className="text-xs text-muted-foreground pt-8">
        Last updated: {new Date().toLocaleString()}
      </p>
    </div>
  );
}
