"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const navigationItems = [
  { text: "사업안내", width: "w-20", href: "/about" },
  { text: "지원하기", width: "w-20", href: "/apply" },
  { text: "Q&A", width: "w-[60px]" },
  { text: "로그인", width: "w-[60px]" },
];

export const InformationSectionOriginal = () => {
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.href) {
      router.push(item.href);
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="relative w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 lg:px-[30px] py-4 sm:py-6 lg:py-10 w-full">
        <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
          <Image 
            className="h-[40px] sm:h-[50px] lg:h-[60px] w-auto object-contain cursor-pointer" 
            alt="관악구 로고" 
            src="/images/관악구CI(세로형).jpg"
            width={60}
            height={60}
            priority
            onClick={handleLogoClick}
          />
          <Image 
            className="h-[35px] sm:h-[40px] lg:h-[50px] w-auto object-contain cursor-pointer" 
            alt="부가 로고" 
            src="/images/image.png"
            width={80}
            height={50}
            priority
            onClick={handleLogoClick}
          />
        </div>

        {/* 데스크톱 네비게이션 */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-10">
          {navigationItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              className={`${item.width} h-auto p-0 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-lg xl:text-xl text-center tracking-[0] leading-[normal] hover:bg-transparent`}
              onClick={() => handleNavClick(item)}
            >
              {item.text}
            </Button>
          ))}
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴"
        >
          <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <nav className="lg:hidden absolute top-full left-0 w-full bg-white shadow-lg z-50">
          <div className="flex flex-col p-4">
            {navigationItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className="w-full h-auto p-4 [font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-base text-left hover:bg-gray-50"
                onClick={() => handleNavClick(item)}
              >
                {item.text}
              </Button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};