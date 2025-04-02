
import React from 'react';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import ben1 from "../asset/Ben.jpeg";
import ben2 from "../asset/benn.jpeg";
import ben3 from "../asset/ben3.jpeg";
import ben4 from "../asset/ben4.jpeg";
import ben5 from "../asset/ben5.jpeg";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div className="container mx-auto px-6 py-12 md:py-24 z-10">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:w-2/3 space-y-8 mt-10 md:mt-0 animate-slideRight backdrop-blur-sm p-6 rounded-lg bg-background/30 border border-foreground/10" style={{ animationDelay: '0.2s' }}>
            <div className="space-y-2">
              <p className="font-mono text-primary">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Benjamin Chan
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
              <a href="#projects" className="pixel-btn bg-primary text-primary-foreground">
                View Projects
              </a>
              <a href="#contact" className="pixel-btn bg-background">
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
          
          <div className="md:w-2/4 flex justify-end">
            <div className="relative border-2 border-foreground p-1 rounded-md bg-muted/50 animate-float backdrop-blur-sm">
              <div className="w-full h-full rounded bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={ben1} className='w-full h-full object-cover' alt="Benjamin Chan" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
