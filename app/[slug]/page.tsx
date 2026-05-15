import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchServicePage } from "@/app/lib/fetchServicePage";
import ProductSubNav from "@/app/components/ProductSubNav";
import DynamicHero from "@/app/components/dynamic/Hero";
import DynamicFeatures from "@/app/components/dynamic/Features";
import DynamicPantryScanner from "@/app/components/dynamic/PantryScanner";
import DynamicVoiceListening from "@/app/components/dynamic/VoiceListening";
import DynamicHowItWorks from "@/app/components/dynamic/HowItWorks";
import DynamicPricing from "@/app/components/dynamic/Pricing";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await fetchServicePage(slug);
  if (!page) return {};
  return {
    title: page.metaTitle ?? page.heroSection.heading,
    description: page.metaDescription ?? page.heroSection.description,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = await fetchServicePage(slug);

  if (!page) notFound();

  return (
    <>
      <ProductSubNav active={slug} />
      <DynamicHero data={page.heroSection} />

      {page.featuresSection?.features?.length && (
        <DynamicFeatures features={page.featuresSection.features} />
      )}

      {page.pantryScannerSection && (
        <DynamicPantryScanner data={page.pantryScannerSection} />
      )}

      {page.voiceListeningSection && (
        <DynamicVoiceListening data={page.voiceListeningSection} />
      )}

      {page.howItWorksSection && (
        <DynamicHowItWorks data={page.howItWorksSection} />
      )}

      {page.pricingSection && (
        <DynamicPricing data={page.pricingSection} />
      )}
    </>
  );
}


// import type { Metadata } from "next";
// import dynamic from "next/dynamic";

// const ProductSubNav = dynamic(() => import("../components/ProductSubNav"));
// const Hero = dynamic(() => import("../components/VOChef/Hero"));
// const PantryScanner = dynamic(() => import("../components/VOChef/PantryScanner"));
// const VoiceListening = dynamic(() => import("../components/VOChef/VoiceListening"));
// const HowItWorks = dynamic(() => import("../components/VOChef/HowItWorks"));
// const Pricing = dynamic(() => import("../components/VOChef/Pricing"));
// const FinalCTA = dynamic(() => import("../components/VOChef/FinalCTA"));
// const FoundersPromise = dynamic(() => import("../components/VOChef/FoundersPromise"));
// const Features = dynamic(() => import("../components/VOChef/Features"));

// export const metadata: Metadata = {
//   title: "VOChef — The kitchen finally answers back · MagDee",
//   description:
//     "A voice-first cooking companion that adapts to your pantry, your pace, and what you actually crave. Hands stay on the spoon. The screen stays clean.",
// };

// export default function VOChefPage() {
//   return (
//     <>
//       <ProductSubNav active="VOChef" />
//       <Hero />
//       <Features />
//       <PantryScanner />
//       <VoiceListening />
//       <HowItWorks />
//       <Pricing />
//       <FinalCTA />
//       <FoundersPromise />
//     </>
//   );
// }
