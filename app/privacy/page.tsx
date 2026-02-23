"use client";

import React from "react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Privacy Policy
      </h1>

      <p className="text-muted-foreground">
        Effective Date: {new Date().getFullYear()}
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Information We Collect</h2>
        <p className="text-muted-foreground">
          We collect information you provide directly to us, including contact
          details, account information, and workflow data necessary to operate
          the AutoSOP platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">How We Use Information</h2>
        <p className="text-muted-foreground">
          We use collected information to operate, maintain, and improve
          AutoSOP, provide customer support, and communicate updates.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Data Security</h2>
        <p className="text-muted-foreground">
          We implement appropriate technical and organizational safeguards
          to protect your data from unauthorized access or disclosure.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Contact</h2>
        <p className="text-muted-foreground">
          For privacy-related questions, contact: support@autosop.ai
        </p>
      </section>
    </div>
  );
}
