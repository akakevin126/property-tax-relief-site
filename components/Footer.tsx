import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy Policy" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <div className="flex flex-col items-center md:items-start">
            <div className="bg-white rounded-lg p-3 inline-block">
              <Image
                src="/logo.png"
                alt="Property Tax Relief Group"
                width={160}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
            <p className="mt-4 text-sm text-white/70 text-center md:text-left">
              Brownsville, Texas · Cameron County
            </p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-3">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-sm text-gold hover:text-white transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="text-center md:text-right text-sm text-white/80 space-y-1">
            <div>
              <a href="tel:+19562039464" className="hover:text-gold">
                (956) 203-9464
              </a>
            </div>
            <div>
              <a
                href="mailto:propertytaxreliefgroup@gmail.com"
                className="hover:text-gold break-all"
              >
                propertytaxreliefgroup@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 text-center text-xs text-white/60">
          &copy; 2026 Property Tax Relief Group. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
