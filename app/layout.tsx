import type { Metadata } from "next";
import "./globals.css";
import SiteShell from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "AutoSOP – Standardize Once. Run Anywhere.",
  description:
    "Capture real workflows and turn them into governed, brand-safe SOPs your team can actually follow. Built for scale and security.",
  openGraph: {
    title: "AutoSOP – Standardize Once. Run Anywhere.",
    description:
      "Capture real workflows and turn them into governed, brand-safe SOPs your team can actually follow. Built for scale and security.",
    url: "https://www.autosop.ai",
    siteName: "AutoSOP",
    images: ["/fav/autosop-og.png"],
  },
  icons: {
    icon: "/fav/favicon.ico",
    shortcut: "/fav/favicon.ico",
    apple: "/fav/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}