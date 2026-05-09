"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const TESTIMONIALS = [
  {
    quote:
      "Saad automated our entire lead follow-up system in under two weeks. We went from manually chasing 200 leads a day to zero manual effort. The ROI was immediate.",
    name: "Alex K.",
    role: "Founder",
    company: "SaaS startup, Dubai",
  },
  {
    quote:
      "The AI assistant Saad built now handles 80% of our inbound support without any human in the loop. Our team finally has time to focus on work that matters.",
    name: "Sarah M.",
    role: "Head of Operations",
    company: "E-commerce brand",
  },
  {
    quote:
      "We came in with no AI strategy and left with a clear roadmap and the first prototype running. Saad's advice alone saved us from two expensive wrong turns.",
    name: "James T.",
    role: "CEO",
    company: "Logistics company",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0d0d0d] border-t border-[#1a1a1a] py-[96px]">
      <div className="max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#2563eb]" aria-hidden="true" />
            <span className="text-[#2563eb] text-[12px] font-medium tracking-[0.18em] uppercase">
              Client Results
            </span>
          </div>
          <AnimatedHeading
            text="Proof over promises."
            className="text-[42px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-white max-w-[460px]"
            mode="chars"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="flex flex-col rounded-xl border border-[#27272a] bg-[#111111] p-8"
            >
              {/* Quote mark */}
              <span
                className="block mb-6 text-[40px] font-bold leading-none text-[#27272a] select-none"
                aria-hidden="true"
              >
                "
              </span>

              <blockquote className="flex-1 text-[15px] leading-[1.7] text-[#a1a1aa]">
                {t.quote}
              </blockquote>

              <figcaption className="mt-8 flex items-center gap-3 border-t border-[#1a1a1a] pt-6">
                {/* Avatar placeholder */}
                <div
                  className="h-9 w-9 rounded-full bg-[#1a1a1a] border border-[#27272a] shrink-0 flex items-center justify-center text-[12px] font-semibold text-[#52525b]"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="text-[14px] font-semibold text-white">{t.name}</div>
                  <div className="text-[12px] text-[#52525b]">
                    {t.role} · {t.company}
                  </div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
