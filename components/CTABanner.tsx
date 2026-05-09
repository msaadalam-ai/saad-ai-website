"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CTABanner() {
  return (
    <section
      id="contact"
      className="bg-white border-t border-[#e4e4e7] py-[96px]"
    >
      <div className="max-w-[1280px] mx-auto px-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-[580px]"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="block w-6 h-px bg-[#2563eb]" aria-hidden="true" />
              <span className="text-[#2563eb] text-[12px] font-medium tracking-[0.18em] uppercase">
                Let's Build
              </span>
            </div>
            <h2 className="text-[42px] md:text-[60px] font-bold leading-[1.0] tracking-[-0.03em] text-[#0a0a0a]">
              Ready to build
              <br />
              with AI?
            </h2>
            <p className="mt-6 text-[17px] leading-[1.65] text-[#71717a] max-w-[440px]">
              Whether you have a clear problem or just a vague sense that AI
              should be doing more for your business — let's find out together.
            </p>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex flex-col gap-4 shrink-0"
          >
            <Link
              href="mailto:msaad.ai@gmail.com"
              className="inline-flex items-center justify-center h-14 px-8 rounded-md bg-[#f97316] text-white text-[15px] font-semibold hover:bg-[#ea580c] active:scale-[0.98] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f97316] focus-visible:ring-offset-2 whitespace-nowrap"
            >
              Send me a message
            </Link>
            <Link
              href="mailto:msaad.ai@gmail.com"
              className="text-center text-[13px] text-[#a1a1aa] hover:text-[#71717a] transition-colors duration-150"
            >
              msaad.ai@gmail.com
            </Link>

            {/* Trust note */}
            <p className="text-[12px] text-[#d1d1d6] text-center">
              Typically respond within 24 hours
            </p>
          </motion.div>
        </div>

        {/* Divider with label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 border-t border-[#e4e4e7] flex flex-wrap gap-8 items-center"
        >
          {["No retainers required", "Fixed-price projects available", "Available for remote work globally"].map(
            (item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="block w-1 h-1 rounded-full bg-[#2563eb]" aria-hidden="true" />
                <span className="text-[13px] text-[#a1a1aa]">{item}</span>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
