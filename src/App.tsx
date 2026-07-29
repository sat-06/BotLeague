import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Competitions } from './components/Competitions';
import { Timeline } from './components/Timeline';
import { About } from './components/About';
import { Categories } from './components/Categories';
import { Disciplines } from './components/Disciplines';
import { WhyRegister } from './components/WhyRegister';
import { JoinSection } from './components/JoinSection';
import { Sponsors } from './components/Sponsors';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#07080C] text-white flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Competitions />
        <Timeline />
        <About />
        <Categories />
        <Disciplines />
        <WhyRegister />
        <JoinSection />
        <Sponsors />
      </main>
      <Footer />
    </div>
  );
};

export default App;
