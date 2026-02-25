import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionsCtas from "@/components/SolutionsCtas";

export const metadata: Metadata = {
  title: "Employee Onboarding SOP Software | Faster Training & Consistency | AutoSOP",
  description:
    "AutoSOP is onboarding SOP software that turns real workflows into step-by-step procedures with version control, role permissions, and export-ready documentation—so new hires ramp faster.",
  alternates: {
    canonical: "/solutions/onboarding-sop-software",
  },
  openGraph: {
    title: "Employee Onboarding SOP Software | Faster Training & Consistency | AutoSOP",
    description:
      "Turn onboarding into repeatable SOPs. Standardize training, reduce mistakes, and help new hires ramp faster with governed, exportable SOPs.",
    url: "https://www.autosop.ai/solutions/onboarding-sop-software",
    siteName: "AutoSOP",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is onboarding SOP software?",
    a: "Onboarding SOP software helps teams standardize new-hire training by turning onboarding workflows into step-by-step procedures that are easy to follow, update, and distribute.",
  },
  {
    q: "How does AutoSOP help new employees ramp faster?",
    a: "AutoSOP captures real workflows and converts them into guided SOPs with clear steps and exports—so new hires can follow the process without constant shadowing or repeated questions.",
  },
  {
    q: "Can AutoSOP standardize onboarding across multiple roles or locations?",
    a: "Yes. AutoSOP supports structured SOPs, version control, and permissions—so you can roll out consistent onboarding across departments, teams, and locations.",
  },
  {
    q: "Can we export onboarding SOPs?",
    a: "Yes. AutoSOP supports exports such as PDF and document formats so onboarding materials can be shared, stored, or used in your existing systems.",
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

export default function OnboardingSopSoftwarePage() {
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
              Faster ramp time • Less shadowing • Consistent training
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Onboarding SOP Software for{" "}
              <span className="underline decoration-dashed underline-offset-4 decoration-muted">
                faster training and consistent execution
              </span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              New hires don’t fail because they’re lazy — they fail because onboarding is inconsistent.
              AutoSOP turns real onboarding workflows into clear, repeatable SOPs your team can follow
              on day one.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionsCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              Built for ops teams, HR, managers, and multi-role onboarding across growing businesses.
            </div>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Where onboarding breaks</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Every manager trains differently</li>
                <li>New hires ask the same questions repeatedly</li>
                <li>Tribal knowledge isn’t documented</li>
                <li>Processes drift after “week one”</li>
                <li>Compliance steps get skipped under pressure</li>
              </ul>
              <div className="pt-2">
                AutoSOP turns your onboarding into living SOPs — versioned, consistent, and easy to improve.
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Problem */}
      <Container className="py-10 md:py-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
              Standardized onboarding is an operating advantage
            </h2>
            <p className="text-muted-foreground">
              When onboarding is repeatable, performance becomes predictable. When it’s ad-hoc,
              you get uneven execution, higher turnover, and constant interruptions.
            </p>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">What “good onboarding” requires</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Clear steps with no guessing</div>
              <div>• Consistent training across roles</div>
              <div>• Easy updates when tools change</div>
              <div>• Accountability and ownership</div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Solution */}
      <Container className="py-10 md:py-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            AutoSOP turns onboarding into a system
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Capture real workflows once, produce clean onboarding SOPs, and keep them current with versioning.
            This reduces ramp time, improves consistency, and lowers support load on your best people.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Workflow-based SOPs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              SOPs are built from how the work is actually done — not a manual someone typed once and forgot.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Version control</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Update onboarding as tools change, publish a new version, and keep training aligned with reality.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Exports & portability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Export onboarding SOPs to share with teams, store in your systems, or use for compliance needs.
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Comparison */}
      <Container className="py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Checklists and docs vs AutoSOP
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Typical onboarding</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• A Google Doc + a few tribal steps</div>
              <div>• Manual updates (if anyone remembers)</div>
              <div>• Inconsistent training by manager</div>
              <div>• No easy visibility into what’s used</div>
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">AutoSOP</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Workflow-based onboarding SOPs</div>
              <div>• Versioned, publishable updates</div>
              <div>• Standardization across roles & teams</div>
              <div>• Built for scale and governance</div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* CTA */}
      <Container className="py-12 md:py-16">
        <Card className="rounded-3xl overflow-hidden">
          <CardContent className="p-6 md:p-10 grid lg:grid-cols-2 gap-6 items-center">
            <div className="space-y-2">
              <div className="text-2xl md:text-3xl font-bold tracking-tight">
                Want new hires productive faster?
              </div>
              <p className="text-muted-foreground">
                Start free or book a demo to discuss onboarding rollouts, governance, and multi-role training.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionsCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>
          </CardContent>
        </Card>
      </Container>

      {/* FAQ */}
      <Container className="py-12 md:py-16">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Onboarding SOP software FAQ
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Quick answers for operators and teams standardizing onboarding.
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