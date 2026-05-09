"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: Props) {
  const [count, setCount] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const DURATION = 2400;
    const start = performance.now();

    const tick = (now: number) => {
      const t = Math.min((now - start) / DURATION, 1);
      /* ease-in-out-cubic */
      const eased =
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      setCount(Math.round(eased * 100));

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        /* brief hold at 100 before exiting */
        setTimeout(() => setExit(true), 280);
      }
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!exit && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-[#0a0a0a] flex flex-col items-center justify-center overflow-hidden"
          exit={{
            clipPath: "inset(100% 0 0 0)",
          }}
          transition={{
            duration: 1.0,
            ease: [0.76, 0, 0.24, 1],
          }}
        >
          {/* Background grid accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37,99,235,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.03) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
            }}
          />

          {/* Gold vertical accent */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[18%] top-0 w-px h-full bg-gradient-to-b from-transparent via-[#d4a853]/20 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="relative flex flex-col items-center"
          >
            <h1 className="text-[80px] md:text-[96px] font-bold tracking-[-0.05em] text-white leading-none">
              M<span className="text-[#2563eb]">G</span>C
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
              className="mt-3 text-[11px] text-[#52525b] tracking-[0.28em] uppercase font-medium"
            >
              Intelligence · Automation · Growth
            </motion.p>
          </motion.div>

          {/* Counter + bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute bottom-14 left-1/2 -translate-x-1/2 w-[280px]"
          >
            <div className="flex justify-between items-center mb-3">
              <span className="text-[10px] text-[#3f3f46] tracking-[0.22em] uppercase">
                Loading
              </span>
              <span className="text-[11px] text-[#71717a] tabular-nums font-medium">
                {String(count).padStart(3, "0")}%
              </span>
            </div>

            {/* Track */}
            <div className="relative h-px bg-[#1a1a1a] overflow-hidden">
              <motion.div
                className="absolute inset-y-0 left-0"
                style={{
                  width: `${count}%`,
                  background:
                    "linear-gradient(90deg, #2563eb, #d4a853)",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
