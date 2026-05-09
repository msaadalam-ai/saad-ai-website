"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const TESTIMONIALS = [
  {
    quote:
      "MGC automated our entire client onboarding flow in three weeks. What used to take our ops team 4 hours per client now runs in 15 minutes — hands-free.",
    name: "James R.",
    role: "COO, FinTech Startup",
    initial: "J",
  },
  {
    quote:
      "They don't just build — they think like founders. The AI strategy session alone changed how we approach our product roadmap. Six months in, we've shipped more than the previous two years.",
    name: "Priya M.",
    role: "Founder, SaaS Platform",
    initial: "P",
  },
  {
    quote:
      "The chatbot they built handles 80% of our tier-1 support tickets without human review. Our support costs dropped by 60%. Genuinely impressive execution.",
    name: "Alex T.",
    role: "Head of Product, E-Commerce",
    initial: "A",
  },
] as const;

const EASE_IN: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_OUT: [number, number, number, number] = [0.76, 0, 0.24, 1];

const variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? 60 : -60,
    opacity: 0,
    filter: "blur(8px)",
  }),
  center: {
    x: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: EASE_IN },
  },
  exit: (dir: number) => ({
    x: dir > 0 ? -60 : 60,
    opacity: 0,
    filter: "blur(8px)",
    transition: { duration: 0.4, ease: EASE_OUT },
  }),
};

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const go = (next: number) => {
    const clamped = (next + TESTIMONIALS.length) % TESTIMONIALS.length;
    setDirection(next > index ? 1 : -1);
    setIndex(clamped);
  };

  const t = TESTIMONIALS[index];

  return (
    <section className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] py-[120px] overflow-hidden">
      {/* Background orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(212,168,83,0.03) 0%, transparent 70%)",
        }}
      />

      {/* Giant decorative quote mark */}
      <div
        className="absolute top-12 left-1/2 -translate-x-1/2 text-[240px] font-bold leading-none select-none pointer-events-none"
        style={{ color: "rgba(212,168,83,0.04)", fontFamily: "Georgia, serif" }}
        aria-hidden="true"
      >
        "
      </div>

      <div className="relative max-w-[900px] mx-auto px-8 md:px-12 flex flex-col items-center text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-16"
        >
          <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
          <span className="text-[11px] text-[#71717a] tracking-[0.22em] uppercase font-medium">
            Client Results
          </span>
          <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
        </motion.div>

        {/* Quote carousel */}
        <div className="relative w-full min-h-[220px] flex items-center justify-center mb-14">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute w-full"
            >
              <p className="text-[22px] md:text-[28px] font-medium text-white leading-[1.55] tracking-[-0.02em]">
                "{t.quote}"
              </p>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Author */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`author-${index}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="flex flex-col items-center gap-3 mb-14"
          >
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center border border-[#d4a853]/30 text-[13px] font-bold text-[#d4a853]"
              style={{ background: "rgba(212,168,83,0.07)" }}
            >
              {t.initial}
            </div>
            <div>
              <p className="text-[14px] font-semibold text-white">{t.name}</p>
              <p className="text-[12px] text-[#52525b]">{t.role}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex items-center gap-8">
          {/* Prev */}
          <button
            onClick={() => go(index - 1)}
            aria-label="Previous testimonial"
            className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#52525b] hover:border-[#2563eb]/40 hover:text-white transition-all duration-200"
          >
            ←
          </button>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
                aria-label={`Go to testimonial ${i + 1}`}
                className="relative"
              >
                <motion.div
                  animate={{
                    width: i === index ? 20 : 6,
                    backgroundColor: i === index ? "#d4a853" : "#27272a",
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="h-px rounded-full"
                />
              </button>
            ))}
          </div>

          {/* Next */}
          <button
            onClick={() => go(index + 1)}
            aria-label="Next testimonial"
            className="w-10 h-10 rounded-full border border-[#1a1a1a] flex items-center justify-center text-[#52525b] hover:border-[#2563eb]/40 hover:text-white transition-all duration-200"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
