import React from "react";
import { InformationSection } from "./sections/InformationSection/InformationSection";
import { SupportSection } from "./sections/SupportSection/SupportSection";

export const Screen = (): JSX.Element => {
  return (
    <main className="bg-white w-full">
      <div className="bg-white w-full max-w-[1440px] mx-auto">
        <InformationSection />
        <SupportSection />

        <footer className="flex h-48 items-start gap-2.5 px-[200px] py-10 bg-[#ffffff26] w-full">
          <div className="flex flex-col w-[164px] items-start justify-center gap-2.5 px-2.5 py-0 relative mb-[-8.61px]">
            <div className="flex flex-col items-start justify-center gap-2.5 flex-[0_0_auto] relative self-stretch w-full">
              <img
                className="relative self-stretch w-full h-[47px] object-cover"
                alt="Ci"
                src="/---ci------1.png"
              />

              <img
                className="h-[63.61px] object-cover relative self-stretch w-full"
                alt="Ci"
                src="/--ci.png"
              />
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
};
