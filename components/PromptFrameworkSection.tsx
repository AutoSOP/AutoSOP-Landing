import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export type PromptFrameworkSectionProps = {
  eyebrow?: string;
  headline?: string;
  subhead?: string;

  // CTA under the “ask this first” block
  primaryCtaHref?: string;
  primaryCtaLabel?: string;

  // Optional: if you want a secondary CTA
  secondaryCtaHref?: string;
  secondaryCtaLabel?: string;

  // Used in CTA copy (optional)
  templateTitle?: string;
};

const DEFAULTS: Required<
  Pick<
    PromptFrameworkSectionProps,
    "eyebrow" | "headline" | "subhead" | "primaryCtaHref" | "primaryCtaLabel" | "templateTitle"
  >
> = {
  eyebrow: "Prompt Framework",
  headline: "Prompt Framework: get better SOP output",
  subhead:
    "Use this framework to write prompts that produce SOPs that actually match your business. It’s not about “good” vs “bad” prompts — it’s about including the variables that matter.",
  primaryCtaHref: "https://app.autosop.ai/users/sign_up",
  primaryCtaLabel: "Start free",
  templateTitle: "SOP",
};

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

export default function PromptFrameworkSection(props: PromptFrameworkSectionProps) {
  const {
    eyebrow = DEFAULTS.eyebrow,
    headline = DEFAULTS.headline,
    subhead = DEFAULTS.subhead,
    primaryCtaHref = DEFAULTS.primaryCtaHref,
    primaryCtaLabel = DEFAULTS.primaryCtaLabel,
    secondaryCtaHref,
    secondaryCtaLabel = "Book a demo",
    templateTitle = DEFAULTS.templateTitle,
  } = props;

  return (
    <section className="py-12 md:py-16">
      {/* Centered header */}
      <div className="max-w-3xl mx-auto text-center space-y-3">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white/60 backdrop-blur">
          {eyebrow}
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{headline}</h2>
        <p className="text-muted-foreground">{subhead}</p>
      </div>

      {/* 8-variable card (centered + not full width) */}
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

      {/* Comparison cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
        <Card className="border-secondary">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-lg">“Bad” prompt example</CardTitle>
              <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">Too generic</div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              This isn’t “wrong” — it’s just missing context, so the SOP will be generic too.
            </p>
            <div className="rounded-xl border border-secondary bg-white p-4 font-mono text-sm text-muted-foreground">
              Create an SOP for employee onboarding.
            </div>
          </CardContent>
        </Card>

        <Card className="border-secondary">
          <CardHeader>
            <div className="flex items-center justify-between gap-3">
              <CardTitle className="text-lg">Better prompt (structured)</CardTitle>
              <div className="rounded-full border px-3 py-1 text-xs text-muted-foreground">High signal</div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Same request — but now the output will be specific, usable, and consistent.
            </p>
            <div className="rounded-xl border border-secondary bg-white p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap">
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
            </div>
          </CardContent>
        </Card>
      </div>

      {/* “Ask this first” heading OUTSIDE the card + centered */}
      <div className="max-w-5xl mx-auto mt-12 text-center space-y-2">
        <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
          If you don’t know the variables yet… ask this first
        </h3>
        <p className="text-muted-foreground">
          Copy/paste this into AutoSOP first. It will ask the right questions before writing the SOP.
        </p>
      </div>

      {/* Ask-first card */}
      <div className="mt-6 flex justify-center">
        <Card className="w-full max-w-5xl border-secondary">
          <CardContent className="p-6">
            <div className="rounded-xl border border-secondary bg-white p-4 font-mono text-sm text-muted-foreground whitespace-pre-wrap">
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
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA under the card */}
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