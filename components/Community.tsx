import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Community() {
  return (
    <section id="community" className="bg-brand-paper py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <p className="text-brand-purple text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Prefer to start with community?
          </p>
          <h2 className="font-display tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-8">
            Women&apos;s Technology Integration Collaborative
          </h2>
          <p className="text-brand-ink/80 text-lg leading-relaxed mb-10 max-w-lg">
            A lower-commitment entry point. WTIC Free is where you connect,
            learn, and explore what&apos;s possible. WTIC Pro adds live
            training, practical tools, full resources, and implementation help —
            $97 a month or $697 a year. A strong place to start before stepping
            into private coaching.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href="https://www.skool.com/womens-tech-collaborative-2106/about"
              target="_blank"
              rel="noreferrer"
              className="text-brand-gold uppercase tracking-widest text-xs hover:text-brand-purple transition"
            >
              Join WTIC Free →
            </a>
            <a
              href="https://www.skool.com/womens-tech-collaborative-2106/about"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center border border-brand-gold text-brand-purple uppercase tracking-widest text-sm px-6 py-3 hover:bg-brand-gold hover:text-brand-purple-deep transition w-fit"
            >
              Upgrade to WTIC Pro →
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative aspect-[5/4] w-full">
            <Image
              src="/images/Viv community.jpg"
              alt="Viveka with the WTIC community at a retreat"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <span
              aria-hidden
              className="absolute left-3 -bottom-3 right-0 h-px bg-brand-gold translate-x-3"
              style={{ width: "calc(100% - 12px)" }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
