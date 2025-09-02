# Todo App

Next.js 15 기반의 Todo 관리 애플리케이션입니다. Supabase를 백엔드로 사용하여 실시간으로 할 일을 생성, 수정, 삭제할 수 있습니다.

## 🚀 프로젝트 구성

- **프레임워크**: Next.js 15.5.2 (App Router)
- **언어**: TypeScript
- **스타일링**: Tailwind CSS 4
- **데이터베이스**: Supabase
- **주요 기능**: CRUD Todo 관리

## 📋 주요 기능

- ✅ Todo 생성, 수정, 삭제
- 📝 제목과 설명 입력
- 🔄 완료 상태 토글
- 📱 반응형 디자인
- ⚡ 실시간 데이터 동기화

## 🛠️ 설치 및 실행

### 1. 프로젝트 클론 및 의존성 설치

```bash
# 프로젝트 디렉토리로 이동
cd todo-app

# 의존성 설치
npm install
```

### 2. 환경 변수 설정 (필수)

Supabase 연결을 위해 환경 변수 파일을 생성하고 설정해야 합니다.

```bash
# .env.local 파일 생성
touch .env.local
```

`.env.local` 파일에 다음 내용을 추가하세요:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Supabase 설정

1. [Supabase](https://supabase.com)에서 새 프로젝트 생성
2. Database > Tables에서 `todos` 테이블 생성:

```sql
CREATE TABLE todos (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  completed BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

3. Settings > API에서 URL과 anon key 복사하여 환경 변수에 설정

### 4. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 애플리케이션을 확인하세요.

## 📜 사용 가능한 스크립트

- `npm run dev` - 개발 서버 실행 (Turbopack 사용)
- `npm run build` - 프로덕션 빌드
- `npm run start` - 프로덕션 서버 실행
- `npm run lint` - ESLint 실행

## 🏗️ 프로젝트 구조

```
src/
├── app/
│   ├── api/todos/          # API 라우트
│   ├── components/         # React 컴포넌트
│   │   ├── Header.tsx
│   │   ├── TodoForm.tsx
│   │   └── TodoList.tsx
│   ├── globals.css         # 전역 스타일
│   ├── layout.tsx          # 루트 레이아웃
│   └── page.tsx            # 메인 페이지
├── lib/
│   └── supabase.ts         # Supabase 클라이언트 설정
└── types/
    └── todo.ts             # TypeScript 타입 정의
```

## ⚠️ 주의사항

- 환경 변수 설정 없이는 애플리케이션이 정상 작동하지 않습니다
- Supabase 프로젝트와 데이터베이스 테이블이 미리 설정되어 있어야 합니다
- 프로덕션 배포 시 환경 변수를 올바르게 설정해야 합니다

## 🚀 배포

### Vercel 배포

1. [Vercel](https://vercel.com)에 프로젝트 연결
2. 환경 변수 설정:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
3. 자동 배포 완료

## 📚 기술 스택

- [Next.js](https://nextjs.org) - React 프레임워크
- [Supabase](https://supabase.com) - 백엔드 서비스
- [Tailwind CSS](https://tailwindcss.com) - CSS 프레임워크
- [TypeScript](https://www.typescriptlang.org) - 타입 안전성
