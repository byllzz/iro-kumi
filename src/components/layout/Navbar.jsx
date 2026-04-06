import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub } from 'react-icons/fa';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    `relative font-outfit text-[14px] font-medium capitalize ${
      isActive ? 'text-black' : 'text-black/30 hover:text-zinc-800'
    }`;


  return (
    <>
      <nav
        className={`
          fixed w-full max-w-full h-12 sm:top-5 md:top-5 left-1/2 -translate-x-1/2 z-[60] flex items-center
        `}
      >
        <div
          className={`flex items-center justify-between px-2 h-full w-full max-w-[450px] mx-auto text-black bg-white sm:rounded-full md:rounded-full}`}
        >
          {/* logo */}
          <div className="flex items-center shrink-0 relative left-3 md:left-1">
            <span className="overflow-hidden">
              <svg
                fill="#000"
                height={30}
                width={30}
                viewBox="-71.68 -71.68 655.36 655.36"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                  <title>ionicons-v5-m</title>
                  <path d="M253.72,202.53a4,4,0,0,0,4.56,0,151.88,151.88,0,0,1,128.44-20.41,4,4,0,0,0,5.15-4C388.8,105.86,329,48,256,48S123.2,105.86,120.13,178.15a4,4,0,0,0,5.15,4,151.88,151.88,0,0,1,128.44,20.41Z"></path>
                  <path d="M405.31,212.56a152.53,152.53,0,0,1-83.08,108.23,4,4,0,0,0-2.28,3.69c0,1.17.05,2.34.05,3.52a151.58,151.58,0,0,1-47.15,109.94,4,4,0,0,0,.64,6.31A135.24,135.24,0,0,0,344,464c72.07,0,134.1-60.28,136-132.34a136.07,136.07,0,0,0-68.76-121.87A4,4,0,0,0,405.31,212.56Z"></path>
                  <path d="M390.57,203.67a4,4,0,0,0-2.69-4.4,135.84,135.84,0,0,0-114.4,12.49,4,4,0,0,0-.64,6.29,151.92,151.92,0,0,1,44.47,81.4,4,4,0,0,0,5.94,2.72A136.29,136.29,0,0,0,390.57,203.67Z"></path>
                  <path d="M192,328c0-1.18,0-2.35.05-3.52a4,4,0,0,0-2.28-3.69,152.53,152.53,0,0,1-83.08-108.23,4,4,0,0,0-5.88-2.77A136.07,136.07,0,0,0,32.05,331.66C34,403.72,96,464,168.05,464a135.24,135.24,0,0,0,70.46-19.75,4,4,0,0,0,.64-6.31A151.58,151.58,0,0,1,192,328Z"></path>
                  <path d="M168,192a135.34,135.34,0,0,0-43.88,7.27,4,4,0,0,0-2.69,4.4,136.29,136.29,0,0,0,67.32,98.5,4,4,0,0,0,5.94-2.72,151.92,151.92,0,0,1,44.47-81.4,4,4,0,0,0-.64-6.29A135.18,135.18,0,0,0,168,192Z"></path>
                  <path d="M256,336a151.44,151.44,0,0,1-42.72-6.12,4,4,0,0,0-5.15,4,135.69,135.69,0,0,0,45.18,95.4,4,4,0,0,0,5.38,0,135.69,135.69,0,0,0,45.18-95.4,4,4,0,0,0-5.15-4A151.44,151.44,0,0,1,256,336Z"></path>
                  <path d="M302.57,308.33a135.94,135.94,0,0,0-43.87-81.58,4.06,4.06,0,0,0-5.4,0,135.94,135.94,0,0,0-43.87,81.58,4,4,0,0,0,2.69,4.4,136.06,136.06,0,0,0,87.76,0A4,4,0,0,0,302.57,308.33Z"></path>
                </g>
              </svg>
            </span>
            <NavLink
              to="/"
              className={`font-fair text-[18px] tracking-tighter text-black relative bottom-[1px] `}
            >
              Iro<span className="text-black italic">Kumi</span>
            </NavLink>
          </div>

          {/* right */}
          <div className="flex items-center gap-4 relative right-2">
            <div
              className={`
            hidden md:flex items-center gap-4 transition-all duration-500
          `}
            >
              <NavLink to="/" className={linkStyle}>
                Dictionary
              </NavLink>
              <NavLink to="/about" className={linkStyle}>
                About
              </NavLink>
              <NavLink to="/faqs" className={linkStyle}>
                FAQ
              </NavLink>
            </div>
            <div className='h-5 w-[1px] bg-black/50 hidden md:flex '></div>
            <a href="https://github.com/byllzz/iro-kumi" target="_blank" className='hidden md:flex'>
              <FaGithub size={23} />
            </a>
            {/* bars */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`
              relative right-2  md:hidden flex flex-col gap-1.5 z-[70] transition-all duration-300
              `}
            >
              <div
                className={`w-6 h-[1.5px] bg-black transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}
              />
              <div
                className={`w-6 h-[1.5px] bg-black transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}
              />
              <div
                className={`w-6 h-[1.5px] bg-black transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}
              />
            </button>
          </div>
        </div>
      </nav>

      {/* mobile menu overlay */}
      <div
        className={`
        fixed inset-0 z-[55] bg-white/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-700 ease-in-out md:hidden
        ${mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
      `}
      >
        <NavLink
          to="/"
          onClick={() => setMobileMenuOpen(false)}
          className="text-black text-2xl font-fair tracking-[0.2em] uppercase"
        >
          Dictionary
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setMobileMenuOpen(false)}
          className=" text-2xl text-black font-fair tracking-[0.2em] uppercase"
        >
          About
        </NavLink>
        <NavLink
          to="/faqs"
          onClick={() => setMobileMenuOpen(false)}
          className="text-black text-2xl font-fair tracking-[0.2em] uppercase"
        >
          FAQ
        </NavLink>
        <a
          href="https://github.com/byllzz/iro-kumi"
          className="mt-4 font-mono text-xs text-black tracking-widest text-[#b91c1c]"
        >
         <FaGithub size={28} />
        </a>
      </div>
    </>
  );
}
