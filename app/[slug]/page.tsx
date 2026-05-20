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
const FinalCTA = dynamic(() => import("../components/VOChef/FinalCTA"));
const FoundersPromise = dynamic(() => import("../components/dynamic/FoundersPromise"));

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