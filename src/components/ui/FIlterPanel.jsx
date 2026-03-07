import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function FilterPanel() {
  const categories = ["All", "Traditional", "Nature", "Urban", "Minimal", "Imperial"];

  const [inputVal, setInputVal] = useState('Type to find a mood...');

  return (
    <div className="w-full bg-black pt-20 pb-10 px-6 md:px-16 border-b border-zinc-900/50">
      {/* 1. The Big Typography Header */}
      <div className="flex flex-col mb-12">
        <span className="text-zinc-600 font-mono text-[10px] tracking-[0.5em] uppercase mb-4">
          Wada Sanzō Archive — 1933
        </span>
        <h1 className="text-6xl md:text-8xl font-serif text-zinc-100 tracking-tighter leading-none italic select-none">
          Color <span className="text-zinc-800 font-sans not-italic font-light">Combinations</span>
        </h1>
      </div>

      {/* 2. Interactive Row */}
      <div className="flex flex-col md:flex-row items-end justify-between gap-8">
        {/* Left: Minimal Filter Links */}
        <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
          {categories.map((cat, index) => (
            <button
              key={cat}
              className="group relative text-[11px] uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors duration-500"
            >
              <span className="mr-2 text-zinc-800 font-mono group-hover:text-zinc-600 transition-colors">
                0{index + 1}
              </span>
              {cat}
              {/* Animated Underline */}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-500 group-hover:w-full"></span>
            </button>
          ))}
        </div>

        {/* Right: Architectural Search */}
        <div className="relative w-full md:w-80 group border-b border-zinc-800 focus-within:border-white transition-all duration-700">
          <input
            type="text"
            value={inputVal}
            onChange={e => {
              setInputVal(e.target.value);
            }}
            placeholder="Type to find a mood..."
            className="w-full bg-transparent py-3 pl-2 pr-10 text-xs tracking-widest text-zinc-200 outline-none placeholder:text-zinc-800 placeholder:italic uppercase"
          />
          <Search
            className="absolute right-2 top-1/2 -translate-y-1/2 text-zinc-800 group-focus-within:text-white transition-colors duration-700"
            size={18}
            strokeWidth={1}
          />
        </div>
      </div>
    </div>
  );
}
