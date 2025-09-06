"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function QnaManagement() {
  const [selectedTab, setSelectedTab] = useState("questions");
  const [selectedQuestion, setSelectedQuestion] = useState<any>(null);
  const [answerText, setAnswerText] = useState("");

  // 데모 Q&A 데이터
  const questions = [
    {
      id: 1,
      title: "제출 서류 관련 문의드립니다",
      content: "안녕하세요. 사업자등록증 외에 추가로 제출해야 하는 서류가 있나요? 그리고 주민등록초본은 언제까지 발급받은 것이어야 하나요?",
      author: "김지민",
      email: "jimin@example.com",
      category: "제출서류",
      createdAt: "2024-09-06 15:00",
      views: 23,
      isPublic: true,
      answered: false,
      answer: null
    },
    {
      id: 2,
      title: "선정 기준이 궁금합니다",
      content: "소상공인 선정 기준이 어떻게 되나요? 매출 기준이나 직원 수 제한이 있는지 알고 싶습니다.",
      author: "박서연",
      email: "seoyeon@example.com",
      category: "자격요건",
      createdAt: "2024-09-06 14:20",
      views: 45,
      isPublic: true,
      answered: false,
      answer: null
    },
    {
      id: 3,
      title: "지원 자격 확인 요청",
      content: "저는 관악구에서 카페를 운영하고 있는데, 프랜차이즈 카페도 지원 가능한가요?",
      author: "이준호",
      email: "junho@example.com",
      category: "자격요건",
      createdAt: "2024-09-06 13:10",
      views: 67,
      isPublic: true,
      answered: true,
      answer: {
        content: "프랜차이즈 사업장은 본 지원사업 대상에서 제외됩니다. 개인 사업자로 운영되는 독립 점포만 지원 가능합니다.",
        answeredBy: "관리자",
        answeredAt: "2024-09-06 13:30"
      }
    },
    {
      id: 4,
      title: "사업자등록증 관련",
      content: "사업자등록증을 분실했는데 어떻게 해야 하나요?",
      author: "정민지",
      email: "minji@example.com",
      category: "제출서류",
      createdAt: "2024-09-06 12:00",
      views: 34,
      isPublic: false,
      answered: true,
      answer: {
        content: "국세청 홈택스에서 사업자등록증명원을 발급받아 제출하시면 됩니다. 온라인으로 즉시 발급 가능합니다.",
        answeredBy: "관리자",
        answeredAt: "2024-09-06 12:15"
      }
    },
    {
      id: 5,
      title: "홍보 영상 제작 관련 문의",
      content: "홍보 영상은 어떤 방식으로 제작되나요? 직접 참여해야 하나요?",
      author: "최영수",
      email: "youngsoo@example.com",
      category: "사업내용",
      createdAt: "2024-09-06 11:30",
      views: 89,
      isPublic: true,
      answered: true,
      answer: {
        content: "선정된 업체에 전문 촬영팀이 방문하여 협의 후 촬영을 진행합니다. 사업주님의 인터뷰나 간단한 출연이 필요할 수 있습니다.",
        answeredBy: "관리자",
        answeredAt: "2024-09-06 11:45"
      }
    }
  ];

  // FAQ 데이터
  const faqs = [
    {
      id: 1,
      question: "지원 자격은 어떻게 되나요?",
      answer: "관악구에 사업장을 둔 소상공인(상시근로자 5인 미만)이면 지원 가능합니다. 프랜차이즈, 대기업 계열사는 제외됩니다.",
      category: "자격요건",
      order: 1,
      views: 234
    },
    {
      id: 2,
      question: "제출 서류는 무엇인가요?",
      answer: "사업자등록증, 주민등록초본(관악구 거주자만), 신청서가 필요합니다.",
      category: "제출서류",
      order: 2,
      views: 189
    },
    {
      id: 3,
      question: "선정 절차는 어떻게 되나요?",
      answer: "서류 심사 → 현장 실사 → 최종 선정 순으로 진행되며, 총 2-3주 소요됩니다.",
      category: "선정절차",
      order: 3,
      views: 156
    },
    {
      id: 4,
      question: "홍보 영상은 어떻게 활용되나요?",
      answer: "제작된 영상은 관악구 공식 SNS, 유튜브 채널에 게시되며, 사업주님도 자유롭게 활용 가능합니다.",
      category: "사업내용",
      order: 4,
      views: 142
    },
    {
      id: 5,
      question: "지원금이 있나요?",
      answer: "별도의 현금 지원은 없으며, 홍보 영상 제작 및 마케팅 컨설팅을 무료로 지원합니다.",
      category: "지원내용",
      order: 5,
      views: 298
    }
  ];

  const handleAnswerSubmit = (questionId: number) => {
    console.log(`Answer submitted for question ${questionId}: ${answerText}`);
    // 실제 구현시 Firebase 업데이트
    setAnswerText("");
    setSelectedQuestion(null);
  };

  const handleDeleteQuestion = (questionId: number) => {
    if (confirm("정말 이 질문을 삭제하시겠습니까?")) {
      console.log(`Question ${questionId} deleted`);
      // 실제 구현시 Firebase 삭제
    }
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
          
          <Link href="/admin/applications">
            <button className="w-full text-left px-6 py-3 hover:bg-gray-50 text-gray-700">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                지원서 관리
              </span>
            </button>
          </Link>
          
          <button className="w-full text-left px-6 py-3 bg-blue-50 border-r-4 border-blue-500 text-blue-600">
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
              </svg>
              Q&A 관리
            </span>
          </button>
        </nav>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Q&A 관리</h1>
            <p className="text-gray-600 mt-2">사용자 질문에 답변하고 FAQ를 관리합니다</p>
          </div>

          {/* 탭 */}
          <div className="bg-white rounded-lg shadow mb-6">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setSelectedTab("questions")}
                  className={`py-3 px-6 border-b-2 font-medium text-sm ${
                    selectedTab === "questions"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  질문 관리 ({questions.filter(q => !q.answered).length} 미답변)
                </button>
                <button
                  onClick={() => setSelectedTab("faq")}
                  className={`py-3 px-6 border-b-2 font-medium text-sm ${
                    selectedTab === "faq"
                      ? "border-blue-500 text-blue-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  FAQ 관리 ({faqs.length})
                </button>
              </nav>
            </div>

            {/* 질문 관리 탭 */}
            {selectedTab === "questions" && (
              <div className="p-6">
                <div className="space-y-4">
                  {questions.map((question) => (
                    <div key={question.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-2">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {question.title}
                            {!question.isPublic && (
                              <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">비공개</span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">{question.content}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                            question.answered 
                              ? "bg-green-100 text-green-800" 
                              : "bg-red-100 text-red-800"
                          }`}>
                            {question.answered ? "답변완료" : "답변대기"}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">{question.author}</span>
                        <span className="mr-4">{question.category}</span>
                        <span className="mr-4">{question.createdAt}</span>
                        <span>조회 {question.views}</span>
                      </div>

                      {question.answered && question.answer && (
                        <div className="bg-blue-50 rounded p-3 mb-3">
                          <p className="text-sm font-medium text-blue-900 mb-1">답변:</p>
                          <p className="text-sm text-blue-800">{question.answer.content}</p>
                          <p className="text-xs text-blue-600 mt-2">
                            {question.answer.answeredBy} • {question.answer.answeredAt}
                          </p>
                        </div>
                      )}

                      <div className="flex gap-2">
                        {!question.answered && (
                          <button
                            onClick={() => setSelectedQuestion(question)}
                            className="px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
                          >
                            답변하기
                          </button>
                        )}
                        <button
                          onClick={() => handleDeleteQuestion(question.id)}
                          className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* FAQ 관리 탭 */}
            {selectedTab === "faq" && (
              <div className="p-6">
                <div className="mb-4">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    + FAQ 추가
                  </button>
                </div>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.id} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Q. {faq.question}
                          </h3>
                          <p className="text-gray-700 mt-2">A. {faq.answer}</p>
                          <div className="flex items-center text-sm text-gray-500 mt-3">
                            <span className="mr-4">카테고리: {faq.category}</span>
                            <span className="mr-4">순서: {faq.order}</span>
                            <span>조회수: {faq.views}</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-3 py-1 bg-gray-600 text-white text-sm rounded hover:bg-gray-700">
                            수정
                          </button>
                          <button className="px-3 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700">
                            삭제
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 답변 작성 모달 */}
      {selectedQuestion && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full">
            <div className="p-6 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">답변 작성</h2>
                <button
                  onClick={() => {
                    setSelectedQuestion(null);
                    setAnswerText("");
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <div className="mb-4">
                <h3 className="font-semibold text-gray-900 mb-2">질문</h3>
                <div className="bg-gray-50 rounded p-3">
                  <p className="font-medium">{selectedQuestion.title}</p>
                  <p className="text-sm text-gray-600 mt-1">{selectedQuestion.content}</p>
                  <p className="text-xs text-gray-500 mt-2">
                    {selectedQuestion.author} • {selectedQuestion.createdAt}
                  </p>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  답변 내용
                </label>
                <textarea
                  value={answerText}
                  onChange={(e) => setAnswerText(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={6}
                  placeholder="답변을 입력하세요..."
                />
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => {
                    setSelectedQuestion(null);
                    setAnswerText("");
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                >
                  취소
                </button>
                <button
                  onClick={() => handleAnswerSubmit(selectedQuestion.id)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  disabled={!answerText.trim()}
                >
                  답변 등록
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}