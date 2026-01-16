import React from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Shield, Workflow, Users, LineChart, Sparkles, Building2, Settings2, Boxes, FolderCog, FileBox, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

/**
 * AutoSOP.ai Branded Landing Page
 * Brand tokens
 * - Primary (CPA red): #E31E24
 * - Primary hover:      #c3181d
 * - Secondary (Misty):  #BCC5CE
 * - Text/Dark:          #0B1221
 * - Light/Background:   #F8FAFC
 * - Muted text:         #5B6474
 * - Border:             #E5E7EB
 *
 * NOTE: Replace /assets/autoSOP-logo.png with your actual path (SVG or PNG).
 */

// Helper animation variants
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Section = ({ id, children, className = "" }) => (
  <section id={id} className={`w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>{children}</section>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-[#BCC5CE] px-3 py-1 text-xs md:text-sm bg-white/60 backdrop-blur">
    {children}
  </span>
);

const FeatureItem = ({ icon: Icon, title, children }) => (
  <motion.div variants={fadeUp} className="flex gap-4">
    <div className="mt-1 shrink-0 rounded-2xl border p-3">
      <Icon className="h-5 w-5" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-[#5B6474] text-sm leading-relaxed">{children}</p>
    </div>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, points }) => (
  <motion.div variants={fadeUp}>
    <Card className="h-full border-muted">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border p-3"><Icon className="h-5 w-5"/></div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-[#5B6474]">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{p}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

const LogoCloud = () => (
  <div className="grid grid-cols-2 md:grid-cols-6 gap-6 items-center opacity-80 text-[#5B6474]">
    {["ADP", "Paychex", "Paylocity", "HubSpot", "Airtable", "Softr"].map((name) => (
      <div key={name} className="flex items-center justify-center rounded-xl border py-4 text-xs md:text-sm">{name}</div>
    ))}
  </div>
);

const PricingTier = ({ name, price, period = "mo", cta = "Start free", highlights = [], badge }) => (
  <motion.div variants={fadeUp}>
    <Card className={`h-full ${badge ? "border-2" : ""}`}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{name}</CardTitle>
          {badge && <Badge variant="secondary" className="gap-1"><Sparkles className="h-3 w-3"/>{badge}</Badge>}
        </div>
        <div className="mt-2">
          <span className="text-3xl font-bold">{price}</span>
          <span className="text-[#5B6474]">/{period}</span>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <ul className="space-y-2 text-sm text-[#5B6474]">
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5"/>{h}</li>
          ))}
        </ul>
        <Button className="w-full group bg-[#E31E24] hover:bg-[#c3181d] text-white">{cta}<ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition"/></Button>
      </CardContent>
    </Card>
  </motion.div>
);

export default function AutoSOPLandingBranded() {
  return (
    <div className="min-h-screen w-full bg-[#F8FAFC] text-[#0B1221]">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Replace path with your asset */}
            <img src="/assets/autoSOP-logo.png" alt="AutoSOP.ai" className="h-7 w-auto"/>
            <Badge variant="outline" className="ml-3 hidden md:inline-flex">Franchise‑grade SOP Automation</Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#how" className="hover:underline">How it works</a>
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="#security" className="hover:underline">Security</a>
            <a href="#faq" className="hover:underline">FAQ</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden md:inline-flex">Sign in</Button>
            <Button className="group bg-[#E31E24] hover:bg-[#c3181d] text-white">Book a demo <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition"/></Button>
          </div>
        </Section>
      </header>

      {/* Hero */}
      <Section className="py-16 md:py-24">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="space-y-6">
              <Pill>
                <BadgeCheck className="h-4 w-4"/> SOC‑2 minded • Payroll‑friendly • Franchise ready
              </Pill>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Turn tribal knowledge into <span className="underline decoration-dashed underline-offset-4 decoration-[#BCC5CE]">clickable SOPs</span> your team actually uses.
              </h1>
              <p className="text-[#5B6474] text-base md:text-lg max-w-prose">
                AutoSOP captures how work really gets done across your payroll and back‑office stack (ADP, Paychex, Paylocity, HubSpot, Airtable, Softr) and turns it into living, step‑by‑step playbooks—complete with screenshots, fields, and guardrails.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="group bg-[#E31E24] hover:bg-[#c3181d] text-white">Start free <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition"/></Button>
                <Button size="lg" variant="outline" className="border-[#BCC5CE] text-[#0B1221] hover:bg-[#EFF3F6]">Watch 2‑min overview</Button>
              </div>
              <div className="pt-4">
                <LogoCloud />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-3xl border shadow-sm p-3 bg-white/70 backdrop-blur">
                <div className="aspect-video w-full rounded-2xl border grid place-items-center text-center p-6">
                  <div>
                    <div className="mb-2 text-xs uppercase tracking-widest text-[#5B6474]">Preview</div>
                    <div className="text-lg md:text-xl font-semibold">Auto‑generated SOP: "Run First Payroll in ADP Run"</div>
                    <p className="text-sm text-[#5B6474] mt-2">Recorded clicks → Annotated steps → Shareable checklist</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {["Record", "Annotate", "Publish"].map((label) => (
                    <div key={label} className="rounded-xl border p-3 text-center text-sm">{label}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Split value for Franchisors vs Franchisees */}
      <Section id="who" className="py-12 md:py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-6">
            <ValueCard
              icon={Building2}
              title="For Franchisors"
              points={[
                "Roll out brand‑safe playbooks across territories in hours, not months.",
                "Lock critical steps behind approvals/roles to reduce risk.",
                "Measure adoption and find process bottlenecks with analytics.",
              ]}
            />
            <ValueCard
              icon={Users}
              title="For Franchisees & Ops"
              points={[
                "Train new hires 2× faster with guided, clickable SOPs.",
                "Embed SOPs right where work happens (HubSpot, Airtable, ADP, Softr).",
                "Reduce tickets and rework with inline validations and templates.",
              ]}
            />
          </div>
        </motion.div>
      </Section>

      {/* How it works */}
      <Section id="how" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight">How AutoSOP works</h2>
            <p className="text-[#5B6474] mt-3 max-w-2xl mx-auto">From messy know‑how to measurable execution in three tight loops.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureItem icon={Workflow} title="Capture">
              Record a real workflow once. AutoSOP detects screens, clicks, and fields; drafts the steps; and grabs smart screenshots.
            </FeatureItem>
            <FeatureItem icon={FolderCog} title="Design">
              Turn steps into a brand‑safe SOP with roles, approvals, inputs, and links. Add snippets, checklists, and mini‑videos.
            </FeatureItem>
            <FeatureItem icon={FileBox} title="Publish">
              Embed where your team works (Airtable, HubSpot, Softr) or run as a guided checklist with guardrails and sign‑offs.
            </FeatureItem>
          </div>
        </motion.div>
      </Section>

      {/* Feature grid */}
      <Section id="features" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid lg:grid-cols-3 gap-6">
          <ValueCard icon={Settings2} title="SOP Builder" points={[
            "Drag‑and‑drop steps, roles, SLAs, and approvals",
            "Auto‑screenshots and blur sensitive fields",
            "Reusable templates for payroll and onboarding",
          ]} />
          <ValueCard icon={Boxes} title="Integrations" points={[
            "ADP, Paychex, Paylocity, HubSpot, Airtable, Softr",
            "Web embeds and Chrome capture",
            "Webhook + Zapier friendly",
          ]} />
          <ValueCard icon={LineChart} title="Analytics" points={[
            "Completion rates, time‑to‑complete, failure points",
            "Version control and audit trail",
            "Export to CSV for franchise HQ dashboards",
          ]} />
        </motion.div>
      </Section>

      {/* Security */}
      <Section id="security" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl md:text-3xl font-bold tracking-tight">Security & Compliance first</h3>
              <p className="text-[#5B6474] mt-3">Designed for payroll and sensitive PII workflows.</p>
              <div className="mt-6 space-y-3">
                {[
                  "Role‑based access, SSO, and least‑privilege defaults",
                  "Field‑level redaction on screenshots and recordings",
                  "Versioned SOPs with review gates and audit logs",
                  "Data residency and encryption at rest/in transit",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3"><Shield className="h-5 w-5 mt-0.5"/><p className="text-sm text-[#5B6474]">{t}</p></div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-3xl border p-6">
              <div className="aspect-video rounded-2xl border grid place-items-center text-center p-6">
                <div>
                  <div className="text-sm uppercase tracking-widest text-[#5B6474] mb-2">Compliance snapshot</div>
                  <div className="font-semibold">SOC‑2 alignment • PII redaction • Audit trail</div>
                  <p className="text-sm text-[#5B6474] mt-2">Work with your compliance partner—AutoSOP plays nice.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Testimonials */}
      <Section className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">What operators say</h3>
            <p className="text-[#5B6474] mt-3 max-w-2xl mx-auto">From first payroll run to multi‑location scaling.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                quote: "We cut new‑hire ramp from 6 weeks to 3. The guided checklists + screenshots make it idiot‑proof.",
                name: "Franchise Owner, Florida",
              },
              {
                quote: "Our ‘Payroll Bible’ finally lives inside the tools we use. Adoption is night‑and‑day.",
                name: "Ops Manager, Multi‑brand",
              },
              {
                quote: "HQ sees completion rates and bottlenecks across territories. That visibility changed everything.",
                name: "Franchisor COO",
              },
            ].map((t, i) => (
              <Card key={i}>
                <CardContent className="pt-6">
                  <p className="text-sm leading-relaxed">“{t.quote}”</p>
                  <div className="mt-4 text-xs text-[#5B6474]">{t.name}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h3>
            <p className="text-[#5B6474] mt-3">Start free. Scale with your team. Contact us for franchise rollouts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <PricingTier
              name="Starter"
              price="$0"
              cta="Start free"
              highlights={[
                "Up to 3 active SOPs",
                "Screenshot capture",
                "Web embeds",
              ]}
            />
            <PricingTier
              name="Pro"
              price="$29"
              badge="Most popular"
              highlights={[
                "Unlimited SOPs",
                "Roles & approvals",
                "Integrations + Analytics",
              ]}
            />
            <PricingTier
              name="Franchise"
              price="Custom"
              period={""}
              cta="Talk to sales"
              highlights={[
                "Multi‑brand rollouts",
                "Territory analytics",
                "SSO, audit, data residency",
              ]}
            />
          </div>
        </motion.div>
      </Section>

      {/* CTA strip */}
      <Section className="py-12">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={fadeUp}>
          <Card className="rounded-3xl overflow-hidden">
            <CardContent className="p-6 md:p-10 grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <div className="text-2xl md:text-3xl font-bold tracking-tight">Ready to turn chaos into clean execution?</div>
                <p className="text-[#5B6474] mt-2">Ship your first SOP in under an hour—no consultants required.</p>
              </div>
              <form className="flex flex-col sm:flex-row gap-3">
                <Input type="email" placeholder="Work email" className="h-11" />
                <Button className="h-11 group bg-[#E31E24] hover:bg-[#c3181d] text-white">Get started <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition"/></Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      {/* FAQ */}
      <Section id="faq" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid md:grid-cols-2 gap-6">
          {[
            { q: "Can AutoSOP capture any web app?", a: "Yes. The Chrome capture works across most modern web apps. Desktop capture is on the roadmap." },
            { q: "How do SOP updates roll out?", a: "Publish a new version and set required re‑read/acknowledge. Older versions remain archived with full audit trail." },
            { q: "Where does data live?", a: "Encrypted at rest and in transit. We offer regional data residency options for franchise networks." },
            { q: "Do you offer help with migration?", a: "Yes—white‑glove migration packages are available for franchisors." },
          ].map((f, i) => (
            <Card key={i}>
              <CardHeader><CardTitle className="text-base">{f.q}</CardTitle></CardHeader>
              <CardContent className="text-sm text-[#5B6474]">{f.a}</CardContent>
            </Card>
          ))}
        </motion.div>
      </Section>

      {/* Footer */}
      <footer className="border-t py-10">
        <Section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/autoSOP-logo.png" alt="AutoSOP.ai" className="h-8 w-auto"/>
            <div>
              <div className="font-semibold">AutoSOP.ai</div>
              <div className="text-xs text-[#5B6474]">© {new Date().getFullYear()} AutoSOP. All rights reserved.</div>
            </div>
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:underline">Security</a>
            <a href="#" className="hover:underline">Status</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
          </div>
        </Section>
      </footer>

      {/*
        Add to your <Head> (Next.js app router example):

        export const metadata = {
          title: 'AutoSOP – Clickable SOPs for Payroll & Franchise Ops',
          description: 'Capture real workflows and turn them into living playbooks with approvals, analytics, and embeds.',
          openGraph: {
            title: 'AutoSOP – Clickable SOPs for Payroll & Franchise Ops',
            description: 'Capture real workflows and turn them into living playbooks…',
            images: ['/og/autosop-og.png'],
            url: 'https://www.autosop.ai',
            siteName: 'AutoSOP',
          },
          icons: {
            icon: '/fav/favicon-32.png',
            shortcut: '/fav/favicon.ico',
            apple: '/fav/apple-touch-icon.png',
          }
        }
      */}
    </div>
  );
}
