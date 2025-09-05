"use client";

import { InformationSection } from "@/components/sections/InformationSection";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ApplyPage() {
  const router = useRouter();
  const [answers, setAnswers] = useState({
    q1: null as boolean | null,
    q2: null as boolean | null,
    q3: null as boolean | null,
    q4: null as boolean | null,
    q5: null as boolean | null,
  });

  const handleAnswer = (question: keyof typeof answers, value: boolean) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const handleApply = () => {
    const allAnswered = Object.values(answers).every(answer => answer !== null);
    const allYes = Object.values(answers).every(answer => answer === true);
    
    if (allAnswered && allYes) {
      // 모두 동의한 경우 지원서 작성 페이지로 이동
      router.push("/application-form");
    } else if (!allAnswered) {
      alert("모든 항목에 응답해주세요.");
    } else {
      alert("모든 항목에 동의하셔야 지원이 가능합니다.");
    }
  };

  return (
    <main className="bg-white w-full">
      <div className="bg-white w-full max-w-[1440px] mx-auto">
        <InformationSection />
        
        <div style={{width: "1440px", minHeight: "1719px", position: "relative", background: "white", overflow: "hidden"}}>
          <div style={{width: "1105px", height: "160px", paddingLeft: "35px", paddingRight: "35px", paddingTop: "50px", paddingBottom: "50px", left: "162px", top: "206px", position: "absolute", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "32px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>
              소상공인 온라인 마케팅 홍보지원 사업 신청 자격 확인(사업 동의 내용서)
            </div>
          </div>

          <div style={{left: "515px", top: "108px", position: "absolute", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "24px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>
            신청 절차 사각으로 하기
          </div>

          {/* Question 1 */}
          <div style={{width: "1105px", height: "0px", left: "162px", top: "366px", position: "absolute", outline: "1px black solid", outlineOffset: "-0.50px"}}></div>
          <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", left: "162px", top: "366px", position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "flex"}}>
              <div style={{width: "762px"}}>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>관악구 소재 </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", textDecoration: "underline", lineHeight: "25px", wordWrap: "break-word"}}>소상공인(상시근로자수 &apos;5인 미만&apos;) 가게</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>로서, 온라인 홍보방법이 매장환경이 매출에 큰 영향을 미치는 가게 입니까?       </span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>※ 매장형이 아닌 업체(예 - 사무실, 병원 등) 지원 불가       ※ 광업•제조업•건설 및   운수업: 상시근로자 10명 미만</span>
              </div>
            </div>
            <div 
              style={{width: "101px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q1', true)}
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1" width="18" height="18" rx="2" fill={answers.q1 === true ? "#0088FF" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q1 === true && (
                  <path d="M6.5 10L9.5 13L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>예</div>
            </div>
            <div 
              style={{width: "142px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q1', false)}
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1" width="18" height="18" rx="2" fill={answers.q1 === false ? "#FF0000" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q1 === false && (
                  <path d="M7.5 7L13.5 13M13.5 7L7.5 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>아니요</div>
            </div>
          </div>

          {/* Question 2 */}
          <div style={{width: "1105px", height: "0px", left: "162px", top: "497px", position: "absolute", outline: "1px black solid", outlineOffset: "-0.50px"}}></div>
          <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", left: "162px", top: "497px", position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "flex"}}>
              <div style={{width: "762px"}}>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>사업성과 분석 및 향후 구정에 참고하기 위해 </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", textDecoration: "underline", lineHeight: "25px", wordWrap: "break-word"}}>사업 참여 3개월 전후 매출</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>을 구청에 제출할 수 있습니까?       (미포함시 신청 불가)       </span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>※ 제출서류: 부가가치세과세표준증명원, 부가가치세면세사업자수입금액증명원 등)</span>
              </div>
            </div>
            <div 
              style={{width: "101px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q2', true)}
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="18" height="18" rx="2" fill={answers.q2 === true ? "#0088FF" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q2 === true && (
                  <path d="M6.5 10.5L9.5 13.5L14.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>예</div>
            </div>
            <div 
              style={{width: "142px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q2', false)}
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="18" height="18" rx="2" fill={answers.q2 === false ? "#FF0000" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q2 === false && (
                  <path d="M7.5 7.5L13.5 13.5M13.5 7.5L7.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>아니요</div>
            </div>
          </div>

          {/* Question 3 */}
          <div style={{width: "1105px", height: "0px", left: "162px", top: "603px", position: "absolute", outline: "1px black solid", outlineOffset: "-0.50px"}}></div>
          <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", left: "162px", top: "603px", position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "flex"}}>
              <div style={{width: "762px"}}>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>관악구에서 지정한 온라인 마케팅 홍보지원 사업 수행업체와 홍보 방향 협의 및 촬영을 위하여 </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", textDecoration: "underline", lineHeight: "25px", wordWrap: "break-word"}}>정기적인 미팅(컨설팅)에 적극 협조</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>하며, 일방적인 약속 미이행 및 사전에 협의되지 않은 아이템 교체 등 무리한 요구를 할 경우 중도 탈락될 수 있습니다.       프로젝트 이행에 협력하여 최선을 다하겠습니까? </span>
              </div>
            </div>
            <div 
              style={{width: "101px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q3', true)}
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1" width="18" height="18" rx="2" fill={answers.q3 === true ? "#0088FF" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q3 === true && (
                  <path d="M6.5 10L9.5 13L14.5 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>예</div>
            </div>
            <div 
              style={{width: "142px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q3', false)}
            >
              <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1" width="18" height="18" rx="2" fill={answers.q3 === false ? "#FF0000" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q3 === false && (
                  <path d="M7.5 7L13.5 13M13.5 7L7.5 13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>아니요</div>
            </div>
          </div>

          {/* Question 4 */}
          <div style={{width: "1105px", height: "0px", left: "162px", top: "734px", position: "absolute", outline: "1px black solid", outlineOffset: "-0.50px"}}></div>
          <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", left: "162px", top: "734px", position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "flex"}}>
              <div style={{width: "762px"}}>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>이번 사업의 지원비는 점포 1개소당 </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", textDecoration: "underline", lineHeight: "25px", wordWrap: "break-word"}}>최대 150만 원 한도로 지원됨</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>을 정확히 인지하고 있습니까?</span>
              </div>
            </div>
            <div 
              style={{width: "101px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q4', true)}
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="18" height="18" rx="2" fill={answers.q4 === true ? "#0088FF" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q4 === true && (
                  <path d="M6.5 10.5L9.5 13.5L14.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>예</div>
            </div>
            <div 
              style={{width: "142px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q4', false)}
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="18" height="18" rx="2" fill={answers.q4 === false ? "#FF0000" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q4 === false && (
                  <path d="M7.5 7.5L13.5 13.5M13.5 7.5L7.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>아니요</div>
            </div>
          </div>

          {/* Question 5 */}
          <div style={{width: "1105px", height: "0px", left: "162px", top: "790px", position: "absolute", outline: "1px black solid", outlineOffset: "-0.50px"}}></div>
          <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", left: "162px", top: "790px", position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{paddingLeft: "20px", paddingRight: "20px", paddingTop: "10px", paddingBottom: "10px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "flex"}}>
              <div style={{width: "762px"}}>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>작업한 원작의 </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", textDecoration: "underline", lineHeight: "25px", wordWrap: "break-word"}}>저작권은 사업수행업체에 있으며,</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}> 작업물을 타인에게 양도 및 배포하는 행위 등 저작권 보호에 위배되는 행위는 금합니다. </span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>(다만, 해당 점포를 위해 작업하여 상용화된 작업물에 대한 독점적, 지속적 사용권은 사업기간 이후에도 점포에게 허용됩니다.)</span>
              </div>
            </div>
            <div 
              style={{width: "101px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q5', true)}
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="18" height="18" rx="2" fill={answers.q5 === true ? "#0088FF" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q5 === true && (
                  <path d="M6.5 10.5L9.5 13.5L14.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>예</div>
            </div>
            <div 
              style={{width: "142px", paddingLeft: "24px", paddingRight: "24px", paddingTop: "12px", paddingBottom: "12px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "20px", display: "flex", cursor: "pointer"}}
              onClick={() => handleAnswer('q5', false)}
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="1.5" width="18" height="18" rx="2" fill={answers.q5 === false ? "#FF0000" : "white"} stroke="black" strokeWidth="2"/>
                {answers.q5 === false && (
                  <path d="M7.5 7.5L13.5 13.5M13.5 7.5L7.5 13.5" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                )}
              </svg>
              <div style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", wordWrap: "break-word"}}>아니요</div>
            </div>
          </div>

          {/* Bottom Note */}
          <div style={{width: "1105px", height: "0px", left: "162px", top: "896px", position: "absolute", outline: "1px black solid", outlineOffset: "-0.50px"}}></div>
          <div style={{width: "1105px", paddingLeft: "20px", paddingRight: "20px", paddingTop: "5px", paddingBottom: "5px", left: "162px", top: "896px", position: "absolute", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{width: "1085px", paddingLeft: "30px", paddingRight: "30px", paddingTop: "10px", paddingBottom: "10px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "flex"}}>
              <div style={{width: "1025px"}}>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "400", lineHeight: "25px", wordWrap: "break-word"}}>※ </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>선택사항에 &apos;아니요&apos;가 있을 경우, 사업에 선정되지 않을 수 있습니다.<br/></span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "400", lineHeight: "25px", wordWrap: "break-word"}}>※ </span>
                <span style={{color: "#0088FF", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "700", lineHeight: "25px", wordWrap: "break-word"}}>신청 시, 사업자등록증을 필수 제출하여야 하며, 대표자가 관악구 거주자일 경우 주민등록초본(*현재 주소지만 포함, 주민등록번호 미포함)을 제출해야 합니다.<br/></span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "600", lineHeight: "25px", wordWrap: "break-word"}}>    상기 신청자는 &lt;관악구 소상공인 온라인 마케팅 홍보지원 사업&gt;</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>에 참여하고자</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "600", lineHeight: "25px", wordWrap: "break-word"}}> 확인서를 제출하며, 기재 내용</span>
                <span style={{color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: "500", lineHeight: "25px", wordWrap: "break-word"}}>이 사실과 다름없음을 확인합니다. </span>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div style={{width: "269px", left: "580px", top: "1075px", position: "absolute", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div 
              onClick={handleApply}
              style={{
                width: "269px", 
                height: "63px", 
                background: "#0088FF", 
                borderRadius: "5px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <div style={{textAlign: "center", color: "white", fontSize: "24px", fontFamily: "Pretendard", fontWeight: "700"}}>
                지원하러 가기
              </div>
            </div>
          </div>
        </div>

        {/* Footer Section */}
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
      </div>
    </main>
  );
}