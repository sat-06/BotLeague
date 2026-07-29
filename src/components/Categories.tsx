import React from 'react';
import { Lightbulb, Cpu, Brain, ArrowRight } from 'lucide-react';

export const Categories: React.FC = () => {
  const categories = [
    {
      id: 1,
      title: 'MINI MAKERS',
      desc: 'Where Creativity Meets Logic',
      active: true,
      customIcon: (
        <div className="w-12 h-12 rounded-full border-2 border-[#EAB308] flex items-center justify-center shadow-gold-glow mb-6">
          <div className="w-9 h-9 rounded-full border border-[#EAB308]/60 flex items-center justify-center text-[#EAB308] font-tech font-bold text-lg">
            M
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: 'JUNIOR INNOVATORS',
      desc: 'Engineering & Strategic Fundamentals.',
      active: false,
      icon: Lightbulb
    },
    {
      id: 3,
      title: 'YOUNG ENGINEERS',
      desc: 'Advanced Wireless & Autonomous Control.',
      active: false,
      icon: Cpu
    },
    {
      id: 4,
      title: 'ROBO MINDS',
      desc: 'Elite Professional Sports & Robotics.',
      active: false,
      icon: Brain
    }
  ];

  return (
    <section className="py-20 px-4 lg:px-12 bg-[#08090E] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Title */}
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-12">
          CATEGORIES
        </h2>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => {
            const IconComponent = cat.icon;
            return (
              <div 
                key={cat.id} 
                className={`bg-[#0D0E17] rounded-xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 ${
                  cat.active 
                    ? 'border-2 border-[#EAB308] shadow-[0_0_30px_rgba(234,179,8,0.2)]' 
                    : 'border border-[#1E2235] hover:border-gray-700'
                }`}
              >
                <div>
                  {/* Icon */}
                  {cat.customIcon ? (
                    cat.customIcon
                  ) : (
                    <div className="w-12 h-12 rounded-full border-2 border-[#EAB308]/70 bg-[#161824] flex items-center justify-center mb-6">
                      {IconComponent && <IconComponent className="w-6 h-6 text-[#EAB308]" />}
                    </div>
                  )}

                  {/* Title */}
                  <h3 className="font-tech text-base font-extrabold text-white tracking-wide uppercase mb-2">
                    {cat.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-400 leading-relaxed mb-8">
                    {cat.desc}
                  </p>
                </div>

                {/* Learn More CTA */}
                <a 
                  href={`#category-${cat.id}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#FF3B5C] hover:text-[#FF6B85] tracking-wider uppercase group"
                >
                  LEARN MORE 
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
