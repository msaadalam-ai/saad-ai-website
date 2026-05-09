"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const mX = useMotionValue(-120);
  const mY = useMotionValue(-120);
  const hovering = useRef(false);

  /* Dot follows fast */
  const dotX = useSpring(mX, { damping: 28, stiffness: 600, mass: 0.4 });
  const dotY = useSpring(mY, { damping: 28, stiffness: 600, mass: 0.4 });

  /* Ring follows slow */
  const ringX = useSpring(mX, { damping: 22, stiffness: 180, mass: 0.6 });
  const ringY = useSpring(mY, { damping: 22, stiffness: 180, mass: 0.6 });

  /* Ring size motion values */
  const ringSize = useMotionValue(32);
  const ringSizeSpring = useSpring(ringSize, { damping: 20, stiffness: 300 });
  const ringOpacity = useMotionValue(0.5);
  const ringOpacitySpring = useSpring(ringOpacity, { damping: 20, stiffness: 300 });
  const ringColor = useRef("rgba(37,99,235,0.45)");

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mX.set(e.clientX);
      mY.set(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const el = (e.target as HTMLElement).closest(
        "a, button, [role='button'], [data-cursor]"
      );
      if (el && !hovering.current) {
        hovering.current = true;
        ringSize.set(52);
        ringOpacity.set(1);
        ringColor.current = "rgba(212,168,83,0.55)";
      }
    };

    const onOut = (e: MouseEvent) => {
      const el = (e.relatedTarget as HTMLElement | null)?.closest(
        "a, button, [role='button'], [data-cursor]"
      );
      if (!el && hovering.current) {
        hovering.current = false;
        ringSize.set(32);
        ringOpacity.set(0.5);
        ringColor.current = "rgba(37,99,235,0.45)";
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseover", onOver, { passive: true });
    window.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseover", onOver);
      window.removeEventListener("mouseout", onOut);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-[#2563eb]"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: 7,
          height: 7,
          mixBlendMode: "difference",
        }}
        aria-hidden="true"
      />

      {/* Ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-[#2563eb]/40"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
          width: ringSizeSpring,
          height: ringSizeSpring,
          opacity: ringOpacitySpring,
        }}
        aria-hidden="true"
      />
    </>
  );
}
