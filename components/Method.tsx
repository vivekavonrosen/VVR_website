import Image from "next/image";
import FadeIn from "./FadeIn";

const pillars = [
  {
    n: "01",
    name: "Identity Transition",
    body:
      "Beyond the old title and into what's next. The inner work that makes any strategy actually stick.",
  },
  {
    n: "02",
    name: "Business Strategy",
    body:
      "Your experience becomes a clear offer, sharper positioning, and a business model that holds together.",
  },
  {
    n: "03",
    name: "Visibility Infrastructure",
    body:
      "LinkedIn, Substack, AI workflows. The systems that let people understand, trust, and find your value without you becoming a full-time content machine.",
  },
  {
    n: "04",
    name: "Practical Tech Fluency",
    body:
      "AI and the right tools support your business instead of overwhelming it. Used with intention, not chased for novelty.",
  },
];

export default function Method() {
  return (
    <section
      id="method"
      className="bg-brand-paper text-brand-ink py-28 lg:py-40"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="max-w-3xl">
          <p className="text-brand-purple text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            The Method
          </p>
          <h2 className="font-display tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
            Inner Clarity. Outer Infrastructure.
          </h2>
          <p className="text-lg md:text-xl text-brand-ink/75 leading-relaxed">
            Tactics alone don&apos;t work if the founder still doesn&apos;t
            believe she belongs in the room. Strategy alone falls apart without
            the systems to carry it. The method runs both tracks at once.
          </p>
        </FadeIn>

        <div className="mt-20 grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-10 gap-y-14">
            {pillars.map((p, i) => (
              <FadeIn key={p.n} delay={i * 0.05}>
                <div>
                  <div className="font-display outline-numeral text-7xl md:text-8xl leading-none mb-3">
                    {p.n}
                  </div>
                  <h3 className="font-display tracking-wide text-2xl md:text-3xl mb-3">
                    {p.name}
                  </h3>
                  <p className="text-brand-ink/75 leading-relaxed">{p.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn className="lg:col-span-1" delay={0.1}>
            <div className="relative aspect-[3/4] w-full">
              <Image
                src="/images/at desk with client laughing.JPG"
                alt="Working session"
                fill
                sizes="(max-width: 1024px) 100vw, 33vw"
                className="object-cover"
              />
              <span className="absolute -bottom-3 -right-3 block w-3/4 h-px bg-brand-gold" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
