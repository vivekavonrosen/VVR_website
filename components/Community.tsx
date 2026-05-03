import FadeIn from "./FadeIn";

export default function Community() {
  return (
    <section id="community" className="bg-brand-paper py-28 lg:py-40">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <FadeIn>
          <div className="relative bg-brand-purple-deep text-brand-paper grain overflow-hidden px-8 sm:px-12 lg:px-20 py-16 lg:py-24">
            <div className="relative grid lg:grid-cols-5 gap-10 lg:gap-16 items-center">
              <div className="lg:col-span-3">
                <p className="text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
                  Prefer to start with community?
                </p>
                <h2 className="font-display tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[0.95] mb-6">
                  Women&apos;s Technology Integration Collaborative
                </h2>
                <p className="text-brand-paper/80 text-lg leading-relaxed max-w-lg">
                  A lower-commitment entry point. WTIC Free is where you
                  connect, learn, and explore what&apos;s possible. WTIC Pro
                  adds live training, practical tools, full resources, and
                  implementation help — a strong place to start before
                  stepping into private coaching.
                </p>
              </div>

              <div className="lg:col-span-2 lg:border-l lg:border-brand-gold/30 lg:pl-12">
                <div className="space-y-8">
                  <div>
                    <p className="font-display text-brand-gold text-3xl md:text-4xl tracking-tight">
                      WTIC Free
                    </p>
                    <p className="text-brand-paper/70 mt-1">
                      Connect, learn, explore.
                    </p>
                    <a
                      href="https://www.skool.com/womens-tech-collaborative-2106/about"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-brand-gold uppercase tracking-widest text-xs hover:text-brand-paper transition"
                    >
                      Join free →
                    </a>
                  </div>

                  <div>
                    <p className="font-display text-brand-gold text-3xl md:text-4xl tracking-tight">
                      WTIC Pro
                    </p>
                    <p className="text-brand-paper/70 mt-1">
                      $97 / month or $697 / year.
                    </p>
                    <a
                      href="https://www.skool.com/womens-tech-collaborative-2106/about"
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center mt-4 border border-brand-gold text-brand-gold uppercase tracking-widest text-xs px-5 py-2.5 hover:bg-brand-gold hover:text-brand-purple-deep transition"
                    >
                      Upgrade to Pro →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
