"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#method", label: "Method" },
  { href: "/#offers", label: "Work With Me" },
  { href: "/#community", label: "Community" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-brand-purple-deep/95 backdrop-blur-sm border-b border-brand-gold/10"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 lg:h-20 flex items-center justify-between">
        <Link
          href="/"
          className="font-display tracking-wide text-brand-gold text-xl lg:text-2xl"
        >
          VIVEKA VON ROSEN
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm uppercase tracking-widest text-brand-paper/85 hover:text-brand-gold transition"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/book"
            className="no-underline border border-brand-gold text-brand-gold uppercase tracking-widest text-sm px-5 py-2.5 hover:bg-brand-gold hover:text-brand-purple-deep transition"
          >
            Book a Consultation
          </Link>
        </nav>

        <button
          aria-label="Open menu"
          className="md:hidden text-brand-paper p-2"
          onClick={() => setOpen(true)}
        >
          <Menu size={24} />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-brand-purple-deep flex flex-col">
          <div className="flex items-center justify-between px-6 h-16">
            <span className="font-display tracking-wide text-brand-gold text-xl">
              VIVEKA VON ROSEN
            </span>
            <button
              aria-label="Close menu"
              className="text-brand-paper p-2"
              onClick={() => setOpen(false)}
            >
              <X size={24} />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center gap-8 flex-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-brand-paper hover:text-brand-gold tracking-wide"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="no-underline mt-4 border border-brand-gold text-brand-gold uppercase tracking-widest text-sm px-6 py-3"
            >
              Book a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
