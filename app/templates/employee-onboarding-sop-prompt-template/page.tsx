// app/templates/employee-onboarding-sop-prompt-template/page.tsx
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionCtas from "@/components/SolutionsCtas";
import PromptFrameworkSection from "@/components/PromptFrameworkSection";

export const metadata: Metadata = {
  title: "Employee Onboarding SOP Prompt Template | AutoSOP",
  description:
    "Copy-ready prompts to generate employee onboarding SOPs that match your business: roles, tools, compliance steps, checklists, and edge cases.",
  alternates: {
    canonical: "/templates/employee-onboarding-sop-prompt-template",
  },
  openGraph: {
    title: "Employee Onboarding SOP Prompt Template | AutoSOP",
    description:
      "Copy-ready prompts to generate onboarding SOPs with roles, tools, compliance steps, checklists, and edge cases—built for real SMB operations.",
    url: "https://www.autosop.ai/templates/employee-onboarding-sop-prompt-template",
    siteName: "AutoSOP",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is an employee onboarding SOP prompt template?",
    a: "It’s a copy/paste prompt you can give to AutoSOP (or any SOP-writing assistant) to generate an onboarding SOP tailored to your business—roles, tools, compliance steps, checklists, and edge cases included.",
  },
  {
    q: "Why not just ask for an onboarding SOP?",
    a: "Generic prompts often miss your actual tools, responsibilities, compliance steps, and exceptions. Adding a few operational variables dramatically improves SOP accuracy and usability.",
  },
  {
    q: "What compliance steps should onboarding SOPs include in the U.S.?",
    a: "Common onboarding compliance items include Form I-9, Form W-4, and state new hire reporting. Your requirements may vary by state and role.",
  },
  {
    q: "How do I handle missing or late paperwork in the SOP?",
    a: "Add an escalation path: who follows up, what deadlines apply, when to pause system access or scheduling, and who signs off before the employee can continue work.",
  },
];

function Container({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {children}
    </section>
  );
}

export default function EmployeeOnboardingSopPromptTemplatePage() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <Container className="py-14 md:py-20">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs md:text-sm bg-white/60 backdrop-blur">
              Prompt template • HR-ready onboarding SOPs • SMB + multi-location friendly
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Employee Onboarding SOP{" "}
              <span className="underline decoration-dashed underline-offset-4 decoration-muted">
                Prompt Template
              </span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              Don’t download a generic SOP. Copy a prompt that teaches AutoSOP how your business
              actually works—roles, tools, checklists, compliance, handoffs, and edge cases.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

            <div className="pt-2 text-sm text-muted-foreground">
              Tip: If you don’t know your variables yet (tools, roles, compliance), use the
              “ask first” prompt below and let AutoSOP collect what it needs.
            </div>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">What a “usable” onboarding SOP includes</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Role ownership + handoffs (HR, manager, IT, payroll)</li>
                <li>Pre-start + Day 1 + first-week checklists</li>
                <li>Compliance steps (I-9, W-4, state new hire reporting)</li>
                <li>Systems provisioning (email, apps, permissions)</li>
                <li>Escalation path for missing documents or failed background checks</li>
              </ul>
              <div className="pt-2">
                This page gives you prompts that generate that level of specificity.
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Framework Section (comparison + 6 variables + "ask first") */}
      <PromptFrameworkSection
        eyebrow="Employee Onboarding Prompt Framework"
        headline="From generic onboarding SOPs to SOPs your team can actually run"
        subhead="There are no “bad” prompts—only under-specified ones. Use the comparison + framework below to generate onboarding SOPs that match your roles, tools, compliance needs, and edge cases."
        primaryCtaHref="https://app.autosop.ai/users/sign_up"
        primaryCtaLabel="Start free"
        genericPrompt={{
          label: "Under-specified",
          title: "Generic prompt",
          helper:
            "This will produce something readable, but it won’t reflect your actual tools, roles, compliance deadlines, or escalation paths.",
          prompt: "Write an SOP for employee onboarding.",
        }}
        precisePrompt={{
          label: "Operationally precise",
          title: "High-performance prompt (copy/paste)",
          helper:
            "Swap in your details (industry, tools, roles) and you’ll get an onboarding SOP that’s structured, governed, and runnable.",
          prompt: `Create a role-based SOP for Employee Onboarding for a 30-person home services company with 2 locations (Florida).

Tools used: Certified Payroll Advisors (payroll), BambooHR (HRIS), Google Workspace, Slack, Checkr (background checks), DocuSign (offer letters).

Roles involved: Hiring Manager, HR Admin, IT Support, Payroll Admin, Office Manager, New Hire.

Requirements:
- Include Purpose, Scope, and Definitions
- Include a RACI table (who owns each phase and sign-off)
- Include a Pre-start checklist (7 days prior)
- Include Day 1 checklist
- Include First-week checklist (Days 2–5)
- Include first payroll validation step (verify W-4 + direct deposit + pay rate)
- Compliance: I-9, W-4, state new hire reporting
- Security: system access must be least-privilege; document who approves access
- Include escalation paths for:
  (a) missing IDs for I-9
  (b) failed background check
  (c) missed start date / no-show
- Include records retained + storage locations (HRIS, shared drive, payroll notes)
- Include Version control section (how updates are requested/approved)

Output format:
- Headings by phase (Pre-start, Day 1, Week 1, Closeout)
- Numbered steps under each phase
- Each step includes Owner (role), Inputs, and Completion criteria`,
        }}
      />

      {/* Why it matters */}
      <Container className="py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Why onboarding SOPs fail in growing SMBs
            </h2>
            <p className="text-muted-foreground">
              In fast-growing teams, onboarding breaks because ownership is unclear, systems access
              isn’t standardized, and compliance steps are treated like “someone else’s problem.”
              A prompt that forces specificity prevents drift.
            </p>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">What the prompt should force you to define</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Who owns each phase (HR vs manager vs IT vs payroll)</div>
              <div>• Which systems are provisioned and when</div>
              <div>• Compliance deadlines and required documentation</div>
              <div>• What happens when paperwork is missing</div>
              <div>• What “done” means (validation + sign-off)</div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* FAQ */}
      <Container className="py-12 md:py-16">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Employee onboarding SOP prompt template FAQ
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Straight answers for operators building onboarding SOPs that don’t fall apart at scale.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {FAQ_ITEMS.map((item) => (
            <Card key={item.q} className="border-secondary">
              <CardHeader>
                <CardTitle className="text-base">{item.q}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{item.a}</CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}