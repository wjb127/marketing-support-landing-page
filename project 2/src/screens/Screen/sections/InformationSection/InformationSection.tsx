import React from "react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { text: "사업안내", width: "w-20" },
  { text: "지원하기", width: "w-20" },
  { text: "Q&A", width: "w-[60px]" },
  { text: "로그인", width: "w-[60px]" },
];

export const InformationSection = (): JSX.Element => {
  return (
    <header className="flex items-center justify-between px-[30px] py-10 w-full">
      <div className="flex items-center">
        <img className="w-[930px] h-[60px]" alt="Frame" src="/frame-1.svg" />
      </div>

      <nav className="flex items-center gap-10">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`${item.width} h-auto p-0 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-xl text-center tracking-[0] leading-[normal] hover:bg-transparent`}
          >
            {item.text}
          </Button>
        ))}
      </nav>
    </header>
  );
};
