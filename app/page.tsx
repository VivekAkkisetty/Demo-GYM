import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { StatsStrip } from "@/components/StatsStrip";
import { About } from "@/components/About";
import { Benefits } from "@/components/Benefits";
import { Programs } from "@/components/Programs";
import { Facilities } from "@/components/Facilities";
import { Transformations } from "@/components/Transformations";
import { Trainers } from "@/components/Trainers";
import { Gallery } from "@/components/Gallery";
import { SocialProof } from "@/components/SocialProof";
import { CtaBanner } from "@/components/CtaBanner";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { FinalCta } from "@/components/FinalCta";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      {/* ── Navigation ── */}
      <Navbar />

      {/* ── Hero + Stats ── */}
      <Hero />
      <StatsStrip />

      {/* ── Brand story ── */}
      <About />
      <Benefits />

      {/* ── Programs + Facilities ── */}
      <Programs />
      <Facilities />

      {/* ── Social proof ── */}
      <Transformations />
      <Trainers />
      <Gallery />
      <SocialProof />

      {/* ── Mid-page CTA ── */}
      <CtaBanner />

      {/* ── Conversion: Pricing + Testimonials ── */}
      <Pricing />
      <Testimonials />

      {/* ── Final CTA ── */}
      <FinalCta />

      {/* ── Contact + Location ── */}
      <ContactSection />

      {/* ── Footer ── */}
      <Footer />
    </main>
  );
}
