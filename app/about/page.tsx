import type { Metadata } from "next";
import AboutHero from "../components/about/HeroSection";
import PhilosophySection from "../components/about/PhilosophySection";
import HeadquartersSection from "../components/about/HeadquartersSection";
import FoundersSection from "../components/about/FoundersSection";
import FoundersNoteSection from "../components/about/FoundersNoteSection";
import ByTheNumbersSection from "../components/about/ByTheNumbersSection";
import ContactSection from "../components/about/ContactSection";

export const metadata: Metadata = {
  title: "About Us — Patient. Careful. Quietly strong. · MagDee",
  description:
    "We're a small team from Tamil Nadu building AI products that feel patient, careful, and quietly strong. Read our story and meet the founders.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <PhilosophySection />
      <HeadquartersSection />
      <FoundersNoteSection />
      <FoundersSection />
      <ByTheNumbersSection />
      <ContactSection />
    </>
  );
}
