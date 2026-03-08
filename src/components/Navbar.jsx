import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  House,
  UserRound,
  FolderOpenDot,
  Phone,
  FileUser,
  Menu,
  X
} from "lucide-react";
import { TypeAnimation } from 'react-type-animation';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { to: "/", icon: House, label: "Home" },
    { to: "/about", icon: UserRound, label: "About Me" },
    { to: "/projects", icon: FolderOpenDot, label: "Projects" },
    { to: "/contact", icon: Phone, label: "Contact" },
    // { to: "/resume", icon: FileUser, label: "Resume" }
  ];

  /* CLOSE WHEN CLICK OUTSIDE */
  useEffect(() => {
    const handleClick = (e) => {
      const menu = document.querySelector(".mobile-menu");
      const button = document.querySelector(".menu-btn");

      if (
        menu &&
        !menu.contains(e.target) &&
        button &&
        !button.contains(e.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);
  /* CLOSE ON ESC KEY */
  useEffect(() => {
    const esc = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", esc);
    return () => window.removeEventListener("keydown", esc);
  }, []);

  /* SCROLL SHADOW */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 px-6 py-3 transition-all duration-300 ${scrolled ? "bg-black shadow-2xl" : "bg-black"
        }`}
    >
      <div className="flex justify-between items-center">

        <TypeAnimation
          sequence={[
            'Now Open To Work',
            1500,'',500
          ]}
          wrapper="span"
          speed={40}
          className="font-serif text-lg md:text-lg lg:text-2xl inline-block text-white font-semibold"
          repeat={Infinity}
        />

        {/* MOBILE BUTTON */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          className="menu-btn md:hidden text-white z-50 transition"
          onClick={(e) => {
            e.stopPropagation();
            setOpen(!open);
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-8 font-medium bg-black px-6 py-3 rounded-3xl">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <li key={i}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `flex items-center gap-2 relative transition duration-300 transform ${isActive
                      ? "text-yellow-400 after:w-full [&>svg]:stroke-yellow-400"
                      : "text-white hover:text-yellow-400 after:w-0 hover:scale-105"
                    }
                    after:content-['']
                    after:absolute
                    after:-bottom-1
                    after:left-0
                    after:h-[2px]
                    after:bg-yellow-400
                    after:transition-all`
                  }
                >
                  <Icon size={20} />
                  {item.label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="mobile-menu absolute top-full right-2 mt-1 bg-black rounded-2xl shadow-xl p-6 flex flex-col gap-6 md:hidden animate-[scaleIn_.25s_ease]">
          {navItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={i}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-3 text-lg transition ${isActive
                    ? "text-yellow-400"
                    : "text-white hover:text-yellow-400"
                  }`
                }
              >
                <Icon size={22} />
                {item.label}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}