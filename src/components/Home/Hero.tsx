
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero = () => {
  const isMobile = useIsMobile();
  
  return (
    <section id="home" className="pt-40 pb-24 md:pt-52 md:pb-32 bg-background relative">
      {/* Background image with adjusted opacity for better visibility */}
      <div 
        className="absolute inset-0 z-0 opacity-70" // Increased opacity from 40% to 70%
        style={{
          backgroundImage: isMobile 
            ? "url('/Content/images/phone.jpg')" 
            : "url('/Content/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          filter: "contrast(1.1) brightness(1.05)" // Added contrast and brightness adjustments
        }}
      ></div>
      
      {/* Add a subtle overlay to improve text readability while keeping background visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-0"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-bold mb-6 animate-fade-in">
            Hello, I'm <span className="text-primary hover:scale-105 inline-block transition-transform">Tomás</span>
            <br />Networks Engineering Student
          </h1>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-up" style={{ animationDelay: '0.2s' }}>
            I'm pursuing a Master's Degree in Computer Science and Engineering at Instituto Superior Técnico.
            I have experience with many programming languages such as Python, C, Java, JavaScript, Assembly, PostgreSQL, HTML and CSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.4s' }}>
            <Button 
              asChild 
              size="lg" 
              className="rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,0,79,0.5)]"
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="rounded-full transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
            >
              <a href="#contact">Contact Me</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
