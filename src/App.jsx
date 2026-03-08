import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Projects from "./pages/Projects.jsx"
import Contact from "./pages/Contact.jsx"
// import Resume from "./pages/Resume.jsx"
import Footer from "./components/Footer.jsx"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/resume" element={<Resume />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
