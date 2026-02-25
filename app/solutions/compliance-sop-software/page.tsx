import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionsCtas from "@/components/SolutionsCtas";

export const metadata: Metadata = {
  title: "Compliance SOP Software | Audit-Ready Procedures & Governance | AutoSOP",
  description:
    "AutoSOP is compliance SOP software built for audit-ready execution—versioned SOPs, role-based governance, controlled updates, and exportable documentation.",
  alternates: {
    canonical: "/solutions/compliance-sop-software",
  },
  openGraph: {
    title: "Compliance SOP Software | Audit-Ready Procedures & Governance | AutoSOP",
    description:
      "Standardize compliance workflows with version control, permissions, and governance. Keep SOPs current, enforce critical steps, and export documentation when needed.",
    url: "https://www.autosop.ai/solutions/compliance-sop-software",
    siteName: "AutoSOP",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is compliance SOP software?",
    a: "Compliance SOP software centralizes regulated procedures and controls so teams can follow consistent steps, maintain version history, and produce documentation for audits and reviews.",
  },
  {
    q: "How does AutoSOP support audits?",
    a: "AutoSOP keeps SOPs versioned and controlled, making it easier to show what the procedure is, when it changed, and how processes are standardized across the business.",
  },
  {
    q: "Can we restrict who can edit compliance SOPs?",
    a: "Yes. Role-based permissions and governance workflows help prevent unauthorized changes and keep critical procedures controlled.",
  },
  {
    q: "Can we export compliance SOPs?",
    a: "Yes. AutoSOP supports exports so you can share, store, or provide documentation for audits, vendors, and internal reviews.",
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

export default function ComplianceSopSoftwarePage() {
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
              Audit-ready SOPs • Controlled updates • Less risk
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Compliance SOP Software for{" "}
              <span className="underline decoration-dashed underline-offset-4 decoration-muted">
                audit-ready execution
              </span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              Compliance breaks when procedures drift. AutoSOP helps you standardize regulated workflows,
              control changes, and keep SOPs ready for audits—without living in spreadsheets and binders.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionsCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              Built for teams running sensitive workflows (payroll, HR, finance, ops) that need consistency.
            </div>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Where compliance fails in real life</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Different people follow different steps</li>
                <li>Processes change but the SOP doesn’t</li>
                <li>Critical checks get skipped under pressure</li>
                <li>No clear ownership of procedures</li>
                <li>Hard to pull documentation quickly during audits</li>
              </ul>
              <div className="pt-2">
                AutoSOP turns compliance from “hope” into a governed operating system.
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
              Most compliance programs fail at the execution layer
            </h2>
            <p className="text-muted-foreground">
              Policies aren’t procedures. Procedures aren’t followed unless they’re clear, current,
              and embedded into daily work. When SOPs drift, risk creeps in quietly.
            </p>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Common SOP failure modes</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Static documents that don’t match reality</div>
              <div>• No version history or controlled updates</div>
              <div>• No guardrails for critical steps</div>
              <div>• No easy way to export/share evidence</div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Solution */}
      <Container className="py-10 md:py-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            AutoSOP is governance for how work gets done
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Capture workflows, publish structured SOPs, and keep them controlled. AutoSOP helps you
            reduce variance, maintain an audit-ready SOP library, and scale compliance across teams.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Versioned procedures</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Maintain current SOPs with clear history so changes don’t become mystery updates.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Role-based control</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Keep compliance steps protected with least-privilege access and governance.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Export-ready documentation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Export SOPs when needed for audits, vendors, internal reviews, and training.
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Comparison */}
      <Container className="py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Policy binders vs governed SOPs
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Typical compliance documentation</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• PDF binders + shared drive folders</div>
              <div>• Untracked edits and drift</div>
              <div>• Hard to ensure people follow the same steps</div>
              <div>• Scramble to compile evidence during audits</div>
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">AutoSOP</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Structured, versioned SOPs</div>
              <div>• Controlled updates and governance</div>
              <div>• Consistent execution across teams</div>
              <div>• Exportable documentation when needed</div>
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
                Want compliance that holds up under pressure?
              </div>
              <p className="text-muted-foreground">
                Start free or book a demo to discuss governance, approvals, exports, and rollout strategy.
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
            Compliance SOP software FAQ
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Quick answers for teams standardizing regulated workflows.
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