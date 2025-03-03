
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainLayout from "./components/MainLayout/MainLayout.tsx"
import About from "./components/About/About.tsx"
import RegisterForm from './components/Register/Register.tsx'
import LoginForm from './components/Login/Login.tsx'
import './App.css'

function App() {

  return (

    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<About />} />
          <Route path="login" element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App


