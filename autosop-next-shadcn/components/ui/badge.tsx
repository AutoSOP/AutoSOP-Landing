import * as React from "react"
import { cn } from "@/lib/utils"

export function Badge({ className, variant = "default", ...props }: React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "outline" | "secondary" }) {
  const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs"
  const style = variant === "outline"
    ? "border border-secondary text-foreground"
    : variant === "secondary"
    ? "bg-secondary text-secondary-foreground"
    : "bg-muted text-foreground"
  return <div className={cn(base, style, className)} {...props} />
}
