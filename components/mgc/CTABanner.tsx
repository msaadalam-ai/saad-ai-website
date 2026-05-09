"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

/* Floating particle */
function Particle({ x, y, size, delay, color }: {
  x: string; y: string; size: number; delay: number; color: string;
}) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{ left: x, top: y, width: size, height: size, background: color }}
      animate={{
        y: [0, -24, 0],
        opacity: [0.12, 0.4, 0.12],
      }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        delay,
        ease: "easeInOut",
      }}
      aria-hidden="true"
    />
  );
}

const PARTICLES = [
  { x: "8%",  y: "20%", size: 3, delay: 0,   color: "#2563eb" },
  { x: "18%", y: "70%", size: 2, delay: 1.2, color: "#d4a853" },
  { x: "75%", y: "15%", size: 4, delay: 0.6, color: "#2563eb" },
  { x: "88%", y: "60%", size: 2, delay: 2.0, color: "#d4a853" },
  { x: "50%", y: "80%", size: 3, delay: 1.5, color: "#2563eb" },
  { x: "32%", y: "40%", size: 2, delay: 0.9, color: "#d4a853" },
  { x: "64%", y: "75%", size: 3, delay: 1.8, color: "#2563eb" },
];

export default function CTABanner() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] py-[140px] overflow-hidden"
    >
      {/* Dark field */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(37,99,235,0.06) 0%, rgba(212,168,83,0.02) 50%, transparent 100%)",
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      <motion.div
        style={{ scale, opacity }}
        className="relative max-w-[900px] mx-auto px-8 md:px-12 text-center"
      >
        {/* Label */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
          <span className="text-[11px] text-[#71717a] tracking-[0.22em] uppercase font-medium">
            Start Today
          </span>
          <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
        </div>

        {/* Headline */}
        <h2 className="text-[60px] sm:text-[80px] md:text-[100px] font-bold tracking-[-0.045em] leading-[0.92] text-white mb-12">
          {["Ready to", "build?"].map((line, li) => (
            <span key={li} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true }}
                transition={{
                  delay: li * 0.12,
                  duration: 1.0,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                {li === 1 ? (
                  <>
                    <span className="text-[#2563eb]">build</span>
                    <span className="text-[#d4a853]">?</span>
                  </>
                ) : (
                  line
                )}
              </motion.span>
            </span>
          ))}
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="text-[17px] text-[#71717a] leading-[1.75] max-w-[480px] mx-auto mb-14"
        >
          Tell us what you're working on. We'll respond within one business day
          with a clear proposal — no fluff, no commitment required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center justify-center gap-5"
        >
          <a
            href="mailto:msaad.ai@gmail.com"
            className="mgc-glow-pulse inline-flex items-center justify-center h-14 px-10 rounded-sm bg-[#2563eb] text-white text-[15px] font-semibold hover:bg-[#1d4ed8] active:scale-[0.97] transition-colors duration-150 focus-visible:outline-none"
            style={{ boxShadow: "0 0 32px rgba(37,99,235,0.4)" }}
          >
            Send a Message
          </a>

          <Link
            href="#services"
            className="inline-flex items-center gap-2 h-14 px-8 text-[15px] text-[#71717a] font-medium border border-[#1a1a1a] rounded-sm hover:text-white hover:border-[#2563eb]/30 transition-all duration-200"
          >
            View Services
          </Link>
        </motion.div>

        {/* Email */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 text-[13px] text-[#3f3f46]"
        >
          Or email directly:{" "}
          <a
            href="mailto:msaad.ai@gmail.com"
            className="text-[#52525b] hover:text-[#d4a853] transition-colors duration-200 underline underline-offset-4 decoration-[#2a2a2a]"
          >
            msaad.ai@gmail.com
          </a>
        </motion.p>
      </motion.div>
    </section>
  );
}
