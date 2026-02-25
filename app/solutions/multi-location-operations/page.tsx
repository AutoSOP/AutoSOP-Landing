import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SolutionsCtas from "@/components/SolutionsCtas";

export const metadata: Metadata = {
  title: "Multi-Location SOP Software | Operational Consistency | AutoSOP",
  description:
    "AutoSOP is multi-location SOP software for operators who need consistent execution across sites—versioned SOPs, permissions, and rollout-ready governance.",
  alternates: {
    canonical: "/solutions/multi-location-operations-sop-software",
  },
  openGraph: {
    title: "Multi-Location SOP Software | Operational Consistency | AutoSOP",
    description:
      "Standardize workflows once. Roll them out across every location with version control, permissions, and governance.",
    url: "https://www.autosop.ai/solutions/multi-location-operations-sop-software",
    siteName: "AutoSOP",
    type: "website",
  },
};

const FAQ_ITEMS = [
  {
    q: "What is multi-location SOP software?",
    a: "Multi-location SOP software standardizes operating procedures across multiple sites so every team executes the same process with clear steps, version control, and governance.",
  },
  {
    q: "How do multi-location businesses maintain consistency across stores or branches?",
    a: "By centralizing SOPs, controlling access with roles, rolling out updates system-wide, and making procedures easy to follow where work happens.",
  },
  {
    q: "How does AutoSOP handle changes across locations?",
    a: "AutoSOP supports versioned SOPs so you can publish updates centrally, track revisions, and keep locations aligned—without emailing documents or managing copies.",
  },
  {
    q: "Is AutoSOP only for franchises?",
    a: "No. Any multi-site operator—retail, hospitality, medical, service, or field operations—can use AutoSOP to standardize workflows and reduce process drift.",
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

export default function MultiLocationOperationsSopSoftwarePage() {
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
              Multi-location consistency • Central governance • System-wide rollout
            </div>

            <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
              Multi-location SOP Software for consistent execution across every site
            </h1>

            <p className="text-muted-foreground text-base md:text-lg max-w-prose">
              Multi-location operations break when procedures drift. AutoSOP captures real workflows
              and turns them into governed SOPs you can roll out across locations—with version
              control, permissions, and adoption visibility.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <SolutionsCtas primaryHref="https://app.autosop.ai/users/sign_up" />
            </div>

            <div className="pt-4 text-sm text-muted-foreground">
              Built for multi-site operators in retail, hospitality, service, medical, and field ops.
            </div>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Where multi-location ops drift</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm text-muted-foreground">
              <ul className="list-disc pl-5 space-y-2">
                <li>Local “workarounds” become the new standard</li>
                <li>Training varies by manager and location</li>
                <li>Updates don’t reach everyone (or stick)</li>
                <li>No visibility into which SOPs are actually used</li>
              </ul>
              <div className="pt-2">
                AutoSOP creates one source of truth—and helps locations execute it the same way.
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
              The real cost of process drift
            </h2>
            <p className="text-muted-foreground">
              When sites execute differently, quality drops, rework rises, and managers spend their
              time “putting out fires” instead of improving operations.
            </p>
          </div>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">What drift looks like</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Different customer experience by location</div>
              <div>• Inconsistent compliance and documentation</div>
              <div>• Onboarding takes longer than it should</div>
              <div>• Good locations can’t be replicated reliably</div>
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Solution */}
      <Container className="py-10 md:py-16">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
            AutoSOP is multi-location operational control infrastructure
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            AutoSOP isn’t just documentation. It’s a system for capturing workflows, governing SOPs,
            rolling out changes, and keeping every site aligned with the same standard.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Central SOP control</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Maintain one source of truth for procedures across every location.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Versioning + rollout</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Publish updates centrally and keep every site on the latest version.
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Permissions + governance</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Protect critical steps and enforce standards with role-based access.
            </CardContent>
          </Card>
        </div>
      </Container>

      {/* Comparison */}
      <Container className="py-10 md:py-16">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Shared folder SOPs vs AutoSOP
        </h2>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">Docs in Drive / Notion</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• Multiple copies and outdated versions</div>
              <div>• Hard to enforce consistency</div>
              <div>• Updates don’t cascade reliably</div>
              <div>• Limited governance + adoption visibility</div>
            </CardContent>
          </Card>

          <Card className="border-secondary">
            <CardHeader>
              <CardTitle className="text-lg">AutoSOP</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground space-y-2">
              <div>• One governed source of truth</div>
              <div>• Version control + centralized rollout</div>
              <div>• Permissions built for operations</div>
              <div>• Standardization across sites</div>
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
                Ready to standardize execution across every location?
              </div>
              <p className="text-muted-foreground">
                Start free or book a demo to discuss rollout, governance, and multi-site operations.
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
            Multi-location SOP software FAQ
          </h2>
          <p className="text-muted-foreground max-w-3xl">
            Straight answers for teams standardizing operations across multiple sites.
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