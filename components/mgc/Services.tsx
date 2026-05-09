"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";

/* ── Panel data ────────────────────────────────────────────────────── */
const PANELS = [
  {
    number: "01",
    label: "AI Automation",
    title: ["Automate the", "repetitive.", "Focus on growth."],
    description:
      "We build intelligent pipelines that handle your most time-consuming tasks — lead follow-up, document processing, support automation — with no manual intervention.",
    bullets: [
      "CRM & lead automation",
      "AI-powered chatbots & assistants",
      "Document extraction & processing",
      "Workflow orchestration",
    ],
    accent: "#2563eb",
  },
  {
    number: "02",
    label: "AI Development",
    title: ["Products built", "for the AI-", "native era."],
    description:
      "Full-stack applications with AI at the core. We architect and build fast, production-ready products — from LLM-powered dashboards to intelligent APIs.",
    bullets: [
      "Next.js & React applications",
      "LLM integration & fine-tuning",
      "AI-first product architecture",
      "API design & backend systems",
    ],
    accent: "#2563eb",
  },
  {
    number: "03",
    label: "AI Strategy",
    title: ["Strategy that", "turns AI into", "real ROI."],
    description:
      "We cut through the noise. From opportunity mapping to tool selection and team enablement — we give you a clear AI roadmap and help you execute it.",
    bullets: [
      "AI opportunity assessment",
      "Tooling & vendor selection",
      "Team training & enablement",
      "Ongoing advisory",
    ],
    accent: "#d4a853",
  },
] as const;

/* ── Visual elements ───────────────────────────────────────────────── */
function RotatingRings({ color }: { color: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {[320, 240, 160, 80].map((size, i) => (
        <motion.div
          key={size}
          className="absolute rounded-full border"
          style={{
            width: size,
            height: size,
            borderColor:
              i % 2 === 0
                ? `${color}28`
                : `${color}14`,
            borderStyle: i === 1 ? "dashed" : "solid",
          }}
          animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
          transition={{
            repeat: Infinity,
            duration: 14 + i * 5,
            ease: "linear",
          }}
        />
      ))}
      <div
        className="w-3 h-3 rounded-full"
        style={{ background: color, boxShadow: `0 0 20px 6px ${color}55` }}
      />
    </div>
  );
}

function CodeBlock() {
  const lines = [
    { indent: 0, tokens: [{ t: "const", c: "#d4a853" }, { t: " ai ", c: "#fff" }, { t: "=", c: "#71717a" }, { t: " new ", c: "#d4a853" }, { t: "MGC", c: "#2563eb" }, { t: "({", c: "#71717a" }] },
    { indent: 1, tokens: [{ t: "model", c: "#a1a1aa" }, { t: ": ", c: "#71717a" }, { t: '"gpt-4"', c: "#d4a853" }, { t: ",", c: "#71717a" }] },
    { indent: 1, tokens: [{ t: "context", c: "#a1a1aa" }, { t: ": ", c: "#71717a" }, { t: "business", c: "#2563eb" }, { t: ",", c: "#71717a" }] },
    { indent: 1, tokens: [{ t: "output", c: "#a1a1aa" }, { t: ": ", c: "#71717a" }, { t: '"intelligence"', c: "#d4a853" }] },
    { indent: 0, tokens: [{ t: "});", c: "#71717a" }] },
    { indent: 0, tokens: [] },
    { indent: 0, tokens: [{ t: "await ", c: "#d4a853" }, { t: "ai", c: "#2563eb" }, { t: ".", c: "#71717a" }, { t: "deploy", c: "#a1a1aa" }, { t: "();", c: "#71717a" }] },
  ];

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-[420px] rounded-lg border border-[#1a1a1a] bg-[#0d0d0d] overflow-hidden">
        {/* Window chrome */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-[#1a1a1a]">
          {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
            <span key={c} className="block w-3 h-3 rounded-full" style={{ background: c }} />
          ))}
          <span className="ml-auto text-[11px] text-[#3f3f46] font-mono">mgc.ts</span>
        </div>
        {/* Code */}
        <div className="p-5 font-mono text-[13px] leading-[1.8]">
          {lines.map((line, li) => (
            <motion.div
              key={li}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: li * 0.08, duration: 0.4, ease: "easeOut" }}
              className="flex"
              style={{ paddingLeft: line.indent * 16 }}
            >
              {line.tokens.map((tok, ti) => (
                <span key={ti} style={{ color: tok.c }}>{tok.t}</span>
              ))}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StrategyTimeline({ color }: { color: string }) {
  const steps = ["Discover", "Strategy", "Build", "Launch"];
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-0">
      {steps.map((step, i) => (
        <motion.div
          key={step}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.12, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-5 w-[240px]"
        >
          <div className="flex flex-col items-center">
            <div
              className="w-8 h-8 rounded-full border flex items-center justify-center text-[11px] font-bold shrink-0"
              style={{ borderColor: color, color }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            {i < steps.length - 1 && (
              <motion.div
                className="w-px flex-1 min-h-[48px]"
                style={{ background: `${color}30` }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.3, duration: 0.5, ease: "easeOut" }}
              />
            )}
          </div>
          <span
            className={`text-[16px] font-semibold tracking-tight ${
              i === 0 ? "text-white" : "text-[#52525b]"
            }`}
          >
            {step}
          </span>
        </motion.div>
      ))}
    </div>
  );
}

const VISUALS = [RotatingRings, CodeBlock, StrategyTimeline];

/* ── Panel indicator ───────────────────────────────────────────────── */
function PanelDots({ active }: { active: number }) {
  return (
    <div className="absolute bottom-10 right-12 flex flex-col items-end gap-2 z-10">
      {PANELS.map((p, i) => (
        <div key={i} className="flex items-center gap-3">
          <span className="text-[10px] text-[#3f3f46] tracking-widest tabular-nums">
            {p.number}
          </span>
          <motion.div
            animate={{
              width: active === i ? 24 : 6,
              backgroundColor:
                active === i ? PANELS[i].accent : "#27272a",
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="h-px rounded-full"
          />
        </div>
      ))}
    </div>
  );
}

/* ── Single panel layout ───────────────────────────────────────────── */
function ServicePanel({
  panel,
  index,
}: {
  panel: (typeof PANELS)[number];
  index: number;
}) {
  const Visual = VISUALS[index];
  const isLast = index === PANELS.length - 1;

  return (
    <div className="absolute inset-0 flex items-center pt-[72px]">
      {/* Giant background number */}
      <span
        className="absolute right-0 bottom-0 text-[30vw] font-bold leading-none tracking-tighter select-none pointer-events-none"
        style={{ color: `${panel.accent}06` }}
        aria-hidden="true"
      >
        {panel.number}
      </span>

      <div className="w-full max-w-[1400px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-16 items-center">
        {/* Left: content */}
        <div>
          {/* Top meta */}
          <div className="flex items-center gap-4 mb-10">
            <span
              className="text-[11px] font-bold tracking-[0.2em] uppercase"
              style={{ color: panel.accent }}
            >
              {panel.label}
            </span>
            <span className="text-[11px] text-[#27272a]">—</span>
            <span className="text-[11px] text-[#3f3f46] tracking-widest">
              {panel.number} / 03
            </span>
          </div>

          {/* Title */}
          <h2 className="text-[52px] md:text-[64px] font-bold tracking-[-0.035em] leading-[1.0] text-white mb-8">
            {panel.title.map((line, li) => (
              <span key={li} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "100%" }}
                  whileInView={{ y: "0%" }}
                  viewport={{ once: true }}
                  transition={{
                    delay: li * 0.1,
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[16px] text-[#71717a] leading-[1.75] max-w-[500px] mb-8"
          >
            {panel.description}
          </motion.p>

          {/* Bullets */}
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
            {panel.bullets.map((b, bi) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.45 + bi * 0.07,
                  duration: 0.5,
                  ease: "easeOut",
                }}
                className="flex items-center gap-2 text-[13px] text-[#52525b]"
              >
                <span
                  className="block w-1 h-1 rounded-full shrink-0"
                  style={{ background: panel.accent }}
                  aria-hidden="true"
                />
                {b}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Right: visual */}
        <div className="hidden lg:block relative h-[360px]">
          <Visual color={panel.accent} />
        </div>
      </div>
    </div>
  );
}

/* ── Main Services component ───────────────────────────────────────── */
export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activePanel, setActivePanel] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  /* Track active panel for dots indicator */
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (v < 0.38)      setActivePanel(0);
    else if (v < 0.75) setActivePanel(1);
    else               setActivePanel(2);
  });

  /* Panel 1 — scales back as Panel 2 enters */
  const p1Scale   = useTransform(scrollYProgress, [0.22, 0.40], [1,      0.93]);
  const p1Opacity = useTransform(scrollYProgress, [0.22, 0.40], [1,      0   ]);

  /* Panel 2 — slides up from below, exits on Panel 3 */
  const p2Y       = useTransform(scrollYProgress, [0.22, 0.40], ["100%", "0%"]);
  const p2Opacity = useTransform(
    scrollYProgress,
    [0.20, 0.38, 0.60, 0.76],
    [0,    1,    1,    0    ]
  );
  const p2Scale   = useTransform(scrollYProgress, [0.60, 0.76], [1, 0.93]);

  /* Panel 3 — slides up from below */
  const p3Y       = useTransform(scrollYProgress, [0.60, 0.76], ["100%", "0%"]);
  const p3Opacity = useTransform(scrollYProgress, [0.58, 0.76], [0, 1]);

  return (
    <section id="services" ref={containerRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-[#0a0a0a]">
        {/* Top accent bar */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#2563eb]/20 to-transparent" aria-hidden="true" />

        {/* Panel 1 */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: p1Scale, opacity: p1Opacity, zIndex: 10 }}
        >
          <ServicePanel panel={PANELS[0]} index={0} />
        </motion.div>

        {/* Panel 2 */}
        <motion.div
          className="absolute inset-0"
          style={{ y: p2Y, opacity: p2Opacity, scale: p2Scale, zIndex: 20 }}
        >
          <ServicePanel panel={PANELS[1]} index={1} />
        </motion.div>

        {/* Panel 3 */}
        <motion.div
          className="absolute inset-0"
          style={{ y: p3Y, opacity: p3Opacity, zIndex: 30 }}
        >
          <ServicePanel panel={PANELS[2]} index={2} />
        </motion.div>

        {/* Panel dots indicator */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 50 }}>
          <PanelDots active={activePanel} />
        </div>
      </div>
    </section>
  );
}
