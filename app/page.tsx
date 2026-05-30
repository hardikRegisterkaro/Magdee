import HeroSection from "./components/HeroSection";
import PrinciplesSection from "./components/PrinciplesSection";
import SuiteSection from "./components/SuiteSection";
import HowItWorksSection from "./components/HowItWorksSection";
import RootedSection from "./components/RootedSection";
import RoadmapSection from "./components/RoadmapSection";
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
