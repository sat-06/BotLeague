import React from 'react';
import { Youtube, Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-14 px-4 lg:px-12 bg-[#050609] border-t border-[#1A1D2D]/60 text-gray-400">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
        
        {/* Left Side: QUICK LINKS */}
        <div>
          <h3 className="font-tech text-xs font-black tracking-widest text-white uppercase mb-5">
            QUICK LINKS
          </h3>

          <div className="grid grid-cols-2 gap-x-12 gap-y-2 text-xs">
            {/* Col 1 */}
            <div className="space-y-2">
              <a href="#arena" className="block hover:text-white transition-colors">The Arena</a>
              <a href="#episodes" className="block hover:text-white transition-colors">Episodes</a>
              <a href="#rankings" className="block hover:text-white transition-colors">National Rankings</a>
              <a href="#programs" className="block hover:text-white transition-colors">Programs</a>
              <a href="#rulebooks" className="block hover:text-white transition-colors">Rulebooks</a>
            </div>

            {/* Col 2 */}
            <div className="space-y-2">
              <a href="#join-team" className="block hover:text-white transition-colors">Join the Team</a>
              <a href="#sponsorships" className="block hover:text-white transition-colors">Sponsorships</a>
              <a href="#help" className="block hover:text-white transition-colors">Help Center</a>
              <a href="#contact" className="block hover:text-white transition-colors">Contact Us</a>
              <a href="#legal" className="block hover:text-white transition-colors">Legal</a>
            </div>
          </div>
        </div>

        {/* Right Side: SOCIAL MEDIA */}
        <div>
          <h3 className="font-tech text-xs font-black tracking-widest text-white uppercase mb-5 text-left md:text-right">
            SOCIAL MEDIA
          </h3>

          <div className="flex items-center gap-4 text-gray-400">
            <a href="#youtube" aria-label="YouTube" className="w-9 h-9 rounded-full bg-[#10121C] border border-[#202538] flex items-center justify-center hover:text-[#FF3B5C] hover:border-[#FF3B5C] transition-all">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="#instagram" aria-label="Instagram" className="w-9 h-9 rounded-full bg-[#10121C] border border-[#202538] flex items-center justify-center hover:text-[#FF3B5C] hover:border-[#FF3B5C] transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#facebook" aria-label="Facebook" className="w-9 h-9 rounded-full bg-[#10121C] border border-[#202538] flex items-center justify-center hover:text-[#FF3B5C] hover:border-[#FF3B5C] transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#twitter" aria-label="Twitter" className="w-9 h-9 rounded-full bg-[#10121C] border border-[#202538] flex items-center justify-center hover:text-[#FF3B5C] hover:border-[#FF3B5C] transition-all">
              <Twitter className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-[#121522] flex flex-col sm:flex-row items-center justify-between text-[11px] text-gray-500">
        <p>© {new Date().getFullYear()} BOTLEAGUE. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">India's Ultimate Robotics Arena</p>
      </div>
    </footer>
  );
};
