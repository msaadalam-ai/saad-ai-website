import type { Metadata } from "next";
import CustomCursor from "@/components/mgc/CustomCursor";

export const metadata: Metadata = {
  title: "MGC — Intelligence. Automation. Growth.",
  description:
    "AI-powered automation, web development, and strategic consulting for the modern enterprise.",
};

export default function MGCLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mgc-page">
      <CustomCursor />
      {children}
    </div>
  );
}
