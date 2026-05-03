import Link from "next/link";
import FadeIn from "./FadeIn";

export default function FinalCTA() {
  return (
    <section className="relative bg-purple-gradient text-brand-paper grain overflow-hidden py-28 lg:py-40">
      <div className="relative mx-auto max-w-3xl px-6 lg:px-10 text-center">
        <FadeIn>
          <h2 className="font-display tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
            Ready to build what&apos;s next?
          </h2>
          <p className="text-brand-paper/85 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
            A 35-minute conversation. We figure out together whether the work is
            a fit. No pitch.
          </p>
          <Link
            href="/book"
            className="inline-flex items-center justify-center bg-brand-gold text-brand-purple-deep font-semibold uppercase tracking-widest text-sm px-10 py-5 hover:bg-brand-paper transition"
          >
            Book a Consultation
          </Link>
          <p className="mt-8 text-sm text-brand-paper/55">
            Or send a message at{" "}
            <a
              href="mailto:viveka@beyondthedreamboard.com"
              className="text-brand-gold hover:text-brand-paper underline-offset-4 hover:underline"
            >
              viveka@beyondthedreamboard.com
            </a>
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
