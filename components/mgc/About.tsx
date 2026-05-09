"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PILLARS = [
  {
    number: "01",
    title: "Speed without shortcuts",
    body: "AI-accelerated delivery that ships production-grade work in weeks, not months. Every line built to last.",
  },
  {
    number: "02",
    title: "Custom, not off-the-shelf",
    body: "No drag-and-drop builders. No cookie-cutter templates. Everything is architected for your specific context.",
  },
  {
    number: "03",
    title: "Strategy meets execution",
    body: "We don't just advise — we build. One team handles the roadmap and the implementation, start to finish.",
  },
];

function PillarCard({
  pillar,
  index,
}: {
  pillar: (typeof PILLARS)[number];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        delay: index * 0.14,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col gap-5 pt-8 border-t border-[#1a1a1a]"
    >
      {/* Gold top accent */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.14 + 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
        className="absolute top-0 left-0 w-10 h-px bg-[#d4a853]"
        aria-hidden="true"
      />

      <span className="text-[11px] text-[#3f3f46] tracking-[0.2em] font-medium">
        {pillar.number}
      </span>

      <h3 className="text-[22px] font-bold tracking-[-0.025em] text-white leading-[1.2]">
        {pillar.title}
      </h3>

      <p className="text-[14px] text-[#52525b] leading-[1.75]">{pillar.body}</p>
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineH = useTransform(scrollYProgress, [0.1, 0.6], ["0%", "100%"]);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] py-[120px] overflow-hidden"
    >
      {/* Background noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr] gap-16 lg:gap-0">

          {/* Left — big statement */}
          <div className="lg:pr-20">
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-12"
            >
              <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
              <span className="text-[11px] text-[#71717a] tracking-[0.22em] uppercase font-medium">
                Why MGC
              </span>
            </motion.div>

            <h2 className="text-[52px] md:text-[68px] font-bold tracking-[-0.04em] leading-[1.0] text-white mb-10">
              {["Built by", "builders,", "not agencies."].map((line, li) => (
                <span key={li} className="block overflow-hidden">
                  <motion.span
                    className="block"
                    initial={{ y: "100%" }}
                    whileInView={{ y: "0%" }}
                    viewport={{ once: true }}
                    transition={{
                      delay: li * 0.1,
                      duration: 0.9,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="text-[16px] text-[#71717a] leading-[1.75] max-w-[420px] mb-14"
            >
              MGC is a tight-knit team of engineers and strategists who've built
              products that actually ship — and actually scale. No bloated
              retainers. No hand-off delays. Just results.
            </motion.p>

            {/* Signature block */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="flex items-center gap-5"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center border border-[#d4a853]/30"
                style={{ background: "rgba(212,168,83,0.06)" }}
              >
                <span className="text-[14px] font-bold text-[#d4a853]">M</span>
              </div>
              <div>
                <p className="text-[14px] font-semibold text-white">Muhammad Saad</p>
                <p className="text-[12px] text-[#52525b]">Founder, MGC</p>
              </div>
            </motion.div>
          </div>

          {/* Animated divider line */}
          <div className="hidden lg:flex justify-center">
            <div className="relative w-px h-full bg-[#1a1a1a]">
              <motion.div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#d4a853]/60 to-[#2563eb]/40"
                style={{ height: lineH }}
              />
            </div>
          </div>

          {/* Right — pillars */}
          <div className="lg:pl-20 flex flex-col gap-10">
            {PILLARS.map((pillar, i) => (
              <PillarCard key={pillar.number} pillar={pillar} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
