// src/app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import { Todo } from '@/types/todo'
import TodoList from '@/app/components/TodoList'
import TodoForm from '@/app/components/TodoForm'
import Header from '@/app/components/Header'

export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Todo 목록 가져오기
  const fetchTodos = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/todos')
      if (!response.ok) throw new Error('Failed to fetch todos')
      
      const data = await response.json()
      setTodos(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  // Todo 추가
  const addTodo = async (title: string, description?: string) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description })
      })
      
      if (!response.ok) throw new Error('Failed to create todo')
      
      const newTodo = await response.json()
      setTodos(prev => [newTodo, ...prev])
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add todo')
    }
  }

  // Todo 업데이트
  const updateTodo = async (id: string, updates: Partial<Todo>) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, ...updates })
      })
      
      if (!response.ok) throw new Error('Failed to update todo')
      
      const updatedTodo = await response.json()
      setTodos(prev => prev.map(todo => 
        todo.id === id ? updatedTodo : todo
      ))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update todo')
    }
  }

  // Todo 삭제
  const deleteTodo = async (id: string) => {
    try {
      const response = await fetch('/api/todos', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id })
      })
      
      if (!response.ok) throw new Error('Failed to delete todo')
      
      setTodos(prev => prev.filter(todo => todo.id !== id))
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete todo')
    }
  }

  useEffect(() => {
    fetchTodos()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
            {error}
            <button 
              onClick={() => setError(null)}
              className="float-right font-bold cursor-pointer"
            >
              ×
            </button>
          </div>
        )}
        
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-1">
            <TodoForm onSubmit={addTodo} />
          </div>
          
          <div className="md:col-span-2">
            <TodoList 
              todos={todos}
              onUpdate={updateTodo}
              onDelete={deleteTodo}
            />
          </div>
        </div>
      </main>
    </div>
  )
}