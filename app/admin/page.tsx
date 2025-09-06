"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("dashboard");

  // 데모 데이터
  const stats = {
    totalApplications: 128,
    pendingApplications: 45,
    approvedApplications: 62,
    rejectedApplications: 21,
    totalQuestions: 89,
    unansweredQuestions: 12,
    todayApplications: 8,
    todayQuestions: 5
  };

  const recentApplications = [
    { id: 1, name: "김철수", storeName: "철수네 김밥", date: "2024-09-06 14:30", status: "pending" },
    { id: 2, name: "이영희", storeName: "영희 카페", date: "2024-09-06 13:45", status: "pending" },
    { id: 3, name: "박민수", storeName: "민수 치킨", date: "2024-09-06 11:20", status: "approved" },
    { id: 4, name: "정수진", storeName: "수진이네 꽃집", date: "2024-09-06 10:15", status: "pending" },
    { id: 5, name: "최동현", storeName: "동현 문구", date: "2024-09-06 09:30", status: "rejected" },
  ];

  const recentQuestions = [
    { id: 1, title: "제출 서류 관련 문의", author: "김지민", date: "2024-09-06 15:00", answered: false },
    { id: 2, title: "선정 기준이 궁금합니다", author: "박서연", date: "2024-09-06 14:20", answered: false },
    { id: 3, title: "지원 자격 확인 요청", author: "이준호", date: "2024-09-06 13:10", answered: true },
    { id: 4, title: "사업자등록증 관련", author: "정민지", date: "2024-09-06 12:00", answered: true },
  ];

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

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 사이드바 */}
      <div className="w-64 bg-white shadow-md">
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800">관리자 패널</h2>
          <p className="text-sm text-gray-600 mt-1">관악구 소상공인 지원사업</p>
        </div>
        
        <nav className="mt-6">
          <button
            onClick={() => setActiveTab("dashboard")}
            className={`w-full text-left px-6 py-3 hover:bg-gray-50 ${
              activeTab === "dashboard" ? "bg-blue-50 border-r-4 border-blue-500 text-blue-600" : "text-gray-700"
            }`}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              대시보드
            </span>
          </button>
          
          <Link href="/admin/applications">
            <button
              onClick={() => setActiveTab("applications")}
              className={`w-full text-left px-6 py-3 hover:bg-gray-50 ${
                activeTab === "applications" ? "bg-blue-50 border-r-4 border-blue-500 text-blue-600" : "text-gray-700"
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                지원서 관리
              </span>
            </button>
          </Link>
          
          <Link href="/admin/qna">
            <button
              onClick={() => setActiveTab("qna")}
              className={`w-full text-left px-6 py-3 hover:bg-gray-50 ${
                activeTab === "qna" ? "bg-blue-50 border-r-4 border-blue-500 text-blue-600" : "text-gray-700"
              }`}
            >
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                Q&A 관리
              </span>
            </button>
          </Link>
          
          <button
            onClick={() => setActiveTab("settings")}
            className={`w-full text-left px-6 py-3 hover:bg-gray-50 ${
              activeTab === "settings" ? "bg-blue-50 border-r-4 border-blue-500 text-blue-600" : "text-gray-700"
            }`}
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              설정
            </span>
          </button>
        </nav>
        
        <div className="absolute bottom-0 w-64 p-6 border-t">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-gray-600 font-medium">관</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700">관리자</p>
              <p className="text-xs text-gray-500">admin@gwanak.go.kr</p>
            </div>
          </div>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">대시보드</h1>
            <p className="text-gray-600 mt-2">2025년 소상공인 온라인 마케팅 홍보지원 사업 관리</p>
          </div>

          {/* 통계 카드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">전체 지원서</p>
                  <p className="text-2xl font-bold text-gray-900 mt-2">{stats.totalApplications}</p>
                  <p className="text-sm text-gray-500 mt-1">오늘 +{stats.todayApplications}</p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">검토 대기</p>
                  <p className="text-2xl font-bold text-yellow-600 mt-2">{stats.pendingApplications}</p>
                  <p className="text-sm text-gray-500 mt-1">긴급 처리 필요</p>
                </div>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">승인 완료</p>
                  <p className="text-2xl font-bold text-green-600 mt-2">{stats.approvedApplications}</p>
                  <p className="text-sm text-gray-500 mt-1">{Math.round(stats.approvedApplications / stats.totalApplications * 100)}% 승인율</p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-600">미답변 질문</p>
                  <p className="text-2xl font-bold text-purple-600 mt-2">{stats.unansweredQuestions}</p>
                  <p className="text-sm text-gray-500 mt-1">오늘 +{stats.todayQuestions}</p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* 최근 지원서와 질문 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 최근 지원서 */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">최근 지원서</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentApplications.map(app => (
                    <div key={app.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{app.name}</p>
                        <p className="text-sm text-gray-500">{app.storeName}</p>
                        <p className="text-xs text-gray-400 mt-1">{app.date}</p>
                      </div>
                      <div>
                        {getStatusBadge(app.status)}
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/admin/applications" className="block mt-4 text-center text-sm text-blue-600 hover:text-blue-800">
                  모든 지원서 보기 →
                </Link>
              </div>
            </div>

            {/* 최근 질문 */}
            <div className="bg-white rounded-lg shadow">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">최근 Q&A</h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {recentQuestions.map(question => (
                    <div key={question.id} className="flex items-center justify-between py-3 border-b last:border-0">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-900">{question.title}</p>
                        <p className="text-sm text-gray-500">{question.author}</p>
                        <p className="text-xs text-gray-400 mt-1">{question.date}</p>
                      </div>
                      <div>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                          question.answered 
                            ? "bg-green-100 text-green-800" 
                            : "bg-red-100 text-red-800"
                        }`}>
                          {question.answered ? "답변완료" : "답변대기"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <Link href="/admin/qna" className="block mt-4 text-center text-sm text-blue-600 hover:text-blue-800">
                  모든 질문 보기 →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}