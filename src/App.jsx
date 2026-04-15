import React from "react"
import { Routes, Route } from "react-router-dom" // ❌ remove BrowserRouter
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App