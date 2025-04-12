
import React from 'react';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import ben1 from "../asset/Ben.jpeg"
import ben2 from "../asset/benn.jpeg"
import ben3 from "../asset/ben3.jpeg"
import ben4 from "../asset/ben4.jpeg"
import ben5 from "../asset/ben5.jpeg"

export default function Hero() {
  // Function to handle smooth scrolling
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:w-2/3 space-y-8 mt-10 md:mt-0 animate-slideRight" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <p className="font-mono text-primary">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Benjamin Chan(陳)
              </h1>
              <p className="text-2xl md:text-3xl font-mono mt-2 text-foreground/80">
                Software Engineer <span className="text-primary animate-blink">|</span>
              </p>
            </div>
            
            <p className="text-lg text-foreground/70 max-w-xl">
              I craft elegant solutions through clean code. Specializing in building 
              exceptional digital experiences that combine form and function.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a 
                href="#projects" 
                className="pixel-btn bg-primary text-primary-foreground"
                onClick={(e) => scrollToSection(e, 'projects')}
              >
                View Projects
              </a>
              <a 
                href="#contact" 
                className="pixel-btn bg-background"
                onClick={(e) => scrollToSection(e, 'contact')}
              >
                Contact Me
              </a>
            </div>
            
            <div className="flex items-center gap-4 pt-2">
              <a 
                href="https://github.com/ben-jamin-chan/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/neb.neb.neb.neb" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="md:w-2/4 flex justify-center md:justify-end">
          {/* w-56 h-56 md:w-72 md:h-72 */}
            <div className="relative border-2 border-foreground p-1 rounded-md bg-muted/50 animate-float ">
              <div className="w-full h-full rounded bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={ben2} className='h-full w-full object-cover' />
                {/* <div className="pixel-art-avatar h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22300%22%20height%3D%22300%22%20viewBox%3D%220%200%2030%2030%22%3E%3Crect%20x%3D%220%22%20y%3D%220%22%20width%3D%2230%22%20height%3D%2230%22%20fill%3D%22%23F97316%22%3E%3C%2Frect%3E%3Crect%20x%3D%2215%22%20y%3D%2218%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Frect%3E%3Crect%20x%3D%2215%22%20y%3D%2214%22%20width%3D%229%22%20height%3D%223%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Frect%3E%3Crect%20x%3D%2215%22%20y%3D%2210%22%20width%3D%226%22%20height%3D%223%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Frect%3E%3Crect%20x%3D%226%22%20y%3D%2214%22%20width%3D%223%22%20height%3D%223%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Frect%3E%3Crect%20x%3D%226%22%20y%3D%2210%22%20width%3D%226%22%20height%3D%223%22%20fill%3D%22%23FFFFFF%22%3E%3C%2Frect%3E%3Crect%20x%3D%2210%22%20y%3D%2210%22%20width%3D%2210%22%20height%3D%2210%22%20fill%3D%22%23000000%22%3E%3C%2Frect%3E%3Crect%20x%3D%2211%22%20y%3D%2211%22%20width%3D%228%22%20height%3D%228%22%20fill%3D%22%23EEEEEE%22%3E%3C%2Frect%3E%3Crect%20x%3D%2214%22%20y%3D%2211%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23000000%22%3E%3C%2Frect%3E%3Crect%20x%3D%2214%22%20y%3D%2215%22%20width%3D%222%22%20height%3D%222%22%20fill%3D%22%23000000%22%3E%3C%2Frect%3E%3C%2Fsvg%3E')" }}></div> */}
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a 
            href="#about" 
            onClick={(e) => scrollToSection(e, 'about')}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
