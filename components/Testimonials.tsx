import FadeIn from "./FadeIn";

const quotes = [
  {
    quote: "She sees the vision under your vision — and helps you build that vision.",
    author: "Arijana M.",
  },
  {
    quote:
      "Viveka has the ability to take a complex idea and simplify it for immediate implementation. She is incredible.",
    author: "Neen James, MBA CSP",
  },
  {
    quote:
      "Working with Viveka has been the best decision I've made all year — possibly in the past five years. She listens deeply, reflects back your potential with clarity, and gently challenges you to rise into your next level.",
    author: "Lori Gama",
  },
  {
    quote:
      "Viveka isn't just a business coach. She's the person who sees the vision under the vision. She's helped me sharpen how I run my business, where I focus my energy, and how I use the right tools and technology with intention, not overwhelm.",
    author: "Fotine A. Sotiropoulos, Founder, Thavma Consulting",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-brand-paper py-28 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <FadeIn>
          <p className="text-brand-purple text-xs md:text-sm tracking-[0.3em] uppercase mb-12">
            What Clients Say
          </p>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-x-10 gap-y-12 lg:gap-x-16">
          {quotes.map((q, i) => (
            <FadeIn key={q.author} delay={i * 0.05}>
              <div className="border-t border-brand-gold pt-6">
                <p className="italic text-lg md:text-xl leading-relaxed text-brand-ink/85 mb-5">
                  &ldquo;{q.quote}&rdquo;
                </p>
                <p className="font-display tracking-wide text-brand-ink text-lg">
                  {q.author}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
