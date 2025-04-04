
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

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm py-3' : 'py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="font-pixel text-[1.2rem] text-primary focus:outline-none"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {"</>"} Benjamin Chan<span className="animate-blink">_</span>
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1">
          <nav className="flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-base hover:text-primary transition-colors relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:w-0 after:bg-primary after:transition-all hover:after:w-full"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  closeMenu();
                }}
              >
                {link.name}
              </a>
            ))}
          </nav>
          
          {/* Theme Toggle in middle for desktop with improved visibility */}
          <div className="ml-6 animate-fade-in">
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation Toggle with highlighted theme toggle */}
        <div className="flex items-center md:hidden">
          <div className="animate-fade-in mr-4">
            <ThemeToggle />
          </div>
          <button
            onClick={toggleMenu}
            className="p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute w-full bg-background/95 backdrop-blur-lg shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(link.href.substring(1))?.scrollIntoView({ behavior: 'smooth' });
                  closeMenu();
                }}
                className="font-mono py-2 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
