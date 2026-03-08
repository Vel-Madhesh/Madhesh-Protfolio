import React from "react";
import my from "../assets/images/my.png";
import { Download, Github, Linkedin, Mail } from "lucide-react"
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen px-6 md:px-16 py-10">

      <div className="grid md:grid-cols-2 gap-5 items-center">

        {/* TEXT */}
        <div className="w-full  text-left md:ml-10 md:mt-10 animate-fadeInUp">

          <h1
            className="font-pacifico text-4xl md:text-6xl mb-2 text-green-600 drop-shadow-lg tracking-wide"
          >
            Hi, I'm
          </h1>

          <h1 className="font-inter text-2xl md:text-4xl lg:text-5xl font-semibold mb-2">
            Mangala Eshwaran M
          </h1>

          <p className="font-inter text-base md:text-xl text-gray-600">
            Junior Web Developer
          </p>

          {/* FOR MOBILE VIEW IMAGE */}
          <div className="md:hidden m-5 flex justify-center items-center">
            <img
              src={my}
              alt="profile"
              className="w-full h-full md:w-80 md:h-80 rounded-full object-cover shadow-2xl transition-transform duration-300 ease-out hover:scale-105 p-1"
            />
          </div>

          <p className="font-inter w-full text-base md:text-lg leading-relaxed mt-5 text-gray-700 max-w-xl">
            I build modern, scalable web applications using MERN stack and clean UI design.
          </p>

          <p className="font-inter w-full text-base md:text-lg leading-relaxed mt-3 text-gray-700 max-w-xl">
            Passionate developer with hands-on experience in building responsive, high-performance web apps.
            I love turning ideas into real-world digital products.
          </p>

          {/* BUTTONS */}
          <div className=" lg:w-[570px] font-Inter grid grid-cols-2 md:grid-cols-3 font-semibold gap-2 mt-8">
            <button onClick={() => navigate("/projects")} className=" bg-yellow-400 text-black hover:bg-yellow-500 rounded-md">
              PROJECTS
            </button>

            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Mangala_Eshwaran_MERN_STACK_DEV_Resume.pdf";
                link.download = "Mangala_Eshwaran_MERN_STACK_DEV_Resume.pdf";
                link.click();
              }}
              className="flex items-center justify-center gap-2 bg-yellow-400 text-black hover:bg-yellow-500 px-5 py-2.5 rounded-md font-semibold transition-all duration-200"
            >
              <Download size={20} />
              <span>RESUME</span>
            </button>
            {/* <a
              href="/Mangala_Eshwaran_MERN_STACK_DEV_Resume.pdf"
              download
              className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-md"
            >
              <Download size={18} />
              Resume
            </a> */}

            <div className="hidden mt-2 md:flex gap-8 justify-center">
              <div className="grid grid-cols-3 gap-3">
                {/* GITHUB */}
                <a
                  href="https://github.com/Vel-Madhesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black text-xl p-2 rounded-full cursor-pointer transition-all duration-300 ease-out 
              hover:scale-110 hover:bg-black hover:text-white"
                >
                  <Github />
                </a>

                {/* LINKEDIN */}
                <a
                  href="https://www.linkedin.com/in/mangalaeshwaran-m"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 text-xl p-2 rounded-full cursor-pointer
                transition-all duration-300 ease-out
                hover:scale-110 hover:bg-blue-600 hover:text-white"
                >
                  <Linkedin />
                </a>

                {/* MAIL */}
                <a
                  href="mailto:mangaleshwaran126@email.com"
                  className="text-red-500 text-xl p-2 rounded-full cursor-pointer
                transition-all duration-300 ease-out
                hover:scale-110 hover:bg-red-500 hover:text-white"
                >
                  <Mail />
                </a>
              </div>

            </div>
          </div>

          {/* SOCIAL MEDIA ICONS */}
          <div className="md:hidden mt-2 flex gap-8 justify-center">

            {/* GITHUB */}
            <a
              href="https://github.com/Vel-Madhesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-xl p-2 rounded-full cursor-pointer transition-all duration-300 ease-out 
              hover:scale-110 hover:bg-black hover:text-white"
            >
              <Github />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/mangalaeshwaran-m"
              className="text-blue-600 text-xl p-2 rounded-full cursor-pointer
                transition-all duration-300 ease-out
                hover:scale-110 hover:bg-blue-600 hover:text-white"
            >
              <Linkedin />
            </a>

            {/* MAIL */}
            <a
              href="mailto:mangaleshwaran126@email.com"
              className="text-red-500 text-xl p-2 rounded-full cursor-pointer
                transition-all duration-300 ease-out
                hover:scale-110 hover:bg-red-500 hover:text-white"
            >
              <Mail />
            </a>
          </div>

        </div>

        {/* IMAGE */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src={my}
            alt="profile"
            className="md:w-96 md:h-full md:ml-10
            rounded-full object-cover
            shadow-2xl 
            transition-transform duration-300 ease-out
            hover:scale-105 p-1"
          />
        </div>
      </div>

    </div>
  );
}