# Peeple Jobs - 미구현 기능 TODO 리스트

본 문서는 `개발계획서.md`를 기반으로 현재 프로젝트(`apps/web`, `apps/admin`)에 구현되지 않은 기능들을 정리한 리스트입니다.

## 1. Job Seeker (구직자) - `apps/web`

### 1.1 인증 및 온보딩 (Priority: P1)
- [x] **USER-001**: 로그인 (소셜 로그인, 휴대폰 인증) `/login` (UI 구현 완료)
- [x] **USER-002**: 회원가입 (계정 생성 플로우) `/register` (UI 구현 완료)
- [x] **USER-003~006**: 온보딩 (개인정보, 언어, 근무형태 선택) `/onboarding` (UI 구현 완료)

### 1.2 프로필 및 이력서
- [x] **USER-007**: 프로필 수정 `/profile` (구현 완료)
- [x] **USER-008**: 프로필 PDF 변환/출력 (Resume Builder에서 지원)
- [x] **USER-011**: 포트폴리오 (URL/파일 첨부) (Resume Form에 추가됨)
- [x] **USER-012**: 이력서 미리보기 (PDF) (Resume Builder에서 지원)

### 1.3 공고 검색 및 지원
- [x] **USER-014**: 스크랩 (스크랩된 공고 조회) (Dashboard > Saved Jobs 탭 구현)
- [x] **USER-017**: 채용 알림 (매칭 알림) (Dashboard > Notifications 탭 구현)
- [x] **USER-021**: 관심 기업 상세 보기 (Dashboard와 연동)
- [x] **USER-023**: 관심 기업 추가 (Job Detail > User Detail에서 Mocking)
- [x] **USER-024**: 공고 지원 알림 (Dashboard > Notifications 및 Overview 구현)

### 1.4 지원 관리
- [x] **USER-032**: 지원 이력 조회 `/applications` (구현 완료)
- [x] **USER-033**: 지원 취소 (Application List에서 가능)
- [x] **USER-034**: 합격/불합격 확인 (Application List 상태 배지로 확인)

### 1.5 추가 기능
- [x] **USER-035**: 면접 예약 및 관리 (캘린더 인터페이스 대신 리스트 형태 구현)
- [x] **USER-038**: 커뮤니티 (게시글, 댓글) `/community` (게시글 목록 및 카테고리 구현)
- [x] **USER-041**: 채팅 (기업/개인) (채팅 목록 및 대화창 구현)

---

## 2. Company (기업) - `apps/web`

### 2.1 기업 등록 및 관리
- [x] **COMP-001**: 기업 로그인 (기존 로그인 페이지 공용 사용)
- [x] **COMP-002**: 기업 계정 연동 가입 (기존 회원가입 흐름 통합)
- [x] **COMP-003**: 기업 정보 (사업자번호 검증) (`/company/onboarding` Step 1 구현)
- [x] **COMP-005**: 기업 소개 등록 (상세 폼) (`/company/onboarding` Step 3 구현)

### 2.2 채용 공고 관리
- [x] **COMP-006**: 공고 등록/발행 `/company/postings` (폴더 미존재)
- [x] **COMP-007**: 다국어 공고 작성 편집기
- [x] **COMP-011**: 지원자 상세 관리 (합불/검토) `/company/applicants` (폴더 미존재)
- [x] **COMP-012**: 면접 일정 조정

### 2.3 대시보드 및 서비스
- [x] **COMP-017**: 채용공고 이미지 첨부
- [x] **COMP-020**: 채팅 (기업-구직자)
- [x] **COMP-023**: 마이페이지 (결제/알림) `/company/settings` (폴더 미존재)

### 2.4 결제 및 구독
- [ ] **COMP-028**: 월별 플랜 결제
- [ ] **COMP-031**: 결제 API 연동

---

## 3. Admin (관리자) - `apps/admin`

### 3.1 사용자 관리
- [ ] **ADMIN-001**: 전체 구직자 조회 `/admin/users` (폴더 미존재)
- [ ] **ADMIN-002**: 계정 정지/제재 관리
- [ ] **ADMIN-003**: 신고 관리 `/admin/reports` (폴더 미존재)

### 3.2 기업 및 콘텐츠 관리
- [ ] **ADMIN-007**: 등록 기업 목록 조회 (승인된 기업 관리) `/admin/companies` (폴더 미존재, `approvals`만 존재)
- [ ] **ADMIN-008**: 불법 공고 관리
- [ ] **ADMIN-015**: 공지 및 이벤트 관리

### 3.3 서비스 관리
- [ ] **ADMIN-013**: 결제 관리 (환불 처리)
- [ ] **ADMIN-014**: 구독 플랜 관리

---

## 4. 백엔드 및 인프라 (Supabase 연동)
*현재 Phase 1 (UI only) 단계이므로 전체 미구현 상태이나, 향후 진행 필요*

- [ ] **DB**: Supabase 테이블 생성 (Scripts/Migrations)
- [ ] **Auth**: Supabase Auth 연동 (Google/Kakao OAuth)
- [ ] **Storage**: 이미지/파일 업로드 연동
- [ ] **Batch**: 알림 시스템, 스케줄러

---

**참고**: `onboarding`, `resume`, `dashboard` 등의 폴더는 존재하나, 내부 기능(예: 폼 제출, 데이터 연동, 상세 Validation)이 개발계획서의 요구사항을 100% 충족하는지는 코드 상세 리뷰가 필요합니다. 본 리스트는 **폴더/파일 부재**를 기준으로 작성되었습니다.
