# 관악구 소상공인 마케팅 지원 시스템 - Q&A 및 로그인 기능 구현 계획서

## 1. 프로젝트 현황 분석

### 1.1 현재 구조
- **Framework**: Next.js 15.5.2 (App Router)
- **UI**: Tailwind CSS v4 + 커스텀 인라인 스타일
- **배포**: Vercel (Seoul Region)
- **현재 페이지**:
  - `/` - 메인 랜딩 페이지
  - `/about` - 사업 소개
  - `/apply` - 지원 자격 확인
  - `/application-form` - 지원서 작성

### 1.2 현재 문제점
- 사용자 인증 시스템 부재
- 지원서 제출 후 확인 방법 없음
- 문의사항 처리 채널 부재
- 지원 현황 추적 불가

## 2. 기능 요구사항

### 2.1 카카오 로그인 (Firebase Auth)
#### 목적
- 간편한 사용자 인증
- 지원서 제출 여부 확인
- 개인정보 최소 수집

#### 주요 기능
1. **카카오톡 OAuth 로그인**
   - Firebase Auth의 카카오 Provider 활용
   - 최초 로그인 시 자동 회원가입
   - 이름, 이메일 정보만 수집

2. **사용자 상태 관리**
   - 로그인 상태 유지 (세션/쿠키)
   - 지원서 제출 여부 확인
   - 마이페이지에서 제출 현황 조회

3. **접근 권한 관리**
   - 미로그인: 정보 열람만 가능
   - 로그인: 지원서 작성 및 제출 가능
   - 제출 완료: 수정 불가, 조회만 가능

### 2.2 Q&A 게시판
#### 목적
- 실시간 문의사항 처리
- FAQ 제공으로 반복 질문 감소
- 투명한 정보 공유

#### 주요 기능
1. **FAQ 섹션**
   - 자주 묻는 질문 10-15개 사전 등록
   - 카테고리별 분류 (자격요건, 제출서류, 일정, 혜택 등)
   - 검색 기능

2. **실시간 Q&A**
   - 로그인 사용자만 질문 작성
   - 관리자 답변 기능
   - 공개/비공개 설정
   - 답변 알림 (카카오 알림톡 연동 가능)

3. **검색 및 필터링**
   - 키워드 검색
   - 카테고리별 필터
   - 답변완료/대기 상태 필터
   - 내 질문 보기

## 3. 기술 스택 및 아키텍처

### 3.1 추가 기술 스택
```json
{
  "dependencies": {
    "firebase": "^10.x",
    "firebase-admin": "^12.x",
    "react-firebase-hooks": "^5.x",
    "next-auth": "^4.x (옵션)",
    "@tanstack/react-query": "^5.x",
    "zustand": "^4.x (상태관리)",
    "react-hook-form": "^7.x",
    "zod": "^3.x (유효성 검증)"
  }
}
```

### 3.2 데이터베이스 구조 (Firestore)
```javascript
// Users Collection
users/{userId} {
  uid: string,
  email: string,
  name: string,
  kakaoId: string,
  createdAt: timestamp,
  applicationSubmitted: boolean,
  applicationId?: string,
  role: 'user' | 'admin'
}

// Applications Collection
applications/{applicationId} {
  userId: string,
  formData: {...}, // 기존 form 데이터
  submittedAt: timestamp,
  status: 'pending' | 'reviewing' | 'approved' | 'rejected',
  statusMessage?: string
}

// QnA Collection
questions/{questionId} {
  userId: string,
  userName: string,
  title: string,
  content: string,
  category: string,
  isPublic: boolean,
  createdAt: timestamp,
  answered: boolean,
  answer?: {
    content: string,
    answeredBy: string,
    answeredAt: timestamp
  },
  views: number
}

// FAQ Collection
faqs/{faqId} {
  question: string,
  answer: string,
  category: string,
  order: number,
  views: number
}
```

### 3.3 파일 구조
```
/app
  /auth
    /login
      page.tsx          # 로그인 페이지
    /callback
      page.tsx          # 카카오 콜백 처리
  /mypage
    page.tsx           # 마이페이지
  /qna
    page.tsx           # Q&A 목록
    /[id]
      page.tsx         # Q&A 상세
    /write
      page.tsx         # 질문 작성
  /admin
    page.tsx           # 관리자 대시보드
    /qna
      page.tsx         # Q&A 관리
    /applications
      page.tsx         # 지원서 관리

/components
  /auth
    KakaoLoginButton.tsx
    AuthProvider.tsx
    ProtectedRoute.tsx
  /qna
    QnaList.tsx
    QnaItem.tsx
    QnaForm.tsx
    FaqSection.tsx
  /common
    Header.tsx         # 로그인 상태 표시 추가

/lib
  /firebase
    config.ts          # Firebase 설정
    auth.ts           # 인증 관련 함수
    db.ts             # Firestore 함수
  /hooks
    useAuth.ts        # 인증 훅
    useQna.ts         # Q&A 훅
  /utils
    validation.ts     # 유효성 검증
```

## 4. 구현 단계별 계획

### Phase 1: 기초 설정 (2-3일)
1. Firebase 프로젝트 생성 및 설정
2. 카카오 개발자 앱 등록
3. 환경 변수 설정
4. Firebase SDK 초기화
5. 기본 인증 Provider 설정

### Phase 2: 인증 시스템 (3-4일)
1. 카카오 로그인 버튼 컴포넌트
2. AuthContext/Provider 구현
3. 로그인/로그아웃 플로우
4. 세션 관리
5. Protected Route 구현
6. 헤더에 로그인 상태 표시

### Phase 3: 마이페이지 (2일)
1. 사용자 정보 표시
2. 지원서 제출 상태 확인
3. 제출한 지원서 조회
4. 내 질문 목록

### Phase 4: Q&A 기능 (4-5일)
1. FAQ 데이터 입력 및 표시
2. Q&A 목록 페이지
3. 질문 작성 폼
4. 질문 상세 페이지
5. 검색 및 필터링
6. 페이지네이션

### Phase 5: 관리자 기능 (3-4일)
1. 관리자 인증 및 라우팅
2. Q&A 답변 기능
3. 지원서 목록 조회
4. 상태 업데이트
5. 통계 대시보드

### Phase 6: 기존 기능 통합 (2일)
1. 지원서 폼과 인증 연동
2. 제출 시 Firestore 저장
3. 중복 제출 방지
4. 에러 처리

### Phase 7: 테스트 및 배포 (2일)
1. 단위 테스트
2. 통합 테스트
3. 사용자 시나리오 테스트
4. Vercel 환경 변수 설정
5. 프로덕션 배포

## 5. 보안 고려사항

1. **Firebase Security Rules**
   - 사용자는 본인 데이터만 읽기/쓰기
   - 관리자만 모든 데이터 접근
   - Q&A 공개 글은 모두 읽기 가능

2. **환경 변수 관리**
   - `.env.local`에 민감 정보 저장
   - Vercel 환경 변수 설정
   - 클라이언트/서버 키 분리

3. **데이터 검증**
   - 클라이언트 & 서버 이중 검증
   - XSS 방지 (HTML 새니타이징)
   - SQL Injection 방지 (Firestore 자동)

## 6. 예상 일정

- **총 소요 기간**: 약 3-4주
- **Phase 1-2**: 1주차 (Firebase 설정 + 인증)
- **Phase 3-4**: 2주차 (마이페이지 + Q&A)
- **Phase 5-6**: 3주차 (관리자 + 통합)
- **Phase 7**: 4주차 (테스트 + 배포)

## 7. 주요 리스크 및 대응 방안

### 리스크 1: 카카오 API 제한
- **대응**: 일일 할당량 모니터링, 필요시 구글/네이버 로그인 추가

### 리스크 2: Firestore 비용
- **대응**: 효율적인 쿼리 설계, 캐싱 전략, 필요시 다른 DB 고려

### 리스크 3: 관리자 부담 증가
- **대응**: FAQ 강화, 자동 답변 템플릿, 챗봇 고려

## 8. 추가 고려사항

1. **알림 시스템**
   - 답변 완료 시 카카오 알림톡
   - 이메일 알림 옵션

2. **분석 도구**
   - Google Analytics 연동
   - 사용자 행동 분석

3. **백업 전략**
   - Firestore 자동 백업
   - 주요 데이터 Export 기능

4. **확장성**
   - 다른 소셜 로그인 추가 가능
   - 실시간 채팅 기능 추가 가능
   - AI 챗봇 통합 가능

## 9. 개발 환경 설정 가이드

### 9.1 Firebase 프로젝트 설정
```bash
# Firebase CLI 설치
npm install -g firebase-tools

# Firebase 로그인
firebase login

# 프로젝트 초기화
firebase init

# 선택 옵션:
# - Firestore
# - Hosting
# - Functions (옵션)
```

### 9.2 카카오 개발자 설정
1. https://developers.kakao.com 접속
2. 애플리케이션 생성
3. 플랫폼 > Web 플랫폼 등록
4. 카카오 로그인 활성화
5. Redirect URI 설정: `https://your-domain.com/auth/callback`
6. 동의 항목 설정

### 9.3 환경 변수 예시
```env
# .env.local
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=

KAKAO_CLIENT_ID=
KAKAO_CLIENT_SECRET=
```

## 10. 예상 결과물

### 10.1 사용자 경험 개선
- 간편한 카카오 로그인
- 지원 현황 실시간 확인
- 궁금증 즉시 해결

### 10.2 관리 효율성
- 체계적인 지원서 관리
- Q&A 중앙 집중 관리
- 데이터 기반 의사결정

### 10.3 서비스 신뢰도
- 투명한 정보 공개
- 빠른 응답 시간
- 전문적인 시스템

---

작성일: 2024년 9월 6일
작성자: Claude Code Assistant