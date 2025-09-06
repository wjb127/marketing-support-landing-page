"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function ApplicationsManagement() {
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedApplication, setSelectedApplication] = useState<any>(null);

  // 데모 데이터 (더 많은 데이터)
  const applications = [
    {
      id: 1,
      name: "김철수",
      storeName: "철수네 김밥",
      businessNumber: "123-45-67890",
      phone: "010-1234-5678",
      email: "chulsoo@example.com",
      address: "서울특별시 관악구 관악로 123",
      submittedAt: "2024-09-06 14:30",
      status: "pending",
      gwanakResident: true,
      merchantAssociation: "joined",
      ageGroup: ["20-30", "30-40"],
      motivation: "우리 가게는 20년 전통의 김밥 전문점으로, 온라인 마케팅을 통해 더 많은 고객들에게 알리고 싶습니다.",
      storeIntro: "관악구에서 20년간 운영해온 김밥 전문점입니다. 신선한 재료와 정성스런 손맛으로 만든 김밥을 제공합니다.",
      videoIdea: "김밥 만드는 과정을 보여주는 ASMR 콘텐츠"
    },
    {
      id: 2,
      name: "이영희",
      storeName: "영희 카페",
      businessNumber: "234-56-78901",
      phone: "010-2345-6789",
      email: "younghee@example.com",
      address: "서울특별시 관악구 신림로 456",
      submittedAt: "2024-09-06 13:45",
      status: "pending",
      gwanakResident: true,
      merchantAssociation: "notJoined",
      ageGroup: ["20-30"],
      motivation: "젊은 층을 타겟으로 한 카페로, SNS 마케팅을 통해 브랜드 인지도를 높이고 싶습니다.",
      storeIntro: "디저트가 맛있는 감성 카페입니다.",
      videoIdea: "카페 분위기와 시그니처 메뉴 소개"
    },
    {
      id: 3,
      name: "박민수",
      storeName: "민수 치킨",
      businessNumber: "345-67-89012",
      phone: "010-3456-7890",
      email: "minsoo@example.com",
      address: "서울특별시 관악구 봉천로 789",
      submittedAt: "2024-09-06 11:20",
      status: "approved",
      gwanakResident: false,
      merchantAssociation: "willJoin",
      ageGroup: ["all"],
      motivation: "배달 앱 수수료 부담을 줄이고 직접 고객과 소통하고 싶습니다.",
      storeIntro: "바삭한 치킨과 특제 소스가 일품인 치킨 전문점",
      videoIdea: "먹방 콘텐츠"
    },
    {
      id: 4,
      name: "정수진",
      storeName: "수진이네 꽃집",
      businessNumber: "456-78-90123",
      phone: "010-4567-8901",
      email: "soojin@example.com",
      address: "서울특별시 관악구 남부순환로 321",
      submittedAt: "2024-09-06 10:15",
      status: "pending",
      gwanakResident: true,
      merchantAssociation: "joined",
      ageGroup: ["30-40", "50-60"],
      motivation: "꽃의 아름다움을 더 많은 사람들과 나누고 싶습니다.",
      storeIntro: "계절별 생화와 화분, 꽃다발 전문점",
      videoIdea: "꽃 어레인지먼트 과정 타임랩스"
    },
    {
      id: 5,
      name: "최동현",
      storeName: "동현 문구",
      businessNumber: "567-89-01234",
      phone: "010-5678-9012",
      email: "donghyun@example.com",
      address: "서울특별시 관악구 신림동 654",
      submittedAt: "2024-09-06 09:30",
      status: "rejected",
      gwanakResident: false,
      merchantAssociation: "notJoined",
      ageGroup: ["10-20"],
      motivation: "학생들에게 필요한 문구용품을 저렴하게 제공하고 있습니다.",
      storeIntro: "학용품과 사무용품 전문점",
      videoIdea: "신학기 필수 아이템 소개",
      rejectionReason: "사업자등록증 미제출"
    }
  ];

  const filteredApplications = applications.filter(app => {
    const matchesStatus = selectedStatus === "all" || app.status === selectedStatus;
    const matchesSearch = app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.storeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          app.businessNumber.includes(searchTerm);
    return matchesStatus && matchesSearch;
  });

  const getStatusBadge = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      approved: "bg-green-100 text-green-800",
      rejected: "bg-red-100 text-red-800"
    };
    const labels = {
      pending: "검토중",
      approved: "승인",
      rejected: "반려"
    };
    return (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${styles[status as keyof typeof styles]}`}>
        {labels[status as keyof typeof labels]}
      </span>
    );
  };

  const handleStatusChange = (applicationId: number, newStatus: string, reason?: string) => {
    console.log(`Application ${applicationId} status changed to ${newStatus}`);
    if (reason) {
      console.log(`Reason: ${reason}`);
    }
    // 실제 구현시 Firebase 업데이트
    setSelectedApplication(null);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 - 재사용 가능한 컴포넌트로 분리 필요 */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">관리자 패널</h2>
          <p className="text-sm text-gray-600 mt-1">관악구 소상공인 지원사업</p>
        </div>
        
        <nav className="mt-6">
          <Link href="/admin">
            <button className="w-full text-left px-6 py-3 hover:bg-gray-50 text-gray-700">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                대시보드
              </span>
            </button>
          </Link>
          
          <button className="w-full text-left px-6 py-3 bg-blue-50 border-r-4 border-blue-500 text-blue-600">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              지원서 관리
            </span>
          </button>
          
          <Link href="/admin/qna">
            <button className="w-full text-left px-6 py-3 hover:bg-gray-50 text-gray-700">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Q&A 관리
              </span>
            </button>
          </Link>
        </nav>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">지원서 관리</h1>
            <p className="text-gray-600 mt-2">제출된 지원서를 검토하고 승인/반려 처리합니다</p>
          </div>

          {/* 필터 및 검색 */}
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="이름, 가게명, 사업자번호로 검색..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedStatus("all")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    selectedStatus === "all" 
                      ? "bg-blue-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  전체 ({applications.length})
                </button>
                <button
                  onClick={() => setSelectedStatus("pending")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    selectedStatus === "pending" 
                      ? "bg-yellow-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  검토중 ({applications.filter(a => a.status === "pending").length})
                </button>
                <button
                  onClick={() => setSelectedStatus("approved")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    selectedStatus === "approved" 
                      ? "bg-green-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  승인 ({applications.filter(a => a.status === "approved").length})
                </button>
                <button
                  onClick={() => setSelectedStatus("rejected")}
                  className={`px-4 py-2 rounded-lg font-medium ${
                    selectedStatus === "rejected" 
                      ? "bg-red-600 text-white" 
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  반려 ({applications.filter(a => a.status === "rejected").length})
                </button>
              </div>
            </div>
          </div>

          {/* 지원서 테이블 */}
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    신청자 정보
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    사업장 정보
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    제출일시
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    상태
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    액션
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredApplications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{app.name}</div>
                        <div className="text-sm text-gray-500">{app.phone}</div>
                        <div className="text-sm text-gray-500">{app.email}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">{app.storeName}</div>
                        <div className="text-sm text-gray-500">{app.businessNumber}</div>
                        <div className="text-sm text-gray-500">{app.address}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {app.submittedAt}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {getStatusBadge(app.status)}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button
                        onClick={() => setSelectedApplication(app)}
                        className="text-blue-600 hover:text-blue-900 mr-3"
                      >
                        상세보기
                      </button>
                      {app.status === "pending" && (
                        <>
                          <button
                            onClick={() => handleStatusChange(app.id, "approved")}
                            className="text-green-600 hover:text-green-900 mr-3"
                          >
                            승인
                          </button>
                          <button
                            onClick={() => {
                              const reason = prompt("반려 사유를 입력하세요:");
                              if (reason) handleStatusChange(app.id, "rejected", reason);
                            }}
                            className="text-red-600 hover:text-red-900"
                          >
                            반려
                          </button>
                        </>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 상세보기 모달 */}
      {selectedApplication && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">지원서 상세 정보</h2>
                <button
                  onClick={() => setSelectedApplication(null)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-6">
              {/* 신청자 정보 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">신청자 정보</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">이름</p>
                    <p className="font-medium">{selectedApplication.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">연락처</p>
                    <p className="font-medium">{selectedApplication.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">이메일</p>
                    <p className="font-medium">{selectedApplication.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">관악구 거주</p>
                    <p className="font-medium">{selectedApplication.gwanakResident ? "예" : "아니오"}</p>
                  </div>
                </div>
              </div>

              {/* 사업장 정보 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">사업장 정보</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">가게명</p>
                    <p className="font-medium">{selectedApplication.storeName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">사업자등록번호</p>
                    <p className="font-medium">{selectedApplication.businessNumber}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-sm text-gray-600">주소</p>
                    <p className="font-medium">{selectedApplication.address}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">상인회 가입</p>
                    <p className="font-medium">
                      {selectedApplication.merchantAssociation === "joined" ? "가입" : 
                       selectedApplication.merchantAssociation === "willJoin" ? "가입예정" : "미가입"}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">주 고객층</p>
                    <p className="font-medium">{selectedApplication.ageGroup.join(", ")}</p>
                  </div>
                </div>
              </div>

              {/* 지원 내용 */}
              <div>
                <h3 className="text-lg font-semibold mb-3">지원 내용</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">지원 동기</p>
                    <p className="font-medium mt-1">{selectedApplication.motivation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">가게 소개</p>
                    <p className="font-medium mt-1">{selectedApplication.storeIntro}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">홍보 영상 아이디어</p>
                    <p className="font-medium mt-1">{selectedApplication.videoIdea}</p>
                  </div>
                </div>
              </div>

              {/* 상태 및 액션 */}
              <div className="flex justify-between items-center pt-4 border-t">
                <div>
                  현재 상태: {getStatusBadge(selectedApplication.status)}
                  {selectedApplication.status === "rejected" && selectedApplication.rejectionReason && (
                    <p className="text-sm text-red-600 mt-1">반려 사유: {selectedApplication.rejectionReason}</p>
                  )}
                </div>
                {selectedApplication.status === "pending" && (
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleStatusChange(selectedApplication.id, "approved")}
                      className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                    >
                      승인
                    </button>
                    <button
                      onClick={() => {
                        const reason = prompt("반려 사유를 입력하세요:");
                        if (reason) handleStatusChange(selectedApplication.id, "rejected", reason);
                      }}
                      className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    >
                      반려
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}