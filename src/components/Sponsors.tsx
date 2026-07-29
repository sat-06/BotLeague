import React from 'react';
import { Shield, Bot, Cpu, Zap, Globe, Award } from 'lucide-react';

export const Sponsors: React.FC = () => {
  const sponsors = [
    {
      name: 'NIT DELHI',
      icon: Shield,
    },
    {
      name: 'INDIAN BIT',
      sub: 'FIGHT BOT',
      icon: Bot,
    },
    {
      name: 'NIT SILCHAR',
      icon: Award,
    },
    {
      name: 'ROBO COMPANY',
      icon: Zap,
    },
    {
      name: 'IIT BOMBAY',
      icon: Cpu,
    },
    {
      name: 'ROBO COMPANY',
      sub: 'General Robotics',
      icon: Globe,
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-12 bg-[#07080C] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-12">
          SPONSORS
        </h2>

        {/* Sponsor Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 items-center">
          {sponsors.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div 
                key={idx}
                className="flex items-center justify-center gap-3.5 p-4 rounded-xl border border-[#161826] bg-[#0A0B12] hover:border-gray-700 transition-colors"
              >
                <div className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-gray-300">
                  <IconComp className="w-5 h-5 stroke-[1.5]" />
                </div>
                <div className="text-left">
                  {item.sub && (
                    <span className="block text-[9px] font-bold text-gray-500 uppercase tracking-widest leading-none mb-0.5">
                      {item.sub}
                    </span>
                  )}
                  <span className="font-tech text-xs sm:text-sm font-black text-gray-200 tracking-wider uppercase">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
