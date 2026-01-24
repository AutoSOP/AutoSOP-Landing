import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AutoSOP – Clickable SOPs for Payroll & Franchise Ops",
  description: "Capture real workflows and turn them into living playbooks with approvals, analytics, and embeds.",
  openGraph: {
    title: "AutoSOP – Clickable SOPs for Payroll & Franchise Ops",
    description: "Capture real workflows and turn them into living playbooks with approvals, analytics, and embeds.",
    url: "https://www.autosop.ai",
    siteName: "AutoSOP",
    images: ["/fav/autosop-og.png"]
  },
  icons: {
    icon: "/fav/favicon.ico",
    shortcut: "/fav/favicon.ico",
    apple: "/fav/apple-touch-icon.png",
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
