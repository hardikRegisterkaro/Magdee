import type { Metadata } from "next";
import { fetchContactPage } from "../lib/fetchContactPage";
import ContactHero from "../components/contact/HeroSection";
import InboxesSection from "../components/contact/InboxesSection";
import HeadquartersSection from "../components/contact/HeadquartersSection";
import FAQSection from "../components/contact/FAQSection";
import NewsletterSection from "../components/contact/NewsletterSection";

export async function generateMetadata(): Promise<Metadata> {
  const data = await fetchContactPage();
  return {
    title: data?.metaTitle || "Contact Us — Say hi. One of us reads it. · MagDee",
    description: data?.metaDescription || "No support queue, no ticketing system, no chatbot. Three founders and a small team handle every email — usually within a working day.",
  };
}

export default async function ContactUsPage() {
  const data = await fetchContactPage();
  const c = data?.content;

  return (
    <>
      <ContactHero data={c?.heroSection} />
      <InboxesSection data={c?.inboxesSection} />
      <HeadquartersSection data={c?.headquartersSection} />
      <FAQSection data={c?.faqSection} />
      <NewsletterSection data={c?.newsletterSection} />
    </>
  );
}
