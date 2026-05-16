import type { Metadata } from "next";
import ContactHero from "../components/contact/HeroSection";
import InboxesSection from "../components/contact/InboxesSection";
import HeadquartersSection from "../components/contact/HeadquartersSection";
import FAQSection from "../components/contact/FAQSection";
import NewsletterSection from "../components/contact/NewsletterSection";

export const metadata: Metadata = {
  title: "Contact Us — Say hi. One of us reads it. · MagDee",
  description:
    "No support queue, no ticketing system, no chatbot. Three founders and a small team handle every email — usually within a working day.",
};

export default function ContactUsPage() {
  return (
    <>
      <ContactHero />
      <InboxesSection />
      <HeadquartersSection />
      <FAQSection />
      <NewsletterSection />
    </>
  );
}
