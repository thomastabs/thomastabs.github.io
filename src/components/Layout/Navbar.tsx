
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll function for navigation links
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    if (mobileMenuOpen) {
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container mx-auto flex items-center justify-between py-2">
        <a href="/" className="flex items-center">
          <img
            src="/Content/images/logo.png"
            alt="Tomás Taborda"
            className={`transition-transform duration-300 hover:scale-105 ${
              isMobile ? 'h-14' : 'h-20 md:h-24'
            }`}
          />
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLinks scrollToSection={scrollToSection} />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon"
            className="text-foreground hover:bg-primary/20 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`md:hidden bg-background/95 backdrop-blur-md border-t border-primary/10 fixed top-[60px] left-0 w-full h-screen transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto py-4 flex flex-col space-y-6 pt-8">
          <NavLinks mobile scrollToSection={scrollToSection} setMobileMenuOpen={setMobileMenuOpen} />
        </div>
      </div>
    </nav>
  );
};

interface NavLinksProps {
  mobile?: boolean;
  scrollToSection: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void;
  setMobileMenuOpen?: (open: boolean) => void;
}

const NavLinks = ({ mobile, scrollToSection }: NavLinksProps) => {
  const links = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => scrollToSection(e, link.href)}
          className={`font-medium relative overflow-hidden group ${
            mobile ? 'text-foreground py-4 text-2xl text-center border-b border-muted' : 'text-foreground'
          }`}
        >
          {link.name}
          <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
        </a>
      ))}
    </>
  );
};

export default Navbar;
