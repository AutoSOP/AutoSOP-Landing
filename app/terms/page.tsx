"use client";

import React from "react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-8 lg:px-16 max-w-4xl mx-auto py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        Terms of Service
      </h1>

      <p className="text-muted-foreground">
        By accessing or using AutoSOP, you agree to these Terms.
      </p>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Use of Service</h2>
        <p className="text-muted-foreground">
          You agree to use AutoSOP only for lawful business purposes and in
          compliance with applicable laws and regulations.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Account Responsibility</h2>
        <p className="text-muted-foreground">
          You are responsible for safeguarding your login credentials and
          for activities occurring under your account.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Limitation of Liability</h2>
        <p className="text-muted-foreground">
          AutoSOP is provided “as is.” We are not liable for indirect,
          incidental, or consequential damages arising from use of the platform.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Modifications</h2>
        <p className="text-muted-foreground">
          We may update these Terms from time to time. Continued use of the
          platform constitutes acceptance of any changes.
        </p>
      </section>
    </div>
  );
}
