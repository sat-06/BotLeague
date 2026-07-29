import React from 'react';
import { Layout, Cog, Briefcase, Atom, Shield } from 'lucide-react';

export const About: React.FC = () => {
  const features = [
    {
      num: '1.',
      title: 'STRUCTURED EVENTS',
      desc: '"From one-off events to a year-round competitive season."',
    },
    {
      num: '2.',
      title: 'DIGITAL IDENTITY',
      desc: '"Your professional robotics legacy, tracked and verified."',
    },
    {
      num: '3.',
      title: 'NATIONAL RANKING',
      desc: '"Benchmark your skills against the best engineers in India."',
    },
    {
      num: '4.',
      title: 'CAREER PATHWAY',
      desc: '"Turning arena victories into real-world industry opportunities."',
    },
  ];

  return (
    <section id="about" className="py-20 px-4 lg:px-12 bg-[#07080C] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Title */}
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-12">
          WHAT IS BOTLEAGUE?
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Grid Features (8 columns on lg) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
            {features.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <span className="font-tech text-[#FF3B5C] text-lg font-bold block">
                  {item.num}
                </span>
                <h3 className="font-tech text-base font-extrabold text-white tracking-wide uppercase">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 italic leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right Diagram Graphic (5 columns on lg) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-[#0A0C14] border border-[#1E2336] rounded-2xl p-6 flex items-center justify-center shadow-2xl">
              
              {/* Connecting Dashed Radial Lines SVG */}
              <svg className="absolute inset-0 w-full h-full text-gray-700 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3">
                <line x1="50%" y1="50%" x2="20%" y2="20%" />
                <line x1="50%" y1="50%" x2="80%" y2="20%" />
                <line x1="50%" y1="50%" x2="20%" y2="80%" />
                <line x1="50%" y1="50%" x2="80%" y2="80%" />
              </svg>

              {/* Central BOTLEAGUE Node */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#1A1E2E] to-[#0A0C14] border-2 border-[#FF3B5C] shadow-red-glow flex flex-col items-center justify-center">
                <Shield className="w-8 h-8 text-[#FF3B5C]" />
                <span className="font-tech text-[9px] font-black text-white tracking-widest mt-0.5">BL</span>
              </div>

              {/* Top Left Node - Layout/Web */}
              <div className="absolute top-8 left-8 w-12 h-12 rounded-lg bg-[#121524] border border-[#2B3148] flex items-center justify-center shadow-lg">
                <Layout className="w-5 h-5 text-gray-400" />
              </div>

              {/* Top Right Node - Atom */}
              <div className="absolute top-8 right-8 w-12 h-12 rounded-lg bg-[#121524] border border-[#2B3148] flex items-center justify-center shadow-lg">
                <Atom className="w-5 h-5 text-gray-400" />
              </div>

              {/* Bottom Left Node - Briefcase */}
              <div className="absolute bottom-8 left-8 w-12 h-12 rounded-lg bg-[#121524] border border-[#2B3148] flex items-center justify-center shadow-lg">
                <Briefcase className="w-5 h-5 text-gray-400" />
              </div>

              {/* Bottom Right Node - Cog */}
              <div className="absolute bottom-8 right-8 w-12 h-12 rounded-lg bg-[#121524] border border-[#2B3148] flex items-center justify-center shadow-lg">
                <Cog className="w-5 h-5 text-gray-400" />
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
