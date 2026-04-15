import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white px-6 py-12 border-t border-gray-800">

      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400">
            Mangala Eshwaran M
          </h2>

          <p className="text-gray-400 mt-2 max-w-md text-sm">
            MERN Stack Developer passionate about building modern web
            applications and scalable full-stack solutions.
          </p>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-wrap justify-center gap-6 text-gray-300 font-medium">
          <a href="/Madhesh-Protfolio/" className="hover:text-yellow-400 transition">Home</a>
          <a href="/Madhesh-Protfolio/about" className="hover:text-yellow-400 transition">About</a>
          <a href="/Madhesh-Protfolio/projects" className="hover:text-yellow-400 transition">Projects</a>
          <a href="/Madhesh-Protfolio/contact" className="hover:text-yellow-400 transition">Contact</a>
        </div>

        {/* SOCIAL ICONS */}
        <div className="flex gap-4">

          <a
            href="https://github.com/Vel-Madhesh"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-yellow-400 hover:text-black transition"
          >
            <Github size={20} />
          </a>

          <a
            href="https://linkedin.com/in/mangalaeshwaran-m"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-gray-900 hover:bg-blue-500 transition"
          >
            <Linkedin size={20} />
          </a>

          <a
            href="mailto:mangaleshwaran126@gmail.com"
            className="p-3 rounded-full bg-gray-900 hover:bg-red-500 transition"
          >
            <Mail size={20} />
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="text-gray-500 text-sm border-t border-gray-800 pt-6 w-full">
          © {new Date().getFullYear()} Mangala Eshwaran M 
        </div>

      </div>
    </footer>
  );
}