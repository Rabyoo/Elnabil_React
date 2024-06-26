import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "tailwindcss/tailwind.css";
import { FaBars, FaTimes } from "react-icons/fa";

// Imported Images
import Logo from "../Header/imgs/logo2.png"

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative shadow-2xl px-3 py-2">
      <nav className="flex justify-between items-center">
        <div className="flex items-center relative mr-7">
          <Link className="flex items-center" href="/">
            <img
              className="w-[50px] sm:w-[100px] md:w-[120px] lg:w-[120px]"
              src={Logo}
              alt="logo"
            />
            <h1 className="ml-3 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold whitespace-nowrap">
              شركة النبيل لنقل الأثاث
            </h1>
          </Link>
        </div>
        <div className="itemLinks flex items-center gap-3">
          <div
            className={`navLinks duration-500 absolute md:static md:w-auto w-full md:h-auto h-[85vh] bg-white flex md:items-center gap-[1.5vw] top-[100%] ${
              menuOpen ? "right-0" : "hidden md:flex"
            } px-5 md:py-0 py-5`}>
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[2vw] gap-8">
              <li className="relative max-w-fit pr-3 hover:text-rose-700 md:pr-0 py-1 after:bg-gradient-to-r from-rose-400 to-rose-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300">
                <Link className="text-lg font-medium" to="/">
                  الرئيسية
                </Link>
              </li>
              <li className="relative max-w-fit pr-3 hover:text-rose-700 md:pr-0 py-1 after:bg-gradient-to-r from-rose-400 to-rose-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300">
                <Link className="text-lg font-medium" to="/services">
                  الخدمات
                </Link>
              </li>
              <li className="relative max-w-fit pr-3 hover:text-rose-700 md:pr-0 py-1 after:bg-gradient-to-r from-rose-400 to-rose-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300">
                <Link className="text-lg font-medium" to="/aboutUs">
                  عن الشركة
                </Link>
              </li>
              <li className="relative max-w-fit pr-3 hover:text-rose-700 md:pr-0 py-1 after:bg-gradient-to-r from-rose-400 to-rose-600 after:absolute after:h-1 after:w-0 after:bottom-0 after:right-0 hover:after:w-full after:transition-all after:duration-300">
                <Link className="text-lg font-medium" to="/contactUs">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>
          <button
            className="text-2xl md:hidden z-10"
            onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default App;
