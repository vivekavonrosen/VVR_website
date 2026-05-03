import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-purple-gradient text-brand-paper overflow-hidden grain min-h-[90vh] lg:min-h-screen flex items-center pt-24 lg:pt-28 pb-16">
      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-5 gap-10 lg:gap-6 items-center">
        <div className="lg:col-span-3">
          <p className="text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Legacy &amp; Visibility Strategist
          </p>
          <h1 className="font-display tracking-tight text-5xl md:text-7xl lg:text-8xl leading-[0.95] mb-7">
            You&apos;re not starting over. You&apos;re repositioning what you already know.
          </h1>
          <p className="text-brand-paper/80 text-lg md:text-xl leading-relaxed max-w-2xl mb-10">
            Private coaching for female founders with 20+ years of experience
            who are done being treated like beginners and ready to build the
            kind of visible authority business that reflects what they&apos;re
            actually worth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-brand-gold text-brand-purple-deep font-semibold uppercase tracking-widest text-sm px-8 py-4 hover:bg-brand-paper transition"
            >
              Book a Consultation
            </Link>
            <Link
              href="#method"
              className="inline-flex items-center justify-center border border-brand-paper/40 text-brand-paper uppercase tracking-widest text-sm px-8 py-4 hover:border-brand-gold hover:text-brand-gold transition"
            >
              See the method
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2 relative h-[400px] md:h-[520px] lg:h-[640px]">
          <div
            aria-hidden
            className="absolute inset-0 -z-0"
            style={{
              background:
                "radial-gradient(circle at 55% 45%, rgba(223,178,74,0.35) 0%, rgba(223,178,74,0) 60%)",
            }}
          />
          <Image
            src="/images/hero-viveka.png"
            alt="Viveka von Rosen"
            fill
            priority
            sizes="(max-width: 1024px) 80vw, 40vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <span className="gold-rule w-24 mb-6 block" />
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-10 pb-8 text-brand-paper/60">
            <span className="text-xs uppercase tracking-[0.3em]">
              Featured in
            </span>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-3 text-brand-paper/70 font-display tracking-wider text-lg">
              <span>FORBES</span>
              <span>INC. MAGAZINE</span>
              <span>TOPRANK</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
