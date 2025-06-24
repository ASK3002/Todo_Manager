import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'
function App() {
  const [todos, setTodos] =useState([]);

  const todoAdd = (todo) => {
    setTodos((prevTodos)=>[{id: Date.now(),...todo}, ...prevTodos]);
  }

  const todoDelete=(id)=>{
    setTodos((prevTodos)=>prevTodos.filter((todo)=>todo.id!=id))
  }
  
  const todoUpdate=(id,todo)=>{
    setTodos((prevTodos)=>prevTodos.map((prevTodo)=>prevTodo.id===id?todo:prevTodo))
  }

  const toggleComplete=(id)=>{
    setTodos((prevTodos)=>prevTodos
    .map((prevTodo)=>prevTodo.id===id?
    { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }
  

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos]);

  
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;
  const efficiencyPercent = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;



  return (
    <TodoProvider value={{todos, todoAdd, todoDelete, todoUpdate, toggleComplete}}>
      <div className="bg-[#6fa9ff] min-h-screen py-8">
        <div className="w-full bg-cyan-400 max-w-2xl mx-auto shadow-2xl rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">Todos Manager</h1>
            <div className="mb-4">
                <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </div>
            <p className="text-center text- mb-6 mt-6 text-lg font-semibold">
              Efficiency: {completedCount} / {totalCount} tasks completed ({efficiencyPercent}%)
            </p>

            <div className="text-white text-center w-full mt-4">
              © 2025 <a href="https://ayushkaushik.dev" className="hover:underline">Ayush Singh Kaushik</a>. All Rights Reserved.
            </div>


        </div>
      </div>
    </TodoProvider>
  )
}

export default App
