import React from 'react';
import { Heart, ArrowUp, Github, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  
  // Function to handle smooth scrolling to anchors
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-foreground/5 border-t border-border relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center" data-aos="fade-up">
          <div className="mb-4 md:mb-0" data-aos="fade-right" data-aos-delay="100">
            <a 
              href="#home" 
              className="font-pixel text-[1.2rem] text-primary"
              onClick={(e) => scrollToSection(e, 'home')}
            >
            {"</>"} Benjamin Chan(陳)<span className="animate-blink">_</span>
            </a>
            <p className="text-sm text-foreground/60 mt-2">
              Crafting digital experiences through elegant code.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8" data-aos="fade-left" data-aos-delay="200">
            <nav className="flex space-x-6">
              <a 
                href="#home" 
                className="text-sm hover:text-primary transition-colors"
                onClick={(e) => scrollToSection(e, 'home')}
              >Home</a>
              <a 
                href="#about" 
                className="text-sm hover:text-primary transition-colors"
                onClick={(e) => scrollToSection(e, 'about')}
              >About</a>
              <a 
                href="#projects" 
                className="text-sm hover:text-primary transition-colors"
                onClick={(e) => scrollToSection(e, 'projects')}
              >Projects</a>
              <a 
                href="#contact" 
                className="text-sm hover:text-primary transition-colors"
                onClick={(e) => scrollToSection(e, 'contact')}
              >Contact</a>
            </nav>
            
            {/* Let's Connect Section */}
            {/* <div className="flex items-center gap-3">
              <span className="text-sm text-foreground/60">Let's Connect:</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/ben-jamin-chan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 
                           hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center 
                           transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="https://www.instagram.com/neb.neb.neb.neb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 
                           hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center 
                           transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
                <a 
                  href="mailto:chanbenjamin.tl@gmail.com" 
                  className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 
                           hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center 
                           transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
              </div>
            </div> */}
            
            <button 
              onClick={scrollToTop}
              className="p-2 rounded-full bg-foreground/5 hover:bg-primary/10 text-primary transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-6 pt-6 text-center" data-aos="fade-up" data-aos-delay="300">
          <p className="text-sm text-foreground/60">
            © {currentYear} Benjamin Chan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
