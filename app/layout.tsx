import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/dynamic/Footer";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-sans-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MagDee — Intelligence, gently engineered",
  description:
    "Meetory, VOChef, and Ellamly — three AI products from Coimbatore. Meeting intelligence in your language, voice-first cooking, and ambient daily-life AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-ink" suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
