"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { useRouter, usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navigationItems = [
  { text: "사업안내", width: "w-20", href: "/about" },
  { text: "지원하기", width: "w-20", href: "/apply" },
  { text: "Q&A", width: "w-[60px]" },
  { text: "로그인", width: "w-[60px]" },
];

export const InformationSection = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.href) {
      router.push(item.href);
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    router.push("/");
  };

  return (
    <header className="relative flex items-center justify-between px-4 sm:px-[30px] py-6 sm:py-10 w-full">
      <div className="flex items-center gap-2 sm:gap-4">
        <img 
          className="h-[40px] sm:h-[60px] object-contain cursor-pointer" 
          alt="관악구 로고" 
          src="/images/관악구CI(세로형).jpg" 
          onClick={handleLogoClick}
        />
        <img 
          className="h-[35px] sm:h-[50px] object-contain cursor-pointer" 
          alt="부가 로고" 
          src="/images/image.png" 
          onClick={handleLogoClick}
        />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-10">
        {navigationItems.map((item, index) => {
          const isActive = item.href === pathname;
          return (
            <Button
              key={index}
              variant="ghost"
              className={`${item.width} h-auto p-0 [font-family:'Pretendard-Medium',Helvetica] font-medium ${
                isActive ? "text-[#0088FF]" : "text-black"
              } text-lg lg:text-xl text-center tracking-[0] leading-[normal] hover:bg-transparent`}
              onClick={() => handleNavClick(item)}
            >
              {item.text}
            </Button>
          );
        })}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden z-50">
          <div className="flex flex-col">
            {navigationItems.map((item, index) => {
              const isActive = item.href === pathname;
              return (
                <Button
                  key={index}
                  variant="ghost"
                  className={`w-full h-auto p-4 [font-family:'Pretendard-Medium',Helvetica] font-medium ${
                    isActive ? "text-[#0088FF]" : "text-black"
                  } text-lg text-center tracking-[0] leading-[normal] hover:bg-gray-100 rounded-none border-b`}
                  onClick={() => handleNavClick(item)}
                >
                  {item.text}
                </Button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};