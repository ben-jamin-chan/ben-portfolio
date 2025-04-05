
import React, { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
    { name: 'Contact', href: '#contact', targetId: 'contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a 
          href="#home" 
          className="font-pixel text-[1.2rem] text-primary focus:outline-none"
          onClick={(e) => scrollToSection(e, 'home')}
        >
          {"</>"} Benjamin Chan(陳)<span className="animate-blink">_</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-base hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                onClick={(e) => scrollToSection(e, link.targetId)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle in middle for desktop with improved visibility */}
          <div className="ml-6 animate-fade-in" onClick={(e) => e.stopPropagation()}>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle with highlighted theme toggle */}
        <div className="flex items-center md:hidden">
          <div 
            className="animate-fade-in mr-4" 
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
            className="p-2 focus:outline-none z-50"
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
          className="md:hidden fixed inset-0 bg-background/90 backdrop-blur-xl z-40 flex items-start justify-center pt-20"
          onClick={(e) => {
            e.preventDefault();
            closeMenu();
          }}
        >
          <div 
            className="container mx-auto px-6 py-6 bg-card shadow-lg rounded-lg border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.targetId)}
                  className="font-mono py-3 px-4 text-lg hover:text-primary transition-colors hover:bg-accent/50 rounded-md flex items-center"
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
