// src/app/components/Header.tsx
export default function Header() {
    return (
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <h1 className="text-3xl font-bold text-gray-900">
            Todo App
          </h1>
          <p className="text-gray-600 mt-2">
            무료 서비스로 구축한 풀스택 웹 애플리케이션
          </p>
        </div>
      </header>
    )
  }
  