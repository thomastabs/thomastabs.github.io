
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/50 backdrop-blur-sm py-12 border-t border-primary/10">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-xl font-bold">
              Tomás<span className="text-primary">.</span>
            </p>
            <p className="text-muted-foreground mt-2">Networks Engineering Student</p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/thomastabs" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://www.linkedin.com/in/tomas-taborda" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:tomassantostaborda@gmail.com" 
              className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:scale-110 transform inline-block"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary/10 mt-8 pt-8 text-center md:text-left">
          <p className="text-muted-foreground">
            © {currentYear} Tomás Taborda. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
