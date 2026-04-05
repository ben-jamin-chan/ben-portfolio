import React, { useEffect, useRef, useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleOverlayClose = (e) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  };

  const handleOverlayTouchStart = (e) => {
    if (e.target === e.currentTarget) {
      touchStartY.current = e.touches[0]?.clientY ?? null;
    }
  };

  const handleOverlayTouchMove = (e) => {
    if (e.target !== e.currentTarget || touchStartY.current === null) {
      return;
    }

    const currentY = e.touches[0]?.clientY;

    if (typeof currentY === 'number' && Math.abs(currentY - touchStartY.current) > 12) {
      closeMenu();
      touchStartY.current = null;
    }
  };

  const handleOverlayTouchEnd = () => {
    touchStartY.current = null;
  };

  // Function to handle smooth scrolling to anchors
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    e.stopPropagation();
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
      closeMenu();
    }
  };

const navLinks = [
    { name: 'Home', href: '#home', targetId: 'home' },
    { name: 'About', href: '#about', targetId: 'about' },
    { name: 'Projects', href: '#projects', targetId: 'projects' },
    { name: 'Contact', href: '#get-in-touch', targetId: 'get-in-touch' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'py-4 md:py-5'
      }`}
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div className="container mx-auto flex items-center justify-between px-4 sm:px-6">
        <a 
          href="#home" 
          className="max-w-[calc(100%-7rem)] font-pixel text-[1.2rem] leading-relaxed text-primary focus:outline-none sm:text-[0.82rem] md:max-w-none md:text-[1.2rem]"
          onClick={(e) => scrollToSection(e, 'home')}
          data-aos="fade-right"
          data-aos-delay="100"
        >
          {"</>"} Benjamin. C(陳)<span className="animate-blink">_</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-6" data-aos="fade-down" data-aos-delay="200">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-base hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                onClick={(e) => scrollToSection(e, link.targetId)}
                data-aos="fade-down"
                data-aos-delay={300 + (index * 50)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle in middle for desktop with improved visibility */}
          <div className="ml-6 animate-fade-in" onClick={(e) => e.stopPropagation()} data-aos="fade-left" data-aos-delay="400">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle with highlighted theme toggle */}
        <div className="flex items-center gap-4 md:hidden" data-aos="fade-left" data-aos-delay="200">
          <div 
            className="animate-fade-in" 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            <ThemeToggle />
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              toggleMenu();
            }}
            className="z-50 rounded-lg border border-border/60 bg-card/70 p-2.5 transition-colors hover:bg-accent/10 focus:outline-none"
            aria-label="Toggle menu"
            type="button"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex items-start justify-center bg-background/90 px-4 pt-20 backdrop-blur-xl md:hidden"
          onClick={handleOverlayClose}
          onTouchStart={handleOverlayTouchStart}
          onTouchMove={handleOverlayTouchMove}
          onTouchEnd={handleOverlayTouchEnd}
          onWheel={handleOverlayClose}
        >
          <div 
            className="w-full max-w-sm rounded-2xl border border-border bg-card/95 px-4 py-4 shadow-lg shadow-black/5"
            onClick={(e) => e.stopPropagation()}
            data-aos="fade-down"
            data-aos-duration="300"
          >
            <div className="mb-3 flex items-center justify-between px-2">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/50">
                Navigation
              </p>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-lg border border-border/60 bg-card/80 p-2 text-foreground/70 transition-colors hover:bg-accent/10 hover:text-primary focus:outline-none"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.targetId)}
                  className="flex min-h-[3rem] items-center rounded-xl px-4 py-3 font-mono text-base transition-colors hover:bg-accent/50 hover:text-primary"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index * 50)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
