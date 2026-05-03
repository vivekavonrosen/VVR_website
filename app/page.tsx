import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import StandAgainst from "@/components/StandAgainst";
import Method from "@/components/Method";
import Origin from "@/components/Origin";
import Offers from "@/components/Offers";
import LiveExperiences from "@/components/LiveExperiences";
import Community from "@/components/Community";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <StandAgainst />
        <Method />
        <Origin />
        <Offers />
        <LiveExperiences />
        <Community />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
