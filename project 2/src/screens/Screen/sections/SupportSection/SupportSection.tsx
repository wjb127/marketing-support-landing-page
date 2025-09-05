import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

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
    hasImage: false,
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
    imageSrc: "/image02.png",
    imageAlt: "Image",
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
    imageSrc: "/image03.png",
    imageAlt: "Image",
  },
];

export const SupportSection = (): JSX.Element => {
  return (
    <section className="w-full overflow-hidden">
      <header className="w-full h-[450px] bg-[#ddf0ff] relative">
        <div className="relative w-[667px] h-[444px] top-1.5 left-1/2 transform -translate-x-1/2 bg-[url(/ck-ti069a38701-1.png)] bg-cover bg-center">
          <div className="absolute top-7 left-[91px] w-[439px] h-24">
            <div className="inline-flex items-center justify-center gap-2.5 p-2.5">
              <h1 className="[font-family:'Pretendard-Medium',Helvetica] font-medium text-black text-[32px] text-center tracking-[0] leading-[normal]">
                2025년 관악구 소상공인 <br />
                온라인 마케팅 홍보지원 사업 안내
              </h1>
            </div>
            <img
              className="absolute w-[420px] h-px top-[95px] left-2.5 object-cover"
              alt="Line"
              src="/line-1.svg"
            />
          </div>

          <div className="absolute top-[124px] left-[101px] inline-flex items-center justify-center gap-2.5 p-2.5">
            <p className="[font-family:'Pretendard-Light',Helvetica] font-normal text-black text-xl text-center tracking-[0] leading-[normal]">
              <span className="font-light">
                스마트플레이스 등 최적화, 맞춤형 홍보 콘텐츠 제작,
                <br />
                온라인 키워드 홍보 지원 등
              </span>
              <span className="[font-family:'Pretendard-Medium',Helvetica] font-medium">
                (점포당 최대 150만원)
              </span>
            </p>
          </div>
        </div>
      </header>

      <main className="w-full bg-white">
        <div className="flex flex-col items-center justify-center gap-[5px] px-[175px] py-2.5">
          {programDetails.map((detail, index) => (
            <div
              key={index}
              className={`w-[790px] ${index === 0 ? "h-10" : index === 1 ? "h-[154px]" : "h-[104px]"} relative`}
            >
              <div className="flex w-40 h-[30px] items-center justify-center px-5 py-2.5 absolute top-[5px] left-0 bg-[#0088ff]">
                <div className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-lg text-center whitespace-nowrap tracking-[0] leading-[normal]">
                  {detail.label}
                </div>
              </div>

              <div
                className={`flex ${index === 1 ? "flex-col" : ""} w-[630px] ${index === 0 ? "h-10 items-center" : index === 1 ? "h-[154px] items-start" : "h-[104px] items-start"} px-5 py-2.5 absolute top-0 left-40 bg-white ${index > 1 ? "overflow-hidden" : ""}`}
              >
                {typeof detail.content === "string" ? (
                  <div className="[font-family:'Pretendard-SemiBold',Helvetica] font-semibold text-black text-lg whitespace-nowrap tracking-[0] leading-[normal]">
                    {detail.content}
                  </div>
                ) : (
                  <div
                    className={`flex flex-col ${index === 1 ? "h-[135px]" : "h-[105px]"} items-start gap-[5px] w-full ${index > 1 ? "mb-[-10.00px]" : index === 1 ? "mb-[-1.00px]" : ""}`}
                  >
                    <div className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-black text-lg tracking-[0] leading-[normal] whitespace-nowrap">
                      {detail.content.title}
                    </div>
                    <div className="[font-family:'Pretendard-Regular',Helvetica] font-normal text-black text-lg tracking-[0] leading-[normal] w-full">
                      {detail.content.details.map((item, itemIndex) => (
                        <span
                          key={itemIndex}
                          className={
                            itemIndex === 0
                              ? "[font-family:'Pretendard-SemiBold',Helvetica] font-semibold"
                              : itemIndex === detail.content.details.length - 1
                                ? "[font-family:'Pretendard-SemiBold',Helvetica] font-semibold"
                                : ""
                          }
                        >
                          {item}
                          {itemIndex < detail.content.details.length - 1 && (
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

        <div className="flex items-center justify-center gap-5 px-[175px] py-5">
          <div className="flex items-center gap-5 w-full max-w-[1090px]">
            {supportServices.map((service, index) => (
              <Card
                key={index}
                className={`w-[350px] h-[382px] ${service.cardBg} border-0 rounded-none`}
              >
                <div
                  className={`flex w-full h-12 items-center justify-center gap-2.5 p-2.5 ${service.bgColor}`}
                >
                  <h3 className="[font-family:'Pretendard-Bold',Helvetica] font-bold text-white text-lg text-center whitespace-nowrap tracking-[0] leading-[normal]">
                    {service.title}
                  </h3>
                </div>

                <CardContent className="p-0">
                  {service.hasImage && (
                    <div className="flex flex-col w-[274px] h-[179px] items-center justify-center gap-2.5 p-5 mx-auto mt-12">
                      <img
                        className={`object-cover ${index === 1 ? "w-[220px] h-[135px]" : "w-[218px] h-[129px]"}`}
                        alt={service.imageAlt}
                        src={service.imageSrc}
                      />
                    </div>
                  )}

                  <div className="inline-flex items-center justify-center gap-2.5 px-5 py-2.5 absolute top-[227px] left-[17px]">
                    <div className="w-[276px] [font-family:'Pretendard-Regular',Helvetica] font-normal text-black text-sm tracking-[0] leading-5">
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
      </main>
    </section>
  );
};
