import React from 'react';
import { Play } from 'lucide-react';
import heroBg from '../assets/hero_arena.png';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center overflow-hidden border-b border-[#1A1D2D]/60 bg-[#07080C]">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src={heroBg} 
          alt="BotLeague Arena Stage" 
          className="w-full h-full object-cover object-right brightness-105 contrast-105"
        />
        {/* Soft subtle top/bottom dark vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07080C] via-transparent to-[#07080C]/40" />
      </div>

      {/* Top Notification Bar Badge (FLAME Watch Live) */}
      <div className="absolute top-6 right-6 lg:right-16 z-20 flex items-center gap-2 bg-[#0F111D]/90 border border-[#23283B] rounded-md px-3.5 py-1.5 backdrop-blur-md shadow-lg">
        <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wide">
          <span className="text-[#FF3B5C]">FLAME</span> Episode 14: Bengaluru Regionals
        </span>
        <a href="#live" className="flex items-center gap-1 bg-[#FF3B5C] hover:bg-[#E02E4C] text-white text-[10px] font-black tracking-wider px-2 py-0.5 rounded transition-colors uppercase">
          <Play className="w-2.5 h-2.5 fill-current" /> Watch Live
        </a>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-left w-full py-20">
        
        {/* Main Title */}
        <h1 className="font-tech text-4xl sm:text-6xl lg:text-7xl font-black tracking-wider text-white uppercase leading-[1.05] drop-shadow-2xl max-w-4xl">
          INDIA'S ULTIMATE <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-100 to-gray-400">
            ROBOTICS ARENA
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-xl text-gray-300 font-medium max-w-2xl tracking-wide">
          Build. Compete. Rank. The National Ecosystem For Robotics Arena.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <button className="px-7 py-3 text-xs sm:text-sm font-bold text-white bg-gradient-red-btn rounded-md tracking-wider shadow-red-glow hover:scale-105 transition-all uppercase">
            Create Account
          </button>
          <button className="px-7 py-3 text-xs sm:text-sm font-bold text-gray-200 hover:text-white bg-[#0F111A]/80 border border-[#2B3045] hover:border-gray-400 rounded-md tracking-wider backdrop-blur-md transition-all uppercase">
            Explore Events
          </button>
        </div>

      </div>

    </section>
  );
};
