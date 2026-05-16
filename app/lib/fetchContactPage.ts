import { cache } from "react";

const API_URL = process.env.BACKEND_API_URL || "http://localhost:3000";

export interface ContactCard {
    label: string;
    value: string;
    detail: string;
}

export interface Inbox {
    label: string;
    email: string;
    detail: string;
    personName: string;
    personInitial: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface ContactPageData {
    metaTitle?: string;
    metaDescription?: string;
    content: {
        heroSection?: {
            badge?: string;
            hours?: string;
            contactCards?: ContactCard[];
        };
        inboxesSection?: {
            badge?: string;
            description?: string;
            inboxes?: Inbox[];
        };
        headquartersSection?: {
            badge?: string;
            companyName?: string;
            address?: string;
            mapsUrl?: string;
            phone?: string;
            hours?: string;
            lat?: string;
            long?: string;
            neighborhoodHeading?: string;
            neighborhoodDescription?: string;
            mapImgUrl?: string;
        };
        faqSection?: {
            badge?: string;
            description?: string;
            faqs?: FAQ[];
        };
        newsletterSection?: {
            badge?: string;
            heading?: string;
            description?: string;
            email?: string;
        };
    };
}

export const fetchContactPage = cache(async (): Promise<ContactPageData | null> => {
    try {
        const res = await fetch(`${API_URL}/api/contact`, {
            next: { tags: ["contact-page"], revalidate: 3600 },
        });
        if (!res.ok) return null;
        const json = await res.json();
        if (!json.success || !json.data) return null;
        return json.data as ContactPageData;
    } catch {
        return null;
    }
});
