import { InformationSectionOriginal } from "@/components/sections/InformationSectionOriginal";
import { SupportSectionOriginal } from "@/components/sections/SupportSectionOriginal";

export default function Home() {
  return (
    <main className="bg-white w-full">
      <div className="bg-white w-full max-w-[1440px] mx-auto">
        <InformationSectionOriginal />
        <SupportSectionOriginal />
      </div>
    </main>
  );
}
