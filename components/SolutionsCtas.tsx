"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/components/DemoModalProvider";

type Props = {
  primaryHref: string;
  primaryLabel?: string;
  secondaryLabel?: string;
};

export default function SolutionCtas({
  primaryHref,
  primaryLabel = "Start free",
  secondaryLabel = "Book a demo",
}: Props) {
  const { openDemo } = useDemoModal();

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-start lg:justify-end">
      <Button
        asChild
        className="group bg-primary text-primary-foreground hover:bg-[#c3181d]"
      >
        <a href={primaryHref} target="_blank" rel="noopener noreferrer">
          {primaryLabel}
        </a>
      </Button>

      <Button variant="outline" onClick={openDemo}>
        {secondaryLabel}
      </Button>
    </div>
  );
}