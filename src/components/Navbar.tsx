import React from 'react';
import { Shield } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-[#07080C]/90 backdrop-blur-md border-b border-[#1A1D2D]/60 px-4 lg:px-12 py-3.5 transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#FF3B5C] to-[#EAB308] p-[1.5px] shadow-red-glow">
            <div className="w-full h-full bg-[#090A0F] rounded-[6px] flex items-center justify-center">
              <Shield className="w-5 h-5 text-[#FF3B5C] group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex items-baseline">
            <span className="font-tech text-xl sm:text-2xl font-black tracking-wider text-white">
              BOT<span className="text-[#FF3B5C]">LEAGUE</span>
            </span>
            <span className="font-tech text-xs text-[#EAB308] font-bold ml-0.5">2</span>
          </div>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wide">
          <a href="#events" className="text-white border-b-2 border-[#FF3B5C] pb-1 font-medium transition-colors">
            Events
          </a>
          <a href="#programs" className="text-gray-400 hover:text-white pb-1 transition-colors">
            Programs
          </a>
          <a href="#community" className="text-gray-400 hover:text-white pb-1 transition-colors">
            Community
          </a>
          <a href="#ranks" className="text-gray-400 hover:text-white pb-1 transition-colors">
            Ranks
          </a>
        </nav>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <button className="px-5 py-2 text-xs sm:text-sm font-semibold text-gray-300 hover:text-white border border-[#2B3045] hover:border-gray-500 rounded-md transition-all">
            Login
          </button>
          <button className="px-5 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-red-btn rounded-md tracking-wider shadow-red-glow transition-all uppercase">
            Register Now
          </button>
        </div>

      </div>
    </header>
  );
};
