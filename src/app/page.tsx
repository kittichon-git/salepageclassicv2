import { TopNav } from "@/components/sections/TopNav";
import { Hero } from "@/components/sections/Hero";
import { ContextBlock } from "@/components/sections/ContextBlock";
import { Relevance } from "@/components/sections/Relevance";
import { Mechanism } from "@/components/sections/Mechanism";
import { Outcome } from "@/components/sections/Outcome";
import { Fit } from "@/components/sections/Fit";
import { Curriculum } from "@/components/sections/Curriculum";
import { Offer } from "@/components/sections/Offer";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { StickyCTABar } from "@/components/sections/StickyCTABar";
import { Footer } from "@/components/sections/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

export default function Page() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <ContextBlock />
        <Relevance />
        <Mechanism />
        <Outcome />
        <Fit />
        <Curriculum />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <StickyCTABar />
      <JsonLd />
    </>
  );
}
