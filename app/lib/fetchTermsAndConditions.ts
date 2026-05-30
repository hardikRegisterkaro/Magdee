import { cache } from "react";

const API_URL = process.env.BACKEND_API_URL || "http://localhost:3000";

export interface TermsPolicyData {
    metaTitle?: string;
    metaDescription?: string;
    title?: string;
    subTitle?: string;
    content?: { body?: string };
    privacyPolicyContent?: { body?: string };
    updatedAt?: string;
}

export const fetchTermsPolicy = cache(async (): Promise<TermsPolicyData | null> => {
    try {
        const res = await fetch(`${API_URL}/api/terms-policy`, {
            next: { tags: ["terms-policy"], revalidate: 3600 },
        });
        if (!res.ok) return null;
        const json = await res.json();
        if (!json.success || !json.data) return null;
        return json.data as TermsPolicyData;
    } catch {
        return null;
    }
});
