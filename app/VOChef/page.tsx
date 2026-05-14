import type { Metadata } from "next";
import dynamic from "next/dynamic";

const ProductSubNav = dynamic(() => import("../components/ProductSubNav"));
const Hero = dynamic(() => import("../components/VOChef/Hero"));
const Features = dynamic(() => import("../components/VOChef/Features"));

export const metadata: Metadata = {
  title: "VOChef — The kitchen finally answers back · MagDee",
  description:
    "A voice-first cooking companion that adapts to your pantry, your pace, and what you actually crave. Hands stay on the spoon. The screen stays clean.",
};

export default function VOChefPage() {
  return (
    <>
      <ProductSubNav active="VOChef" />
      <Hero />
      <Features />
    </>
  );
}
