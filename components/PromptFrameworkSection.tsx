"use client";

import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

type PromptCardCopy = {
  label: string;
  title: string;
  helper?: string;
  prompt: string;
};

export type PromptFrameworkSectionProps = {
  // Top header copy (centered)
  eyebrow?: string;
  headline?: string;
  subhead?: string;

  // Primary CTA (used under Ask-First section)
  primaryCtaHref?: string;
  primaryCtaLabel?: string;

  // Template name for CTA copy
  templateTitle?: string;

  // Prompt comparison
  genericPrompt?: PromptCardCopy;

  // ✅ The “good” prompt prop name
  betterPrompt?: PromptCardCopy;

  // ✅ Backward-compatible alias (your page currently uses this)
  precisePrompt?: PromptCardCopy;

  // Ask-first prompt block
  askFirstPrompt?: string;

  // Optional: override the 8 variables list
  variables?: Array<{ key: string; desc: string }>;
};

const DEFAULT_VARS: Array<{ key: string; desc: string }> = [
  { key: "Role", desc: "Who is this SOP for? (HR Admin, Store Manager, Ops Lead, etc.)" },
  { key: "Goal", desc: "What outcome should the process produce?" },
  { key: "Scope", desc: "Start/end points. What’s included vs excluded?" },
  { key: "Systems", desc: "Tools used (ADP, Gusto, BambooHR, Google Workspace, etc.)" },
  { key: "Inputs", desc: "What info is required to begin? (W-4, I-9, bank info, offer letter…)" },
  { key: "Rules", desc: "Policies, compliance requirements, approvals, deadlines" },
  { key: "Outputs", desc: "What’s produced? (accounts created, docs filed, checklists completed)" },
  { key: "Exceptions", desc: "Edge cases (rehire, remote hire, contractor → employee, etc.)" },
];

const DEFAULT_GENERIC: PromptCardCopy = {
  label: "Too generic",
  title: "“Bad” prompt example",
  helper: `This isn’t “wrong” — it’s just missing context, so the SOP will be generic too.`,
  prompt: "Create an SOP for employee onboarding.",
};

const DEFAULT_BETTER: PromptCardCopy = {
  label: "High signal",
  title: "Better prompt (structured)",
  helper: "Same request — but now the output will be specific, usable, and consistent.",
  prompt: [
    "You are an operations expert. Create a step-by-step Employee Onboarding SOP.",
    "",
    "Role: HR Admin (primary), Store Manager (approver)",
    "Goal: New hire is fully onboarded and ready for Day 1",
    "Scope: Starts when offer is accepted; ends when employee completes Day-1 setup",
    "Systems: ADP Workforce Now, Google Workspace, Slack",
    "Inputs: Offer letter, legal name, address, SSN, W-4, I-9 docs, direct deposit info",
    "Rules: I-9 must be completed by Day 3; manager approves job title & pay rate; PII must not be shared in Slack",
    "Outputs: ADP profile created, payroll setup complete, email/slack accounts created, onboarding checklist completed",
    "Exceptions: Remote hires; re-hires within 12 months; missing I-9 docs",
    "",
    "Format:",
    "1) Purpose",
    "2) Roles & responsibilities",
    "3) Preconditions",
    "4) Steps with numbered actions and checkpoints",
    "5) Quality checks + common failure points",
    "6) Time expectations (SLA)",
    "7) Version notes",
  ].join("\n"),
};

const DEFAULT_ASK_FIRST = [
  "Before writing the SOP, ask me 10 clarifying questions to capture:",
  "- Role(s)",
  "- Goal + definition of done",
  "- Scope start/end",
  "- Systems used",
  "- Inputs required",
  "- Policies/compliance constraints",
  "- Outputs produced",
  "- Exceptions/edge cases",
  "- Approval steps",
  "- SLAs / timing expectations",
  "",
  "After I answer, produce the full SOP in a clean, step-by-step format.",
].join("\n");

function TwoColVariables({ vars }: { vars: Array<{ key: string; desc: string }> }) {
  return (
    <div className="mt-6 grid gap-4 md:grid-cols-2">
      {vars.map((v) => (
        <div
          key={v.key}
          className="rounded-2xl border bg-white p-5 flex items-start gap-4"
        >
          <Badge variant="outline" className="min-w-[88px] justify-center">
            {v.key}
          </Badge>
          <div className="text-sm text-muted-foreground leading-relaxed">{v.desc}</div>
        </div>
      ))}
    </div>
  );
}

function PromptCard({ copy }: { copy: PromptCardCopy }) {
  return (
    <Card className="border-secondary rounded-3xl">
      <CardHeader className="space-y-2">
        <div className="flex items-start justify-between gap-4">
          <CardTitle className="text-lg">{copy.title}</CardTitle>
          <Badge variant="outline" className="whitespace-nowrap">
            {copy.label}
          </Badge>
        </div>
        {copy.helper ? (
          <p className="text-sm text-muted-foreground">{copy.helper}</p>
        ) : null}
      </CardHeader>
      <CardContent>
        <div className="rounded-2xl border bg-white p-4">
          <pre className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
            {copy.prompt}
          </pre>
        </div>
      </CardContent>
    </Card>
  );
}

export default function PromptFrameworkSection(props: PromptFrameworkSectionProps) {
  const {
    eyebrow = "Prompt Framework: get better SOP output",
    headline = "Prompt Framework: get better SOP output",
    subhead = `Use this framework to write prompts that produce SOPs that actually match your business. It’s not about “good” vs “bad” prompts — it’s about including the variables that matter.`,

    primaryCtaHref = "https://app.autosop.ai/users/sign_up",
    primaryCtaLabel = "Start free",
    templateTitle = "Employee Onboarding",

    variables = DEFAULT_VARS,

    genericPrompt = DEFAULT_GENERIC,

    // ✅ Accept either prop name (betterPrompt or precisePrompt)
    betterPrompt,
    precisePrompt,

    askFirstPrompt = DEFAULT_ASK_FIRST,
  } = props;

  const resolvedBetter = betterPrompt ?? precisePrompt ?? DEFAULT_BETTER;

  return (
    <section className="w-full">
      {/* Centered header */}
      <div className="mx-auto max-w-5xl px-4 md:px-8 lg:px-16 pt-10">
        <div className="text-center">
          {eyebrow ? (
            <div className="text-sm text-muted-foreground">{eyebrow}</div>
          ) : null}
          <h1 className="mt-2 text-3xl md:text-4xl font-bold tracking-tight">
            {headline}
          </h1>
          {subhead ? (
            <p className="mt-3 text-muted-foreground max-w-3xl mx-auto">
              {subhead}
            </p>
          ) : null}
        </div>

        {/* 8-variable card (centered, not full width) */}
        <div className="mt-8">
          <Card className="border-secondary rounded-3xl mx-auto max-w-4xl">
            <CardHeader>
              <CardTitle className="text-xl text-center">
                The 8-variable SOP prompt
              </CardTitle>
            </CardHeader>
            <CardContent>
              <TwoColVariables vars={variables} />
            </CardContent>
          </Card>
        </div>

        {/* Divider + H2 */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="h-px w-full max-w-4xl bg-border" />
          <h2 className="text-center text-2xl md:text-3xl font-bold tracking-tight">
            Generic Prompt vs Effective Prompt
          </h2>
        </div>

        {/* Prompt comparison (2 columns) */}
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <PromptCard copy={genericPrompt} />
          <PromptCard copy={resolvedBetter} />
        </div>

        {/* Ask-first H2 (outside card, centered) */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            If you don’t know the variables yet… ask this first
          </h2>
          <p className="mt-2 text-muted-foreground">
            Copy/paste this into AutoSOP first. It will ask you the right questions before writing the SOP.
          </p>
        </div>

        {/* Ask-first card */}
        <div className="mt-6">
          <Card className="border-secondary rounded-3xl mx-auto max-w-4xl">
            <CardContent className="p-6 md:p-8">
              <div className="rounded-2xl border bg-white p-4">
                <pre className="whitespace-pre-wrap text-sm leading-relaxed text-muted-foreground">
                  {askFirstPrompt}
                </pre>
              </div>

              {/* CTA under card */}
              <div className="mt-6 flex justify-center">
                <Button
                  asChild
                  className="bg-primary text-primary-foreground hover:bg-[#c3181d]"
                >
                  <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
                    Create your {templateTitle} SOP
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* optional footer label */}
        <div className="mt-10 pb-10 text-sm text-muted-foreground text-center">
          Template: {templateTitle} SOP Prompt Template
        </div>
      </div>
    </section>
  );
}