import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionCtas from "@/components/SolutionsCtas";

export const metadata: Metadata = {
  title: "Franchise SOP Software | Multi-Location Operational Control | AutoSOP",
  description:
    "AutoSOP is franchise SOP software built for multi-location operational control—versioned SOPs, role-based governance, and adoption visibility across territories.",
  alternates: {
    canonical: "/solutions/franchise-sop-software",
  },
  openGraph: {
    title: "Franchise SOP Software | Multi-Location Operational Control | AutoSOP",
    description:
      "Standardize processes once. Enforce them everywhere. Govern SOPs across locations with version control, permissions, and adoption visibility.",
    url: "https://www.autosop.ai/solutions/franchise-sop-software",
    siteName: "AutoSOP",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is franchise SOP software?",
    a: "Franchise SOP software centralizes operational procedures so franchisors can standardize execution across multiple locations with version control, governance, and adoption visibility.",
  },
  {
    q: "How do franchisors maintain operational consistency across locations?",
    a: "By using a governed SOP system that supports role permissions, version history, centralized updates, and clear distribution—so every location follows the same standard.",
  },
  {
    q: "Can AutoSOP replace an operations manual?",
    a: "Yes. AutoSOP turns static manuals into living SOPs with structured steps, versioning, and the ability to roll out updates system-wide.",
  },
  {
    q: "Is AutoSOP suitable for multi-location businesses that aren’t franchises?",
    a: "Absolutely. Any multi-site operator can use AutoSOP to standardize workflows, train faster, and maintain consistency across locations.",
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

export default function FranchiseSopSoftwarePage() {
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
              Operational control infrastructure • Franchise-ready governance
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Franchise SOP Software for{" "}
              <span className="underline decoration-dashed underline-offset-4 decoration-muted">
                multi-location operational control
              </span>
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              Standardize processes once. Enforce them everywhere. AutoSOP helps franchisors
              maintain execution consistency across territories with version control, permissions,
              and rollout-ready governance.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              Works for franchisors, multi-location operators, and teams that need consistency.
            </div>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Where franchises break at scale</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Process drift across locations</li>
                <li>Inconsistent training and onboarding</li>
                <li>Higher compliance and brand risk</li>
                <li>Static manuals that don’t stay current</li>
              </ul>
              <div className="pt-2">
                AutoSOP turns your operations manual into living SOPs teams actually follow.
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
              Why most franchise systems lose control
            </h2>
            <p className="text-muted-foreground">
              Once you’re beyond a handful of locations, “tribal knowledge” becomes expensive.
              Operators improvise. Managers train differently. Standards slip.
            </p>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Static ops manuals fail because…</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• They’re hard to update</div>
              <div>• Nobody reads them in the moment</div>
              <div>• There’s no adoption visibility</div>
              <div>• There’s no structured governance</div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Solution */}
      <Container className="py-10 md:py-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            AutoSOP is operational control infrastructure
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Not “another documentation tool.” AutoSOP helps franchisors capture real workflows,
            turn them into structured SOPs, push updates system-wide, and maintain brand-safe
            execution across every territory.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Central SOP control</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Keep procedures centralized, governed, and consistent across every location.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Version history & audit trail</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Track changes, publish updates, and roll back when needed—without chaos.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Role-based permissions</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Protect critical workflows and enforce standards with least-privilege defaults.
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Comparison */}
      <Container className="py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Operations manual vs AutoSOP
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Traditional ops manual</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Static PDF or binder</div>
              <div>• Manual updates + emailing attachments</div>
              <div>• No visibility into usage</div>
              <div>• Hard to enforce standards</div>
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">AutoSOP</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Living SOPs with structured steps</div>
              <div>• Version control + system-wide rollout</div>
              <div>• Governance-ready permissions</div>
              <div>• Consistency across territories</div>
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
                Ready to enforce brand standards across every location?
              </div>
              <p className="text-muted-foreground">
                Start free or book a demo to talk rollout, governance, and white label options.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

          </CardContent>
        </Card>
      </Container>

      {/* FAQ */}
      <Container className="py-12 md:py-16">
        <div className="space-y-3">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            Franchise SOP software FAQ
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Straight answers for operators and franchisors evaluating SOP tooling.
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