"use client";

import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

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

export const SupportSection = () => {
  return (
    <section className="w-full overflow-hidden">
      {/* Hero Section - 맨 위 */}
      <div className="w-full h-64 sm:h-80 md:h-96 bg-sky-100 overflow-hidden relative">
        <Image 
          className="w-full h-full object-cover md:w-[667px] md:h-96 md:left-[409px] md:top-[6px] md:absolute" 
          src="/images/CK_ti069a38701.jpg"
          alt="관악구 배경"
          width={667}
          height={444}
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center md:inset-auto md:p-2.5 md:left-[510px] md:top-[130px]">
          <div className="text-center px-4">
            <span className="text-black text-sm sm:text-base md:text-xl font-light font-['Pretendard']">
              스마트플레이스 등 최적화, 맞춤형 홍보 콘텐츠 제작,<br/>
              온라인 키워드 홍보 지원 등
            </span>
            <span className="text-black text-sm sm:text-base md:text-xl font-medium font-['Pretendard']">
              (점포당 최대 150만원)
            </span>
          </div>
        </div>
        <div className="absolute top-4 left-0 right-0 md:left-[500px] md:right-auto md:top-[34px] p-2.5">
          <div className="text-center text-black text-lg sm:text-2xl md:text-3xl font-medium font-['Pretendard']">
            2025년 관악구 소상공인<br/>
            온라인 마케팅 홍보지원 사업 안내
          </div>
        </div>
        <div className="hidden md:block w-96 h-0 left-[510px] top-[130px] absolute outline outline-1 outline-offset-[-0.50px] outline-black"></div>
      </div>

      <main className="w-full bg-white">
        <div className="w-full max-w-[1439px] mx-auto px-4 sm:px-8 md:px-[175px] py-8 md:py-10 flex flex-col items-center gap-6 md:gap-10">
          <div className="w-full max-w-[800px] flex flex-col gap-2 p-2">
            <div className="bg-[#0088FF] px-4 py-2 inline-block self-start">
              <div className="text-white text-base md:text-lg font-bold font-['Pretendard']">지원 기간</div>
            </div>
            <div className="px-4 py-2">
              <div className="flex flex-col">
                <span className="text-black text-sm md:text-lg font-semibold font-['Pretendard']">2025. 9. 12.(금) ~ 9. 26.(금) 18:00까지</span>
                <span className="text-black text-xs md:text-base font-normal font-['Pretendard'] mt-1">※ 지원 대상자가 미달될 경우 접수 기간이 연장될 수 있습니다.</span>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] flex flex-col gap-2 p-2">
            <div className="bg-[#0088FF] px-4 py-2 inline-block self-start">
              <div className="text-white text-base md:text-lg font-bold font-['Pretendard']">모집 대상</div>
            </div>
            <div className="px-4 py-2">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-black text-sm md:text-lg font-semibold font-['Pretendard']">관악구 소재 상시근로자 5인 미만의 소상공인 점포</span>
                  <span className="text-black text-sm md:text-lg font-normal font-['Pretendard'] mt-1">최소 월 2~3회 이상 정기적으로 홍보지원 업체와의 미팅이 가능하고 협업 및 참여 의지가 높은 점포(점포 내 의사결정권자가 참여해야함)</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-black text-sm md:text-lg font-semibold font-['Pretendard']">※ 제외대상</span>
                  <span className="text-black text-sm md:text-lg font-semibold font-['Pretendard'] mt-1">
                    2022~2024년 동일 사업에 참여한 이력이 있는 점포<br/>
                    유흥, 사행성, 도박 등 중소거입 육성기금 융자지원 제한 업종<br/>
                    매장형 가게 아닌 점포(사무실, 병원, 숙박시설, 고시원 등)<br/>
                    프랜차이즈 본점  또는 가맹점, 체인점
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] flex flex-col gap-2 p-2 mt-4">
            <div className="bg-[#0088FF] px-4 py-2 inline-block self-start">
              <div className="text-white text-base md:text-lg font-bold font-['Pretendard']">지원 방법</div>
            </div>
            <div className="px-4 py-2">
              <div className="flex flex-col gap-2">
                <div className="text-black text-sm md:text-lg font-bold font-['Pretendard']">사이트 접수, 이메일 접수</div>
                <div className="text-black text-sm md:text-lg font-semibold font-['Pretendard']">※ &lt;필수&gt; 서류를 모두 제출하셔야 접수가 완료됩니다.</div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[800px] flex flex-col gap-2 p-2">
            <div className="bg-[#0088FF] px-4 py-2 inline-block self-start">
              <div className="text-white text-base md:text-lg font-bold font-['Pretendard']">선발 방법</div>
            </div>
            <div className="px-4 py-2">
              <div className="flex flex-col gap-2">
                <div className="text-black text-sm md:text-lg font-bold font-['Pretendard']">서류 심사</div>
                <div className="flex flex-col">
                  <span className="text-black text-sm md:text-lg font-bold font-['Pretendard'] leading-relaxed">우대(가점) 기준</span>
                  <span className="text-black text-xs md:text-lg font-normal font-['Pretendard'] leading-relaxed mt-1">
                    (사업자등록증 상) 대표자가 상인대학 교육과정 이수한 경우<br/>
                    가게 SNS 채널을 운영 중인 경우 (접수 시작일로부터 1개월 전 기간 내에 가게에서 작성한 게시글이 5개 이상일 경우 인정)<br/>
                    관악구 아트테리어 사업을 통한 가게 브랜딩 경험이 있는 경우<br/>
                    신림역 인근 상권(신림동, 서원동, 신원동)에 있는 점포<br/>
                    (사업자등록증 상) 대표자의 주민등록이 관악구에 등록된 경우<br/>
                    기타 골목상권 활성화 기여도 등(골목상권 상인회 참여 의지가 강한 점포)<br/>
                    해당 사업의 지원을 받지 않은 점포
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center px-4 sm:px-8 md:px-[175px] py-5">
          <div className="flex flex-col md:flex-row items-center gap-5 w-full max-w-[1090px]">
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className={`w-full sm:w-[350px] h-auto md:h-[382px] ${service.cardBg} border-0 rounded-none`}
              >
                <div
                  className={`flex w-full h-12 items-center justify-center gap-2.5 p-2.5 ${service.bgColor}`}
                >
                  <h3 className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-lg text-center whitespace-nowrap tracking-[0] leading-[normal]">
                    {service.title}
                  </h3>
                </div>

                <CardContent className="p-5">
                  {service.hasImage && (
                    <div className="flex flex-col w-full h-[179px] items-center justify-center gap-2.5 mb-4">
                      <img
                        className={`object-cover ${index === 1 ? "w-[220px] h-[135px]" : "w-[218px] h-[129px]"}`}
                        alt={service.imageAlt}
                        src={service.imageSrc}
                      />
                    </div>
                  )}

                  <div className="w-full">
                    <div className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
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
        <div className="h-[200px] md:h-[402px] w-full bg-white"></div>
        
        {/* 추가 섹션 */}
        <div className="flex w-full max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[200px] py-10 items-start justify-start gap-2.5 bg-white">
          <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start">
            <img 
              className="h-[40px] sm:h-[50px] object-contain" 
              alt="관악구 CI 가로형" 
              src="/images/관악구CI(가로형).jpg" 
            />
            <img 
              className="h-[40px] sm:h-[50px] object-contain" 
              alt="추가 이미지" 
              src="/images/image.png" 
            />
          </div>
        </div>
      </main>
    </section>
  );
};