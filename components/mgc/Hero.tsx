"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";

/* ── word-by-word clip reveal ───────────────────────────────────────── */
function Word({
  children,
  delay,
  gold,
  blue,
}: {
  children: string;
  delay: number;
  gold?: boolean;
  blue?: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden leading-[0.9] mr-[0.18em] last:mr-0">
      <motion.span
        className={`inline-block ${gold ? "text-[#d4a853]" : blue ? "text-[#2563eb]" : "text-white"}`}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%",   opacity: 1 }}
        transition={{ delay, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.span>
    </span>
  );
}

/* ── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  /* parallax layers */
  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%",  "22%"]);
  const orbY     = useTransform(scrollYProgress, [0, 1], ["0%",  "30%"]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["0%",  "10%"]);
  const fadeOut  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* ── Background layer (parallaxes faster) ── */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {/* Subtle dot-grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(rgba(37,99,235,0.12) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)",
          }}
        />

        {/* Blue atmospheric orb */}
        <motion.div
          style={{
            y: orbY,
            background:
              "radial-gradient(circle at 40% 40%, rgba(37,99,235,0.1) 0%, transparent 62%)",
          }}
          className="absolute -top-[200px] right-[-120px] w-[900px] h-[900px] rounded-full pointer-events-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2.4, ease: "easeOut" }}
        />

        {/* Gold vertical accent line */}
        <motion.div
          initial={{ scaleY: 0, opacity: 0 }}
          animate={{ scaleY: 1, opacity: 1 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          style={{ transformOrigin: "top" }}
          className="absolute top-0 left-[16%] w-px h-[65%] bg-gradient-to-b from-[#d4a853]/30 via-[#d4a853]/10 to-transparent"
        />

        {/* Rectangle outline — upper right */}
        <motion.div
          initial={{ opacity: 0, rotate: 12, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 18,  scale: 1   }}
          transition={{ duration: 2.0, ease: "easeOut", delay: 0.3 }}
          className="absolute top-[-80px] right-[4%] w-[440px] h-[440px] border border-[#2563eb]/8 pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 12, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 12,  scale: 1   }}
          transition={{ duration: 2.4, ease: "easeOut", delay: 0.6 }}
          className="absolute top-[40px] right-[6%] w-[320px] h-[320px] border border-[#d4a853]/6 pointer-events-none"
        />

        {/* Horizontal scan line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
          style={{ transformOrigin: "left" }}
          className="absolute bottom-[28%] left-0 w-[42%] h-px bg-gradient-to-r from-[#2563eb]/20 to-transparent pointer-events-none"
        />
      </motion.div>

      {/* ── Content layer (parallaxes slower + fades on scroll) ── */}
      <motion.div
        style={{ y: textY, opacity: fadeOut }}
        className="relative z-10 max-w-[1400px] mx-auto px-8 md:px-12 pt-[72px] w-full"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <span
            className="block w-6 h-px bg-[#d4a853]"
            style={{ boxShadow: "0 0 8px 2px rgba(212,168,83,0.5)" }}
            aria-hidden="true"
          />
          <span className="text-[11px] text-[#71717a] tracking-[0.24em] uppercase font-medium">
            MGC — AI Solutions
          </span>
        </motion.div>

        {/* Headline — 3 lines, word-by-word clip reveal */}
        <h1
          className="text-[72px] sm:text-[88px] md:text-[108px] lg:text-[120px] font-bold tracking-[-0.04em] leading-[0.88]"
          aria-label="We build intelligent systems."
        >
          <span className="flex flex-wrap">
            <Word delay={0.30}>We</Word>
            <Word delay={0.42}>build</Word>
          </span>
          <span className="flex flex-wrap mt-1">
            <Word delay={0.55} blue>intelligent</Word>
          </span>
          <span className="flex flex-wrap mt-1">
            <Word delay={0.70}>systems</Word>
            <Word delay={0.80} gold>.</Word>
          </span>
        </h1>

        {/* Glowing divider under headline */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.1, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformOrigin: "left",
            boxShadow: "0 0 14px 2px rgba(37,99,235,0.65)",
          }}
          className="mt-8 h-px w-[220px] bg-[#2563eb]"
          aria-hidden="true"
        />

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0,  filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          className="mt-8 text-[16px] md:text-[18px] text-[#71717a] leading-[1.7] max-w-[480px]"
        >
          We help businesses automate operations, build AI-powered products,
          and scale intelligently — from first idea to full deployment.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.25 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          {/* Primary — glowing blue */}
          <Link
            href="#services"
            className="mgc-glow-pulse inline-flex items-center justify-center h-12 px-7 rounded-sm bg-[#2563eb] text-white text-[14px] font-semibold hover:bg-[#1d4ed8] active:scale-[0.97] transition-colors duration-150 focus-visible:outline-none"
            style={{ boxShadow: "0 0 24px rgba(37,99,235,0.35)" }}
          >
            Explore Services
          </Link>

          {/* Secondary */}
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 h-12 px-6 text-[14px] text-[#71717a] font-medium hover:text-white transition-colors duration-150 focus-visible:outline-none group"
          >
            Start a Project
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="text-[#d4a853] group-hover:text-white transition-colors"
              aria-hidden="true"
            >
              →
            </motion.span>
          </Link>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
          className="mt-20 text-[11px] text-[#3f3f46] tracking-[0.18em] uppercase"
        >
          Intelligence · Automation · Growth
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.0, duration: 0.8 }}
        style={{ opacity: fadeOut }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-[9px] text-[#3f3f46] tracking-[0.26em] uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-[#2563eb]/60 to-transparent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
