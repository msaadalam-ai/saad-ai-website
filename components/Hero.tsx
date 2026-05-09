"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import HeroCanvas from "./HeroCanvas";

/* ── word-by-word headline ─────────────────────────────────────────── */
function HeadlineWord({
  word,
  delay,
  blue,
}: {
  word: string;
  delay: number;
  blue?: boolean;
}) {
  return (
    <span className="inline-block overflow-hidden leading-[0.94]">
      <motion.span
        className={`inline-block ${blue ? "text-[#2563eb]" : "text-white"}`}
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ delay, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        {word}
      </motion.span>
    </span>
  );
}

/* ── floating orb ───────────────────────────────────────────────────── */
function Orb({
  className,
  xPath,
  yPath,
  duration,
  delay = 0,
}: {
  className: string;
  xPath: number[];
  yPath: number[];
  duration: number;
  delay?: number;
}) {
  return (
    <motion.div
      className={`absolute rounded-full pointer-events-none ${className}`}
      animate={{ x: xPath, y: yPath }}
      transition={{
        repeat: Infinity,
        repeatType: "loop",
        duration,
        ease: "easeInOut",
        delay,
        times: [0, 0.33, 0.66, 1],
      }}
      aria-hidden="true"
    />
  );
}

/* ── Hero ───────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Canvas dot-grid + beam */}
      <HeroCanvas />

      {/* Atmospheric orbs */}
      <Orb
        className="w-[800px] h-[800px] -top-[300px] -right-[200px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.09) 0%, transparent 68%)",
        } as React.CSSProperties}
        xPath={[0, 40, -20, 0]}
        yPath={[0, -30, 45, 0]}
        duration={28}
      />
      <Orb
        className="w-[600px] h-[600px] top-[30%] -left-[250px]"
        style={{
          background:
            "radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 65%)",
        } as React.CSSProperties}
        xPath={[0, -25, 30, 0]}
        yPath={[0, 40, -20, 0]}
        duration={35}
        delay={6}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-8 pt-[72px] w-full">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="inline-flex items-center gap-3 mb-10"
        >
          <motion.span
            className="block h-px bg-[#2563eb]"
            initial={{ width: 0 }}
            animate={{ width: 24 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            aria-hidden="true"
          />
          <span className="text-[#2563eb] text-[12px] font-medium tracking-[0.2em] uppercase">
            AI Services by Saad
          </span>
        </motion.div>

        {/* Headline — word by word clip reveal */}
        <h1 className="text-[72px] md:text-[96px] lg:text-[112px] font-bold tracking-[-0.03em] leading-[0.92] max-w-[940px] flex flex-wrap gap-x-[0.22em] gap-y-0">
          <HeadlineWord word="Build" delay={0.25} />
          <HeadlineWord word="smarter." delay={0.36} />
          <span className="w-full h-0 basis-full" aria-hidden="true" />
          <HeadlineWord word="Ship" delay={0.48} blue />
          <HeadlineWord word="faster." delay={0.58} blue />
        </h1>

        {/* Glowing beam line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 0.9, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{
            transformOrigin: "left",
            boxShadow: "0 0 16px 3px rgba(37, 99, 235, 0.7)",
          }}
          className="mt-8 h-px w-[260px] bg-[#2563eb]"
          aria-hidden="true"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
          className="mt-8 text-[17px] md:text-[18px] text-[#a1a1aa] leading-[1.65] max-w-[500px]"
        >
          I build AI-powered products — automation systems, intelligent apps,
          and strategic infrastructure — that give businesses a measurable edge.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.05 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          {/* Primary — orange with glow pulse */}
          <div className="animate-pulse-ring rounded-md">
            <Link
              href="#services"
              className="inline-flex items-center justify-center h-12 px-7 rounded-md bg-[#f97316] text-white text-[15px] font-semibold hover:bg-[#ea580c] active:scale-[0.98] transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            >
              See My Work
            </Link>
          </div>

          {/* Secondary */}
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-md border border-[#3f3f46] text-white text-[15px] font-medium hover:border-[#71717a] hover:bg-[#111111] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
          >
            Get in Touch
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-[#71717a]"
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
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-20 text-[12px] text-[#3f3f46] tracking-[0.14em] uppercase"
        >
          Automation · Development · Strategy · Powered by AI
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="text-[10px] text-[#3f3f46] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.span
          animate={{ y: [0, 8, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="block w-px h-8 bg-gradient-to-b from-[#3f3f46] to-transparent"
        />
      </motion.div>
    </section>
  );
}
