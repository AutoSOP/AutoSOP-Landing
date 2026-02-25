import * as React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type PromptCardCopy = {
  label?: string;   // e.g. "Too generic" / "High signal"
  title: string;    // card title
  helper?: string;  // short helper sentence under title
  prompt: string;   // the prompt text
};

export type PromptFrameworkSectionProps = {
  eyebrow?: string;
  headline?: string;
  subhead?: string;

  templateTitle?: string;

  primaryCtaHref?: string;
  primaryCtaLabel?: string;

  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;

  genericPrompt?: PromptCardCopy;
  betterPrompt?: PromptCardCopy;

  askFirstTitle?: string;
  askFirstSubhead?: string;
  askFirstPrompt?: string;
};

const DEFAULT_GENERIC: PromptCardCopy = {
  label: "Too generic",
  title: "“Bad” prompt example",
  helper: "This isn’t “wrong” — it’s just missing context, so the SOP will be generic too.",
  prompt: "Create an SOP for employee onboarding.",
};

const DEFAULT_BETTER: PromptCardCopy = {
  label: "High signal",
  title: "Better prompt (structured)",
  helper: "Same request — but now the output will be specific, usable, and consistent.",
  prompt: `You are an operations expert. Create a step-by-step Employee Onboarding SOP.

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
7) Version notes`,
};

const DEFAULT_ASK_FIRST = `Before writing the SOP, ask me 10 clarifying questions to capture:
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

After I answer, produce the full SOP in a clean, step-by-step format.`;

const variables = [
  { label: "Role", desc: "Who is this SOP for? (HR Admin, Store Manager, Ops Lead, etc.)" },
  { label: "Goal", desc: "What outcome should the process produce?" },
  { label: "Scope", desc: "Start/end points. What’s included vs excluded?" },
  { label: "Systems", desc: "Tools used (ADP, Gusto, BambooHR, Google Workspace, etc.)" },
  { label: "Inputs", desc: "What info is required to begin? (W-4, I-9, bank info, offer letter…)" },
  { label: "Rules", desc: "Policies, compliance requirements, approvals, deadlines" },
  { label: "Outputs", desc: "What’s produced? (accounts created, docs filed, checklists completed)" },
  { label: "Exceptions", desc: "Edge cases (rehire, remote hire, contractor → employee, etc.)" },
];

export default function PromptFrameworkSection({
  eyebrow = "Prompt Framework",
  headline = "Prompt Framework: get better SOP output",
  subhead = `Use this framework to write prompts that produce SOPs that actually match your business. It’s not about “good” vs “bad” prompts — it’s about including the variables that matter.`,

  templateTitle = "SOP",

  primaryCtaHref = "https://app.autosop.ai/users/sign_up",
  primaryCtaLabel = "Start free",

  secondaryCtaHref,
  secondaryCtaLabel = "Book a demo",

  genericPrompt = DEFAULT_GENERIC,
  betterPrompt = DEFAULT_BETTER,

  askFirstTitle = "If you don’t know the variables yet… ask this first",
  askFirstSubhead = "Copy/paste this into AutoSOP first. It will ask the right questions before writing the SOP.",
  askFirstPrompt = DEFAULT_ASK_FIRST,
}: PromptFrameworkSectionProps) {
  return (
    <section className="py-12 md:py-16">
      {/* Centered heading */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white/60 backdrop-blur">
          {eyebrow}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{headline}</h2>
        <p className="text-muted-foreground">{subhead}</p>
      </div>

      {/* 8-variable card centered + 2 columns */}
      <div className="mt-8 flex justify-center">
        <Card className="w-full max-w-5xl border-secondary">
          <CardHeader>
            <CardTitle className="text-center text-xl">The 8-variable SOP prompt</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              {variables.map((v) => (
                <div key={v.label} className="rounded-2xl border border-secondary bg-white p-4">
                  <div className="flex items-start gap-3">
                    <div className="shrink-0 rounded-full border border-secondary px-3 py-1 text-xs font-medium">
                      {v.label}
                    </div>
                    <div className="text-sm text-muted-foreground">{v.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Divider + H2 */}
      <div className="max-w-5xl mx-auto mt-12">
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-border" />
          <h3 className="text-center text-2xl md:text-3xl font-bold tracking-tight">
            Generic Prompt vs Effective Prompt
          </h3>
          <div className="h-px w-16 bg-border" />
        </div>
      </div>

      {/* Comparison */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        <Card className="border-secondary">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-lg">{genericPrompt.title}</CardTitle>
              {genericPrompt.label ? (
                <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {genericPrompt.label}
                </div>
              ) : null}
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {genericPrompt.helper ? (
              <p className="text-sm text-muted-foreground">{genericPrompt.helper}</p>
            ) : null}
            <div className="rounded-xl border border-secondary bg-white p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap">
              {genericPrompt.prompt}
            </div>
          </CardContent>
        </Card>

        <Card className="border-secondary">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-lg">{betterPrompt.title}</CardTitle>
              {betterPrompt.label ? (
                <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">
                  {betterPrompt.label}
                </div>
              ) : null}
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {betterPrompt.helper ? (
              <p className="text-sm text-muted-foreground">{betterPrompt.helper}</p>
            ) : null}
            <div className="rounded-xl border border-secondary bg-white p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap">
              {betterPrompt.prompt}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Ask-first heading OUTSIDE card + centered */}
      <div className="max-w-5xl mx-auto mt-12 text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{askFirstTitle}</h3>
        <p className="text-muted-foreground">{askFirstSubhead}</p>
      </div>

      {/* Ask-first card */}
      <div className="mt-6 flex justify-center">
        <Card className="w-full max-w-5xl border-secondary">
          <CardContent className="p-6">
            <div className="rounded-xl border border-secondary bg-white p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap">
              {askFirstPrompt}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA under ask-first card */}
      <div className="mt-6 flex flex-col items-center justify-center gap-3 text-center">
        <div className="text-sm text-muted-foreground">
          Ready? Create your <span className="font-medium text-foreground">{templateTitle}</span> SOP now.
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            asChild
            className="group bg-primary text-primary-foreground hover:bg-[#c3181d]"
          >
            <a href={primaryCtaHref} target="_blank" rel="noopener noreferrer">
              {primaryCtaLabel}
            </a>
          </Button>

          {secondaryCtaHref ? (
            <Button asChild variant="outline">
              <a href={secondaryCtaHref}>{secondaryCtaLabel}</a>
            </Button>
          ) : null}
        </div>
      </div>
    </section>
  );
}