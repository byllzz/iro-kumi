import React from 'react';
import { Sparkles, Palette } from 'lucide-react';

export default function Hero() {
  // We duplicate the text inside the marquee to create a seamless loop
  const ScrollingText = ({
    text,
    colorClass,
    speed = '10s',
    reverse = false,
  }) => (
    <div
      className={`inline-flex items-center ${colorClass} h-16 md:h-32 rounded-full overflow-hidden w-[250px] md:w-[350px] shadow-lg border-2 border-black`}
    >
      <div
        className="flex whitespace-nowrap items-center justify-center"
        style={{
          animation: `marquee ${speed} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {/* The text is repeated to ensure no gaps during the transition */}
        <span className="text-2xl md:text-5xl font-normal tracking-normal font-fair uppercase px-4 flex items-center justify-center">
          {text}
        </span>
        <span>
          <Sparkles className="fill-current font-normal" size={32} />
        </span>
        <span className="text-2xl md:text-5xl font-normal tracking-normal font-fair uppercase px-4 flex items-center justify-center">
          {text}
        </span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-8 flex flex-col items-center justify-center font-sans overflow-hidden ">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow { animation: spin-slow 12s linear infinite; }
        `}
      </style>

      <div className="w-full max-w-[1400px] background-color shadow-2xl overflow-hidden p-8 md:p-12 relative flex flex-col justify-between min-h-[85vh]">
        {/* Main Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center top-5 justify-center max-w-7xl mx-auto w-full px-4  md:px-8">
          <div className="text-6xl md:text-8xl lg:text-[9.5rem] tracking-tighter leading-[.9] font-black text-white">
            {/* Line 1: Curating + Infinite Orange Pill */}
            <div className="flex flex-nowrap items-center gap-x-6 gap-y-4 mb-4">
              <span className="font-fair">Curating</span>
              <div>
                <ScrollingText
                  text="Unique Palettes"
                  colorClass="bg-[#DD6E42] text-white"
                  speed="8s"
                />
              </div>
            </div>

            {/* Line 2: with Small Text */}
            <div className="flex flex-col md:flex-row md:items-center gap-x-12  mb-4 relative left-15">
              <span className="font-fair">for digital</span>
              <p className="text-[18px] tracking-normal font-normal font-outfit leading-5 max-w-[300px]">
                The ultimate playground to discover and export high-contrast color pairings.
              </p>
            </div>

            {/* Line 3: artists + Infinite Blue Pill */}
            <div className="flex items-center justify-end relative top-5">
              <div className="flex md:items-center justify-end w-[100%] relative right-25">
                <ScrollingText
                  text="Visual Stories"
                  colorClass="bg-[#E2FF46] text-black"
                  speed="8s"
                  reverse={true}
                />
                <span className="font-fair">artist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-12 pt-8 border-t-2 border-black/10 flex justify-between items-center flex-wrap gap-6">
        <div className="flex items-center gap-4">
          <span className="text-xs font-black uppercase tracking-widest text-gray-400">
            Current Trend:
          </span>
          <div className="flex -space-x-2">
            <div className="w-10 h-10 rounded-full bg-[#FF4D00] border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 rounded-full bg-[#00E5FF] border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 rounded-full bg-[#E2FF46] border-2 border-white shadow-sm"></div>
            <div className="w-10 h-10 rounded-full bg-[#8154F0] border-2 border-white shadow-sm"></div>
          </div>
        </div>

        <div className="flex gap-8 items-center overflow-x-auto">
          <span className="font-bold text-lg opacity-40 hover:opacity-100 cursor-default transition-opacity">
            PANTONE®
          </span>
          <span className="font-bold text-lg opacity-40 hover:opacity-100 cursor-default transition-opacity">
            ADOBE COLOR
          </span>
          <span className="font-bold text-lg opacity-40 hover:opacity-100 cursor-default transition-opacity">
            KHROMA
          </span>
          <span className="font-bold text-lg opacity-40 hover:opacity-100 cursor-default transition-opacity">
            COOLORS
          </span>
        </div>
      </div>
    </div>
  );
}
