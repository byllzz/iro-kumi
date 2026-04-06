
import Faqs from '../components/layout/Faqs';
import plateData from '../data/wadaData.json';
import colorData from '../data/colors-data.json';
// import PlateCard from '../components/ui/PlateCard';
// import SingleColorCard from '../components/ui/SingleColorCard';
import SearchNavigation from '../components/layout/SearchNavigation';
import ContentGrid from '../components/ui/ContentGrid';
import Hero from '../components/layout/Hero';
import { useState } from 'react';
// import { Search } from 'lucide-react';

export default function Home() {
  const platesColorsData = plateData.plates;
  const singalColorData = colorData.colors;

  const [activeView, setActiveView] = useState('colors');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredColors = singalColorData.filter(
    color =>
      color.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      color.hex.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredPlates = platesColorsData.filter(plate =>
    plate.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full min-h-screen background-color text-white font-serif overflow-x-hidden">
      <Hero />
      <main className="max-w-[1600px] mx-auto px-6 md:px-12 py-44">
        {/* Toggle btns*/}
        {/* <div className="flex flex-col items-center mb-20 gap-10">
          <div className="relative w-full max-w-[600px] md:w-5/6 group">
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search for a mood..."
              className="w-full bg-transparent py-5 px-2 text-xl md:text-3xl tracking-tighter text-white outline-none border-b border-white/10 placeholder:text-white/20 italic font-serif transition-all duration-700 group-hover:border-white/30 focus:border-white"
            />

            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-4">
              <span className="hidden md:block text-[10px] uppercase tracking-[0.4em] text-white/40 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                Discover
              </span>
              <div className="p-2">
                <Search
                  className="text-white/40 group-focus-within:text-white group-hover:rotate-12 transition-all duration-500"
                  size={22}
                  strokeWidth={1}
                />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-white transition-all duration-1000 ease-out group-focus-within:w-full" />
          </div>
          <div className="flex items-center gap-12 relative">
            <button
              onClick={() => setActiveView('colors')}
              className={`group relative text-2xl md:text-4xl transition-all duration-500 ${
                activeView === 'colors' ? 'opacity-100 italic' : 'opacity-30 hover:opacity-50'
              }`}
            >
              <span className="font-mono text-[10px] absolute -top-4 left-0 tracking-widest uppercase italic">
                Collection 01
              </span>
              Individual Colors
              {activeView === 'colors' && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#1A1A1A] scale-x-100 transition-transform origin-left" />
              )}
            </button>

            <div className="h-10 w-[1px] bg-[#1A1A1A]/20 rotate-[25deg]" />

            <button
              onClick={() => setActiveView('plates')}
              className={`group relative text-2xl md:text-4xl transition-all duration-500 ${
                activeView === 'plates' ? 'opacity-100 italic' : 'opacity-30 hover:opacity-50'
              }`}
            >
              <span className="font-mono text-[10px] absolute -top-4 left-0 tracking-widest uppercase italic">
                Collection 02
              </span>
              Color Plates
              {activeView === 'plates' && (
                <div className="absolute -bottom-2 left-0 w-full h-[1px] bg-[#1A1A1A] scale-x-100 transition-transform origin-left" />
              )}
            </button>
          </div>
        </div> */}
        <SearchNavigation
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeView={activeView}
          setActiveView={setActiveView}
        />
        {/* Grid logic*/}
        {/* <div className="min-h-[60vh]">
          {activeView === 'colors' ? (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-6 xl:grid-cols-8 gap-3 md:gap-4 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {filteredColors.length > 0 ? (
                filteredColors.map(item => <SingleColorCard key={item.id} item={item} />)
              ) : (
                <EmptyState query={searchQuery} />
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              {filteredPlates.length > 0 ? (
                filteredPlates.map((plate, index) => <PlateCard key={index} plate={plate} />)
              ) : (
                <EmptyState query={searchQuery} />
              )}
            </div>
          )}
        </div> */}
        <ContentGrid
          activeView={activeView}
          filteredColors={filteredColors}
          filteredPlates={filteredPlates}
          searchQuery={searchQuery}
        />
      </main>

      {/* Footer */}
      {/* <div className="w-full py-12 flex flex-col items-center justify-center text-white">
        <div className="overflow-hidden mb-4">
          <p className="font-mono text-[10px]  tracking-[0.6em] uppercase opacity-50 animate-pulse">
            Stay Tuned
          </p>
        </div>
        <h2 className="text-5xl underline md:text-8xl font-serif italic tracking-tighter hover:scale-105 transition-transform duration-700 cursor-default">
          More {activeView === 'colors' ? 'Pigments' : 'Harmony'} Soon
        </h2>
        <div className="mt-12 h-[1px] w-2" />
      </div> */}

      <Faqs />
    </div>
  );
}

/*  Empty Results */
export function EmptyState({ query }) {
  return (
    <div className="col-span-full py-32 flex flex-col items-center">
      <span className="text-6xl mb-4 opacity-20">:(</span>
      <p className="text-zinc-500 font-serif italic text-xl md:text-2xl text-center">
        No results for <span className="text-[#1A1A1A]">"{query}"</span>
      </p>
      <button
        onClick={() => window.location.reload()}
        className="mt-6 text-[10px] uppercase tracking-widest border-b border-[#1A1A1A] pb-1 hover:opacity-50 transition-opacity"
      >
        Clear all filters
      </button>
    </div>
  );
}
