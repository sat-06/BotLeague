import React from 'react';

import roboRaceImg from '../assets/robo_race.png';
import lineFollowerImg from '../assets/line_follower.png';
import rcRacingImg from '../assets/rc_racing.png';
import droneRacingImg from '../assets/drone_racing.png';
import roboHockeyImg from '../assets/robo_hockey.png';
import heroBg from '../assets/hero_arena.png';

export const Disciplines: React.FC = () => {
  const topDisciplines = [
    {
      title: 'Robo Race',
      image: roboRaceImg,
    },
    {
      title: 'Line Follower',
      image: lineFollowerImg,
    },
    {
      title: 'RC Racing',
      image: rcRacingImg,
    },
    {
      title: 'FPV Drone Racing & Aeromodelling',
      image: droneRacingImg,
    },
  ];

  return (
    <section id="disciplines" className="py-20 px-4 lg:px-12 bg-[#05060A] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Small Red Subheader */}
        <span className="text-xs font-extrabold tracking-widest text-[#FF3B5C] uppercase block mb-1">
          SPORTS
        </span>

        {/* Main Title */}
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-12">
          COMPETITION DISCIPLINES
        </h2>

        {/* Top Row Grid (4 Cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {topDisciplines.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B0C14] border border-[#1E2235] rounded-xl overflow-hidden group hover:border-[#FF3B5C]/60 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div className="h-44 overflow-hidden relative">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C14] via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4 bg-[#0A0B12] border-t border-[#181B2B] text-center">
                <h3 className="font-tech text-sm font-bold text-white tracking-wide uppercase">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Row Grid (3 Cards: Robo Hockey, Robo War, Circuit Card) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Card 5: Robo Hockey */}
          <div className="bg-[#0B0C14] border border-[#1E2235] rounded-xl overflow-hidden group hover:border-[#FF3B5C]/60 transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={roboHockeyImg} 
                alt="Robo Hockey" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C14] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-4 bg-[#0A0B12] border-t border-[#181B2B] text-center">
              <h3 className="font-tech text-sm font-bold text-white tracking-wide uppercase">
                Robo Hockey
              </h3>
            </div>
          </div>

          {/* Card 6: Robo War */}
          <div className="bg-[#0B0C14] border border-[#1E2235] rounded-xl overflow-hidden group hover:border-[#FF3B5C]/60 transition-all duration-300 shadow-lg flex flex-col justify-between">
            <div className="h-48 overflow-hidden relative bg-gradient-to-br from-[#1F0A10] to-[#0A0B12] flex items-center justify-center">
              {/* Flame spark art representation */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,59,92,0.3)_0%,transparent_70%)]" />
              <img 
                src={heroBg} 
                alt="Robo War" 
                className="w-full h-full object-cover mix-blend-overlay opacity-80 group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0C14] via-transparent to-transparent opacity-60" />
            </div>
            <div className="p-4 bg-[#0A0B12] border-t border-[#181B2B] text-center">
              <h3 className="font-tech text-sm font-bold text-white tracking-wide uppercase">
                Robo War
              </h3>
            </div>
          </div>

          {/* Card 7: Dark Circuit Graphic Pattern */}
          <div className="bg-[#080910] border border-[#1C2030] rounded-xl h-60 relative overflow-hidden flex items-center justify-center p-6 shadow-inner">
            <div className="absolute inset-0 opacity-30">
              {/* Circuit Grid SVG Pattern */}
              <svg className="w-full h-full text-[#3B82F6]" fill="none" stroke="currentColor" strokeWidth="1">
                <pattern id="circuit" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                  <circle cx="20" cy="20" r="3" fill="currentColor" opacity="0.6" />
                  <line x1="20" y1="20" x2="40" y2="20" stroke="currentColor" strokeWidth="1" />
                  <line x1="20" y1="20" x2="20" y2="40" stroke="currentColor" strokeWidth="1" />
                </pattern>
                <rect width="100%" height="100%" fill="url(#circuit)" />
              </svg>
            </div>
            {/* Glowing cyan dot highlights */}
            <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center">
              <div className="w-10 h-10 rounded-full border border-[#00E5FF] shadow-cyan-glow flex items-center justify-center bg-[#00E5FF]/10 mb-3 animate-pulse">
                <span className="w-3 h-3 rounded-full bg-[#00E5FF]" />
              </div>
              <span className="font-tech text-xs tracking-widest text-[#00E5FF] font-bold uppercase">
                PRO ROBOTICS ARENA
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
