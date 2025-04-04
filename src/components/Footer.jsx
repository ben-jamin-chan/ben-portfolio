
import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground/5 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="font-pixel text-[1.2rem] text-primary">
            {"</>"} Benjamin Chan<span className="animate-blink">_</span>
            </a>
            <p className="text-sm text-foreground/60 mt-2">
              Crafting digital experiences through elegant code.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <nav className="flex space-x-6">
              <a href="#home" className="text-sm hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-sm hover:text-primary transition-colors">About</a>
              <a href="#projects" className="text-sm hover:text-primary transition-colors">Projects</a>
              <a href="#contact" className="text-sm hover:text-primary transition-colors">Contact</a>
            </nav>
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-foreground/5 hover:bg-primary/10 text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-6 pt-6 text-center">
          <p className="text-sm text-foreground/60">
            © {currentYear} Ben 陳. All rights reserved.
          </p>
          {/* <p className="text-xs text-foreground/50 mt-2 flex items-center justify-center">
            Built with <Heart className="h-3 w-3 mx-1 text-red-500" /> and modern web technologies
          </p> */}
        </div>
      </div>
    </footer>
  );
}
