import Home from "../pages/Home";
import About from "../pages/About";
import Project from "../pages/Project";
import Contact from "../pages/Contact";

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 to-blue-100 flex flex-col scroll-smooth">

      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}