import type { Metadata } from "next";
import { fetchAboutPage } from "../lib/fetchAboutPage";
import AboutHero from "../components/about/HeroSection";
import PhilosophySection from "../components/about/PhilosophySection";
import HeadquartersSection from "../components/about/HeadquartersSection";
import FoundersSection from "../components/about/FoundersSection";
import FoundersNoteSection from "../components/about/FoundersNoteSection";
import ByTheNumbersSection from "../components/about/ByTheNumbersSection";
import ContactSection from "../components/about/ContactSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchAboutPage();
  return {
    title: data?.metaTitle || "About Us — Patient. Careful. Quietly strong. · MagDee",
    description:
      data?.metaDescription ||
      "We're a small team from Tamil Nadu building AI products that feel patient, careful, and quietly strong. Read our story and meet the founders.",
  };
}

export default async function AboutPage() {
  const data = await fetchAboutPage();

  return (
    <>
      <AboutHero heroSection={data?.heroSection} />
      <PhilosophySection approachSection={data?.approachSection} />
      <HeadquartersSection aboutSection={data?.aboutSection} />
      <FoundersNoteSection data={data?.foundersNoteSection} />
      <FoundersSection teamSection={data?.teamSection} />
      <ByTheNumbersSection />
      <ContactSection />
    </>
  );
}
