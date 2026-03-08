import React from 'react'
import landing from "../assets/walkinview/landingpage.png"
import dashboard from "../assets/walkinview/dashboard.png"
import candidate from "../assets/walkinview/candidate.png"
import job from "../assets/walkinview/job post.png"
import exam from "../assets/walkinview/exam.png"
import profile from "../assets/walkinview/profile.png"

import first from "../assets/maduraiminutes/1.webp"
import second from "../assets/maduraiminutes/2.webp"
import third from "../assets/maduraiminutes/3.webp"
import fourth from "../assets/maduraiminutes/4.webp"
import fifth from "../assets/maduraiminutes/5.webp"

import nfirst from "../assets/nigazh/1.webp"
import nsecond from "../assets/nigazh/2.webp"
import nthird from "../assets/nigazh/3.webp"
import nfourth from "../assets/nigazh/4.webp"
import nfifth from "../assets/nigazh/5.webp"

import react from "../assets/icons/react.svg"
import tailwind from "../assets/icons/tailwind.svg"
import node from "../assets/icons/node.svg"
import express from "../assets/icons/express.svg"
import mongo from "../assets/icons/mongo-db.svg"
import aws from "../assets/icons/aws.svg"
import flask from "../assets/icons/flask.svg"

import { CloudUpload, CodeXml, Cpu } from "lucide-react"

import { useState } from 'react'


export default function Projects() {

  const [current, setCurrent] = useState(0)
  const [current1, setCurrent2] = useState(0)
  const [current2, setCurrent3] = useState(0)

  const walkinviewImage = [landing, dashboard, candidate, job, exam, profile]
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? walkinviewImage.length - 1 : prev - 1
    )
  }

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === walkinviewImage.length - 1 ? 0 : prev + 1
    )
  }

  const MaduraiminutesImage = [first, second, third, fourth, fifth]
  const prevSlide1 = () => {
    setCurrent2((prev) =>
      prev === 0 ? MaduraiminutesImage.length - 1 : prev - 1
    )
  }

  const nextSlide1 = () => {
    setCurrent2((prev) =>
      prev === MaduraiminutesImage.length - 1 ? 0 : prev + 1
    )
  }

  const NigazhImage = [nfirst, nsecond, nthird, nfourth, nfifth]
  const prevSlide2 = () => {
    setCurrent3((prev) =>
      prev === 0 ? NigazhImage.length - 1 : prev - 1
    )
  }

  const nextSlide2 = () => {
    setCurrent3((prev) =>
      prev === NigazhImage.length - 1 ? 0 : prev + 1
    )
  }

  return (
    <div className="m-5 min-h-screen mt-10 animate-fadeInUp">
      <h1 className='font-serif text-4xl ml-4 font-bold'>
        Projects
      </h1>
      <div>

        {/* WALKIN VIEW */}
        <div className='xl:flex flex-row'>

          <div className='m-2'>
            <h2 className='font-Poppins text-2xl m-2 font-semibold'>1.
              <a href="https://walkinview.com/" target="_blank"
                rel="noopener noreferrer" className='hover:text-blue-600 underline'>Walkin View</a>
            </h2>
            <p className='m-2 md:text-lg lg:w-[700px] text-left font-thin'>
              <b className='font-bold lg:font-semibold'>Introduction of Walkinview.com</b><br />
              Walkinview.com is an online career platform designed to help job seekers in India find walk-in interviews,
              job openings, fresher opportunities, and hiring updates across IT and non-IT sectors. It acts as a centralized
              hub for career opportunities, making job searching faster and more organized.
            </p>

            {/* MOBILE VIEW IMAGE SECTION */}
            <div className="md:hidden relative w-full md:w-[700px] overflow-hidden rounded-lg mr-4 md:m-4 ">

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}>

                {walkinviewImage.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="walkin view"
                    className="w-full flex-shrink-0"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
              >
                ❯
              </button>

            </div>

            <p className='m-2 md:text-lg  lg:w-[700px] text-left font-thin'>
              <b className='font-bold lg:font-semibold'>WHAT WALKINVIEW.COM OFFERS</b><br />
              <b className='font-bold lg:font-semibold'>Latest Walk-In Interview Updates</b>
              – Regularly updated information about walk-in interviews from companies across different industries.<br />
              <b className='font-bold lg:font-semibold'>Jobs for Freshers & Experienced Candidates</b>
              – Daily job postings suitable for both fresh graduates and professionals with experience.<br />
              <b className='font-bold lg:font-semibold'>Direct Recruiter Access</b>
              – Opportunities to connect directly with HR teams or hiring managers based on company postings.<br />
              <b className='font-bold lg:font-semibold'>Resume & Career Support Tools</b>
              – Features such as resume builders, ATS-friendly resume checks, and online skill assessments to help candidates improve their profi les and prepare better.<br />
              <b className='font-bold lg:font-semibold'>Career Guidance & Resources</b>
              – Useful career tips, hiring updates, and professional development content to support job searches and interview preparation.<br />
            </p>

            <div className='md:hidden mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='flex flex-col'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={node} alt="Node Js" title='Node Js' className='w-12' />
                    <img src={express} alt="Express Js" title='Express Js' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                    <img src={aws} alt="AWS S3 Bucket" title="AWS S3 Bucket" className='w-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="hidden md:block relative w-full md:w-[700px] overflow-hidden mr-4 md:m-4 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {walkinviewImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="walkin view"
                  className="w-full flex-shrink-0 rounded-lg shadow-sm"
                />
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❯
            </button>

            <div className='mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='grid grid-cols-3 justify-items-center'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={node} alt="Node Js" title='Node Js' className='w-12' />
                    <img src={express} alt="Express Js" title='Express Js' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                    <img src={aws} alt="AWS S3 Bucket" title="AWS S3 Bucket" className='w-10' />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <hr className="m-10 border-gray-400" />

        {/* MADURAI MINUTES MAIN*/}
        <div className='xl:flex flex-row'>

          {/* DESKTOP LEFT SIDE IMAGE VIEW  */}
          <div className="hidden xl:block relative w-full md:w-[700px] overflow-hidden mr-4 md:m-4 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current1 * 100}%)` }}
            >
              {MaduraiminutesImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="madurai minutes"
                  className="w-full flex-shrink-0 rounded-lg shadow-sm"
                />
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide1}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide1}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❯
            </button>

            <div className='mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='grid grid-cols-3 justify-items-center'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={node} alt="Node Js" title='Node Js' className='w-12' />
                    <img src={express} alt="Express Js" title='Express Js' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                    <img src={aws} alt="AWS S3 Bucket" title="AWS S3 Bucket" className='w-10' />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* FULL MOBILE VIEW CONTENT */}
          <div className='m-2'>
            <h2 className='font-Poppins text-2xl m-2 font-semibold'>2.
              <a href="https://www.maduraiminutes.in/mainnews" target="_blank"
                rel="noopener noreferrer" className='hover:text-blue-600 underline'>Madurai Minutes News Paper Site</a>
            </h2>
            <p className='m-2 md:text-lg lg:w-[700px] text-left font-thin'>
              <b className='font-bold lg:font-semibold'>Introduction of Madurai Minutes News Paper</b><br />
              Maduraiminutes is a Tamil-language news and information website focused mainly on local and regional news
              from Madurai and surrounding areas in Tamil Nadu, India. It publishes articles across different sections such as
              local events, general news, technology, cinema, sports, jobs, and daily updates.
            </p>

            <div className="md:hidden relative w-full md:w-[700px] overflow-hidden rounded-lg mr-4 md:m-4 ">

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current1 * 100}%)` }}
              >
                {MaduraiminutesImage.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="madurai minutes"
                    className="w-full flex-shrink-0"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide1}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide1}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
              >
                ❯
              </button>
            </div>

            <p className='m-2 md:text-lg  lg:w-[700px] text-left font-thin'>
              <b className='font-bold lg:font-semibold'>Who Benefits Most ?</b><br />
              <b className='lg:font-semibold'>1.Residents of Madurai & nearby towns.</b><br />
              <b className='lg:font-semibold'>2.Tamil-speaking users looking for regional news</b><br />
              <b className='lg:font-semibold'>3.People tracking local events, jobs, or community issues</b><br />
              <b className='lg:font-semibold'>4.Students and professionals wanting updates on city developments</b><br />
            </p>

            <div className=' md:hidden xl:hidden mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='flex flex-col'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={node} alt="Node Js" title='Node Js' className='w-12' />
                    <img src={express} alt="Express Js" title='Express Js' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                    <img src={aws} alt="AWS S3 Bucket" title="AWS S3 Bucket" className='w-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block xl:hidden relative w-full md:w-[700px] overflow-hidden mr-4 md:m-4 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current1 * 100}%)` }}
            >
              {MaduraiminutesImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="walkin view"
                  className="w-full flex-shrink-0 rounded-lg shadow-sm"
                />
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide1}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide1}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❯
            </button>

            <div className='mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='grid grid-cols-3 justify-items-center'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={node} alt="Node Js" title='Node Js' className='w-12' />
                    <img src={express} alt="Express Js" title='Express Js' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                    <img src={aws} alt="AWS S3 Bucket" title="AWS S3 Bucket" className='w-10' />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        <hr className="m-10 border-gray-400" />

        {/* NIGAZH BILLING */}
        <div className='xl:flex flex-row'>

          <div className='m-2'>
            <h2 className='font-Poppins text-2xl m-2 font-semibold'>3.
              <a href="https://nigazh-billing.sharpenedmindtechnologies.com/" target="_blank"
                rel="noopener noreferrer" className='hover:text-blue-600 underline'>Nigazh Billing</a>
            </h2>
            <p className='m-2 md:text-lg lg:w-[700px] text-left font-thin'>
              <b className='font-bold lg:font-semibold'>Introduction of Nigazh Billing</b><br />
              Nigazh Billing is a cloud-based billing and invoice management platform designed to help businesses handle 
              sales transactions efficiently. It allows users to generate invoices, manage customer details, track payments, 
              and view sales reports from a centralized dashboard. The system streamlines the billing process and reduces 
              manual record keeping.
            </p>

            {/* MOBILE VIEW IMAGE SECTION */}
            <div className="md:hidden relative w-full md:w-[700px] overflow-hidden rounded-lg mr-4 md:m-4 ">

              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${current2 * 100}%)` }}>

                {NigazhImage.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt="walkin view"
                    className="w-full flex-shrink-0"
                  />
                ))}
              </div>

              {/* Left Arrow */}
              <button
                onClick={prevSlide2}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
              >
                ❮
              </button>

              {/* Right Arrow */}
              <button
                onClick={nextSlide2}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
              >
                ❯
              </button>

            </div>

            <p className='m-2 md:text-lg  lg:w-[700px] text-left font-thin'>
              <b className='font-bold lg:font-semibold'>Main Features</b><br />
              <b className='font-bold lg:font-semibold'>Invoice & Bill Creation</b>
              – Create professional invoices quickly, Auto calculation of totals and taxes and Send invoices to customers online.<br />
              <b className='font-bold lg:font-semibold'>Business Management</b>
              – Customer management, Product or service listing and Billing history and reports.<br />
              <b className='font-bold lg:font-semibold'>Reports & Analytics</b>
              – Sales reports, Revenue tracking and Business performance dashboards.<br />
              <b className='font-bold lg:font-semibold'>Online Access</b>
              – Cloud-based system & Accessible from any device with internet.<br />
            </p>

            <div className='md:hidden mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='flex flex-col'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={flask} alt="Flask" title='Flask' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="hidden md:block relative w-full md:w-[700px] overflow-hidden mr-4 md:m-4 ">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current2 * 100}%)` }}
            >
              {NigazhImage.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt="Nigazh Billing"
                  className="w-full flex-shrink-0 rounded-lg shadow-sm"
                />
              ))}
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide2}
              className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❮
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide2}
              className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/80 hover:bg-white text-black w-10 h-10 rounded-full shadow-md"
            >
              ❯
            </button>

            <div className='mt-5 border-2 border-dashed border-gray-400 rounded-lg'>
              <h1 className='font-serif text-xl m-2'>
                Tech Stack
              </h1>
              <div className='grid grid-cols-3 justify-items-center'>
                {/* FRONTEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CodeXml size={"25px"} />FRONTEND</span>
                  <div className='m-5 flex gap-3 justify-center'>

                    <img src={react} alt="React Js" title='React Js' className='w-12 animate-spin [animation-duration:5s]' />
                    <img src={tailwind} alt="Tailwind CSS" title='Tailwind CSS' className='w-12' />
                  </div>
                </div>
                {/* BACKEND */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><Cpu size={"25px"} />BACKEND</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={flask} alt="Flask" title='Flask' className='w-12' />
                  </div>
                </div>
                {/* DB */}
                <div className='m-3 mb-0'>
                  <span className='flex gap-3 md:justify-center'><CloudUpload size={"25px"} />CLOUD STORAGE</span>
                  <div className='m-5 flex gap-3 justify-center'>
                    <img src={mongo} alt="AWS S3 Bucket" title="Mongo DB Atlas" className='w-10' />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
