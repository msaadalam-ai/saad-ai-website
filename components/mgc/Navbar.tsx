"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const LINKS = [
  { label: "Services",  href: "#services" },
  { label: "About",     href: "#about"    },
  { label: "Process",   href: "#process"  },
  { label: "Contact",   href: "#contact"  },
];

const EASE_ENTER: [number, number, number, number] = [0.22, 1, 0.36, 1];
const EASE_EXIT: [number, number, number, number] = [0.76, 0, 0.24, 1];

const menuItem = {
  hidden:  { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07 + 0.1, duration: 0.65, ease: EASE_ENTER },
  }),
  exit: (i: number) => ({
    opacity: 0,
    y: -24,
    transition: { delay: i * 0.04, duration: 0.35, ease: EASE_EXIT },
  }),
};

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll when menu open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 inset-x-0 z-[200] transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#1a1a1a]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 h-[72px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/mgc" className="relative z-10 flex items-center gap-1 select-none">
            <span className="text-[22px] font-bold tracking-[-0.04em] text-white leading-none">
              M<span className="text-[#2563eb]">G</span>C
            </span>
            {/* Gold glow dot */}
            <span
              className="block w-[5px] h-[5px] rounded-full bg-[#d4a853] mb-[10px]"
              style={{ boxShadow: "0 0 8px 2px rgba(212,168,83,0.7)" }}
              aria-hidden="true"
            />
          </Link>

          {/* Desktop nav — centered */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-10">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="group relative text-[14px] text-[#71717a] hover:text-white transition-colors duration-150 py-1"
              >
                {link.label}
                <span
                  className="absolute -bottom-px left-0 h-px w-full bg-[#d4a853] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </nav>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-4">
            <Link
              href="#contact"
              className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-sm border border-[#2563eb]/40 text-[13px] text-[#2563eb] font-medium hover:bg-[#2563eb] hover:text-white hover:border-[#2563eb] transition-all duration-200"
            >
              Start a Project
            </Link>

            {/* Hamburger */}
            <button
              className="relative z-10 flex flex-col gap-[5px] w-8 h-8 justify-center items-end"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <motion.span
                animate={{
                  width: menuOpen ? 24 : 24,
                  rotate: menuOpen ? 45 : 0,
                  y: menuOpen ? 7 : 0,
                }}
                className="block h-px bg-white origin-center"
                style={{ width: 24 }}
              />
              <motion.span
                animate={{ opacity: menuOpen ? 0 : 1, width: menuOpen ? 0 : 16 }}
                className="block h-px bg-white"
                style={{ width: 16 }}
              />
              <motion.span
                animate={{
                  width: menuOpen ? 24 : 24,
                  rotate: menuOpen ? -45 : 0,
                  y: menuOpen ? -7 : 0,
                }}
                className="block h-px bg-white origin-center"
                style={{ width: 24 }}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Full-screen mobile / overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="overlay-menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(100% 0 0 0)" }}
            transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[190] bg-[#0a0a0a] flex flex-col justify-center px-12 md:px-20"
          >
            {/* Decorative gold line */}
            <div
              className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#d4a853]/25 to-transparent"
              aria-hidden="true"
            />

            <nav className="flex flex-col gap-2" aria-label="Overlay navigation">
              {LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  variants={menuItem}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  custom={i}
                  className="overflow-hidden"
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="group flex items-baseline gap-4 py-3 border-b border-[#1a1a1a]"
                  >
                    <span className="text-[11px] text-[#3f3f46] tabular-nums w-6">
                      0{i + 1}
                    </span>
                    <span className="text-[48px] md:text-[64px] font-bold tracking-[-0.03em] text-white group-hover:text-[#2563eb] transition-colors duration-200 leading-tight">
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex flex-col gap-1"
            >
              <span className="text-[11px] text-[#3f3f46] tracking-widest uppercase">
                Contact
              </span>
              <a
                href="mailto:msaad.ai@gmail.com"
                className="text-[15px] text-[#71717a] hover:text-white transition-colors"
              >
                msaad.ai@gmail.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
