"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const STEPS = [
  {
    number: "01",
    label: "Discover",
    title: "Deep-dive into your business",
    description:
      "We start with a structured discovery to map your workflows, uncover automation opportunities, and understand your constraints — technical and otherwise.",
    color: "#2563eb",
  },
  {
    number: "02",
    label: "Strategy",
    title: "Blueprint before we build",
    description:
      "A clear roadmap: what we're building, why, in what order, and how success is measured. No scope creep. No surprises.",
    color: "#d4a853",
  },
  {
    number: "03",
    label: "Build",
    title: "Ship fast, ship right",
    description:
      "Iterative development with weekly deliverables. AI-accelerated where it helps, hand-crafted where it matters. You see progress constantly.",
    color: "#2563eb",
  },
  {
    number: "04",
    label: "Launch",
    title: "Deployed and running",
    description:
      "Production deployment, documentation, and handover. For ongoing builds we stay embedded — your system keeps improving long after launch.",
    color: "#d4a853",
  },
] as const;

export default function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineW = useTransform(scrollYProgress, [0.15, 0.7], ["0%", "100%"]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] py-[120px] overflow-hidden"
    >
      {/* Subtle radial bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 0%, rgba(37,99,235,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
              <span className="text-[11px] text-[#71717a] tracking-[0.22em] uppercase font-medium">
                How We Work
              </span>
            </motion.div>

            <h2 className="text-[48px] md:text-[64px] font-bold tracking-[-0.04em] leading-[1.0] text-white">
              {["From zero to", "deployed."].map((line, li) => (
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
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[15px] text-[#52525b] leading-[1.75] max-w-[340px] md:text-right"
          >
            Four phases. No waste. Every step moves you forward.
          </motion.p>
        </div>

        {/* Horizontal connector track */}
        <div className="relative mb-16 hidden md:block">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-[#1a1a1a] -translate-y-1/2" />
          <motion.div
            className="absolute top-1/2 left-0 h-px -translate-y-1/2"
            style={{
              width: lineW,
              background: "linear-gradient(90deg, #2563eb, #d4a853)",
            }}
          />
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                delay: i * 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col gap-5 px-0 py-8 lg:px-8 lg:first:pl-0"
            >
              {/* Vertical divider for desktop */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-8 bottom-8 w-px bg-[#1a1a1a]"
                  aria-hidden="true"
                />
              )}

              {/* Step circle */}
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.12 + 0.2,
                    duration: 0.5,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative flex items-center justify-center w-10 h-10 rounded-full border shrink-0"
                  style={{ borderColor: `${step.color}40` }}
                >
                  <span
                    className="text-[11px] font-bold tabular-nums"
                    style={{ color: step.color }}
                  >
                    {step.number}
                  </span>
                  {/* Glow ring */}
                  <div
                    className="absolute inset-0 rounded-full"
                    style={{ boxShadow: `0 0 16px 2px ${step.color}20` }}
                  />
                </motion.div>

                <span
                  className="text-[11px] font-bold tracking-[0.16em] uppercase"
                  style={{ color: step.color }}
                >
                  {step.label}
                </span>
              </div>

              <h3 className="text-[18px] font-bold tracking-[-0.02em] text-white leading-[1.25]">
                {step.title}
              </h3>

              <p className="text-[13px] text-[#52525b] leading-[1.75]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
