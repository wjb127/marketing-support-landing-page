import { InformationSection } from "@/components/sections/InformationSection";
import { SupportSection } from "@/components/sections/SupportSection";

export default function AboutPage() {
  return (
    <main className="bg-white w-full">
      <div className="bg-white w-full max-w-[1440px] mx-auto">
        <InformationSection />
        <SupportSection />
      </div>
    </main>
  );
}