import Link from "next/link";
import { Linkedin, Youtube, Instagram, BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-paper/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-14 grid gap-8 md:grid-cols-3 items-center">
        <div className="font-display tracking-wide text-brand-gold text-xl">
          VIVEKA VON ROSEN
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/vivekavonrosen"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-brand-gold hover:text-brand-paper transition"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://vivekavonrosen.substack.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Substack"
            className="text-brand-gold hover:text-brand-paper transition"
          >
            <BookOpen size={20} />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="text-brand-gold hover:text-brand-paper transition"
          >
            <Youtube size={20} />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="text-brand-gold hover:text-brand-paper transition"
          >
            <Instagram size={20} />
          </a>
        </div>

        <div className="flex justify-center md:justify-end gap-6 text-xs uppercase tracking-widest">
          <Link href="#" className="hover:text-brand-gold">
            Privacy
          </Link>
          <Link href="#" className="hover:text-brand-gold">
            Terms
          </Link>
        </div>
      </div>
      <div className="border-t border-brand-paper/10 py-5 text-center text-xs text-brand-paper/50">
        © 2026 Always Extraordinary, LLC
      </div>
    </footer>
  );
}
