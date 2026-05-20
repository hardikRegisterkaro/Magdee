const CMS_BASE_URL =
  process.env.BACKEND_API_URL || "http://localhost:3000";

export interface VoiceStat {
  value: string;
  label: string;
}

export interface HowItWorksStep {
  label: string;
  title: string;
  body: string;
}

export interface FeatureCard {
  iconName: string;
  title: string;
  body: string;
  href: string;
}

export interface ServicePageData {
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  heroSection: {
    versionTag: string;
    title: string;
    heading: string;
    subHeading: string;
    description: string;
    ctaPrimaryText: string;
    ctaPrimaryUrl: string;
    ctaSecondaryText: string;
    ctaSecondaryUrl: string;
    ratingScore: string;
    ratingCount: string;
    phoneMockupImageUrl: string;
  };
  featuresSection?: {
    features: FeatureCard[];
  };
  pantryScannerSection?: {
    tagText: string;
    heading: string;
    subHeading: string;
    bullets: string[];
    ctaText: string;
    ctaHref: string;
    imageUrl?: string;
  };
  voiceListeningSection?: {
    tagText: string;
    heading: string;
    subHeading: string;
    sampleQuote: string;
    languageTag: string;
    stats: VoiceStat[];
    ctaText: string;
    ctaHref: string;
    imageUrl?: string;
  };
  howItWorksSection?: {
    heading: string;
    subHeading: string;
    steps: HowItWorksStep[];
  };
  pricingSection?: {
    tagText: string;
    heading: string;
    subHeading: string;
    plans: Array<{
      planLabel: string;
      planName: string;
      price: string;
      currency: string;
      billingNote: string;
      badge: string;
      features: string[];
      ctaText: string;
      ctaUrl: string;
      launchDate: string;
      refundNote: string;
    }>;
  };
  integrationsSection?: {
    heading: string;
    subHeading: string;
    integrations: Array<{
      platformName: string;
      imageUrl: string;
      status: string;
      whatItDoes: string;
    }>;
  };
}

export async function fetchServicePage(
  slug: string
): Promise<ServicePageData | null> {
  try {
    const res = await fetch(
      `${CMS_BASE_URL}/api/services/client/${slug}`,
      { next: { tags: ["service-list", `service-${slug}`], revalidate: 3600 } }
    );
    if (!res.ok) return null;
    const json = await res.json();
    return (json.servicePages as ServicePageData) ?? null;
  } catch {
    return null;
  }
}
