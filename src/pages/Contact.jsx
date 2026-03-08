import React, {useState} from "react";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = `Portfolio Contact from ${name}`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    window.location.href = `mailto:mangaleshwaran126@gmail.com?subject=${subject}&body=${body}`;
  };


  return (
    <section id="contact" className="min-h-screen px-6 py-20 bg-gradient-to-b from-white to-gray-100">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="font-serif text-4xl font-bold text-gray-900">
          Contact Me
        </h1>

        <p className="text-gray-500 mt-2 font-serif text-xl">
          Let's build something amazing together
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* CONTACT INFO */}
        <div className="space-y-8">

          <h2 className="text-2xl font-semibold text-gray-600">
            Get In Touch
          </h2>

          <p className="text-gray-500 max-w-md font-serif text-xl">
            I'm open to work, collaborations, and freelance opportunities.
            Feel free to reach out anytime.
          </p>

          {/* CONTACT ITEMS */}
          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-400 rounded-full">
                <Mail className="text-gray-600" />
              </div>
              <span className="text-gray-700 font-mono">
                mangaleshwaran126@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-400 rounded-full">
                <Phone className="text-gray-600" />
              </div>
              <span className="text-gray-700 font-mono">
                +91 93845 56722
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-2 bg-yellow-400 rounded-full">
                <MapPin className="text-gray-600" />
              </div>
              <span className="text-gray-700 font-mono">
                Madurai, Tamil Nadu
              </span>
            </div>

          </div>

          {/* SOCIAL LINKS */}
          <div className="flex gap-4 pt-4">

            <a
              href="https://github.com/Vel-Madhesh"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white border shadow rounded-full hover:bg-black hover:text-white transition"
            >
              <Github size={20} />
            </a>

            <a
              href="https://linkedin.com/in/mangalaeshwaran-m"
              target="_blank"
              rel="noreferrer"
              className="p-3 bg-white border shadow rounded-full hover:bg-blue-500 hover:text-white text-black transition"
            >
              <Linkedin size={20} />
            </a>

          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border">

          <form onSubmit={handleSubmit} className="space-y-5">

        <input
          type="text"
          placeholder="Your Name"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border rounded-lg focus:border-black outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 border rounded-lg focus:border-black outline-none"
        />

        <textarea
          rows="5"
          placeholder="Your Message"
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-3 border rounded-lg focus:border-black outline-none resize-none"
        />

        <button
          type="submit"
          className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-lg hover:bg-yellow-500 transition"
        >
          Send Message
        </button>

      </form>
        </div>

      </div>
    </section>
  );
}