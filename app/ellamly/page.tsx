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
  title: "Ellamly — Your everyday AI companion · MagDee",
  description:
    "Ambient intelligence for the small, daily decisions — weather, errands, EMIs — in your language, on your terms.",
};

export default function EllamlyPage() {
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
