import FadeIn from "./FadeIn";

export default function StandAgainst() {
  return (
    <section className="relative bg-brand-purple-deep text-brand-paper grain overflow-hidden py-28 lg:py-40">
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <FadeIn>
          <p className="text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-10">
            What this brand is standing against
          </p>
          <blockquote className="font-display tracking-tight text-4xl md:text-6xl lg:text-7xl leading-[1.05] text-brand-paper">
            &ldquo;An entire industry that treats expert women as projects to be
            rebuilt instead of authorities to be amplified.&rdquo;
          </blockquote>

          <div className="mt-14 max-w-2xl mx-auto space-y-5 text-lg md:text-xl text-brand-paper/80 leading-relaxed">
            <p>
              You&apos;ve built something. Run something. Walked away from
              something. You don&apos;t need to be rebuilt from zero.
            </p>
            <p>
              You need a strategist who can see what you&apos;ve already got and
              help you put it to work.
            </p>
          </div>

          <span className="gold-rule w-20 mx-auto mt-14 block" />
        </FadeIn>
      </div>
    </section>
  );
}
