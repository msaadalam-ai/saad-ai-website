import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GrainOverlay from "@/components/GrainOverlay";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SAAD AI — Automation. Development. Strategy.",
  description:
    "AI-powered automation, web development, and strategic consulting. Build smarter and ship faster with SAAD AI.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body suppressHydrationWarning>
          <GrainOverlay />
          {children}
        </body>
    </html>
  );
}
