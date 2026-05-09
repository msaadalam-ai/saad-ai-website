"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const NAV = [
  { label: "Services",  href: "#services" },
  { label: "About",     href: "#why"      },
  { label: "Process",   href: "#process"  },
  { label: "Contact",   href: "#contact"  },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com",
    icon: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] border-t border-[#1a1a1a] overflow-hidden">
      {/* Animated top border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        style={{
          transformOrigin: "left",
          background: "linear-gradient(90deg, #2563eb, #d4a853, transparent)",
        }}
        className="absolute top-0 left-0 right-0 h-px"
        aria-hidden="true"
      />

      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-4">
            <Link href="/mgc" className="flex items-center gap-1 select-none w-fit">
              <span className="text-[24px] font-bold tracking-[-0.04em] text-white leading-none">
                M<span className="text-[#2563eb]">G</span>C
              </span>
              <span
                className="block w-[5px] h-[5px] rounded-full bg-[#d4a853] mb-[12px]"
                style={{ boxShadow: "0 0 8px 2px rgba(212,168,83,0.7)" }}
                aria-hidden="true"
              />
            </Link>
            <p className="text-[12px] text-[#3f3f46] tracking-[0.16em] uppercase">
              Intelligence · Automation · Growth
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-10 gap-y-4" aria-label="Footer navigation">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[13px] text-[#52525b] hover:text-white transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials + email */}
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 rounded-sm border border-[#1a1a1a] flex items-center justify-center text-[#52525b] hover:text-white hover:border-[#2563eb]/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
            <a
              href="mailto:msaad.ai@gmail.com"
              className="text-[13px] text-[#52525b] hover:text-[#d4a853] transition-colors duration-200"
            >
              msaad.ai@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-16 pt-8 border-t border-[#111] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-[11px] text-[#27272a]">
            © {new Date().getFullYear()} MGC. All rights reserved.
          </p>
          <p className="text-[11px] text-[#27272a]">
            Built with precision.
          </p>
        </div>
      </div>
    </footer>
  );
}
