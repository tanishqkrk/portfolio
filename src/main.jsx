import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './theme/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProjectsPage from './components/ProjectsPage/ProjectsPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
    </Routes>
  </BrowserRouter>
)
