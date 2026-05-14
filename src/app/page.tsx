import { TopNav } from "@/components/sections/TopNav";
import { Hero } from "@/components/sections/Hero";
import { Relevance } from "@/components/sections/Relevance";
import { Mechanism } from "@/components/sections/Mechanism";
import { Outcome } from "@/components/sections/Outcome";

export default function Page() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <Relevance />
        <Mechanism />
        <Outcome />
        {/* R-4+ sections */}
      </main>
    </>
  );
}
