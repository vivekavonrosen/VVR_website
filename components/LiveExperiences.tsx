import FadeIn from "./FadeIn";

const experiences = [
  {
    name: "Tools and Traction Day",
    price: "$497",
    location: "Loveland, Colorado",
    body:
      "A one-day immersive. Step back, get clear, learn the right tools, build momentum in a focused, supportive environment.",
    cta: { label: "See upcoming dates", href: "/book", external: false },
  },
  {
    name: "Tech in the Tropics",
    price: "from $5,497",
    location: "Costa Rica",
    body:
      "A working retreat. Out of the noise, into the work. For founders ready to build their next chapter in a setting designed for both reflection and action.",
    cta: { label: "Learn more →", href: "https://tiitcr.com/", external: true },
  },
];

export default function LiveExperiences() {
  return (
    <section className="relative bg-brand-purple-deep text-brand-paper grain overflow-hidden py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-10">
            Live Experiences
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {experiences.map((e, i) => (
            <FadeIn key={e.name} delay={i * 0.05}>
              <div className="border-l-2 border-brand-gold pl-6 lg:pl-8 py-2">
                <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-1">
                  <h3 className="font-display tracking-tight text-3xl md:text-4xl">
                    {e.name}
                  </h3>
                  <span className="font-display text-brand-gold text-2xl">
                    {e.price}
                  </span>
                </div>
                <p className="text-xs uppercase tracking-[0.25em] text-brand-paper/60 mb-4">
                  {e.location}
                </p>
                <p className="text-brand-paper/80 leading-relaxed mb-5 max-w-md">
                  {e.body}
                </p>
                <a
                  href={e.cta.href}
                  {...(e.cta.external
                    ? { target: "_blank", rel: "noreferrer" }
                    : {})}
                  className="inline-block text-brand-gold uppercase tracking-widest text-xs hover:text-brand-paper transition"
                >
                  {e.cta.label}
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
