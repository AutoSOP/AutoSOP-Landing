import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionsCta from "@/components/SolutionsCtas";

export const metadata: Metadata = {
  title: "Payroll SOP Software | Standardize Payroll Processes | AutoSOP",
  description:
    "AutoSOP is payroll SOP software that helps teams standardize payroll workflows with version control, role-based permissions, and audit-ready governance.",
  alternates: {
    canonical: "/solutions/payroll-sop-software",
  },
  openGraph: {
    title: "Payroll SOP Software | Standardize Payroll Processes | AutoSOP",
    description:
      "Standardize payroll processes once. Execute accurately every run. Govern approvals, changes, and access with version control and permissions.",
    url: "https://www.autosop.ai/solutions/payroll-sop-software",
    siteName: "AutoSOP",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is payroll SOP software?",
    a: "Payroll SOP software organizes and standardizes payroll procedures so teams can run payroll consistently with clear steps, approvals, and version history.",
  },
  {
    q: "How does AutoSOP help reduce payroll errors?",
    a: "AutoSOP turns real workflows into step-by-step SOPs with version control and role permissions—so the process is followed the same way every payroll run.",
  },
  {
    q: "Can AutoSOP support approvals and access control?",
    a: "Yes. AutoSOP is designed for governed workflows with role-based permissions and audit-ready history for process changes.",
  },
  {
    q: "Is AutoSOP useful if we use ADP, Gusto, Paychex, or QuickBooks Payroll?",
    a: "Yes. AutoSOP documents the real steps your team performs in any system, then standardizes them into a repeatable, governed SOP.",
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

export default function PayrollSopSoftwarePage() {
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
              Payroll accuracy • Approvals & controls • Audit-ready governance
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Payroll SOP Software to standardize payroll runs & reduce errors
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              Payroll breaks when steps live in people’s heads. AutoSOP captures how payroll is
              actually run in your business and turns it into governed, versioned SOPs your team
              can follow every cycle—consistently.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionsCta primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              Built for recurring runs, handoffs, approvals, and clean execution.
            </div>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Where payroll goes wrong</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Different people run payroll differently</li>
                <li>Missing steps during PTO / turnover</li>
                <li>Manual checklists get outdated</li>
                <li>Approval + change control isn’t documented</li>
              </ul>
              <div className="pt-2">
                AutoSOP turns payroll “tribal knowledge” into a controlled, repeatable runbook.
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Value */}
      <Container className="py-10 md:py-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Govern the process, not just the document
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            AutoSOP is built for operational control: create a clear workflow, lock sensitive steps
            behind permissions, maintain version history, and standardize execution across the team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Standard payroll runs</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Capture the real steps once and run the same playbook every pay period.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Version control</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Update procedures without chaos—track changes and roll back when needed.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Permissions & approvals</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Keep sensitive payroll steps protected with role-based access and governance.
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Comparison */}
      <Container className="py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Spreadsheet checklist vs AutoSOP
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Spreadsheet checklist</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Gets copied and drift happens</div>
              <div>• Updates don’t reach everyone</div>
              <div>• No audit-friendly version history</div>
              <div>• Weak access control</div>
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">AutoSOP</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Living SOPs tied to real workflows</div>
              <div>• Central updates + rollout</div>
              <div>• Version history + governance</div>
              <div>• Permissions for sensitive steps</div>
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
                Want payroll runs that don’t rely on memory?
              </div>
              <p className="text-muted-foreground">
                Start free or book a demo to talk governance, approvals, and rollout.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionsCta primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>
          </CardContent>
        </Card>
      </Container>

      {/* FAQ */}
      <Container className="py-12 md:py-16">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Payroll SOP software FAQ
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Quick answers for teams standardizing payroll processes.
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