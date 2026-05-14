import { TopNav } from "@/components/sections/TopNav";
import { Hero } from "@/components/sections/Hero";

export default function Page() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        {/* R-3 จะเพิ่ม section อื่น ๆ */}
      </main>
    </>
  );
}
