import React from 'react';
import { Wrench, Landmark, Award, Users } from 'lucide-react';

export const Timeline: React.FC = () => {
  const steps = [
    {
      step: 'STEP 1',
      title: 'BUILD YOUR TEAM',
      icon: Wrench,
    },
    {
      step: 'STEP 2',
      title: 'COMPETE ACROSS INDIA',
      icon: Landmark,
    },
    {
      step: 'STEP 3',
      title: 'EARN NATIONAL RANKING & VALUE',
      icon: Award,
    },
    {
      step: 'STEP 4',
      title: 'JOIN THE LEAGUE',
      icon: Users,
    },
  ];

  return (
    <section className="py-20 px-4 lg:px-12 bg-[#05060A] border-b border-[#1A1D2D]/60 relative overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Subtitle Header */}
        <span className="text-xs font-extrabold tracking-widest text-[#FF3B5C] uppercase block mb-2">
          USER JOURNEY
        </span>

        {/* Title */}
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-3">
          YOUR PATH TO THE LEAGUE
        </h2>
        <p className="text-xs text-gray-400 max-w-md mx-auto mb-16">
          Lorem ipsum lorem ipsum lorem ipsum
        </p>

        {/* Steps Flow with Neon Connecting Line */}
        <div className="relative">
          
          {/* Horizontal Glowing Line */}
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-[2px] bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] shadow-blue-glow z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, index) => {
              const IconComp = item.icon;
              return (
                <div key={index} className="flex flex-col items-center group">
                  
                  {/* Circular Node */}
                  <div className="w-24 h-24 rounded-full bg-[#090B14] border-2 border-[#3B82F6] shadow-[0_0_25px_rgba(59,130,246,0.4)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-[#60A5FA] transition-all duration-300">
                    <div className="w-20 h-20 rounded-full bg-[#0B0D18] flex items-center justify-center border border-[#1E2538]">
                      <IconComp className="w-9 h-9 text-white group-hover:text-[#60A5FA] transition-colors" />
                    </div>
                  </div>

                  {/* Step Label */}
                  <span className="text-[11px] font-bold text-[#FF3B5C] tracking-widest uppercase mb-2">
                    {item.step}
                  </span>

                  {/* Title */}
                  <h3 className="font-tech text-sm font-bold text-white max-w-[170px] uppercase leading-snug">
                    {item.title}
                  </h3>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
