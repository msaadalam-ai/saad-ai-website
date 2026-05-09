"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

interface Stat {
  prefix?: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const STATS: Stat[] = [
  {
    value: 10,
    suffix: "×",
    label: "Faster to market",
    description: "Ship in weeks, not months. AI-accelerated development means less waiting.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Custom-built",
    description: "No templates. Every solution is architected for your specific use case.",
  },
  {
    value: 24,
    suffix: "/7",
    label: "Always running",
    description: "Automation that works while you sleep. No babysitting required.",
  },
  {
    value: 3,
    suffix: "+",
    label: "AI platforms",
    description: "GPT-4, Claude, Gemini and more — I pick the right model for the job.",
  },
];

function CountUp({ value, suffix, prefix }: { value: number; suffix: string; prefix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(0);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
}

export default function WhyMe() {
  return (
    <section id="about" className="bg-[#0d0d0d] border-t border-[#1a1a1a] py-[96px]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-[#2563eb]" aria-hidden="true" />
              <span className="text-[#2563eb] text-[12px] font-medium tracking-[0.18em] uppercase">
                Why Work With Me
              </span>
            </div>
            <AnimatedHeading
              text="Numbers that speak for themselves."
              className="text-[42px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-white max-w-[480px]"
              mode="chars"
            />
          </div>
          <p className="text-[15px] text-[#71717a] leading-[1.65] max-w-[360px]">
            I've built AI systems for founders, startups, and teams who needed
            results fast — not PowerPoints about AI potential.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#1a1a1a]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.08,
              }}
              className="bg-[#0d0d0d] px-8 py-10 flex flex-col gap-3"
            >
              <div className="text-[56px] font-bold leading-none tracking-[-0.03em] text-[#2563eb]">
                <CountUp value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </div>
              <div className="text-[15px] font-semibold text-white">{stat.label}</div>
              <p className="text-[13px] leading-[1.6] text-[#52525b]">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
