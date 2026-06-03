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
  title: "VOChef — voice-first cooking, live on Android",
  description:
    "VOChef is a voice-first AI cooking companion that adapts to your pantry, your pace, and what you actually crave. Hands stay on the spoon — the screen stays clean.",
};

export default function VOChefPage() {
  return (
    <>
      <ProductSubNav active="VOChef" />
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
