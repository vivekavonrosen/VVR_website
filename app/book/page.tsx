import Script from "next/script";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Book a Strategy Session — Viveka von Rosen",
  description:
    "Book a 35-minute strategy session with Viveka von Rosen. No pitch.",
};

export default function BookPage() {
  return (
    <>
      <Nav />
      <main>
        <section className="relative bg-purple-gradient text-brand-paper grain overflow-hidden pt-32 lg:pt-40 pb-20">
          <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
            <p className="text-brand-gold text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
              Strategy Session
            </p>
            <h1 className="font-display tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.95] mb-8">
              Book your 35-minute strategy session.
            </h1>
            <p className="text-brand-paper/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              We&apos;ll talk through where you are, what you&apos;ve built, and
              whether private coaching is the right next step. No pitch. No
              pressure.
            </p>
          </div>
        </section>

        <section className="bg-brand-paper py-12 lg:py-16">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/vivekacoach/35-strategy-session"
              style={{ minWidth: "320px", height: "700px" }}
            />
            <Script
              src="https://assets.calendly.com/assets/external/widget.js"
              strategy="afterInteractive"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
