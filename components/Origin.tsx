import Image from "next/image";
import FadeIn from "./FadeIn";

export default function Origin() {
  return (
    <section className="relative bg-purple-gradient-flat text-brand-paper grain overflow-hidden py-28 lg:py-40">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <FadeIn>
          <div className="relative aspect-[4/5] w-full">
            <Image
              src="/images/viv couch.png"
              alt="Viveka von Rosen"
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

        <FadeIn delay={0.1}>
          <p className="text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
            Why Me
          </p>
          <h2 className="font-display tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-6">
            I left a company I built.
          </h2>
          <p className="text-xl text-brand-paper/85 leading-relaxed mb-10">
            Most coaches in this space have left a job. That&apos;s a different
            credential.
          </p>
          <div className="space-y-5 text-brand-paper/80 text-base md:text-lg leading-relaxed">
            <p>
              I&apos;ve spent 21 years in the LinkedIn ecosystem. Bestselling
              author of <em>LinkedIn Marketing: An Hour a Day</em>. Co-founded
              Vengreso, a digital sales training company that grew into AI
              software. Built a productivity tech company from scratch. Built
              inside this category, at scale, twice.
            </p>
            <p>
              The productivity tech company was profitable. I walked away from
              it anyway — because it wasn&apos;t my calling. Rebuilding from
              scratch after that, choosing meaning over an already-working
              business, is what gives me the pattern recognition to see where a
              client&apos;s work is headed before she can see it herself.
            </p>
            <p>
              The space between who you were professionally and who you&apos;re
              becoming is creative, generative, and terrifying. I&apos;ve
              actually lived there. That&apos;s why I now offer both the
              inner-work clarity and the outer infrastructure — because tactics
              alone don&apos;t land if the founder still doesn&apos;t believe
              she belongs in the room.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
