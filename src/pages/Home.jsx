import Hero from '../components/layout/Hero'
import Faqs from '../components/layout/Faqs';
import plateData from '../data/wadaData.json';
import colorData from '../data/colors-data.json'
import PlateCard from '../components/ui/PlateCard';
import FIlterPanel from '../components/ui/FIlterPanel';
import SingleColorCard from '../components/ui/SingleColorCard';
import { useState } from 'react';
export default function Home() {
  const platesColorsData = plateData.plates;
  const singalColorData = colorData.colors;

  const [activeView , setActiveView] = useState("colors");
  return (
    <div className="w-full flex flex-col overflow-x-hidden relative min-h-screen">
      <div className="mt-45">
        <Hero platesLenght={platesColorsData.length} singleColorsLength={singalColorData.length} />
      </div>

      <div>
        <div>
          <FIlterPanel />
        </div>
        <div className="flex flex-row items-center justify-center w-full max-w-400 mx-auto gap-20 my-20">
          <button
            className={`text-7xl italic font-fair ${activeView === 'colors' ? 'text-white' : 'text-zinc-300/90'}`}
            onClick={() => setActiveView('colors')}
          >
            Indivisual Colors
          </button>
          <button
            onClick={() => setActiveView('plates')}
            className={`text-7xl italic font-fair ${activeView === 'plates' ? 'text-white' : 'text-zinc-300/90'}`}
          >
            {' '}
            Color Plates
          </button>
        </div>

        {/* conditional rendering...*/}
        {activeView === 'colors' ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-in fade-in duration-700">
            {singalColorData.map(item => (
              <SingleColorCard key={item.id} item={item}  />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 animate-in fade-in duration-700">
            {platesColorsData.map((plate, index) => (
              <PlateCard key={index} plate={plate} />
            ))}
          </div>
        )}
      </div>

      <Faqs />
    </div>
  );
}



