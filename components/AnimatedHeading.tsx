"use client";

import { motion } from "framer-motion";

interface Props {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3";
  mode?: "words" | "chars";
  delay?: number;
  /** Pass false to animate in on mount instead of on scroll */
  inView?: boolean;
}

export default function AnimatedHeading({
  text,
  className,
  as: Tag = "h2",
  mode = "chars",
  delay = 0,
  inView = true,
}: Props) {
  const tokens = mode === "chars" ? text.split("") : text.split(" ");

  const stagger = mode === "chars" ? 0.022 : 0.08;
  const duration = mode === "chars" ? 0.45 : 0.7;

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };

  const item = {
    hidden: { y: "105%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const motionProps = inView
    ? {
        variants: container,
        initial: "hidden",
        whileInView: "visible" as const,
        viewport: { once: true, margin: "-40px" },
      }
    : {
        variants: container,
        initial: "hidden",
        animate: "visible" as const,
      };

  return (
    <Tag className={className}>
      <motion.span {...motionProps} className="inline">
        {tokens.map((token, i) => (
          <span key={i} className="inline-block overflow-hidden leading-[1.1]">
            <motion.span variants={item} className="inline-block">
              {token === " " ? " " : token}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
