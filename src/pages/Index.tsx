
import React from 'react';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import Hero from '@/components/Home/Hero';
import Projects from '@/components/Home/Projects';
import About from '@/components/Home/About';
import Skills from '@/components/Home/Skills';
import Contact from '@/components/Home/Contact';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
