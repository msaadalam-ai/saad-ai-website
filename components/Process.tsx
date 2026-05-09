"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const STEPS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start with a focused conversation about your business, bottlenecks, and goals. I map where AI creates real leverage — and where it doesn't.",
    detail: "30–60 min call · No commitment",
  },
  {
    number: "02",
    title: "Build",
    description:
      "I design, develop, and iterate in short cycles. You see working software within days, not months. Feedback is built into every step.",
    detail: "Weekly demos · Fast iteration",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "We ship to production, monitor performance, and tune. I don't disappear post-launch — I make sure it actually works in the real world.",
    detail: "Full deployment · Post-launch support",
  },
];

export default function Process() {
  return (
    <section id="work" className="bg-[#0a0a0a] border-t border-[#1a1a1a] py-[96px]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#2563eb]" aria-hidden="true" />
            <span className="text-[#2563eb] text-[12px] font-medium tracking-[0.18em] uppercase">
              How It Works
            </span>
          </div>
          <AnimatedHeading
            text="From idea to running system."
            className="text-[42px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-white max-w-[520px]"
            mode="chars"
          />
        </motion.div>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Connecting line (desktop) */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            style={{ transformOrigin: "left" }}
            className="hidden md:block absolute top-[18px] left-[calc(33.33%+16px)] right-[calc(33.33%+16px)] h-px bg-[#1a1a1a]"
            aria-hidden="true"
          />

          {STEPS.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.15,
              }}
              className="flex flex-col"
            >
              {/* Step indicator */}
              <div className="flex items-center gap-4 mb-8">
                <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2563eb]/40 bg-[#2563eb]/10 shrink-0">
                  <span className="text-[12px] font-bold text-[#2563eb]">{step.number}</span>
                </div>
                {/* Mobile connector */}
                {i < STEPS.length - 1 && (
                  <div className="md:hidden flex-1 h-px bg-[#1a1a1a]" aria-hidden="true" />
                )}
              </div>

              <h3 className="mb-4 text-[26px] font-bold tracking-[-0.02em] text-white">
                {step.title}
              </h3>
              <p className="mb-6 text-[15px] leading-[1.65] text-[#71717a]">
                {step.description}
              </p>
              <span className="text-[12px] text-[#3f3f46] tracking-wide">{step.detail}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
