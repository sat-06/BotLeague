import React from 'react';

export const Competitions: React.FC = () => {
  return (
    <section id="events" className="py-16 px-4 lg:px-12 bg-[#08090E] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <h2 className="font-tech text-2xl sm:text-3xl font-black tracking-wider text-white uppercase mb-10 flex items-center gap-3">
          COMPETITIONS & EVENTS
        </h2>

        {/* 3 Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          
          {/* Column 1: LIVE NOW */}
          <div className="bg-[#0D0E16] border border-[#1E2235] rounded-xl p-6 relative overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-[#FF3B5C] uppercase">
                LIVE NOW
              </span>
            </div>

            <div className="flex items-center justify-between mb-2">
              <h3 className="font-tech text-lg font-bold text-white">Bengaluru Regionals</h3>
              <span className="bg-[#FF3B5C] text-white text-[10px] font-black tracking-wider px-2 py-0.5 rounded uppercase animate-pulse">
                LIVE
              </span>
            </div>
            <p className="text-xs text-gray-400 mb-6">Lorem ipsum</p>

            {/* Tournament Bracket Diagram */}
            <div className="bg-[#090A0F] border border-[#1A1D2B] rounded-lg p-4 relative min-h-[190px] flex items-center justify-between">
              {/* Quarter finals boxes */}
              <div className="flex flex-col justify-between h-40 space-y-2">
                <div className="w-14 h-7 bg-[#161824] border border-[#2B3045] rounded" />
                <div className="w-14 h-7 bg-[#161824] border border-[#2B3045] rounded" />
                <div className="w-14 h-7 bg-[#161824] border border-[#2B3045] rounded" />
                <div className="w-14 h-7 bg-[#161824] border border-[#2B3045] rounded" />
              </div>

              {/* Connecting Bracket Lines SVG */}
              <svg className="w-20 h-36 text-[#2B3045]" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M 0 14 H 15 V 36 H 30" />
                <path d="M 0 56 H 15 V 36 H 30" />
                <path d="M 0 94 H 15 V 116 H 30" />
                <path d="M 0 136 H 15 V 116 H 30" />
                <path d="M 30 36 H 45 V 76 H 60" />
                <path d="M 30 116 H 45 V 76 H 60" />
              </svg>

              {/* Semi Finals */}
              <div className="flex flex-col justify-around h-32">
                <div className="w-14 h-7 bg-[#161824] border border-[#2B3045] rounded" />
                <div className="w-14 h-7 bg-[#161824] border border-[#2B3045] rounded" />
              </div>

              {/* Finals box */}
              <div className="flex flex-col justify-center h-32">
                <div className="w-16 h-8 bg-[#232738] border border-[#FF3B5C]/60 rounded shadow-red-glow" />
              </div>
            </div>
          </div>

          {/* Column 2: UPCOMING */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                UPCOMING
              </span>
            </div>

            {/* Upcoming Event 1 */}
            <div className="bg-[#0D0E16] border border-[#1E2235] rounded-xl p-5 hover:border-gray-700 transition-colors">
              <h3 className="font-tech text-base font-bold text-white mb-3">Event in Mumbai</h3>
              <div className="grid grid-cols-3 gap-2 text-[11px] mb-4 text-gray-400">
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase">Date</span>
                  <span className="font-semibold text-gray-200">11-12 DEC</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase">Location</span>
                  <span className="font-semibold text-gray-200">BKC</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase">Category</span>
                  <span className="font-semibold text-gray-200">Lineup</span>
                </div>
              </div>
              <button className="w-full py-2 bg-gradient-red-btn hover:bg-[#E02E4C] text-white text-xs font-bold tracking-wider rounded transition-all uppercase">
                REGISTER
              </button>
            </div>

            {/* Upcoming Event 2 */}
            <div className="bg-[#0D0E16] border border-[#1E2235] rounded-xl p-5 hover:border-gray-700 transition-colors">
              <h3 className="font-tech text-base font-bold text-white mb-3">Event in Delhi</h3>
              <div className="grid grid-cols-3 gap-2 text-[11px] mb-4 text-gray-400">
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase">Date</span>
                  <span className="font-semibold text-gray-200">11-12 DEC</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase">Location</span>
                  <span className="font-semibold text-gray-200">BKC</span>
                </div>
                <div>
                  <span className="block text-[10px] text-gray-500 uppercase">Category</span>
                  <span className="font-semibold text-gray-200">Lineup</span>
                </div>
              </div>
              <button className="w-full py-2 bg-gradient-red-btn hover:bg-[#E02E4C] text-white text-xs font-bold tracking-wider rounded transition-all uppercase">
                REGISTER
              </button>
            </div>
          </div>

          {/* Column 3: PAST RESULTS */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold tracking-widest text-gray-300 uppercase">
                PAST RESULTS
              </span>
            </div>

            <div className="bg-[#0D0E16] border border-[#1E2235] rounded-xl p-5 space-y-4">
              {/* Past Item 1 */}
              <div className="border-b border-[#1A1D2B] pb-3.5 last:border-0 last:pb-0">
                <h4 className="font-tech text-sm font-bold text-white">Bengaluru Regionals</h4>
                <p className="text-xs text-gray-400 mt-1">Lorem ipsum</p>
              </div>

              {/* Past Item 2 */}
              <div className="border-b border-[#1A1D2B] pb-3.5 last:border-0 last:pb-0">
                <h4 className="font-tech text-sm font-bold text-white">Bengaluru Regionals</h4>
                <p className="text-xs text-gray-400 mt-1">Lorem ipsum</p>
              </div>

              {/* Past Item 3 */}
              <div className="border-b border-[#1A1D2B] pb-3.5 last:border-0 last:pb-0">
                <h4 className="font-tech text-sm font-bold text-white">Bengaluru Regionals</h4>
                <p className="text-xs text-gray-400 mt-1">Lorem ipsum</p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
