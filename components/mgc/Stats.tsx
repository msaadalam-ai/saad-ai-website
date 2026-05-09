"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const STATS = [
  { value: 50,  suffix: "+",  label: "Projects Delivered", sub: "Across automation, web, and AI strategy" },
  { value: 10,  suffix: "×",  label: "Faster to Market",   sub: "AI-accelerated development timelines"   },
  { value: 100, suffix: "%",  label: "Custom-Built",       sub: "No templates, no shortcuts"              },
  { value: 24,  suffix: "/7", label: "Always Running",     sub: "Automation that never sleeps"            },
] as const;

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref    = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const DURATION = 1800;
    const start    = performance.now();

    const tick = (now: number) => {
      const t      = Math.min((now - start) / DURATION, 1);
      const eased  = 1 - Math.pow(1 - t, 3);
      setCount(Math.round(eased * target));
      if (t < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      <span className="text-[#2563eb]">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section id="about" className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] py-[100px]">
      {/* Background orb */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,168,83,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-8 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 flex items-center gap-4"
        >
          <span className="block w-6 h-px bg-[#d4a853]" aria-hidden="true" />
          <span className="text-[11px] text-[#71717a] tracking-[0.22em] uppercase font-medium">
            By The Numbers
          </span>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: i * 0.1,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative flex flex-col gap-4 px-0 py-10 lg:px-8 lg:first:pl-0 lg:last:pr-0"
            >
              {/* Vertical divider (except first) */}
              {i > 0 && (
                <div
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-[60%] bg-[#1a1a1a]"
                  aria-hidden="true"
                />
              )}

              {/* Number */}
              <div
                className="text-[72px] md:text-[80px] font-bold leading-none tracking-[-0.04em] text-white"
              >
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>

              {/* Label */}
              <div>
                <p className="text-[15px] font-semibold text-white mb-1">
                  {stat.label}
                </p>
                <p className="text-[13px] text-[#52525b] leading-[1.6]">
                  {stat.sub}
                </p>
              </div>

              {/* Bottom gold accent for first stat */}
              {i === 0 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  style={{ transformOrigin: "left" }}
                  className="absolute bottom-0 left-0 w-12 h-px bg-[#d4a853]/40"
                  aria-hidden="true"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
