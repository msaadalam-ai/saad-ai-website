import Link from "next/link";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="max-w-[1280px] mx-auto px-8 py-16">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4 max-w-[280px]">
            <Link
              href="/"
              className="text-white font-bold text-[20px] tracking-tight leading-none"
            >
              SAAD<span className="text-[#2563eb]"> AI</span>
            </Link>
            <p className="text-[13px] leading-[1.6] text-[#52525b]">
              Automation. Development. Strategy.
              <br />
              Powered by AI.
            </p>
            <a
              href="mailto:msaad.ai@gmail.com"
              className="text-[13px] text-[#71717a] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-white w-fit"
            >
              msaad.ai@gmail.com
            </a>
          </div>

          {/* Nav */}
          <nav aria-label="Footer navigation">
            <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-[#3f3f46] mb-4">
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[14px] text-[#71717a] hover:text-white transition-colors duration-150 focus-visible:outline-none focus-visible:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[#1a1a1a] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-[12px] text-[#3f3f46]">
            © {year} SAAD AI. All rights reserved.
          </p>
          <p className="text-[12px] text-[#3f3f46]">
            Built with Next.js · Powered by AI
          </p>
        </div>
      </div>
    </footer>
  );
}
