// Home.jsx
import React, { useState } from 'react';
import Faqs from '../components/layout/Faqs';
import plateData from '../data/plates-data.json';
import colorData from '../data/colors-data.json';
import SearchNavigation from '../components/layout/SearchNavigation';
import ContentGrid from '../components/ui/ContentGrid';
import Hero from '../components/layout/Hero';
import Preloader from '../components/layout/Preloader';

const HAS_LOADED_KEY = 'hexfolio_preloader_shown';

export default function Home() {
  const platesColorsData = plateData.plates;
  const singalColorData = colorData.colors;

  const [activeView, setActiveView] = useState('colors');
  const [searchQuery, setSearchQuery] = useState('');

  // Only show preloader if it hasn't run yet this session
  const [isLoading, setIsLoading] = useState(
    () => !sessionStorage.getItem(HAS_LOADED_KEY)
  );

  const handlePreloaderComplete = () => {
    sessionStorage.setItem(HAS_LOADED_KEY, 'true');
    setIsLoading(false);
  };

  const filteredColors = singalColorData.filter(
    color =>
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlates = platesColorsData.filter(plate =>
    plate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      <div
        className={`w-full min-h-screen background-color text-white font-serif overflow-x-hidden transition-opacity duration-1000 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <Hero filteredColors={filteredColors} filteredPlates={filteredPlates} />

        <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-32 md:py-44">
          <SearchNavigation
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            activeView={activeView}
            setActiveView={setActiveView}
          />
          <ContentGrid
            activeView={activeView}
            filteredColors={filteredColors}
            filteredPlates={filteredPlates}
            searchQuery={searchQuery}
          />
        </main>

        <Faqs />
      </div>
    </>
  );
}

export function EmptyState({ query }) {
  return (
    <div className="col-span-full py-32 flex flex-col items-center">
      <span className="text-6xl mb-4 opacity-20 font-sans">:(</span>
      <p className="text-zinc-500 font-serif italic text-xl md:text-2xl text-center">
        No results in the registry for <span className="text-white not-italic">"{query}"</span>
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 text-[10px] uppercase tracking-widest border-b border-zinc-700 pb-1 hover:text-[#E2FF46] hover:border-[#E2FF46] transition-all"
      >
        Reset Archive Filters
      </button>
    </div>
  );
}
