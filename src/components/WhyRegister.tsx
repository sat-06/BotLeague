import React from 'react';
import { Award, Gavel, Briefcase, Zap, Heart, User } from 'lucide-react';

export const WhyRegister: React.FC = () => {
  const advantagePoints = [
    {
      icon: Award,
      title: 'NATIONAL RECOGNITION',
      desc: '"Benchmark your skills on India\'s official robotics leaderboard."',
    },
    {
      icon: Gavel,
      title: 'FAIR JUDGING',
      desc: '"Compete with confidence under standardized, expert-led evaluation."',
    },
    {
      icon: Briefcase,
      title: 'CAREER OPS',
      desc: '"Bridge the gap between arena victories and top-tier tech placements."',
    },
    {
      icon: Zap,
      title: 'HIGH - ENERGY ECO',
      desc: '"Join a nationwide community of elite innovators and robotics athletes."',
    },
  ];

  const leaderboardData = [
    { rank: '#1', name: 'Player Name', score: '05000' },
    { rank: '#2', name: 'Player Name', score: '05000' },
    { rank: '#3', name: 'Player Name', score: '05000' },
    { rank: '#4', name: 'Player Name', score: '05000' },
    { rank: '#5', name: 'Player Name', score: '05000' },
    { rank: '#6', name: 'Player Name', score: '05000' },
    { rank: '#7', name: 'Player Name', score: '05000' },
    { rank: '#8', name: 'Player Name', score: '05000' },
  ];

  return (
    <section className="py-20 px-4 lg:px-12 bg-[#07080C] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <span className="text-xs font-extrabold tracking-widest text-[#FF3B5C] uppercase block mb-1">
          WHY REGISTER ?
        </span>
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-14">
          THE LEAGUE ADVANTAGE
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Feature List (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            {advantagePoints.map((pt, idx) => {
              const IconComp = pt.icon;
              return (
                <div key={idx} className="flex items-start gap-5 group">
                  <div className="w-12 h-12 rounded-xl bg-[#121524] border border-[#23283B] flex items-center justify-center shrink-0 group-hover:border-[#FF3B5C] group-hover:shadow-red-glow transition-all">
                    <IconComp className="w-6 h-6 text-[#FF3B5C]" />
                  </div>
                  <div>
                    <h3 className="font-tech text-base font-extrabold text-white tracking-wide uppercase">
                      {pt.title}
                    </h3>
                    <p className="text-xs text-gray-400 italic mt-1 leading-relaxed">
                      {pt.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Leaderboard Card Mockup (5 columns) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm bg-[#090B13] border border-[#1E2336] rounded-2xl p-6 relative overflow-hidden shadow-2xl">
              
              {/* Circuit background overlay */}
              <div className="absolute inset-0 opacity-15 pointer-events-none">
                <svg className="w-full h-full text-[#3B82F6]" fill="none" stroke="currentColor">
                  <path d="M 0 50 Q 100 20 200 80 T 400 100" strokeWidth="1" />
                  <path d="M 50 0 Q 150 120 300 40" strokeWidth="1" />
                </svg>
              </div>

              {/* Title */}
              <h3 className="font-tech text-center text-sm font-extrabold tracking-widest text-white uppercase mb-6">
                LEADERBOARD
              </h3>

              {/* Top Featured User Profile */}
              <div className="flex flex-col items-center mb-6">
                <div className="w-16 h-16 rounded-xl bg-[#EAB308]/20 border-2 border-[#EAB308] flex items-center justify-center mb-2 shadow-gold-glow relative">
                  <User className="w-8 h-8 text-[#EAB308]" />
                  <span className="absolute -bottom-2 bg-[#121522] border border-[#EAB308] text-[#EAB308] text-[9px] font-black px-1.5 py-0.2 rounded">
                    #1
                  </span>
                </div>
                <span className="text-xs font-bold text-gray-300">Player Name</span>
                <span className="text-[11px] font-black text-[#00E5FF] tracking-wider mt-0.5">
                  508,794 pts
                </span>
              </div>

              {/* Leaderboard Rows */}
              <div className="space-y-1.5 relative z-10">
                {leaderboardData.map((player, index) => (
                  <div 
                    key={index}
                    className="flex items-center justify-between bg-[#111320] border border-[#1C2033] rounded-lg px-3 py-1.5 text-xs hover:border-[#FF3B5C]/50 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-tech text-[10px] font-extrabold text-gray-400 w-5">
                        {player.rank}
                      </span>
                      <div className="w-5 h-5 rounded-full bg-[#1A1E30] flex items-center justify-center">
                        <User className="w-3 h-3 text-gray-400" />
                      </div>
                      <span className="font-medium text-gray-200 text-[11px]">
                        {player.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-gray-400 bg-[#0B0D17] px-2 py-0.5 rounded border border-[#1A1D2D]">
                        {player.score}
                      </span>
                      <Heart className="w-3 h-3 text-[#FF3B5C] fill-[#FF3B5C]" />
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
