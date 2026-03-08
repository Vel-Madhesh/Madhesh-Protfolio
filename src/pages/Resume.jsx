import React from "react";
import { Download } from "lucide-react";

export default function Resume() {
  return (
    <div className="min-h-screen px-6 py-10">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE - PDF PREVIEW */}
        <div className="border rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="/Mangala_Eshwaran_MERN_STACK_DEV_Resume.pdf"
            title="Resume"
            className="w-full h-[600px]"
          />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="space-y-6">

          <h1 className="font-serif text-4xl font-bold">
            My Resume
          </h1>

          <p className="text-gray-500 text-lg">
            View or download my professional resume.  
          </p>

          {/* DOWNLOAD BUTTON */}
          <a
            href="/Mangala_Eshwaran_MERN_STACK_DEV_Resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition shadow-md"
          >
            <Download size={18} />
            Download Resume
          </a>

        </div>

      </div>

    </div>
  );
}