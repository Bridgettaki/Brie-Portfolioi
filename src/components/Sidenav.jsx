import React, { useState, useEffect } from 'react';
import {
  AiOutlineMenu,
  AiOutlineHome,
  AiOutlineProject,
  AiOutlineMail,
} from 'react-icons/ai';
import { BsPerson } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';

const Sidenav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  // Optional: Close mobile nav with ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') setNav(false);
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  return (
    <div>
      {/* Mobile menu toggle button */}
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer"
        size={30}
      />

      {/* Dark overlay for mobile */}
      {nav && (
        <div
          onClick={handleNav}
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
        />
      )}

      {/* Mobile side menu */}
      <div
        className={`fixed top-0 left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-white p-10 z-50 transition-transform duration-500 ease-in-out transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-4">
          <a
            onClick={handleNav}
            href="#main"
            className="flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 hover:scale-110 duration-200"
          >
            <AiOutlineHome size={20} />
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 hover:scale-110 duration-200"
          >
            <GrProjects size={20} />
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 hover:scale-110 duration-200"
          >
            <AiOutlineProject size={20} />
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#resume"
            className="flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 hover:scale-110 duration-200"
          >
            <BsPerson size={20} />
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="flex items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 p-4 hover:scale-110 duration-200"
          >
            <AiOutlineMail size={20} />
            <span className="pl-4">Contact</span>
          </a>
        </nav>
      </div>

      {/* Desktop vertical nav */}
      <div className="hidden md:block fixed top-[25%] left-0 z-50">
        <div className="flex flex-col">
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 duration-300"
          >
            <AiOutlineHome size={20} />
          </a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 duration-300"
          >
            <GrProjects size={20} />
          </a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 duration-300"
          >
            <AiOutlineProject size={20} />
          </a>
          <a
            href="#resume"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 duration-300"
          >
            <BsPerson size={20} />
          </a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 hover:scale-110 duration-300"
          >
            <AiOutlineMail size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;
