// src/types/todo.ts
export interface Todo {
    id: string
    title: string
    description?: string
    completed: boolean
    created_at: string
    updated_at: string
  }
  
  export interface CreateTodoRequest {
    title: string
    description?: string
  }
  
  export interface UpdateTodoRequest {
    id: string
    title?: string
    description?: string
    completed?: boolean
  }
  