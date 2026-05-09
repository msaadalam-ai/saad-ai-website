"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "AI Automation",
  "Web Development",
  "AI Consulting",
  "Intelligent Systems",
  "MGC",
  "Machine Learning",
  "LLM Integration",
  "Business Automation",
  "AI Strategy",
  "MGC",
];

function MarqueeItem({ text, i }: { text: string; i: number }) {
  const isBrand = text === "MGC";
  return (
    <span className="inline-flex items-center gap-6 shrink-0">
      <span
        className={`text-[13px] font-medium tracking-[0.12em] uppercase whitespace-nowrap ${
          isBrand ? "text-[#d4a853]" : "text-[#3f3f46]"
        }`}
      >
        {text}
      </span>
      {/* Separator */}
      <span className="block w-1 h-1 rounded-full bg-[#2563eb]/40 shrink-0" aria-hidden="true" />
    </span>
  );
}

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]; // duplicate for seamless loop

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a] border-y border-[#1a1a1a] py-5">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0a0a0a 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(270deg, #0a0a0a 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <div
        className="mgc-marquee-track inline-flex gap-6"
        aria-hidden="true"
      >
        {doubled.map((item, i) => (
          <MarqueeItem key={i} text={item} i={i} />
        ))}
      </div>
    </div>
  );
}
