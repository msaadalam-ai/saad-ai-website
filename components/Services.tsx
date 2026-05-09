"use client";

import { motion } from "framer-motion";
import AnimatedHeading from "./AnimatedHeading";

const SERVICES = [
  {
    title: "AI Automation & Chatbots",
    description:
      "Eliminate repetitive work. I build intelligent automation pipelines and conversational AI systems that handle your workflows around the clock — no manual effort required.",
    bullets: [
      "Lead follow-up & CRM automation",
      "AI-powered support chatbots",
      "Document processing & extraction",
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
        <path d="M3 3v5h5" />
      </svg>
    ),
  },
  {
    title: "AI Web & App Development",
    description:
      "Full-stack products with AI at the core. From intelligent dashboards to LLM-powered features, I build fast, production-ready applications that users actually want to use.",
    bullets: [
      "Next.js & React applications",
      "LLM integration & fine-tuning",
      "AI-first product architecture",
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: "AI Consulting & Strategy",
    description:
      "Cut through the hype. I help businesses identify where AI creates real leverage, build a clear roadmap, and avoid the expensive mistakes most companies make early.",
    bullets: [
      "AI opportunity assessment",
      "Tooling & vendor selection",
      "Team enablement & training",
    ],
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" />
      </svg>
    ),
  },
];

/* ── cinematic reveal variant ────────────────────────────────────────── */
const cardReveal = {
  hidden: {
    opacity: 0,
    y: 56,
    scale: 0.9,
    filter: "blur(8px)",
  },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      delay: i * 0.14,
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Services() {
  return (
    <section id="services" className="relative bg-[#0a0a0a] py-[96px] overflow-hidden">
      {/* Subtle orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse, rgba(37,99,235,0.05) 0%, transparent 65%)",
          filter: "blur(2px)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="block w-6 h-px bg-[#2563eb]" aria-hidden="true" />
            <span className="text-[#2563eb] text-[12px] font-medium tracking-[0.18em] uppercase">
              What I Build
            </span>
          </div>
          <AnimatedHeading
            text="Services built for real results."
            className="text-[42px] md:text-[52px] font-bold leading-[1.05] tracking-[-0.025em] text-white max-w-[560px]"
            mode="chars"
          />
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              variants={cardReveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              custom={i}
              whileHover={{
                y: -8,
                boxShadow:
                  "0 0 0 1px rgba(37,99,235,0.45), 0 0 40px rgba(37,99,235,0.1)",
                transition: { duration: 0.2, ease: "easeOut" },
              }}
              className="group relative flex flex-col rounded-xl border border-[#27272a] bg-[#111111] p-8 cursor-default overflow-hidden"
            >
              {/* Shimmer sweep */}
              <div
                className="absolute inset-0 rounded-xl overflow-hidden pointer-events-none"
                aria-hidden="true"
              >
                <div
                  className="animate-card-shimmer absolute inset-y-0 w-[50%] bg-gradient-to-r from-transparent via-white/[0.022] to-transparent"
                  style={{ willChange: "transform" }}
                />
              </div>

              {/* Top-left corner accent */}
              <div
                className="absolute top-0 left-0 w-10 h-10 overflow-hidden pointer-events-none"
                aria-hidden="true"
              >
                <div className="absolute top-0 left-0 w-px h-full bg-[#2563eb]/0 group-hover:bg-[#2563eb]/40 transition-colors duration-300" />
                <div className="absolute top-0 left-0 h-px w-full bg-[#2563eb]/0 group-hover:bg-[#2563eb]/40 transition-colors duration-300" />
              </div>

              {/* Icon — rotates on hover */}
              <motion.div
                whileHover={{ rotate: 15, scale: 1.15 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#27272a] bg-[#1a1a1a] text-[#2563eb] group-hover:border-[#2563eb]/40 group-hover:bg-[#1e2a3d] transition-colors duration-200"
              >
                {service.icon}
              </motion.div>

              {/* Title */}
              <h3 className="mb-3 text-[20px] font-semibold leading-tight tracking-[-0.015em] text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mb-6 text-[15px] leading-[1.65] text-[#71717a]">
                {service.description}
              </p>

              {/* Bullets */}
              <ul className="mt-auto flex flex-col gap-2">
                {service.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-[13px] text-[#52525b]"
                  >
                    <span
                      className="block w-1 h-1 rounded-full bg-[#2563eb] shrink-0"
                      aria-hidden="true"
                    />
                    {b}
                  </li>
                ))}
              </ul>

              {/* Bottom glow line */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/0 to-transparent group-hover:via-[#2563eb]/30 transition-all duration-300"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
