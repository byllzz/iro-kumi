import React from 'react';
import { Sparkles } from 'lucide-react';

export default function Hero() {
  const ScrollingText = ({
    text,
    colorClass,
    speed = '10s',
    reverse = false,
  }) => (
    <div
      className={`inline-flex items-center ${colorClass} h-12 md:h-24 lg:h-32 rounded-full overflow-hidden w-[180px] sm:w-[250px] md:w-[350px] shadow-lg border-2 border-black shrink-0`}
    >
      <div
        className="flex whitespace-nowrap items-center"
        style={{
          animation: `marquee ${speed} linear infinite ${reverse ? 'reverse' : 'normal'}`,
        }}
      >
        {/*big text's */}
        {[1, 2, 3].map((i) => (
          <React.Fragment key={i}>
            <span className="text-xl md:text-4xl lg:text-5xl font-medium tracking-normal font-fair uppercase px-4">
              {text}
            </span>
            <Sparkles className="fill-current" size={24} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );

  return (
    <section className="min-h-screen w-full p-4 md:p-8 flex flex-col items-center justify-center font-sans overflow-hidden bg-black">
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.33%); }
          }
          .font-fair { font-family: 'Playfair Display', serif; }
          .font-outfit { font-family: 'Outfit', sans-serif; }
        `}
      </style>

      {/* main card hero */}
      <div className="w-full max-w-[1400px] bg-white rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden p-6 md:p-12 relative flex flex-col justify-center min-h-[80vh] mt-5">

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="text-[12vw] md:text-[8vw] lg:text-[9rem] tracking-tighter leading-[0.85] font-black text-black flex flex-col gap-6">

            {/* line:1 */}
            <div className="flex flex-wrap items-center gap-x-4 md:gap-x-8">
              <span className="font-fair italic lg:not-italic">Curating</span>
              <ScrollingText
                text="Unique Palettes"
                colorClass="bg-[#DD6E42] text-white"
                speed="10s"
              />
            </div>

            {/* line:2 */}
            <div className="flex flex-col md:flex-row md:items-center gap-y-4 gap-x-12 md:ml-[10%]">
              <span className="font-fair">for digital</span>
              <p className="text-sm md:text-base lg:text-lg tracking-normal font-normal font-outfit leading-snug max-w-[280px] text-zinc-400">
                The ultimate playground to discover and export high-contrast color pairings for modern interfaces.
              </p>
            </div>

            {/* line:3 */}
            <div className="flex flex-wrap items-center justify-end gap-x-4 md:gap-x-8 md:mr-[5%]">
              <ScrollingText
                text="Visual Stories"
                colorClass="bg-[#E2FF46] text-black"
                speed="12s"
                reverse={true}
              />
              <span className="font-fair">artists</span>
            </div>
          </div>
        </div>
      </div>

      {/* bottom area */}
      <div className="w-full max-w-[1400px] mt-12 pt-8 border-t-2 border-zinc-100 flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-6">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">
            Current Trend:
          </span>
          <div className="flex -space-x-3">
            {['#FF4D00', '#00E5FF', '#E2FF46', '#8154F0'].map((color, idx) => (
              <div
                key={idx}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-white shadow-md transition-transform hover:-translate-y-1 cursor-pointer"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-6 md:gap-10 items-center overflow-x-auto no-scrollbar pb-2">
          {['PANTONE®', 'ADOBE COLOR', 'KHROMA', 'COOLORS'].map((brand) => (
            <span
              key={brand}
              className="font-bold text-sm md:text-lg text-zinc-500 hover:text-white cursor-default transition-colors whitespace-nowrap"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
