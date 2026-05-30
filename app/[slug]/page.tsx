import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { fetchServicePage } from "@/app/lib/fetchServicePage";
import ProductSubNav from "@/app/components/ProductSubNav";
import DynamicHero from "@/app/components/dynamic/Hero";
import DynamicFeatures from "@/app/components/dynamic/Features";
import DynamicPantryScanner from "@/app/components/dynamic/PantryScanner";
import DynamicVoiceListening from "@/app/components/dynamic/VoiceListening";
import DynamicHowItWorks from "@/app/components/dynamic/HowItWorks";
import DynamicPricing from "@/app/components/dynamic/Pricing";
import DynamicIntegrations from "@/app/components/dynamic/Integrations";
import MeetoryComingSoon from "@/app/components/Meetory/ComingSoon";
const FinalCTA = dynamic(() => import("../components/VOChef/FinalCTA"));
const FoundersPromise = dynamic(() => import("../components/dynamic/FoundersPromise"));

const COMING_SOON_FALLBACKS: Record<string, { meta: Metadata; render: () => React.ReactElement }> = {
  meetory: {
    meta: {
      title: "Meetory — meeting intelligence in your language",
      description:
        "Meetory is an AI meeting assistant for multilingual teams. Joins your calls, transcribes 10+ languages, and turns conversations into summaries you can find next Tuesday. Private beta opens Q2 2026.",
    },
    render: () => <MeetoryComingSoon />,
  },
};

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = await fetchServicePage(slug);
  if (!page) {
    return COMING_SOON_FALLBACKS[slug]?.meta ?? {};
  }
  return {
    title: page.metaTitle ?? page.heroSection.heading,
    description: page.metaDescription ?? page.heroSection.description,
  };
}

export default async function ServiceSlugPage({ params }: Props) {
  const { slug } = await params;
  const page = await fetchServicePage(slug);

  if (!page) {
    const fallback = COMING_SOON_FALLBACKS[slug];
    if (fallback) return fallback.render();
    notFound();
  }

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

      {page.pricingSection && (page.pricingSection.plans?.length ?? 0) > 0 && (
        <DynamicPricing data={page.pricingSection} />
      )}

      {page.integrationsSection && (page.integrationsSection.integrations?.length ?? 0) > 0 && (
        <DynamicIntegrations data={page.integrationsSection} />
      )}

       <FinalCTA />
       <FoundersPromise />
    </>
  );
}