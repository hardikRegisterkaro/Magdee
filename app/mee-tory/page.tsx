import type { Metadata } from "next";
import ProductSubNav from "../components/ProductSubNav";
import Hero from "../components/VOChef/Hero";
import Features from "../components/VOChef/Features";
import PantryScanner from "../components/VOChef/PantryScanner";
import VoiceListening from "../components/VOChef/VoiceListening";
import HowItWorks from "../components/VOChef/HowItWorks";
import Pricing from "../components/VOChef/Pricing";
import FinalCTA from "../components/VOChef/FinalCTA";
import FoundersPromise from "../components/VOChef/FoundersPromise";

export const metadata: Metadata = {
  title: "Mee Tory — The meeting ministry · MagDee",
  description:
    "The quiet observer that turns standups, syncs, and 1:1s into decisions you can find next Tuesday.",
};

export default function MeeToryPage() {
  return (
    <>
      <ProductSubNav />
      <Hero />
      <Features />
      <PantryScanner />
      <VoiceListening />
      <HowItWorks />
      <Pricing />
      <FinalCTA />
      <FoundersPromise />
    </>
  );
}
