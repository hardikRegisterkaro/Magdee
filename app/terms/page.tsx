import type { Metadata } from "next";
import { fetchTermsPolicy } from "../lib/fetchTermsAndConditions";
import LegalTabs from "@/app/components/legal/LegalTabs";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchTermsPolicy();
  return {
    title: data?.metaTitle || "Terms & Privacy Policy · MagDee",
    description:
      data?.metaDescription ||
      "Read the terms and conditions and privacy policy governing your use of MagDee products and services.",
  };
}

export default async function TermsPage() {
  const data = await fetchTermsPolicy();

  return (
    <div className="min-h-screen bg-white">
      <LegalTabs
        title={data?.title || "Terms & Policy"}
        subTitle={data?.subTitle || ""}
        termsBody={data?.content?.body || ""}
        privacyBody={data?.privacyPolicyContent?.body || ""}
        updatedAt={data?.updatedAt}
      />
    </div>
  );
}
