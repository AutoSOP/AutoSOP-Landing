"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ChevronDown, Menu } from "lucide-react";

// --------------------
// EDIT THESE ARRAYS
// --------------------
const SOLUTIONS = [
  { label: "Franchise SOP Software", href: "/solutions/franchise-sop-software" },
  { label: "Multi-Location Operations", href: "/solutions/multi-location-operations" },
  { label: "Compliance SOP Software", href: "/solutions/compliance-sop-software" },
  { label: "Onboarding SOP Software", href: "/solutions/onboarding-sop-software" },
];

const TEMPLATES = [
  { label: "Employee Onboarding SOP Prompt Template", href: "/templates/employee-onboarding-sop-prompt-template" },
  // add more here…
];

function Section({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`w-full px-4 md:px-8 lg:px-16 max-w-7xl mx-auto ${className}`}>
      {children}
    </div>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [solutionsOpen, setSolutionsOpen] = React.useState(false);
  const [templatesOpen, setTemplatesOpen] = React.useState(false);

  // 🔥 Replace this with your current working demo modal opener:
  const onClickDemo = () => {
    // Example (if using context):
    // openDemo();

    // Example (if using local state in SiteShell):
    // setDemoOpen(true);

    // For now, safe fallback:
    window.location.href = "/#demo";
  };

  return (
    <div className="min-h-screen w-full bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
        <Section className="flex h-16 items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center">
              <img
                src="/assets/autoSOP-logo.png"
                alt="AutoSOP ai"
                className="h-7 w-auto cursor-pointer"
              />
            </Link>

            <Badge variant="outline" className="ml-3 hidden md:inline-flex">
              White Label Opportunities
            </Badge>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/#how" className="hover:underline">How it works</Link>
            <Link href="/#features" className="hover:underline">Features</Link>
            <Link href="/#pricing" className="hover:underline">Pricing</Link>

            {/* Solutions dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 hover:underline">
                Solutions <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-64">
                {SOLUTIONS.map((s) => (
                  <DropdownMenuItem key={s.href} asChild>
                    <Link href={s.href}>{s.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Templates dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="inline-flex items-center gap-1 hover:underline">
                Templates <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                {TEMPLATES.map((t) => (
                  <DropdownMenuItem key={t.href} asChild>
                    <Link href={t.href}>{t.label}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/security" className="hover:underline">Security</Link>
            <Link href="/#faq" className="hover:underline">FAQ</Link>
          </nav>

          {/* Right: CTAs + Mobile hamburger */}
          <div className="flex items-center gap-2">
            <a
              href="https://app.autosop.ai/users/sign_in"
              className="hidden md:inline-flex"
            >
              <Button variant="ghost">Sign in</Button>
            </a>

            <Button
              onClick={onClickDemo}
              className="hidden md:inline-flex group bg-primary text-primary-foreground hover:bg-[#c3181d]"
            >
              Book a demo
            </Button>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>

              <SheetContent side="right" className="w-[320px] sm:w-[360px]">
                <div className="flex flex-col gap-4 mt-6">
                  <div className="flex items-center justify-between">
                    <Link href="/" onClick={() => setMobileOpen(false)}>
                      <img
                        src="/assets/autoSOP-logo.png"
                        alt="AutoSOP ai"
                        className="h-7 w-auto"
                      />
                    </Link>
                  </div>

                  <div className="border-t pt-4 flex flex-col gap-3 text-sm">
                    <Link href="/#how" onClick={() => setMobileOpen(false)} className="hover:underline">
                      How it works
                    </Link>
                    <Link href="/#features" onClick={() => setMobileOpen(false)} className="hover:underline">
                      Features
                    </Link>
                    <Link href="/#pricing" onClick={() => setMobileOpen(false)} className="hover:underline">
                      Pricing
                    </Link>

                    {/* Mobile Solutions accordion */}
                    <button
                      type="button"
                      onClick={() => setSolutionsOpen((v) => !v)}
                      className="flex items-center justify-between"
                    >
                      <span>Solutions</span>
                      <ChevronDown className={`h-4 w-4 transition ${solutionsOpen ? "rotate-180" : ""}`} />
                    </button>
                    {solutionsOpen && (
                      <div className="pl-3 flex flex-col gap-2">
                        {SOLUTIONS.map((s) => (
                          <Link
                            key={s.href}
                            href={s.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-muted-foreground hover:underline"
                          >
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    {/* Mobile Templates accordion */}
                    <button
                      type="button"
                      onClick={() => setTemplatesOpen((v) => !v)}
                      className="flex items-center justify-between"
                    >
                      <span>Templates</span>
                      <ChevronDown className={`h-4 w-4 transition ${templatesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {templatesOpen && (
                      <div className="pl-3 flex flex-col gap-2">
                        {TEMPLATES.map((t) => (
                          <Link
                            key={t.href}
                            href={t.href}
                            onClick={() => setMobileOpen(false)}
                            className="text-muted-foreground hover:underline"
                          >
                            {t.label}
                          </Link>
                        ))}
                      </div>
                    )}

                    <Link href="/security" onClick={() => setMobileOpen(false)} className="hover:underline">
                      Security
                    </Link>
                    <Link href="/#faq" onClick={() => setMobileOpen(false)} className="hover:underline">
                      FAQ
                    </Link>
                  </div>

                  <div className="border-t pt-4 flex flex-col gap-3">
                    <a href="https://app.autosop.ai/users/sign_in">
                      <Button variant="outline" className="w-full">
                        Sign in
                      </Button>
                    </a>

                    <Button
                      onClick={() => {
                        setMobileOpen(false);
                        onClickDemo();
                      }}
                      className="w-full bg-primary text-primary-foreground hover:bg-[#c3181d]"
                    >
                      Book a demo
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </Section>
      </header>

      {/* Page */}
      <main>{children}</main>

      {/* Footer (unchanged) */}
      <footer className="border-t py-10">
        <Section className="flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/assets/autoSOP-logo.png" alt="AutoSOP.ai" className="h-8 w-auto" />
            <div>
              <div className="font-semibold">AutoSOP.ai</div>
              <div className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} AutoSOP. All rights reserved.
              </div>
            </div>
          </div>

          <div className="flex gap-6 text-sm">
            <Link href="/security" className="hover:underline">Security</Link>
            <Link href="/status" className="hover:underline">Status</Link>
            <Link href="/privacy" className="hover:underline">Privacy</Link>
            <Link href="/terms" className="hover:underline">Terms</Link>
          </div>
        </Section>
      </footer>
    </div>
  );
}