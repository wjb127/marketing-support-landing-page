"use client";

import React, { useState, useEffect } from "react";
import { InformationSection } from "@/components/sections/InformationSection";
import { useRouter } from "next/navigation";

export default function ApplicationForm() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  const [formData, setFormData] = useState({
    // 개인정보 동의
    personalInfoAgree: null as boolean | null,
    marketingAgree: null as boolean | null,
    resultUseAgree: null as boolean | null,
    allAgree: null as boolean | null,
    
    // 신청자 정보
    name: "",
    birthDate: "",
    phone: "",
    gwanakResident: null as boolean | null,
    merchantAssociation: null as string | null,
    
    // 신청 내용
    storeName: "",
    businessNumber: "",
    address: "",
    detailAddress: "",
    email: "",
    ageGroup: [] as string[],
    instagram: "",
    facebook: "",
    blog: "",
    youtube: "",
    other: "",
    motivation: "",
    storeIntro: "",
    videoIdea: "",
    
    // 파일
    businessLicense: null as File | null,
    residentCert: null as File | null,
  });

  const handleSubmit = () => {
    // 필수 필드 검증 (이메일과 SNS 제외)
    const requiredFields = {
      // 개인정보 동의
      personalInfoAgree: "개인정보 수집 및 이용",
      marketingAgree: "구정정보 수시제공",
      resultUseAgree: "사업 결과물의 활용",
      allAgree: "개인정보 수집•이용•제공",
      
      // 신청자 정보
      name: "대표자명",
      birthDate: "생년월일",
      phone: "휴대폰번호",
      gwanakResident: "관악구 거주 여부",
      merchantAssociation: "골목상권 상인회 가입여부",
      
      // 신청 내용
      storeName: "가게명",
      businessNumber: "사업자등록번호",
      address: "사업장 주소",
      detailAddress: "상세주소",
      ageGroup: "주 고객층 연령대",
      motivation: "지원 동기",
      storeIntro: "가게 및 판매 물품 소개",
      videoIdea: "홍보 영상 제작 아이디어",
      businessLicense: "사업자등록증"
    };
    
    const missingFields: string[] = [];
    
    // 동의 항목 체크
    if (formData.personalInfoAgree !== true) missingFields.push(requiredFields.personalInfoAgree);
    if (formData.marketingAgree !== true) missingFields.push(requiredFields.marketingAgree);
    if (formData.resultUseAgree !== true) missingFields.push(requiredFields.resultUseAgree);
    if (formData.allAgree !== true) missingFields.push(requiredFields.allAgree);
    
    // 텍스트 필드 체크
    if (!formData.name) missingFields.push(requiredFields.name);
    if (!formData.birthDate) missingFields.push(requiredFields.birthDate);
    if (!formData.phone) missingFields.push(requiredFields.phone);
    if (formData.gwanakResident === null) missingFields.push(requiredFields.gwanakResident);
    if (!formData.merchantAssociation) missingFields.push(requiredFields.merchantAssociation);
    if (!formData.storeName) missingFields.push(requiredFields.storeName);
    if (!formData.businessNumber) missingFields.push(requiredFields.businessNumber);
    if (!formData.address) missingFields.push(requiredFields.address);
    if (!formData.detailAddress) missingFields.push(requiredFields.detailAddress);
    if (formData.ageGroup.length === 0) missingFields.push(requiredFields.ageGroup);
    if (!formData.motivation) missingFields.push(requiredFields.motivation);
    if (!formData.storeIntro) missingFields.push(requiredFields.storeIntro);
    if (!formData.videoIdea) missingFields.push(requiredFields.videoIdea);
    if (!formData.businessLicense) missingFields.push(requiredFields.businessLicense);
    
    if (missingFields.length > 0) {
      alert(`다음 필수 항목을 입력해주세요:\n\n${missingFields.join('\n')}`);
      return;
    }
    
    // 모든 필수 항목이 입력된 경우
    alert("신청이 완료되었습니다.");
    console.log("Form submitted:", formData);
  };

  return (
    <main className="bg-white w-full">
      <div className="bg-white w-full max-w-[1440px] mx-auto">
        <InformationSection />
        
        {/* Mobile Version - Only render after mount to avoid hydration mismatch */}
        {mounted && isMobile ? (
          <div className="w-full px-4 py-5">
            <div className="w-full py-5">
              <div className="text-center">
                <span className="text-[#0088FF] text-lg font-medium leading-7">2025년 소상공인 온라인 마케팅 홍보 지원사업<br/></span>
                <span className="text-black text-xl font-bold leading-8">지원서 작성</span>
              </div>
            </div>
            
            <div className="w-full bg-[#F8F6F6] p-4 mb-5">
              <div className="text-left text-black text-base font-bold mb-3">개인정보 수집•이용•제공에 관한 동의서</div>
              <div className="text-sm text-black mb-4">관악구 소상공인 온라인 마케팅 홍보지원 사업 관련하여 개인정보를 수집•이용 및 제 3자 제공이 필요하여 개인정보보호법에 따라 신청인의 개인정보 동의를 구합니다.</div>
              
              <div className="bg-white p-3 mb-3">
                <div className="text-sm font-semibold mb-2">□ 개인정보 수집•이용에 따른 동의</div>
                <div className="text-xs space-y-2">
                  <div>
                    <div className="font-semibold">개인정보의 수집•이용•제공 목적</div>
                    <div className="pl-4">
                      ① 사업 참여가게 선정심사에 필요한 자격, 참여배제 사유 조회<br/>
                      ② 사업 홍보 및 사업종료 후 매출변화 등 사업효과 조사
                    </div>
                  </div>
                  <div>
                    <div className="font-semibold">수집항목</div>
                    <div className="pl-4">
                      ① 인적사항 : 성명, 생년월일, 전화번호(자택, 휴대폰), 성별<br/>
                      ② 선정심사 : 가게명, 사업자등록번호, 설립일자, 연매출액, 주소, 연락처
                    </div>
                  </div>
                  <div>
                    <span className="font-semibold">보유 및 이용 기간:</span> 사업 종료일로부터 5년
                  </div>
                  <div>
                    <span className="font-semibold">동의 거부권 및 거부에 따른 불이익:</span> 귀하는 개인정보를 수집•이용에 대한 동의를 거부할 수 있습니다. 다만 동의가 없을 경우 신청자격을 확인할 수 없어 사업에 참여할 수 없습니다.
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 text-sm font-semibold mb-3">
                <span>개인정보 수집 및 이용에 대하여 제공을</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, personalInfoAgree: true})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.personalInfoAgree === true ? "#0088FF" : "white"}}
                    />
                    <span>동의합니다</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, personalInfoAgree: false})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.personalInfoAgree === false ? "#FF5F57" : "white"}}
                    />
                    <span>동의하지 않습니다</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 mb-3">
                <div className="text-xs mb-2">□ 코로나19 종합정보, 공공일자리, 복지•건강•문화 등 각종 구정정보 수시제공 동의</div>
                <div className="text-xs space-y-1">
                  <div><span className="font-semibold">개인정보의 수집•이용•제공 목적:</span> 다양한 구정 정보 제공을 위한 문자, 알림톡 등 발송</div>
                  <div className="pl-4">※ 개인정보 수집•이용에 대한 동의를 거부할 수 있으며, 수집된 정보는 위 목적 이외의 용도로는 이용되지 않습니다.</div>
                  <div><span className="font-semibold">수집항목:</span> 휴대전화번호 (보유기간 5년)</div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 text-sm font-semibold mb-3">
                <span>개인정보 수집 및 이용에 대하여 제공을</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, marketingAgree: true})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.marketingAgree === true ? "#0088FF" : "white"}}
                    />
                    <span>동의합니다</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, marketingAgree: false})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.marketingAgree === false ? "#FF5F57" : "white"}}
                    />
                    <span>동의하지 않습니다</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-3 mb-3">
                <div className="text-xs mb-2">□ 사업 결과물의 활용</div>
                <div className="text-xs space-y-1">
                  <div><span className="font-semibold">개인정보의 수집•이용•제공 목적:</span> 해당 지원사업의 결과물에 대한 홍보 관련 촬영, 인터뷰 등</div>
                  <div className="pl-4">※ 개인정보 수집•이용에 대한 동의를 거부할 수 있으며, 수집된 정보는 위 목적 이외의 용도로 이용되지 않습니다.</div>
                  <div><span className="font-semibold">수집항목:</span> 가게명, 사업자등록번호, 주소 (보유기간: 사업종료일로부터 5년)</div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 text-sm font-semibold mb-3">
                <span>개인정보 수집 및 이용에 대하여 제공을</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, resultUseAgree: true})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.resultUseAgree === true ? "#0088FF" : "white"}}
                    />
                    <span>동의합니다</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, resultUseAgree: false})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.resultUseAgree === false ? "#FF5F57" : "white"}}
                    />
                    <span>동의하지 않습니다</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col items-end gap-2 text-sm font-semibold">
                <span className="text-right">「개인정보보호법」 등 관련 법규에 의거하여 본인의 개인정보 수집•이용•제공에 관하여</span>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, allAgree: true})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.allAgree === true ? "#0088FF" : "white"}}
                    />
                    <span>동의합니다</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <div 
                      onClick={() => setFormData({...formData, allAgree: false})}
                      className="w-5 h-5 border-2 border-black cursor-pointer"
                      style={{background: formData.allAgree === false ? "#FF5F57" : "white"}}
                    />
                    <span>동의하지 않습니다</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center text-xl font-bold mb-5">신청 정보 입력</div>
            
            <div className="border-2 border-[#8C8C8C] p-4">
              <div className="text-base font-semibold mb-3">신청자 정보</div>
              
              <div className="space-y-3 mb-5">
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">대표자명</div>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="신청자 이름을 입력해주세요."
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">생년월일</div>
                  <input
                    type="text"
                    value={formData.birthDate}
                    onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                    placeholder="예) 000000"
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">휴대폰번호</div>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="예) 000-0000-0000"
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">관악구 거주 여부</div>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => setFormData({...formData, gwanakResident: true})}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.gwanakResident === true ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">거주</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => setFormData({...formData, gwanakResident: false})}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.gwanakResident === false ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">미거주</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">골목상권 상인회 가입여부</div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => setFormData({...formData, merchantAssociation: "joined"})}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.merchantAssociation === "joined" ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">가입</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => setFormData({...formData, merchantAssociation: "notJoined"})}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.merchantAssociation === "notJoined" ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">미가입</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => setFormData({...formData, merchantAssociation: "willJoin"})}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.merchantAssociation === "willJoin" ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">가입예정(가입의사 있음)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="text-base font-semibold mb-3">신청 내용</div>
              
              <div className="space-y-3">
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">가 게 명</div>
                  <input
                    type="text"
                    value={formData.storeName}
                    onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                    placeholder="가게명을 작성해주세요."
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">사업자등록번호</div>
                  <input
                    type="text"
                    value={formData.businessNumber}
                    onChange={(e) => setFormData({...formData, businessNumber: e.target.value})}
                    placeholder="000-00-00000"
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">사업장 주소</div>
                  <div className="flex gap-2">
                    <div className="flex-1 h-10 border border-[#D9D9D9]"></div>
                    <div className="px-4 h-10 border border-[#D9D9D9] flex items-center justify-center cursor-pointer">
                      <span className="text-sm font-semibold">검색</span>
                    </div>
                  </div>
                  <input
                    type="text"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    placeholder="주소"
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                  <input
                    type="text"
                    value={formData.detailAddress}
                    onChange={(e) => setFormData({...formData, detailAddress: e.target.value})}
                    placeholder="상세주소"
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">이메일 주소</div>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="있을 경우 기재해 주세요."
                    className="w-full h-10 px-2 border border-[#D9D9D9] text-sm"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">주 고객층 연령대</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => {
                          const newAgeGroup = [...formData.ageGroup];
                          if (newAgeGroup.includes("10-20")) {
                            setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "10-20")});
                          } else {
                            setFormData({...formData, ageGroup: [...newAgeGroup, "10-20"]});
                          }
                        }}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.ageGroup.includes("10-20") ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">10~20대</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => {
                          const newAgeGroup = [...formData.ageGroup];
                          if (newAgeGroup.includes("20-30")) {
                            setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "20-30")});
                          } else {
                            setFormData({...formData, ageGroup: [...newAgeGroup, "20-30"]});
                          }
                        }}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.ageGroup.includes("20-30") ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">20~30대</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => {
                          const newAgeGroup = [...formData.ageGroup];
                          if (newAgeGroup.includes("30-40")) {
                            setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "30-40")});
                          } else {
                            setFormData({...formData, ageGroup: [...newAgeGroup, "30-40"]});
                          }
                        }}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.ageGroup.includes("30-40") ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">30대~40대</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => {
                          const newAgeGroup = [...formData.ageGroup];
                          if (newAgeGroup.includes("50-60")) {
                            setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "50-60")});
                          } else {
                            setFormData({...formData, ageGroup: [...newAgeGroup, "50-60"]});
                          }
                        }}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.ageGroup.includes("50-60") ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">50대~60대</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div 
                        onClick={() => {
                          const newAgeGroup = [...formData.ageGroup];
                          if (newAgeGroup.includes("all")) {
                            setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "all")});
                          } else {
                            setFormData({...formData, ageGroup: [...newAgeGroup, "all"]});
                          }
                        }}
                        className="w-6 h-6 border-2 border-[#404040] cursor-pointer"
                        style={{background: formData.ageGroup.includes("all") ? "#0088FF" : "white"}}
                      />
                      <span className="text-sm">전 연령층</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">SNS 보유 현황</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-24 px-2 py-1 border border-[#D9D9D9] text-center text-sm">인스타그램</div>
                      <input
                        type="text"
                        value={formData.instagram}
                        onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                        placeholder="있을 경우 기재해 주세요."
                        className="flex-1 h-10 px-2 border border-[#D9D9D9] text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 px-2 py-1 border border-[#D9D9D9] text-center text-sm">페이스북</div>
                      <input
                        type="text"
                        value={formData.facebook}
                        onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                        placeholder="있을 경우 기재해 주세요."
                        className="flex-1 h-10 px-2 border border-[#D9D9D9] text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 px-2 py-1 border border-[#D9D9D9] text-center text-sm">블로그</div>
                      <input
                        type="text"
                        value={formData.blog}
                        onChange={(e) => setFormData({...formData, blog: e.target.value})}
                        placeholder="있을 경우 기재해 주세요."
                        className="flex-1 h-10 px-2 border border-[#D9D9D9] text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 px-2 py-1 border border-[#D9D9D9] text-center text-sm">유튜브</div>
                      <input
                        type="text"
                        value={formData.youtube}
                        onChange={(e) => setFormData({...formData, youtube: e.target.value})}
                        placeholder="있을 경우 기재해 주세요."
                        className="flex-1 h-10 px-2 border border-[#D9D9D9] text-sm"
                      />
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-24 px-2 py-1 border border-[#D9D9D9] text-center text-sm">기타</div>
                      <input
                        type="text"
                        value={formData.other}
                        onChange={(e) => setFormData({...formData, other: e.target.value})}
                        placeholder="있을 경우 기재해 주세요."
                        className="flex-1 h-10 px-2 border border-[#D9D9D9] text-sm"
                      />
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">지원 동기</div>
                  <textarea
                    value={formData.motivation}
                    onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                    placeholder="지원동기를 자유롭게 작성해주세요."
                    className="w-full h-32 p-2 border border-[#D9D9D9] text-sm resize-none"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">가게 및 판매 물품 소개</div>
                  <textarea
                    value={formData.storeIntro}
                    onChange={(e) => setFormData({...formData, storeIntro: e.target.value})}
                    placeholder="점포 특성 및 주력 제품(음식, 서비스 등)에 대한 소개주세요."
                    className="w-full h-24 p-2 border border-[#D9D9D9] text-sm resize-none"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">홍보 영상 제작 아이디어</div>
                  <textarea
                    value={formData.videoIdea}
                    onChange={(e) => setFormData({...formData, videoIdea: e.target.value})}
                    placeholder="본인이 희망하는 콘텐츠 제작 방향을 작성해주세요.(예: 코믹버전, 먹방, 상품안내 등)"
                    className="w-full h-24 p-2 border border-[#D9D9D9] text-sm resize-none"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="text-sm font-medium">제출서류</div>
                  <div className="space-y-2">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium">사업자등록증 사본</span>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 px-2 py-1 border border-[#D9D9D9] text-xs text-gray-600">
                          {formData.businessLicense ? formData.businessLicense.name : "선택된 파일 없음"}
                        </div>
                        <label className="px-4 py-1 bg-[#D9D9D9] border border-[#404040] cursor-pointer">
                          <input
                            type="file"
                            onChange={(e) => setFormData({...formData, businessLicense: e.target.files?.[0] || null})}
                            className="hidden"
                          />
                          <span className="text-sm">파일선택</span>
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="text-xs font-medium">주민등록초본(대표자의 주민등록이 관악구에 등록된 경우)<br/>※ '과거주소', '주민등록번호 뒷자리' 미포함</span>
                      <div className="flex items-center gap-2">
                        <div className="flex-1 px-2 py-1 border border-[#D9D9D9] text-xs text-gray-600">
                          {formData.residentCert ? formData.residentCert.name : "선택된 파일 없음"}
                        </div>
                        <label className="px-4 py-1 bg-[#D9D9D9] border border-[#404040] cursor-pointer">
                          <input
                            type="file"
                            onChange={(e) => setFormData({...formData, residentCert: e.target.files?.[0] || null})}
                            className="hidden"
                          />
                          <span className="text-sm">파일선택</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-8 pb-5 space-y-5">
                  <div className="bg-[#F8F6F6] p-4 border border-[#8C8C8C]">
                    <div className="text-sm">
                      제출된 서류에 기재된 내용이 사실과 다를 경우 참여자 선정을 취소할 수 있으며, 최종 선발자 공지이후라도 자격조건 검증 과정 등을 통하여 결격 사유가 발견될 경우 선발이 취소될 수 있습니다. 상기 신청자는 <span className="font-bold">{"<"}관악구 소상공인 온라인 마케팅 홍보지원 사업{">"}</span>에 지원하고자 신청서를 제출하며, 기재 내용이 사실과 다름없음을 확인합니다.
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <div 
                      onClick={handleSubmit}
                      className="px-12 py-3 bg-[#0088FF] rounded cursor-pointer"
                    >
                      <span className="text-white text-lg font-bold">지원하기</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 최하단 섹션 */}
            <div className="flex flex-col items-center gap-4 py-8 px-4 bg-white">
              <img 
                className="h-10 object-contain" 
                alt="관악구 CI 가로형" 
                src="/images/관악구CI(가로형).jpg" 
              />
              <img 
                className="h-10 object-contain" 
                alt="추가 이미지" 
                src="/images/image.png" 
              />
            </div>
          </div>
        ) : (
          /* Desktop Version - Keep exactly as is with inline styles */
          <div style={{width: "1440px", height: "3330px", paddingLeft: "35px", paddingRight: "35px", paddingTop: "20px", paddingBottom: "20px", overflow: "hidden", borderRadius: "2px", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
          <div style={{width: "1228px", height: "175px", paddingLeft: "35px", paddingRight: "35px", paddingTop: "20px", paddingBottom: "20px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column"}}>
              <span style={{color: "#0088FF", fontSize: "24px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>2025년 소상공인 온라인 마케팅 홍보 지원사업<br/></span>
              <span style={{color: "black", fontSize: "32px", fontFamily: "Pretendard", fontWeight: 700, lineHeight: "40px", wordWrap: "break-word"}}>지원서 작성</span>
            </div>
          </div>
          
          <div style={{display: "flex", width: "1229px", minHeight: "891px", height: "891px", padding: "20px 35px", flexDirection: "column", alignItems: "flex-start", gap: "10px", flexShrink: 0, background: "#F8F6F6"}}>
            <div style={{width: "100%", height: "40px", display: "flex", alignItems: "center"}}>
              <div style={{textAlign: "left", color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: 700, lineHeight: "40px", whiteSpace: "nowrap"}}>개인정보 수집•이용•제공에 관한 동의서</div>
            </div>
            <div style={{alignSelf: "stretch", minHeight: "50px", padding: "10px 0"}}>
              <div style={{width: "100%", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "25px", wordWrap: "break-word"}}>관악구 소상공인 온라인 마케팅 홍보지원 사업 관련하여 개인정보를 수집•이용 및 제 3자 제공이 필요하여 개인정보보호법에 따라 신청인의 개인정보 동의를 구합니다. 사업추진과 무관한 다른 용도로는 사용되지 않습니다. 아래의 내용과 같이 귀하는 개인정보를 수집•이용•제공에 동의하여 주실 것을 요청드립니다.</div>
            </div>
            
            <div style={{display: "flex", padding: "20px", alignItems: "flex-start", gap: "10px", alignSelf: "stretch", background: "white"}}>
              <div style={{flex: 1, justifyContent: "center", display: "flex", flexDirection: "column", gap: "10px"}}>
                <div style={{color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "25px"}}>□ 개인정보 수집•이용에 따른 동의</div>
                
                <div style={{display: "flex", flexDirection: "column", gap: "8px", fontFamily: "Pretendard", fontSize: "16px", fontStyle: "normal", fontWeight: 600, lineHeight: "25px"}}>
                  <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
                    <div style={{color: "#000"}}>개인정보의 수집•이용•제공 목적</div>
                    <div style={{paddingLeft: "20px", color: "#000", fontWeight: 400}}>
                      <div>① 사업 참여가게 선정심사에 필요한 자격, 참여배제 사유 조회</div>
                      <div>② 사업 홍보 및 사업종료 후 매출변화 등 사업효과 조사</div>
                    </div>
                  </div>
                  
                  <div style={{display: "flex", flexDirection: "column", gap: "4px"}}>
                    <div style={{color: "#000"}}>수집항목</div>
                    <div style={{paddingLeft: "20px", color: "#000", fontWeight: 400}}>
                      <div>① 인적사항 : 성명, 생년월일, 전화번호(자택, 휴대폰), 성별</div>
                      <div>② 선정심사 : 가게명, 사업자등록번호, 설립일자, 연매출액, 주소, 연락처</div>
                    </div>
                  </div>
                  
                  <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <span style={{color: "#000"}}>보유 및 이용 기간:</span>
                    <span style={{color: "#000", fontWeight: 400}}>사업 종료일로부터 5년</span>
                  </div>
                  
                  <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <span style={{color: "#000"}}>동의 거부권 및 거부에 따른 불이익:</span>
                    <span style={{color: "#000", fontWeight: 400}}>귀하는 개인정보를 수집•이용에 대한 동의를 거부할 수 있습니다. 다만 동의가 없을 경우 신청자격을 확인할 수 없어 사업에 참여할 수 없습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex"}}>
              <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", paddingTop: "8px", paddingBottom: "8px", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "10px", display: "flex"}}>
                <div style={{width: "1079px", textAlign: "right", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px", wordWrap: "break-word"}}>
                  <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px"}}>
                    <span>개인정보 수집 및 이용에 대하여 제공을</span>
                    <div 
                      onClick={() => setFormData({...formData, personalInfoAgree: true})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.personalInfoAgree === true ? "#0088FF" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의합니다.</span>
                    <div 
                      onClick={() => setFormData({...formData, personalInfoAgree: false})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.personalInfoAgree === false ? "#FF5F57" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의하지 않습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{display: "flex", padding: "20px", alignItems: "flex-start", gap: "10px", alignSelf: "stretch", background: "white"}}>
              <div style={{flex: 1, justifyContent: "center", display: "flex", flexDirection: "column", gap: "10px"}}>
                <div style={{color: "#000", fontSize: "14px", fontFamily: "Pretendard", fontStyle: "normal", fontWeight: 400, lineHeight: "20px"}}>□ 코로나19 종합정보, 공공일자리, 복지•건강•문화 등 각종 구정정보 수시제공 동의</div>
                
                <div style={{display: "flex", flexDirection: "column", gap: "8px", fontFamily: "Pretendard", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "20px"}}>
                  <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <span style={{color: "#000"}}>개인정보의 수집•이용•제공 목적:</span>
                    <span style={{color: "#000"}}>다양한 구정 정보 제공을 위한 문자, 알림톡 등 발송</span>
                  </div>
                  
                  <div style={{paddingLeft: "20px"}}>
                    <span style={{fontSize: "14px", color: "#000", fontWeight: 400, lineHeight: "20px"}}>※ 개인정보 수집•이용에 대한 동의를 거부할 수 있으며, 수집된 정보는 위 목적 이외의 용도로는 이용되지 않습니다.</span>
                  </div>
                  
                  <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <span style={{color: "#000"}}>수집항목:</span>
                    <span style={{color: "#000"}}>휴대전화번호 (보유기간 5년)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex"}}>
              <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", paddingTop: "8px", paddingBottom: "8px", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "10px", display: "flex"}}>
                <div style={{width: "1079px", textAlign: "right", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px", wordWrap: "break-word"}}>
                  <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px"}}>
                    <span>개인정보 수집 및 이용에 대하여 제공을</span>
                    <div 
                      onClick={() => setFormData({...formData, marketingAgree: true})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.marketingAgree === true ? "#0088FF" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의합니다.</span>
                    <div 
                      onClick={() => setFormData({...formData, marketingAgree: false})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.marketingAgree === false ? "#FF5F57" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의하지 않습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{display: "flex", padding: "20px", alignItems: "flex-start", gap: "10px", alignSelf: "stretch", background: "white"}}>
              <div style={{flex: 1, justifyContent: "center", display: "flex", flexDirection: "column", gap: "10px"}}>
                <div style={{color: "#000", fontSize: "14px", fontFamily: "Pretendard", fontStyle: "normal", fontWeight: 400, lineHeight: "20px"}}>□ 사업 결과물의 활용</div>
                
                <div style={{display: "flex", flexDirection: "column", gap: "8px", fontFamily: "Pretendard", fontSize: "14px", fontStyle: "normal", fontWeight: 400, lineHeight: "20px"}}>
                  <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <span style={{color: "#000"}}>개인정보의 수집•이용•제공 목적:</span>
                    <span style={{color: "#000"}}>해당 지원사업의 결과물에 대한 홍보 관련 촬영, 인터뷰 등</span>
                  </div>
                  
                  <div style={{paddingLeft: "20px"}}>
                    <span style={{fontSize: "14px", color: "#000", fontWeight: 400, lineHeight: "20px"}}>※ 개인정보 수집•이용에 대한 동의를 거부할 수 있으며, 수집된 정보는 위 목적 이외의 용도로 이용되지 않습니다.</span>
                  </div>
                  
                  <div style={{display: "flex", gap: "5px", alignItems: "baseline"}}>
                    <span style={{color: "#000"}}>수집항목:</span>
                    <span style={{color: "#000"}}>가게명, 사업자등록번호, 주소 (보유기간: 사업종료일로부터 5년)</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex"}}>
              <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", paddingTop: "8px", paddingBottom: "8px", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "10px", display: "flex"}}>
                <div style={{width: "1079px", textAlign: "right", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px", wordWrap: "break-word"}}>
                  <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px"}}>
                    <span>개인정보 수집 및 이용에 대하여 제공을</span>
                    <div 
                      onClick={() => setFormData({...formData, resultUseAgree: true})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.resultUseAgree === true ? "#0088FF" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의합니다.</span>
                    <div 
                      onClick={() => setFormData({...formData, resultUseAgree: false})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.resultUseAgree === false ? "#FF5F57" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의하지 않습니다.</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", display: "flex"}}>
              <div style={{alignSelf: "stretch", paddingLeft: "20px", paddingRight: "20px", paddingTop: "12px", paddingBottom: "12px", flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: "10px", display: "flex"}}>
                <div style={{width: "1079px", textAlign: "right", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "20px", wordWrap: "break-word"}}>
                  <div style={{display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "10px"}}>
                    <span>「개인정보보호법」 등 관련 법규에 의거하여 본인의 개인정보 수집•이용•제공에 관하여</span>
                    <div 
                      onClick={() => setFormData({...formData, allAgree: true})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.allAgree === true ? "#0088FF" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의합니다.</span>
                    <div 
                      onClick={() => setFormData({...formData, allAgree: false})}
                      style={{
                        width: "20px", 
                        height: "20px", 
                        border: "2px solid black", 
                        background: formData.allAgree === false ? "#FF5F57" : "white",
                        cursor: "pointer"
                      }}
                    />
                    <span>동의하지 않습니다.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{width: "1228px", height: "137px", paddingLeft: "35px", paddingRight: "35px", paddingTop: "20px", paddingBottom: "20px", overflow: "hidden", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
            <div style={{textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "32px", fontFamily: "Pretendard", fontWeight: 700, lineHeight: "40px", wordWrap: "break-word"}}>신청 정보 입력</div>
          </div>
          
          <div style={{width: "1228px", height: "2057px", paddingLeft: "35px", paddingRight: "35px", paddingTop: "5px", paddingBottom: "5px", overflow: "hidden", outline: "2px #8C8C8C solid", outlineOffset: "-2px", flexDirection: "column", justifyContent: "flex-start", alignItems: "flex-start", gap: "5px", display: "flex"}}>
            <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
              <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "40px", wordWrap: "break-word"}}>신청자 정보</div>
            </div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>대표자명</div>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="신청자 이름을 입력해주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.name ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>생년월일</div>
                <input
                  type="text"
                  value={formData.birthDate}
                  onChange={(e) => setFormData({...formData, birthDate: e.target.value})}
                  placeholder="예) 000000"
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.birthDate ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>휴대폰번호</div>
                <input
                  type="text"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  placeholder="예) 000-0000-0000"
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.phone ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                <div style={{width: "200px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>관악구 거주 여부</div>
                <div 
                  onClick={() => setFormData({...formData, gwanakResident: true})}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.gwanakResident === true ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "50px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>거주</div>
                <div 
                  onClick={() => setFormData({...formData, gwanakResident: false})}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.gwanakResident === false ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "50px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>미거주</div>
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                <div style={{width: "200px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>골목상권 상인회 가입여부</div>
                <div 
                  onClick={() => setFormData({...formData, merchantAssociation: "joined"})}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.merchantAssociation === "joined" ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "50px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>가입</div>
                <div 
                  onClick={() => setFormData({...formData, merchantAssociation: "notJoined"})}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.merchantAssociation === "notJoined" ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "50px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>미가입</div>
                <div 
                  onClick={() => setFormData({...formData, merchantAssociation: "willJoin"})}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.merchantAssociation === "willJoin" ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "177px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>가입예정(가입의사 있음)</div>
              </div>
            </div>
            
            <div style={{width: "1158px", paddingTop: "20px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
              <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "18px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "40px", wordWrap: "break-word"}}>신청 내용</div>
            </div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>가 게 명</div>
                <input
                  type="text"
                  value={formData.storeName}
                  onChange={(e) => setFormData({...formData, storeName: e.target.value})}
                  placeholder="가게명을 작성해주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.storeName ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>사업자등록번호</div>
                <input
                  type="text"
                  value={formData.businessNumber}
                  onChange={(e) => setFormData({...formData, businessNumber: e.target.value})}
                  placeholder="000-00-00000"
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.businessNumber ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>사업장 주소</div>
                <div style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", border: "1px #D9D9D9 solid"}}></div>
                <div style={{width: "155px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "flex", cursor: "pointer"}}>
                  <div style={{width: "115px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 600, lineHeight: "40px", wordWrap: "break-word"}}>검색</div>
                </div>
              </div>
            </div>
            
            <div style={{width: "1158px", height: "40px", position: "relative"}}>
              <div style={{width: "700px", height: "40px", left: "180px", top: "-0.05px", position: "absolute", background: "white", border: "1px #D9D9D9 solid"}}></div>
            </div>
            
            <div style={{width: "1158px", height: "40px", position: "relative"}}>
              <input
                type="text"
                value={formData.detailAddress}
                onChange={(e) => setFormData({...formData, detailAddress: e.target.value})}
                placeholder="상세주소"
                style={{width: "700px", height: "40px", left: "180px", top: "-0.05px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", paddingLeft: "10px", color: formData.detailAddress ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
              />
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>이메일 주소</div>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  placeholder="있을 경우 기재해 주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.email ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                <div style={{width: "200px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>주 고객층 연령대</div>
                <div 
                  onClick={() => {
                    const newAgeGroup = [...formData.ageGroup];
                    if (newAgeGroup.includes("10-20")) {
                      setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "10-20")});
                    } else {
                      setFormData({...formData, ageGroup: [...newAgeGroup, "10-20"]});
                    }
                  }}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.ageGroup.includes("10-20") ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "85px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>10~20대</div>
                <div 
                  onClick={() => {
                    const newAgeGroup = [...formData.ageGroup];
                    if (newAgeGroup.includes("20-30")) {
                      setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "20-30")});
                    } else {
                      setFormData({...formData, ageGroup: [...newAgeGroup, "20-30"]});
                    }
                  }}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.ageGroup.includes("20-30") ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "85px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>20~30대</div>
                <div 
                  onClick={() => {
                    const newAgeGroup = [...formData.ageGroup];
                    if (newAgeGroup.includes("30-40")) {
                      setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "30-40")});
                    } else {
                      setFormData({...formData, ageGroup: [...newAgeGroup, "30-40"]});
                    }
                  }}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.ageGroup.includes("30-40") ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "85px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>30대~40대</div>
                <div 
                  onClick={() => {
                    const newAgeGroup = [...formData.ageGroup];
                    if (newAgeGroup.includes("50-60")) {
                      setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "50-60")});
                    } else {
                      setFormData({...formData, ageGroup: [...newAgeGroup, "50-60"]});
                    }
                  }}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.ageGroup.includes("50-60") ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "85px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>50대~60대</div>
                <div 
                  onClick={() => {
                    const newAgeGroup = [...formData.ageGroup];
                    if (newAgeGroup.includes("all")) {
                      setFormData({...formData, ageGroup: newAgeGroup.filter(age => age !== "all")});
                    } else {
                      setFormData({...formData, ageGroup: [...newAgeGroup, "all"]});
                    }
                  }}
                  style={{width: "28px", height: "28px", border: "2px solid #404040", background: formData.ageGroup.includes("all") ? "#0088FF" : "white", cursor: "pointer"}}
                />
                <div style={{width: "85px", height: "30px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>전 연령층</div>
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingTop: "5px", paddingLeft: "10px", paddingRight: "10px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>SNS 보유 현황</div>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>인스타그램</div>
                </div>
                <input
                  type="text"
                  value={formData.instagram}
                  onChange={(e) => setFormData({...formData, instagram: e.target.value})}
                  placeholder="있을 경우 기재해 주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.instagram ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", height: "40px", position: "relative"}}>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "170px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>페이스북</div>
                </div>
                <input
                  type="text"
                  value={formData.facebook}
                  onChange={(e) => setFormData({...formData, facebook: e.target.value})}
                  placeholder="있을 경우 기재해 주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", left: "354px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.facebook ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
              
              <div style={{width: "1158px", height: "40px", position: "relative"}}>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "170px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>블로그</div>
                </div>
                <input
                  type="text"
                  value={formData.blog}
                  onChange={(e) => setFormData({...formData, blog: e.target.value})}
                  placeholder="있을 경우 기재해 주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", left: "354px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.blog ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
              
              <div style={{width: "1158px", height: "40px", position: "relative"}}>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "170px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>유튜브</div>
                </div>
                <input
                  type="text"
                  value={formData.youtube}
                  onChange={(e) => setFormData({...formData, youtube: e.target.value})}
                  placeholder="있을 경우 기재해 주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", left: "354px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.youtube ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
              
              <div style={{width: "1158px", height: "40px", position: "relative"}}>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "170px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>기타</div>
                </div>
                <input
                  type="text"
                  value={formData.other}
                  onChange={(e) => setFormData({...formData, other: e.target.value})}
                  placeholder="있을 경우 기재해 주세요."
                  style={{width: "200px", height: "40px", paddingLeft: "10px", paddingRight: "10px", left: "354px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.other ? "black" : "#8C8C8C", fontSize: "13px", fontFamily: "Pretendard", fontWeight: 300}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "25px", wordWrap: "break-word"}}>지원 동기</div>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => setFormData({...formData, motivation: e.target.value})}
                  placeholder="지원동기를 자유롭게 작성해주세요."
                  style={{width: "890px", height: "221px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.motivation ? "black" : "#8C8C8C", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 300, resize: "none"}}
                />
              </div>
            </div>
            <div style={{width: "1100px", height: "0px", outline: "1px #D9D9D9 solid", outlineOffset: "-0.50px"}}></div>
            
            <div style={{height: "138px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "25px", wordWrap: "break-word"}}>가게 및 판매 물품 소개</div>
                <textarea
                  value={formData.storeIntro}
                  onChange={(e) => setFormData({...formData, storeIntro: e.target.value})}
                  placeholder="점포 특성 및 주력 제품(음식, 서비스 등)에 대한 소개주세요."
                  style={{width: "890px", height: "120px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.storeIntro ? "black" : "#8C8C8C", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 300, resize: "none"}}
                />
              </div>
            </div>
            
            <svg width="1100" height="7" viewBox="0 0 1100 7" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0.600342L1099.99 6.10945" stroke="#D9D9D9"/>
            </svg>
            
            <div style={{height: "138px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "25px", wordWrap: "break-word"}}>홍보 영상 제작 아이디어</div>
                <textarea
                  value={formData.videoIdea}
                  onChange={(e) => setFormData({...formData, videoIdea: e.target.value})}
                  placeholder="본인이 희망하는 콘텐츠 제작 방향을 작성해주세요.(예: 코믹버전, 먹방, 상품안내 등)"
                  style={{width: "890px", height: "120px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", color: formData.videoIdea ? "black" : "#8C8C8C", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 300, resize: "none"}}
                />
              </div>
            </div>
            
            <svg width="1100" height="8" viewBox="0 0 1100 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1.1095L1099.99 6.61861" stroke="#D9D9D9"/>
            </svg>
            
            <div style={{height: "54px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", justifyContent: "flex-start", alignItems: "center", gap: "20px", display: "inline-flex"}}>
                <div style={{width: "150px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>제출서류</div>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 300, lineHeight: "40px", wordWrap: "break-word"}}>
                    {formData.businessLicense ? formData.businessLicense.name : "선택된 파일 없음"}
                  </div>
                </div>
                <label style={{width: "138px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "#D9D9D9", outline: "1px #404040 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "flex", cursor: "pointer"}}>
                  <input
                    type="file"
                    onChange={(e) => setFormData({...formData, businessLicense: e.target.files?.[0] || null})}
                    style={{display: "none"}}
                  />
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>파일선택</div>
                </label>
                <div style={{width: "159px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", background: "white", outline: "1px white solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "flex"}}>
                  <div style={{width: "145px", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "40px", wordWrap: "break-word"}}>사업자등록증 사본</div>
                </div>
              </div>
            </div>
            
            <div style={{height: "74px", paddingLeft: "10px", paddingRight: "10px", flexDirection: "column", justifyContent: "center", alignItems: "flex-start", gap: "5px", display: "flex"}}>
              <div style={{width: "1158px", height: "40px", position: "relative"}}>
                <div style={{width: "164px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "170px", top: "-0.07px", position: "absolute", background: "white", outline: "1px #D9D9D9 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 300, lineHeight: "40px", wordWrap: "break-word"}}>
                    {formData.residentCert ? formData.residentCert.name : "선택된 파일 없음"}
                  </div>
                </div>
                <label style={{width: "138px", height: "40px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "354px", top: "0.38px", position: "absolute", background: "#D9D9D9", outline: "1px #404040 solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex", cursor: "pointer"}}>
                  <input
                    type="file"
                    onChange={(e) => setFormData({...formData, residentCert: e.target.files?.[0] || null})}
                    style={{display: "none"}}
                  />
                  <div style={{width: "145px", textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "40px", wordWrap: "break-word"}}>파일선택</div>
                </label>
                <div style={{width: "551px", height: "57px", paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", left: "513px", top: "0.38px", position: "absolute", background: "white", outline: "1px white solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                  <div style={{width: "543px", height: "48px", color: "black", fontSize: "16px", fontFamily: "Pretendard", fontWeight: 500, lineHeight: "25px", wordWrap: "break-word"}}>
                    주민등록초본(대표자의 주민등록이 관악구에 등록된 경우)<br/>※ &apos;과거주소&apos;, &apos;주민등록번호 뒷자리&apos; 미포함
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{alignSelf: "stretch", paddingTop: "50px", paddingBottom: "20px", flexDirection: "column", justifyContent: "flex-start", alignItems: "center", gap: "30px", display: "flex"}}>
              <div style={{alignSelf: "stretch", height: "101px", paddingLeft: "35px", paddingRight: "35px", paddingTop: "20px", paddingBottom: "20px", background: "#F8F6F6", overflow: "hidden", outline: "1px #8C8C8C solid", outlineOffset: "-1px", justifyContent: "center", alignItems: "center", gap: "10px", display: "inline-flex"}}>
                <div style={{width: "1109px", justifyContent: "center", display: "flex", flexDirection: "column"}}>
                  <span style={{color: "black", fontSize: "20px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "25px", wordWrap: "break-word"}}>제출된 서류에 기재된 내용이 사실과 다를 경우 참여자 선정을 취소할 수 있으며, 최종 선발자 공지이후라도 자격조건 검증 과정 등을 통하여 결격 사유가 발견될 경우 선발이 취소될 수 있습니다. 상기 신청자는 </span>
                  <span style={{color: "black", fontSize: "20px", fontFamily: "Pretendard", fontWeight: 700, lineHeight: "25px", wordWrap: "break-word"}}>{"<"}관악구 소상공인 온라인 마케팅 홍보지원 사업{">"}</span>
                  <span style={{color: "black", fontSize: "20px", fontFamily: "Pretendard", fontWeight: 400, lineHeight: "25px", wordWrap: "break-word"}}>에 지원하고자 신청서를 제출하며, 기재 내용이 사실과 다름없음을 확인합니다.</span>
                </div>
              </div>
              
              <div 
                onClick={handleSubmit}
                style={{width: "269px", height: "63px", background: "#0088FF", borderRadius: "5px", justifyContent: "center", alignItems: "center", display: "flex", cursor: "pointer"}}
              >
                <div style={{textAlign: "center", justifyContent: "center", display: "flex", flexDirection: "column", color: "white", fontSize: "24px", fontFamily: "Pretendard", fontWeight: 700, wordWrap: "break-word"}}>지원하기</div>
              </div>
            </div>
          </div>
          
          {/* 최하단 섹션 */}
          <div style={{display: "flex", width: "1440px", height: "192px", padding: "40px 200px", alignItems: "flex-start", justifyContent: "flex-start", gap: "10px", flexShrink: 0, background: "white"}}>
            <div style={{display: "flex", flexDirection: "column", gap: "16px"}}>
              <img 
                style={{height: "50px", objectFit: "contain"}} 
                alt="관악구 CI 가로형" 
                src="/images/관악구CI(가로형).jpg" 
              />
              <img 
                style={{height: "50px", objectFit: "contain"}} 
                alt="추가 이미지" 
                src="/images/image.png" 
              />
            </div>
          </div>
        </div>
        )}
      </div>
    </main>
  );
}