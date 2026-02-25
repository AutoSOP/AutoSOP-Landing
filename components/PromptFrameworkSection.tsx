"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

type PromptFrameworkSectionProps = {
  templateTitle?: string;
};

export default function PromptFrameworkSection({
  templateTitle = "Employee Onboarding SOP Prompt Template",
}: PromptFrameworkSectionProps) {
  const framework = [
    { key: "Role", desc: "Who is this SOP for? (HR Admin, Store Manager, Ops Lead, etc.)" },
    { key: "Goal", desc: "What outcome should the process produce?" },
    { key: "Scope", desc: "Start/end points. What’s included vs excluded?" },
    { key: "Systems", desc: "Tools used (ADP, Gusto, BambooHR, Google Workspace, etc.)" },
    { key: "Inputs", desc: "What info is required to begin? (W-4, I-9, bank info, offer letter…)" },
    { key: "Rules", desc: "Policies, compliance requirements, approvals, deadlines" },
    { key: "Outputs", desc: "What’s produced? (accounts created, docs filed, checklists completed)" },
    { key: "Exceptions", desc: "Edge cases (rehire, remote hire, contractor → employee, etc.)" },
  ];

  return (
    <section className="py-10 md:py-14">
      <div className="space-y-6">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
  <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
    Prompt Framework: get better SOP output
  </h2>

  <p className="text-muted-foreground text-base md:text-lg">
    Use this framework to write prompts that produce SOPs that actually match your business.
    It’s not about “good” vs “bad” prompts — it’s about including the variables that matter.
  </p>
</div>

        <div className="flex justify-center">
  <Card className="border-secondary w-full max-w-4xl rounded-2xl">
    <CardHeader>
      <CardTitle className="text-xl text-center">
        The 8-variable SOP prompt
      </CardTitle>
    </CardHeader>

    <CardContent>
      <div className="grid md:grid-cols-2 gap-6">
        {framework.map((f) => (
          <div
            key={f.key}
            className="flex items-start gap-4 rounded-xl border p-4 bg-white/60 hover:bg-white transition"
          >
            <div className="min-w-[80px]">
              <Badge
                variant="outline"
                className="w-full justify-center font-medium"
              >
                {f.key}
              </Badge>
            </div>

            <div className="text-sm text-muted-foreground leading-relaxed">
              {f.desc}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
</div>


<section className="w-full py-14">
  <div className="max-w-5xl mx-auto">

    {/* Divider */}
    <div className="flex justify-center mb-8">
      <div className="h-px w-24 bg-border" />
    </div>

    {/* Section Heading */}
    <div className="text-center space-y-3 mb-10">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        Generic Prompt vs Effective Prompt
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Same request. Completely different output quality.
      </p>
    </div>

    {/* Cards Grid */}
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Bad */}
      <div className="rounded-2xl border bg-white p-6 lg:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold">“Bad” prompt example</div>
          <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
            Too generic
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          This isn’t “wrong” — it’s just missing context, so the SOP will be generic too.
        </p>

        <div className="mt-4 rounded-xl border bg-muted/30 p-4">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
{`Create an SOP for Employee Onboarding.`}
          </pre>
        </div>

        <div className="mt-4 text-xs text-muted-foreground">
          What’s missing: role, tools, scope, inputs, rules, outputs, exceptions.
        </div>
      </div>

      {/* Better */}
      <div className="rounded-2xl border bg-white p-6 lg:p-7">
        <div className="flex items-center justify-between gap-3">
          <div className="text-sm font-semibold">Better prompt (structured)</div>
          <span className="inline-flex items-center rounded-full border px-2.5 py-1 text-xs text-muted-foreground">
            High signal
          </span>
        </div>

        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
          Same request — but now the output will be specific, usable, and consistent.
        </p>

        <div className="mt-4 rounded-xl border bg-muted/30 p-4">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
{`You are an operations expert. Create a step-by-step Employee Onboarding SOP.

Role: HR Admin (primary), Store Manager (approver)
Goal: New hire is fully onboarded and ready for Day 1
Scope: Starts when offer is accepted; ends when employee completes Day-1 setup
Systems: ADP Workforce Now, Google Workspace, Slack
Inputs: Offer letter, legal name, address, SSN, W-4, I-9 docs, direct deposit info
Rules: I-9 must be completed by Day 3; manager approves job title & pay rate; PII must not be shared in Slack
Outputs: ADP profile created, payroll setup complete, email/slack accounts created, onboarding checklist completed
Exceptions: Remote hires; re-hires within 12 months; missing I-9 docs

Format:
1) Purpose
2) Roles & responsibilities
3) Preconditions
4) Steps with numbered actions and checkpoints
5) Quality checks + common failure points
6) Time expectations (SLA)
7) Version notes`}
          </pre>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="w-full py-16">
  <div className="max-w-4xl mx-auto px-4">

    {/* Section Heading */}
    <div className="text-center space-y-3 mb-8">
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
        If you don’t know the variables yet… ask this first
      </h2>

      <p className="text-muted-foreground max-w-2xl mx-auto">
        Copy/paste this into AutoSOP first. It will ask you the right questions
        before writing the SOP.
      </p>
    </div>

    {/* Prompt Card */}
    <div className="rounded-2xl border bg-white p-6 md:p-8">
      <pre className="whitespace-pre-wrap text-sm leading-relaxed text-foreground/90">
{`Before writing the SOP, ask me 10 clarifying questions to capture:
- Role(s)
- Goal + definition of done
- Scope start/end
- Systems used
- Inputs required
- Policies/compliance constraints
- Outputs produced
- Exceptions/edge cases
- Approval steps
- SLAs / timing expectations

After I answer, produce the full SOP in a clean, step-by-step format.`}
      </pre>
    </div>

    {/* CTA */}
    <div className="mt-10 text-center space-y-4">
      <p className="text-lg font-medium">
        Ready to generate your SOP?
      </p>

      <a
        href="https://app.autosop.ai/users/sign_up"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-[#c3181d] transition"
      >
        Create your {templateTitle} SOP
      </a>

      <div className="text-s text-muted-foreground">
        Free to start. No credit card required.
      </div>
    </div>

  </div>
</section>

      </div>
    </section>
  );
}