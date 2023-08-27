import React from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'
import { TodoApp } from './components/TodoApp'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TodoApp />
  </React.StrictMode>,
)
