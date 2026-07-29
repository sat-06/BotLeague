import React from 'react';

export const JoinSection: React.FC = () => {
  const forms = [
    { title: 'BECOME A JUDGE' },
    { title: 'VOLUNTEER' },
    { title: 'COMMUNITY MEMBER' },
  ];

  return (
    <section id="community" className="py-20 px-4 lg:px-12 bg-[#05060A] border-b border-[#1A1D2D]/60">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <h2 className="font-tech text-3xl sm:text-4xl font-black tracking-wider text-white uppercase mb-12">
          JOIN THE ECOSYSTEM
        </h2>

        {/* 3 Columns Forms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {forms.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#0B0D16] border border-[#1E2235] rounded-xl p-6 flex flex-col justify-between hover:border-gray-700 transition-colors shadow-lg"
            >
              <div>
                <h3 className="font-tech text-sm font-extrabold tracking-wider text-white uppercase mb-6">
                  {item.title}
                </h3>

                <form onSubmit={(e) => e.preventDefault()} className="space-y-3.5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Name" 
                      className="w-full bg-[#121522] border border-[#22273B] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3B5C] transition-colors"
                    />
                  </div>

                  <div>
                    <input 
                      type="text" 
                      placeholder="Location" 
                      className="w-full bg-[#121522] border border-[#22273B] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3B5C] transition-colors"
                    />
                  </div>

                  <div>
                    <input 
                      type="email" 
                      placeholder="Email" 
                      className="w-full bg-[#121522] border border-[#22273B] rounded-md px-3.5 py-2.5 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#FF3B5C] transition-colors"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-2.5 mt-2 bg-gradient-red-btn hover:bg-[#E02E4C] text-white text-xs font-black tracking-widest rounded transition-all uppercase shadow-red-glow"
                  >
                    SIGN UP
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
