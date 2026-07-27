import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import Home from './pages/Home.tsx'
import Work from './pages/Work.tsx'
import About from './pages/About.tsx'
import Contact from './pages/Contact.tsx'
import Sandbox from './pages/Sandbox.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="work" element={<Work />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="sandbox" element={<Sandbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
