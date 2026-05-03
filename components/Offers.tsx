import Link from "next/link";
import FadeIn from "./FadeIn";

type Offer = {
  name: string;
  price: string;
  duration?: string;
  body: string;
  bullets?: string[];
  cta: { label: string; href: string; external?: boolean; ghost?: boolean };
};

const featured: Offer[] = [
  {
    name: "Authority Accelerator",
    price: "$8,000",
    duration: "6-month private coaching",
    body:
      "Clarify your message, shape your offers, build your visibility, and put the systems in place so the business grows without becoming another source of overwhelm.",
    bullets: [
      "A clearer business model",
      "Stronger positioning",
      "The right tech and systems",
      "Steady momentum and accountability",
    ],
    cta: { label: "Book a Consultation", href: "/book" },
  },
  {
    name: "Authority Mastery",
    price: "$15,000",
    duration: "12-month private coaching",
    body:
      "For founders building something with depth, staying power, and real alignment. Twelve months to refine the message, expand the authority, and build a business that's both meaningful and commercially strong.",
    bullets: [
      "Clear and credible direction",
      "Visible authority in your space",
      "Offers that reflect your real value",
      "A business designed for impact, income, and freedom",
    ],
    cta: { label: "Book a Consultation", href: "/book" },
  },
];

const entry: Offer = {
  name: "Visible Authority Intensive",
  price: "$2,000",
  body:
    "The on-ramp to private coaching. Three 90-minute virtual sessions OR a half-day in-person intensive. You walk away with a clearer business blueprint, stronger positioning, and the right tools for your goals. The consultation determines the right fit.",
  cta: { label: "Learn more", href: "/book" },
};

const selfServe: Offer = {
  name: "VIOS — Visibility Infrastructure OS",
  price: "$497",
  body:
    "An AI-powered strategy system. Ten guided modules, under 90 minutes, turning decades of expertise into positioning statements, a 30-day content plan, and a revenue roadmap. The foundation of everything I do.",
  cta: {
    label: "Explore VIOS →",
    href: "https://www.beyondthedreamboard.com/visibility-os-sales-page",
    external: true,
  },
};

function FeaturedCard({ offer }: { offer: Offer }) {
  return (
    <div className="relative bg-brand-paper border-l-2 border-brand-gold pl-8 lg:pl-10 py-8 lg:py-10">
      <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2 mb-2">
        <h3 className="font-display tracking-tight text-3xl md:text-4xl">
          {offer.name}
        </h3>
        <span className="font-display text-brand-gold text-2xl md:text-3xl">
          {offer.price}
        </span>
      </div>
      {offer.duration && (
        <p className="text-xs uppercase tracking-[0.25em] text-brand-ink/60 mb-5">
          {offer.duration}
        </p>
      )}
      <p className="text-brand-ink/80 leading-relaxed mb-6">{offer.body}</p>
      {offer.bullets && (
        <ul className="space-y-2 mb-8">
          {offer.bullets.map((b) => (
            <li key={b} className="flex gap-3 text-brand-ink/85">
              <span className="text-brand-gold mt-2 inline-block h-px w-4 flex-none" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={offer.cta.href}
        className="inline-flex items-center border border-brand-gold text-brand-purple uppercase tracking-widest text-sm px-6 py-3 hover:bg-brand-gold hover:text-brand-purple-deep transition"
      >
        {offer.cta.label}
      </Link>
    </div>
  );
}

function SmallCard({ offer }: { offer: Offer }) {
  const linkProps = offer.cta.external
    ? { target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <div className="border-l-2 border-brand-gold pl-6 lg:pl-8 py-6">
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1 mb-1">
        <h3 className="font-display tracking-tight text-2xl md:text-3xl">
          {offer.name}
        </h3>
        <span className="font-display text-brand-gold text-xl md:text-2xl">
          {offer.price}
        </span>
      </div>
      <p className="text-brand-ink/75 leading-relaxed mb-5">{offer.body}</p>
      <Link
        href={offer.cta.href}
        {...linkProps}
        className="inline-block text-brand-gold uppercase tracking-widest text-xs hover:text-brand-purple transition"
      >
        {offer.cta.label}
      </Link>
    </div>
  );
}

export default function Offers() {
  return (
    <section id="offers" className="bg-brand-paper py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn className="max-w-3xl mb-16 lg:mb-20">
          <p className="text-brand-purple text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Work With Me
          </p>
          <h2 className="font-display tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            From a first conversation to a full twelve-month build.
          </h2>
          <p className="text-lg md:text-xl text-brand-ink/75 leading-relaxed">
            Five paths in. Same conviction underneath: you&apos;ve already got
            what most coaching programs are trying to install.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {featured.map((o) => (
            <FadeIn key={o.name}>
              <FeaturedCard offer={o} />
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="mb-12 max-w-4xl">
            <FeaturedCard offer={entry} />
          </div>
        </FadeIn>

        <FadeIn>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl">
            <SmallCard offer={selfServe} />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
