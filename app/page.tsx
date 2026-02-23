
"use client";

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import HubspotFormModal from "@/components/HubspotFormModal";
import {
  Check,
  ArrowRight,
  Shield,
  Workflow,
  Users,
  LineChart,
  Sparkles,
  Building2,
  Settings2,
  Boxes,
  FolderCog,
  FileBox,
  BadgeCheck,
  ChevronDown,  // ⬅️ add this
} from "lucide-react";

const colors = {
  primary: "#E31E24",      // AutoSOP red
  secondary: "#E5E7EB",    // light border gray
  textDark: "#0B1221",
  textMuted: "#6B7280",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const Section = ({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) => (
  <section id={id} className={`w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>{children}</section>
);

const Pill = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-secondary px-3 py-1 text-xs md:text-sm bg-white/60 backdrop-blur">
    {children}
  </span>
);

const FeatureItem = ({ icon: Icon, title, children }: { icon: any; title: string; children: React.ReactNode }) => (
  <motion.div variants={fadeUp} className="flex gap-4">
    <div className="mt-1 shrink-0 rounded-2xl border p-3 border-secondary">
      <Icon className="h-5 w-5 text-primary" />
    </div>
    <div>
      <h4 className="font-semibold mb-1">{title}</h4>
      <p className="text-muted-foreground text-sm leading-relaxed">{children}</p>
    </div>
  </motion.div>
);

const ValueCard = ({ icon: Icon, title, points }: { icon: any; title: string; points: string[] }) => (
  <motion.div variants={fadeUp}>
    <Card className="h-full border-secondary">
      <CardHeader>
        <div className="flex items-center gap-3">
          <div className="rounded-2xl border p-3 border-secondary"><Icon className="h-5 w-5 text-primary"/></div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {points.map((p, i) => (
            <li key={i} className="flex items-start gap-2"><Check className="h-4 w-4 mt-0.5 text-primary"/>{p}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  </motion.div>
);

const LogoCloud = () => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-6 items-center opacity-80 text-muted-foreground">
    {["Law Offices", "Service", "Hospitality", "Medical", "Construction", "Retail"].map((name) => (
      <div key={name} className="flex items-center justify-center rounded-xl border py-4 text-xs md:text-sm border-secondary">{name}</div>
    ))}
  </div>
);

type PricingTierProps = {
  name: string;
  price: string;
  promoPrice?: string;
  promoNote?: string;
  period?: string | null;
  cta?: string;
  highlights?: string[];
  badge?: string;

  link?: string;
  onCtaClick?: () => void;
};

const PricingTier = ({
  name,
  price,
  promoPrice,
  promoNote,
  period = "mo",
  cta = "Start free",
  highlights = [],
  badge,
  link,
  onCtaClick,
}: PricingTierProps) => (
  <motion.div variants={fadeUp}>
    <Card
      className={`h-full ${badge ? "border-2" : ""}`}
      style={{ borderColor: badge ? colors.primary : colors.secondary }}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle style={{ color: colors.textDark }}>{name}</CardTitle>

          {badge && (
            <Badge
              variant="secondary"
              className="gap-1"
              style={{ backgroundColor: colors.secondary, color: colors.textDark }}
            >
              <Sparkles className="h-3 w-3" />
              {badge}
            </Badge>
          )}
        </div>

        <div className="mt-2 space-y-1">
          {promoPrice ? (
            <>
              <div className="text-sm text-muted-foreground line-through">
                {price}{period ? `/${period}` : ""}
              </div>

              <div className="text-3xl font-bold" style={{ color: colors.primary }}>
                {promoPrice}
                {period ? (
                  <span className="text-base font-medium text-muted-foreground">/{period}</span>
                ) : null}
              </div>

              {promoNote ? <div className="text-xs text-muted-foreground">{promoNote}</div> : null}
            </>
          ) : (
            <div className="mt-2">
              <span className="text-3xl font-bold" style={{ color: colors.textDark }}>
                {price}
              </span>
              {period ? <span className="text-muted-foreground">/{period}</span> : null}
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <ul className="space-y-2 text-sm" style={{ color: colors.textMuted }}>
          {highlights.map((h, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-4 w-4 mt-0.5" style={{ color: colors.primary }} />
              {h}
            </li>
          ))}
        </ul>

        {onCtaClick ? (
          <Button
            onClick={onCtaClick}
            className="w-full group bg-primary text-primary-foreground hover:bg-[#c3181d]"
          >
            {cta}
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition" />
          </Button>
        ) : (
          <Button
            asChild
            className="w-full group bg-primary text-primary-foreground hover:bg-[#c3181d]"
          >
            <a href={link ?? "#"}>
              {cta}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition" />
            </a>
          </Button>
        )}
      </CardContent>
    </Card>
  </motion.div>
);

// FAQ data
const FAQ_ITEMS = [
  {
    q: "What exactly does AutoSOP do?",
    a: "AutoSOP converts your everyday work into clear, step-by-step SOPs automatically. You perform the task once—AutoSOP records the workflow and generates a polished procedure with screenshots, instructions, and version history.",
  },
  {
    q: "How is AutoSOP different from Trainual, Whale, or SweetProcess?",
    a: "Those tools require manual typing and formatting. AutoSOP does the heavy lifting by capturing your actual workflow and producing the SOP for you—saving hours per document and making it far easier to keep things updated.",
  },
  {
    q: "Do I need technical experience to use AutoSOP?",
    a: "No. If you can use your computer normally—clicking, searching, and navigating—AutoSOP can capture and produce a complete SOP from your actions. There’s no coding or complex configuration required.",
  },
  {
    q: "Can my team members use AutoSOP too?",
    a: "Yes. You can invite team members, assign SOP ownership, and track usage so you know which procedures are being used and where there are gaps or bottlenecks.",
  },
  {
    q: "Is my information secure?",
    a: "Yes. All data is encrypted in transit and at rest, and your recordings and SOPs are stored securely. AutoSOP does not sell or share your data with any third party.",
  },
  {
    q: "What kinds of workflows can AutoSOP document?",
    a: "AutoSOP can capture virtually any repeatable screen-based process, including HR and admin tasks, payroll and operations workflows, onboarding steps, franchise procedures, and daily software tasks. If it happens on your screen, AutoSOP can document it.",
  },
  {
    q: "Can I export or share SOPs?",
    a: "Yes. You can export SOPs as PDFs, share access links, or store them inside your company’s internal documentation library so people can find what they need without interrupting you.",
  },
  {
    q: "How many SOPs can I create?",
    a: "On paid plans, you can create unlimited SOPs with unlimited versions and unlimited viewers, so you’re never choosing which processes are “worth” documenting.",
  },
  {
    q: "What if my process changes later?",
    a: "Just run the workflow again. AutoSOP creates a new version of the SOP, lets you compare changes, and allows you to roll back if you ever need to revert.",
  },
  {
    q: "Does AutoSOP help onboard new employees?",
    a: "Yes. New hires get step-by-step SOPs with screenshots and clear instructions, so they can ramp up faster without relying on tribal knowledge or constant shadowing.",
  },
  {
    q: "Do you offer support or onboarding help?",
    a: "Yes. If you want hands-on help documenting your first workflows or setting up a rollout plan for your team or locations, our team can walk through it with you.",
  },
  {
    q: "Is AutoSOP useful for franchisors or multi-location operators?",
    a: "Absolutely. AutoSOP helps standardize tasks across locations, reduce onboarding time, and ensure consistent execution—no matter who is working the process or where they’re located.",
  },
];

type FAQItem = { q: string; a: string };

const AccordionItem = ({ item, index }: { item: FAQItem; index: number }) => {
  const [open, setOpen] = React.useState(false);

  return (
    <motion.div
      variants={fadeUp}
      className="rounded-2xl border border-secondary bg-white"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 px-4 py-3 md:px-5 md:py-4 text-left"
      >
        <span className="font-medium text-sm md:text-base">
          {item.q}
        </span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <motion.div
        initial={false}
        animate={open ? "open" : "collapsed"}
        variants={{
          open: { height: "auto", opacity: 1 },
          collapsed: { height: 0, opacity: 0 },
        }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <div className="px-4 pb-3 md:px-5 md:pb-4 text-sm text-muted-foreground">
          {item.a}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function Page() {
const [demoOpen, setDemoOpen] = React.useState(false);
const [salesOpen, setSalesOpen] = React.useState(false);

const HUBSPOT_PORTAL_ID = "50269348";
const HUBSPOT_FORM_ID = "e9bc35cf-a443-41d0-9807-a3069a66f008";
  
  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      

      {/* Hero */}
      <Section className="py-16 md:py-24">
        <motion.div initial="hidden" animate="show" variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeUp} className="space-y-6">
              <Pill>
                <BadgeCheck className="h-4 w-4"/> Scalable by Design • Standardize Once • Run Everywhere
              </Pill>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight">
                Turn tribal knowledge into <span className="underline decoration-dashed underline-offset-4 decoration-secondary">clickable SOPs</span> & create accountability.
              </h1>
              <p className="text-muted-foreground text-base md:text-lg max-w-prose">
                AutoSOP captures how work really gets done across all departments in your business and turns it into living, step by step playbooks—complete with PDF, Word and Powerpoint exports.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
              <Button
  asChild
  size="lg"
  className="group bg-primary text-primary-foreground hover:bg-[#c3181d]"
>
  <a
    href="https://app.autosop.ai/users/sign_up"
    target="_blank"
    rel="noopener noreferrer"
  >
    Start free
    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition" />
  </a>
</Button>
                <Button size="lg" variant="outline">Watch 2 min overview</Button>
              </div>
              <div className="pt-4">
                <LogoCloud />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="relative">
              <div className="rounded-3xl border shadow-card p-3 bg-white/70 backdrop-blur">
                <div className="aspect-video w-full rounded-2xl border grid place-items-center text-center p-6">
                  <div>
                    <div className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">Preview</div>
                    <div className="text-lg md:text-xl font-semibold">Auto generated SOP: "Create an SOP for client to onboard their employees with a requirement to register for the ADP app"</div>
                    <p className="text-sm text-muted-foreground mt-2 text-left">Steps <br />
1. Provide Employee Information to ADP: <br />
- Gather the necessary employee information such as name, email address, job title, and department. <br />
- Ensure all details are accurate and up-to-date before proceeding. <br />
2. Access the ADP App Registration Portal: <br />
- Log in to the ADP client account using the provided credentials. <br />
- Navigate to the employee onboarding section within the ADP portal.
</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {["Request", "Annotate", "Publish"].map((label) => (
                    <div key={label} className="rounded-xl border p-3 text-center text-sm">{label}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Split value */}
      <Section id="who" className="py-12 md:py-16">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-6">
            <ValueCard
              icon={Building2}
              title="For Franchisors"
              points={[
                "Roll out brand safe playbooks across territories in hours, not months.",
                "Lock critical steps behind approvals/roles to reduce risk.",
                "Measure adoption and find process bottlenecks with analytics.",
              ]}
            />
            <ValueCard
              icon={Users}
              title="For Franchisees & Ops"
              points={[
                "Train new hires 2× faster with guided, clickable SOPs.",
                "Embed SOPs right where work happens.",
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
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">From messy know how to measurable execution in three tight loops.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <FeatureItem icon={Workflow} title="Capture">
              Capture workflows once so they can be standardized then your process can be documented clearly and consistently
            </FeatureItem>
            <FeatureItem icon={FolderCog} title="Design">
              Refine steps into structured, governed and brand-safe SOPs to create more efficient team cultures
            </FeatureItem>
            <FeatureItem icon={FileBox} title="Publish">
              Deploy SOPs where your team works--embedded in tool or run as guided checklists with guardrails and sign-offs
            </FeatureItem>
          </div>
        </motion.div>
      </Section>

      {/* Feature grid */}
      <Section id="features" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger} className="grid lg:grid-cols-3 gap-6">
          <ValueCard icon={Settings2} title="SOP Builder" points={[
            "Structured steps with roles, approvals, and accountability",
            "Reusable SOP templates for onboarding, payroll and operations",
            "Designed for consistency across teams and locations",
          ]} />
          <ValueCard icon={Boxes} title="Distribution & Access" points={[
            "Export SOPs to PDF, Word or Powerpoint",
            "Embed SOPs where teams work or run them as guided checklists",
            "Centralized access with version control",
          ]} />
          <ValueCard icon={LineChart} title="Governance & Oversight" points={[
            "Track versions and maintain audit-ready SOP histories",
            "Standardize execution across teams and locations",
            "Built to support multi-location and white-label operations",
          ]} />
        </motion.div>
      </Section>

      {/* Security */}
      <Section id="security" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div variants={fadeUp}>
              <h3 className="text-xl md:text-3xl font-bold tracking-tight">Security & Compliance first</h3>
              <p className="text-muted-foreground mt-3">Designed for payroll and sensitive PII workflows.</p>
              <div className="mt-6 space-y-3">
                {[
                  "Role based access controls and least-privilege defaults",
                  "Configurable redaction for sensitive fields in screenshots and recordings",
                  "Versioned SOPs with review workflows and audit history",
                  "Encryption in transit and at rest with region-aware data handling",
                ].map((t, i) => (
                  <div key={i} className="flex items-start gap-3"><Shield className="h-5 w-5 mt-0.5"/><p className="text-sm text-muted-foreground">{t}</p></div>
                ))}
              </div>
            </motion.div>
            <motion.div variants={fadeUp} className="rounded-3xl border p-6">
              <div className="aspect-video rounded-2xl border grid place-items-center text-center p-6">
                <div>
                  <div className="text-sm uppercase tracking-widest text-muted-foreground mb-2">Compliance snapshot</div>
                  <div className="font-semibold">SOC 2 aligned controls • PII redaction design • Audit-ready workflows</div>
                  <p className="text-sm text-muted-foreground mt-2">AutoSOP supports your compliance posture and works alongside your existing advisors</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="py-12 md:py-20">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }} variants={stagger}>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-4xl font-bold tracking-tight">Simple, transparent pricing</h3>
            <p className="text-muted-foreground mt-3">Start free. Scale with your team. Contact us for franchise rollouts.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <PricingTier
              name="Starter"
              price="$0"
              cta="Start Free"
              link="https://app.autosop.ai/users/sign_up"
              highlights={[
                "Up to 3 active SOPs",
                "PDF Export",
                "1 User no teams",
              ]}
            />
            <PricingTier
              name="Founders"
              price="$49"
              promoPrice="$29"
              promoNote="Founding rate - first 6 months"
              badge="Founding Rate"
              cta="Get Started"
              link="https://app.autosop.ai/users/sign_up"
              highlights={[
                "Unlimited SOPs & Versions",
                "Team Access & Permissions",
                "PDF and DOCX Exports",                
              ]}
            />
            <PricingTier
              name="White Label"
              price="Custom"
              period=""
              cta="Talk to Sales"
              onCtaClick={() => setSalesOpen(true)}
              highlights={[
                "Your Branding on the platform",
                "Client or location-level rollouts",
                "Centralized SOP governance",
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
                <p className="text-muted-foreground mt-2">Ship your first SOP in under an hour—no consultants required.</p>
              </div>
              <form
  className="flex flex-col sm:flex-row gap-3"
  onSubmit={(e) => {
    e.preventDefault();
    const email = new FormData(e.currentTarget).get("email")?.toString().trim();

    const qs = email ? `?email=${encodeURIComponent(email)}` : "";
    window.open(`https://app.autosop.ai/users/sign_up${qs}`, "_blank");
  }}
>
  <Input name="email" type="email" placeholder="Work email" className="h-11" required />
  <Button type="submit" className="h-11 group bg-primary text-primary-foreground hover:bg-[#c3181d]">
    Get started
    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition" />
  </Button>
</form>
            </CardContent>
          </Card>
        </motion.div>
      </Section>

      {/* FAQ */}
<Section id="faq" className="py-12 md:py-20">
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={stagger}
    className="space-y-8"
  >
    <div className="text-center max-w-2xl mx-auto">
      <h3 className="text-2xl md:text-4xl font-bold tracking-tight">
        Frequently asked questions
      </h3>
      <p className="text-muted-foreground mt-3">
        The short answers to the things operators and franchisors ask us most often.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 items-start">
      <div className="space-y-4">
        {FAQ_ITEMS.filter((_, i) => i % 2 === 0).map((item, i) => (
          <AccordionItem key={item.q} item={item} index={i} />
        ))}
      </div>
      <div className="space-y-4">
        {FAQ_ITEMS.filter((_, i) => i % 2 === 1).map((item, i) => (
          <AccordionItem key={item.q} item={item} index={i} />
        ))}
      </div>
    </div>
  </motion.div>
</Section>
<HubspotFormModal
  open={demoOpen}
  onOpenChange={setDemoOpen}
  title="Book a demo"
  portalId={HUBSPOT_PORTAL_ID}
  formId={HUBSPOT_FORM_ID}
  region="na1"
  ctaSource="book_demo"
/>

<HubspotFormModal
  open={salesOpen}
  onOpenChange={setSalesOpen}
  title="Talk to Sales"
  portalId={HUBSPOT_PORTAL_ID}
  formId={HUBSPOT_FORM_ID}
  region="na1"
  ctaSource="talk_to_sales"
/>
<div className="fixed bottom-4 right-4 z-[999999] rounded bg-black px-3 py-2 text-xs text-white">
  demoOpen: {String(demoOpen)} | salesOpen: {String(salesOpen)}
</div>


      
    </div>
  );
}


