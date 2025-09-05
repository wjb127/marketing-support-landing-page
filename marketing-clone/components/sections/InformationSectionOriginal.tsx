"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const navigationItems = [
  { text: "사업안내", width: "w-20", href: "/about" },
  { text: "지원하기", width: "w-20", href: "/apply" },
  { text: "Q&A", width: "w-[60px]" },
  { text: "로그인", width: "w-[60px]" },
];

export const InformationSectionOriginal = () => {
  const router = useRouter();

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.href) {
      router.push(item.href);
    }
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between px-[30px] py-10 w-full">
      <div className="flex items-center gap-4">
        <img 
          className="h-[60px] object-contain cursor-pointer" 
          alt="관악구 로고" 
          src="/images/관악구CI(세로형).jpg" 
          onClick={handleLogoClick}
        />
        <img 
          className="h-[50px] object-contain cursor-pointer" 
          alt="부가 로고" 
          src="/images/image.png" 
          onClick={handleLogoClick}
        />
      </div>

      <nav className="flex items-center gap-10">
        {navigationItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`${item.width} h-auto p-0 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-xl text-center tracking-[0] leading-[normal] hover:bg-transparent`}
            onClick={() => handleNavClick(item)}
          >
            {item.text}
          </Button>
        ))}
      </nav>
    </header>
  );
};