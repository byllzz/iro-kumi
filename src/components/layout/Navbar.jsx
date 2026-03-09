import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    `relative font-fair text-[11px] tracking-[0.3em] transition-all duration-300 uppercase ${
      isActive ? 'text-white' : 'text-zinc-500 hover:text-zinc-200'
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black backdrop-blur-md border-b border-zinc-900/50">
      <div className="max-w-[1440px] w-full mx-auto h-20 flex flex-row items-center justify-between px-6 md:px-12">

        {/* left side of nav */}
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 bg-[#b91c1c] rotate-45"></div>

          <NavLink
            to="/"
            className="font-fair text-xl tracking-tighter text-white hover:text-zinc-400 transition-colors"
          >
            Iro<span className="text-zinc-600 italic">Kumi</span>
          </NavLink>
        </div>

        {/* right side nav links */}
        <div className="flex items-center gap-10">
          <NavLink to="/" className={linkStyle}>
            {({ isActive }) => (
              <>
                Dictionary
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b91c1c]" />}
              </>
            )}
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            {({ isActive }) => (
              <>
                About
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b91c1c]" />}
              </>
            )}
          </NavLink>

          <NavLink to="/faqs" className={linkStyle}>
             {({ isActive }) => (
              <>
                FAQ
                {isActive && <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-[#b91c1c]" />}
              </>
            )}
          </NavLink>

         {/* socials links  */}
          <div className="hidden md:block h-4 w-[1px] bg-zinc-800 ml-4"></div>

          <a
            href="https://github.com/byllzz/iro-kumi"
            target="_blank"
            className="hidden md:block font-mono text-[10px] tracking-widest text-zinc-600 hover:text-white transition-colors"
          >
            GITHUB
          </a>
        </div>
      </div>
    </nav>
  );
}
