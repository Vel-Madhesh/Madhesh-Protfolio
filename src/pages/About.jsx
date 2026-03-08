import React from 'react'
import { CodeXml, Cpu, Database, CloudUpload, Wrench, ScreenShare } from "lucide-react"
import html from "../assets/icons/html.svg"
import css from "../assets/icons/css.svg"
import js from "../assets/icons/javascript.svg"
import react from "../assets/icons/react.svg"
import node from "../assets/icons/node.svg"
import express from "../assets/icons/express.svg"
import flask from "../assets/icons/flask.svg"
import fastapi from "../assets/icons/fastapi.svg"
import mongo from "../assets/icons/mongo-db.svg"
import mysql from "../assets/icons/mysql.svg"
import sqlite from "../assets/icons/sqlite.svg"
import postgressql from "../assets/icons/postgres-sql.svg"
import aws from "../assets/icons/aws.svg"
import tailwind from "../assets/icons/tailwind.svg"
import vs from "../assets/icons/vs.svg"
import postman from "../assets/icons/postman.svg"
import vercel from "../assets/icons/vercel.svg"
import github from "../assets/icons/github.svg"
import git from "../assets/icons/git.svg"
import netlify from "../assets/icons/netlify.svg"
import render from "../assets/icons/render.svg"
import cloudinary from "../assets/icons/cloudinary.svg"
import hostinger from "../assets/icons/hostinger.svg"

export default function About() {
  return (
    <div className="flex flex-col md:ml-20 mt-10 min-h-screen w- animate-fadeInUp">
      <div className='grid lg:grid-flow-col'>

        {/* ABOUT ME CONTENT */}
        <div>
          <h1 className='font-serif text-4xl ml-4 font-bold'>
            About Me
          </h1>
          <div className='m-2'>
            <p className='m-2 md:text-lg lg:w-[600px] text-left font-thin'>
              I am a Full Stack Developer experienced in the MERN stack, capable of developing complete web applications from intuitive
              frontend interfaces to robust backend systems. My expertise lies in React and modern web technologies, with a strong emphasis
              on clean design and responsiveness.
            </p>
            <p className='m-2 md:text-lg  lg:w-[600px] text-left font-thin'>
              In addition, I am a Python developer currently deepening my backend knowledge with Flask and FastAPI. I am committed to
              continuous learning and focused on building scalable, maintainable, and user-centric applications.
            </p>
          </div>
        </div>

        <div className='border-l-2 border-dashed border-gray-400'></div>
        
        {/* EXPERIENCE CONTENT */}
        <div>
          <h1 className='font-serif text-4xl ml-4 font-bold'>
            Experience
          </h1>
          <div className='m-2'>
            <p className='m-2 md:text-lg  lg:w-auto text-left font-bold md:font-semibold'>
              Junior Web Developer
            </p>
            <p className='m-2 md:text-lg  lg:w-auto text-left font-thin'>
              Sharpened Mind Tech & Solutions - Madurai <br />
              Sep-2025 to Feb-2026
            </p>
          </div>

          <div className='m-2 w-fit'>
            <p className='m-2 md:text-lg  lg:w-auto text-left font-bold md:font-semibold'>
              AI & ML Trainer ( Freelancer )
            </p>
            <p className='m-2 md:text-lg  lg:w-auto text-left font-thin'>
              Elysium Technologies - Madurai <br />
              Nov-2024 to Feb-2025
            </p>
          </div>
        </div>

      </div>

      {/* SKILLS */}
      <div className='grid justify-center  m-3 md:mr-20 mb-10 border-2 border-dashed border-gray-500 bg-yellow-300 rounded-2xl'>
        <h1 className='font-Anta text-2xl ml-5 mt-5 font-semibold text-center'>
          Skills
        </h1>
        <div className='grid lg:grid-cols-3'>
          {/* FRONTEND */}
          <div className='m-5 mb-0'>
            <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
            <div className='m-5 flex gap-3 justify-center'>
              {/* <img src={html} alt="HTML" title='HTML' className='w-10' />
              <img src={css} alt="CSS" title='CSS' className='w-10' /> */}
              <img src={js} alt="JavaScript" title='JavaScript' className='w-10 border border-gray-600 rounded-xl' />
              <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
              <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
            </div>
          </div>

          {/* BACKEND */}
          <div className='m-5 mb-0'>
            <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
            <div className='m-5 flex gap-3 justify-center'>
              <img src={node} alt="Node Js" title='Node Js' className='w-12' />
              <img src={express} alt="Express Js" title='Express Js' className='w-12' />
              <img src={flask} alt="Flask" title='Flask' className='w-12' />
              <img src={fastapi} alt="FastAPI" title='FastAPI' className='w-12' />
            </div>
          </div>

          {/* DATABASE */}
          <div className='m-5 mb-0'>
            <span className='flex gap-3 md:justify-center'><Database size={"25px"} />DATABASE</span>
            <div className='m-5 flex gap-3 justify-center'>
              <img src={mongo} alt="MongoDB" title='MongoDB' className='w-10' />
              <img src={mysql} alt="MySQL" title='MySQL' className='w-10' />
              <img src={sqlite} alt="SQLite" title="SQLite" className='w-10' />
              <img src={postgressql} alt="PostgreSQL" title="PostgreSQL" className='w-10' />
            </div>
          </div>

          {/* CLOUD STORAGE */}
          <div className='m-5 mb-0'>
            <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
            <div className='m-5 flex gap-3 justify-center'>
              <img src={aws} alt="AWS S3 Bucket" title="AWS S3 Bucket" className='w-10' />
              <img src={cloudinary} alt="Cloudinary" title="Cloudinary" className='w-10' />
            </div>
          </div>

          {/* TOOLS */}
          <div className='m-5 mb-0'>
            <span className='flex gap-3 md:justify-center'><Wrench size={"25px"} />TOOLS</span>
            <div className='m-5 flex gap-3 justify-center'>
              <img src={vs} alt="VS Code" title="VS Code" className='w-10' />
              <img src={postman} alt="Postman" title="Postman" className='w-10' />
              <img src={github} alt="GitHub" title="GitHub" className='w-10' />
              <img src={git} alt="Git" title="Git" className='w-10' />
            </div>
          </div>

          {/* DEPLOYMENT TOOLS */}
          <div className='m-5 mb-0'>
            <span className='flex gap-3 md:justify-center'><ScreenShare size={"25px"} />HOSTING TOOLS</span>
            <div className='m-5 flex gap-3 justify-center'>
              <img src={vercel} alt="Vercel" title="Vercel" className='w-10' />
              <img src={netlify} alt="Netlify" title="Netlify" className='w-10' />
              <img src={render} alt="Render" title="Render" className='w-10' />
              <img src={hostinger} alt="Hostinger" title="Hostinger" className='w-10' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
