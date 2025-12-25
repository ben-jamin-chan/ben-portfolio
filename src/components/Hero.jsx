import React from 'react';
import { ArrowDown, Github, Instagram, Mail } from 'lucide-react';
import ben1 from "../asset/Ben.jpeg"
import ben2 from "../asset/benn.jpeg"
import ben3 from "../asset/ben3.jpeg"
import ben4 from "../asset/ben4.jpeg"
import ben5 from "../asset/ben5.jpeg"
import ben6 from "../asset/IMG_6863.jpeg"
import ben7 from "../asset/ben6.jpeg"

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
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="container mx-auto px-6 py-12 md:py-24">
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div
            className="md:w-2/3 space-y-8 mt-10 md:mt-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
              <p className="font-mono text-primary text-xl">👋 Hello! I'm</p>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight">
                Benjamin Chan(陳)
              </h1>
              <p className="text-2xl md:text-3xl font-mono mt-2 text-foreground/80">
                Software Engineer{""}
                <span className="text-primary animate-blink">_</span>
              </p>
            </div>

            <p className="text-lg text-foreground/70 max-w-xl" data-aos="fade-up" data-aos-delay="400">
            I craft elegant digital solutions through code. 
            Specializing in web-to-app digital experiences that combines design and functionality.
            </p>

            <div className="flex flex-row gap-3 sm:gap-3 pt-4" data-aos="fade-up" data-aos-delay="500">
  <a 
    href="#projects" 
    className="font-mono modern-btn-primary px-2 py-4 md:px-4 lg:px-4 xl:px-4 2xl:px-4 text-base"
    onClick={(e) => scrollToSection(e, 'projects')}
  >
    🚀 View Projects
  </a>
  <a 
    href="#get-in-touch" 
    className="font-mono modern-btn-secondary px-3 md:px-4 lg:px-4 xl:px-4 2xl:px-4 py-4 text-base"
    onClick={(e) => scrollToSection(e, 'get-in-touch')}
  >
    💬 Contact Me
  </a>
</div>

            <div className="flex items-center gap-4 pt-2" data-aos="fade-up" data-aos-delay="600">
              <a
                href="https://github.com/ben-jamin-chan/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/neb.neb.neb.neb"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:chanbenjamin.tl@gmail.com"
                className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="md:w-2/4 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="400">
            <div className="relative border-2 border-foreground p-1 rounded-md bg-muted/50 animate-float ">
              <div className="w-full h-full rounded bg-primary/10 flex items-center justify-center overflow-hidden">
                <img src={ben2} className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-3 lg:bottom-12 xl:bottom-12 2xl:bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce" data-aos="fade-up" data-aos-delay="800">
          <a
            href="#about"
            onClick={(e) => scrollToSection(e, "about")}
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6 text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
}
