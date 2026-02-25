"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DemoModalProvider, { useDemoModal } from "@/components/DemoModalProvider";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const SOLUTIONS = [
  { label: "Franchise SOP Software", href: "/solutions/franchise-sop-software" },
  { label: "Multi-Location Operations", href: "/solutions/multi-location-operations" },
  { label: "Onboarding SOP Software", href: "/solutions/onboarding-sop-software" },
  { label: "Compliance SOP Software", href: "/solutions/compliance-sop-software" },
];

const TEMPLATES = [
  { label: "Employee Onboarding SOP Prompt", href: "/templates/employee-onboarding-sop-prompt-template" },
  // add more as you create them
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

function Header() {
  const { openDemo } = useDemoModal();

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <Section className="flex h-16 items-center justify-between">
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

        <nav className="hidden md:flex items-center gap-6 text-sm">
  <Link href="/#how" className="hover:underline">How it works</Link>

  <NavigationMenu>
    <NavigationMenuList className="gap-2">
      <NavigationMenuItem>
        <NavigationMenuTrigger className="h-auto px-0 py-0 text-sm font-normal hover:underline bg-transparent">
          Solutions
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[360px] p-3">
            <div className="grid gap-1">
              {SOLUTIONS.map((item) => (
                <NavigationMenuLink asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 hover:bg-muted transition text-sm"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuItem>
        <NavigationMenuTrigger className="h-auto px-0 py-0 text-sm font-normal hover:underline bg-transparent">
          Templates
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <div className="w-[360px] p-3">
            <div className="grid gap-1">
              {TEMPLATES.map((item) => (
                <NavigationMenuLink asChild key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-md px-3 py-2 hover:bg-muted transition text-sm"
                  >
                    {item.label}
                  </Link>
                </NavigationMenuLink>
              ))}
            </div>
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>

  <Link href="/#pricing" className="hover:underline">Pricing</Link>
  <Link href="/security" className="hover:underline">Security</Link>
  <Link href="/#faq" className="hover:underline">FAQ</Link>
</nav>

        <div className="flex items-center gap-2">
          <a href="https://app.autosop.ai/users/sign_in" className="hidden md:inline-flex">
            <Button variant="ghost">Sign in</Button>
          </a>

          <Button
            onClick={openDemo}
            className="group bg-primary text-primary-foreground hover:bg-[#c3181d]"
          >
            Book a demo
          </Button>
        </div>
      </Section>
    </header>
  );
}

function Footer() {
  return (
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
          <Link href="/security" className="hover:underline">
            Security
          </Link>
          <Link href="/status" className="hover:underline">
            Status
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms
          </Link>
        </div>
      </Section>
    </footer>
  );
}

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <DemoModalProvider>
      <div className="min-h-screen w-full bg-background text-foreground">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </DemoModalProvider>
  );
}