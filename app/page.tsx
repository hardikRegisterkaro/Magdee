import dynamic from "next/dynamic";

const HeroSection = dynamic(() => import("./components/HeroSection"));
const PrinciplesSection = dynamic(() => import("./components/PrinciplesSection"));
const SuiteSection = dynamic(() => import("./components/SuiteSection"));
const HowItWorksSection = dynamic(() => import("./components/HowItWorksSection"));
const RootedSection = dynamic(() => import("./components/RootedSection"));
const RoadmapSection = dynamic(() => import("./components/RoadmapSection"));

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PrinciplesSection />
      <SuiteSection />
      <HowItWorksSection />
      <RootedSection />
      <RoadmapSection />
    </main>
  );
}
