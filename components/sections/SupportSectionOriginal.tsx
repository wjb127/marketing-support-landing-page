"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const programDetails = [
  {
    label: "지원 기간",
    content: "2025. 9. 12.(금) ~ 9. 26.(금) 18:00까지",
  },
  {
    label: "모집 대상",
    content: {
      title: "관악구 소재 상시근로자 5인 미만의 소상공인 점포",
      details: [
        "※ 제외대상",
        "2022~2024년 동일 사업에 참여한 이력이 있는 점포",
        "유흥, 사행성, 도박 등 중소거입 육성기금 융자지원 제한 업종",
        "매장형 가게 아닌 점포(사무실, 병원, 숙박시설, 고시원 등)",
        "프랜차이즈 본점  또는 가맹점, 체인점",
      ],
    },
  },
  {
    label: "지원 방법",
    content: {
      title: "사이트 접수, 이메일 접수",
      details: [
        "사이트 주소: gwanak-biz.kr",
        "이메일 주소: gwanak@bmcreative.co.kr",
        "※ <필수> 서류를 모두 제출하셔야 접수가 완료됩니다.",
      ],
    },
  },
  {
    label: "선발 방법",
    content: {
      title: "서류 심사",
      details: [
        "사이트 주소: gwanak-biz.kr",
        "이메일 주소: gwanak@bmcreative.co.kr",
        "※ <필수> 서류를 모두 제출하셔야 접수가 완료됩니다.",
      ],
    },
  },
];

const supportServices = [
  {
    title: "가게별 스마트플레이스 등 최적화",
    bgColor: "bg-[#27c840]",
    cardBg: "bg-[#f7f6f6]",
    content: [
      "➊ 온라인 홍보의 이점 및 효과 분석을 통한 홍보 의지 제고",
      "➋ 가게 특성에 맞는 플랫폼 매칭 및 플랫폼별 운영 방법 A to Z 지원",
      "➌ 일정기간동안 소상공인이 직접 운영 후 문제점 및 보완사항 사후관리",
    ],
    hasImage: true,
    imageSrc: "/images/image01.png",
    imageAlt: "스마트플레이스",
  },
  {
    title: "가게별 맞춤형 홍보 콘텐츠 제작 지원",
    bgColor: "bg-[#ff5f57]",
    cardBg: "bg-[#f8f6f6]",
    content: [
      "➊ 전문 스튜디오 대여 및 사진작가 매칭을 통한 제품 및 서비스 촬영",
      "➋ Youtube 등 영상 플랫폼 홍보용 영상 제작 지원",
      "➌ 캐치프레이즈 등 온라인 마케팅을 위한 선전 문구 창작 지원",
    ],
    hasImage: true,
    imageSrc: "/images/image02.png",
    imageAlt: "콘텐츠 제작",
  },
  {
    title: "모객 활성화를 위한 온라인 키워드 홍보지원",
    bgColor: "bg-[#febc2f]",
    cardBg: "bg-[#f8f6f6]",
    content: [
      "➊ 가게 배너 등 검색 엔진 노출을 통한 키워드 홍보 지원",
      "➋ 당근마켓, 네이버카페 등 생활정보 플랫폼 체험단 리뷰 마케팅 지원",
      "➌ 가게별 온라인 모객 행사 콘텐츠 구상 및 기획(시행 미지원)",
    ],
    hasImage: true,
    imageSrc: "/images/image03.png",
    imageAlt: "키워드 홍보",
  },
];

export const SupportSectionOriginal = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Hero Section - 맨 위 */}
      <div className="w-full min-h-[250px] sm:min-h-[320px] lg:h-96 bg-sky-100 relative flex items-center justify-center">
        <Image 
          className="absolute inset-0 w-full h-full object-cover opacity-50 lg:opacity-100" 
          src="/images/CK_ti069a38701.jpg"
          alt="관악구 배경"
          width={667}
          height={444}
          priority
        />
        <div className="relative z-10 px-4 sm:px-6 lg:px-0 text-center lg:text-left">
          <div className="mb-4 lg:mb-6">
            <h1 className="text-xl sm:text-2xl lg:text-3xl font-medium font-['Pretendard'] text-black mb-4">
              2025년 관악구 소상공인<br/>
              온라인 마케팅 홍보지원 사업 안내
            </h1>
            <div className="w-full lg:w-96 h-0 mx-auto lg:mx-0 border-t border-black mb-4"></div>
            <div>
              <span className="text-sm sm:text-base lg:text-xl font-light font-['Pretendard'] text-black">
                스마트플레이스 등 최적화, 맞춤형 홍보 콘텐츠 제작,<br className="hidden sm:block"/>
                <span className="sm:hidden"> </span>온라인 키워드 홍보 지원 등
              </span>
              <span className="text-sm sm:text-base lg:text-xl font-medium font-['Pretendard'] text-black">
                {" "}(점포당 최대 150만원)
              </span>
            </div>
          </div>
        </div>
      </div>

      <main className="w-full bg-white">
        <div className="flex flex-col items-center justify-center gap-2 sm:gap-[5px] px-4 sm:px-8 lg:px-[175px] py-6 sm:py-4 lg:py-2.5">
          {programDetails.map((detail, index) => (
            <div
              key={index}
              className={`w-full max-w-[790px] ${index === 0 ? "min-h-[80px] lg:h-10" : index === 1 ? "min-h-[200px] lg:h-[154px]" : "min-h-[140px] lg:h-[104px]"} flex flex-col lg:flex-row lg:relative`}
            >
              <div className="flex w-full lg:w-40 h-[40px] lg:h-[30px] items-center justify-center px-5 py-2.5 lg:absolute lg:top-[5px] lg:left-0 bg-[#0088ff] mb-2 lg:mb-0">
                <div className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-base lg:text-lg text-center whitespace-nowrap tracking-[0] leading-[normal]">
                  {detail.label}
                </div>
              </div>

              <div
                className={`flex ${index === 1 ? "flex-col" : ""} w-full lg:w-[630px] ${index === 0 ? "min-h-[40px] lg:h-10 items-center" : index === 1 ? "min-h-[150px] lg:h-[154px] items-start" : "min-h-[100px] lg:h-[104px] items-start"} px-5 py-2.5 lg:absolute lg:top-0 lg:left-40 bg-white ${index > 1 ? "lg:overflow-hidden" : ""}`}
              >
                {typeof detail.content === "string" ? (
                  <div className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-sm sm:text-base lg:text-lg tracking-[0] leading-[normal]">
                    {detail.content}
                  </div>
                ) : (
                  <div
                    className={`flex flex-col ${index === 1 ? "min-h-[135px] lg:h-[135px]" : "min-h-[105px] lg:h-[105px]"} items-start gap-[5px] w-full ${index > 1 ? "lg:mb-[-10.00px]" : index === 1 ? "lg:mb-[-1.00px]" : ""}`}
                  >
                    <div className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-sm sm:text-base lg:text-lg tracking-[0] leading-[normal]">
                      {detail.content.title}
                    </div>
                    <div className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-black text-xs sm:text-sm lg:text-lg tracking-[0] leading-relaxed lg:leading-[normal] w-full">
                      {detail.content.details.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={
                            itemIndex === 0
                              ? "[font-family:'Pretendard-SemiBold',Helvetica] font-semibold"
                              : itemIndex === (detail.content as any).details.length - 1
                                ? "[font-family:'Pretendard-SemiBold',Helvetica] font-semibold"
                                : ""
                          }
                        >
                          {item}
                          {itemIndex < (detail.content as any).details.length - 1 && (
                            <br />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center px-4 sm:px-8 lg:px-[175px] py-8 lg:py-5">
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-5 w-full max-w-[1090px]">
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className={`w-full sm:max-w-[450px] lg:w-[350px] min-h-[320px] lg:h-[382px] ${service.cardBg} border-0 rounded-none`}
              >
                <div
                  className={`flex w-full h-12 items-center justify-center gap-2.5 p-2.5 ${service.bgColor}`}
                >
                  <h3 className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-sm sm:text-base lg:text-lg text-center tracking-[0] leading-[normal]">
                    {service.title}
                  </h3>
                </div>

                <CardContent className="p-4 lg:p-5">
                  {service.hasImage && (
                    <div className="flex flex-col w-full h-[140px] sm:h-[160px] lg:h-[179px] items-center justify-center gap-2.5 mb-4">
                      <Image
                        className={`object-contain ${index === 1 ? "max-w-[180px] sm:max-w-[200px] lg:w-[220px] h-auto max-h-[100px] sm:max-h-[120px] lg:h-[135px]" : "max-w-[180px] sm:max-w-[200px] lg:w-[218px] h-auto max-h-[100px] sm:max-h-[120px] lg:h-[129px]"}`}
                        alt={service.imageAlt}
                        src={service.imageSrc}
                        width={220}
                        height={135}
                        loading="lazy"
                      />
                    </div>
                  )}

                  <div className="w-full">
                    <div className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-black text-xs sm:text-sm tracking-[0] leading-relaxed lg:leading-5">
                      {service.content.map((item, itemIndex) => (
                        <span key={itemIndex}>
                          {item}
                          {itemIndex < service.content.length - 1 && <br />}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        {/* 공백 섹션 */}
        <div className="h-[200px] sm:h-[300px] lg:h-[402px] w-full bg-white"></div>
        
        {/* 푸터 섹션 */}
        <div className="flex w-full min-h-[150px] lg:h-[192px] px-4 sm:px-8 lg:px-[200px] py-8 lg:py-10 items-start justify-start gap-2.5 bg-white">
          <div className="flex flex-col gap-3 lg:gap-4">
            <Image 
              className="h-[35px] sm:h-[40px] lg:h-[50px] w-auto object-contain" 
              alt="관악구 CI 가로형" 
              src="/images/관악구CI(가로형).jpg"
              width={120}
              height={50}
              loading="lazy"
            />
            <Image 
              className="h-[35px] sm:h-[40px] lg:h-[50px] w-auto object-contain" 
              alt="추가 이미지" 
              src="/images/image.png"
              width={120}
              height={50}
              loading="lazy"
            />
          </div>
        </div>
      </main>
    </section>
  );
};