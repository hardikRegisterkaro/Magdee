import { cache } from "react";

const API_URL = process.env.BACKEND_API_URL;

export interface AboutStat {
  statTitle: string;
  statValue: string;
}

export interface ApproachCard {
  cardTitle: string;
  cardDescription: string;
}

export interface TeamMemberCard {
  name: string;
  designation?: string;
  bio?: string;
  location?: string;
  imgUrl?: string;
}

export interface AboutPageData {
  metaTitle?: string;
  metaDescription?: string;
  heroSection?: {
    heroBadgeTitle: string;
    heroHeading: string;
    heroDescription: string;
    heroImgUrl?: string;
  };
  aboutSection?: {
    aboutBadgeTitle: string;
    aboutHeading: string;
    aboutDescription: string;
    aboutImgUrl?: string;
    aboutStats: AboutStat[];
  };
  approachSection?: {
    approachBadgeTitle: string;
    approachHeading: string;
    approachDescription: string;
    approachCards: ApproachCard[];
  };
  teamSection?: {
    teamBadgeTitle: string;
    teamHeading: string;
    teamDescription: string;
    teamMemberCards: TeamMemberCard[];
  };
  foundersNoteSection?: {
    founderName: string;
    founderDesignation: string;
    founderLocation: string;
    founderEmail: string;
    founderCoordinates: string;
    quote: string;
    documentNote: string;
    documentNo: string;
  };
}

export const fetchAboutPage = cache(async (): Promise<AboutPageData | null> => {
  if (!API_URL) {
    console.warn("BACKEND_API_URL is not set");
    return null;
  }

  try {
    const res = await fetch(`${API_URL}/api/about`, {
      next: { tags: ["about-page"], revalidate: 3600 },
    });

    if (!res.ok) return null;

    const data = await res.json();
    return (data.data as AboutPageData) ?? null;
  } catch {
    return null;
  }
});
