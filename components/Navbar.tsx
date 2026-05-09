"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-[100] transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-[#0a0a0a]/92 backdrop-blur-md border-b border-[#27272a]/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1280px] mx-auto px-8 h-[72px] flex items-center justify-between">
        {/* Logo with glow */}
        <Link
          href="/"
          className="relative text-white font-bold text-[20px] tracking-tight leading-none select-none"
        >
          SAAD
          <span className="text-[#2563eb]"> AI</span>
          {/* Permanent blue glow under the AI portion */}
          <span
            className="absolute -bottom-[3px] right-0 w-[28px] h-px bg-[#2563eb]"
            style={{ boxShadow: "0 0 10px 3px rgba(37, 99, 235, 0.65)" }}
            aria-hidden="true"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main navigation"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative text-[#a1a1aa] text-[15px] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-white pb-[2px]"
            >
              {link.label}
              {/* Underline slides in from left */}
              <span
                className="absolute -bottom-px left-0 h-px w-full bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-out"
                aria-hidden="true"
              />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA */}
          <Link
            href="#contact"
            className="hidden md:inline-flex items-center justify-center h-10 px-5 rounded-md bg-[#2563eb] text-white text-[15px] font-medium hover:bg-[#1d4ed8] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2563eb] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0a0a0a]"
            style={{ boxShadow: "0 0 20px rgba(37, 99, 235, 0.25)" }}
          >
            Let's Talk
          </Link>

          {/* Mobile toggle */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px] focus-visible:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "translate-y-[6px] rotate-45" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-5 h-px bg-white transition-all duration-200 ${menuOpen ? "-translate-y-[6px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="md:hidden border-t border-[#27272a] bg-[#0a0a0a]/96 backdrop-blur-md"
        >
          <nav
            className="flex flex-col px-8 py-6 gap-5"
            aria-label="Mobile navigation"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#a1a1aa] text-[17px] hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center h-11 px-5 rounded-md bg-[#2563eb] text-white text-[15px] font-medium hover:bg-[#1d4ed8] transition-colors duration-150 mt-2"
            >
              Let's Talk
            </Link>
          </nav>
        </motion.div>
      )}
    </motion.header>
  );
}
