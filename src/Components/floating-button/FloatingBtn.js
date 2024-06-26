import React from 'react';
import { useState } from 'react';

// React-Icons
import { IoIosChatbubbles } from "react-icons/io";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";


const FloatingBtn = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`fixed w-24 h-24 bottom-0 left-[-30px] m-10 transition-all duration-300 ${
        isHovered ? "h-80" : "h-24"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      <div
        className={`absolute w-16 h-16 flex align-middle justify-center  bg-blue-500 bottom-0 left-0 right-0 mx-auto rounded-full text-white text-center text-3xl leading-16 cursor-pointer shadow-lg transform transition-transform duration-300 ${
          isHovered ? "translate-y-1" : ""
        }`}>
        <IoIosChatbubbles className="text-black text-4xl mt-3" />
      </div>
      <div className="relative bottom-[-100px]">
        <a href="https://wa.me/+9660538090592">
          <span
            className={`block w-12 h-12 mt-4 flex align-middle justify-center mx-auto rounded-full bg-green-500 text-white text-center leading-12 shadow-md transform transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-24"
            }`}
            style={{ transitionDelay: isHovered ? "400ms" : "0ms" }}>
            <BsWhatsapp className="text-2xl text-black mt-3" />
          </span>
        </a>

        <a href="tel:+9660538090592">
          <span
            className={`block w-12 h-12 flex align-middle justify-center mt-4 mx-auto rounded-full bg-blue-400 text-white text-center leading-12 shadow-md transform transition-all duration-300 ${
              isHovered
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-24"
            }`}
            style={{ transitionDelay: isHovered ? "200ms" : "0ms" }}>
            <FaPhoneAlt className="text-2xl text-black mt-3" />
          </span>
        </a>
      </div>
    </div>
  );
};

export default FloatingBtn;
