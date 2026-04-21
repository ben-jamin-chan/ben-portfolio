import { ArrowUp } from 'lucide-react';
import type { MouseEvent } from 'react';
import { siteProfile } from '@/lib/site';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="px-1 pb-8 pt-4 sm:px-6 lg:px-8">
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border/60 bg-background/82 px-5 py-6 shadow-xl shadow-primary/5 backdrop-blur sm:px-8 sm:py-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <a
                href="#home"
                className="text-lg font-semibold tracking-[0.12em] text-foreground"
                onClick={(event) => scrollToSection(event, "home")}
              >
                <span className="text-balance text-primary text-[1rem]">
                  Benjamin Chan(陳)<span className="animate-blink">_</span>
                </span>
              </a>
              <p className="mt-3 text-sm leading-7 text-foreground/62 sm:text-base">
                Crafting digital experiences with modern structure, strong
                visual rhythm, and mobile-first product thinking.
              </p>
            </div>

            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:gap-8">
              <nav className="flex flex-wrap gap-4 text-sm font-medium text-foreground/65">
                <a
                  href="#home"
                  onClick={(event) => scrollToSection(event, "home")}
                  className="transition-colors hover:text-primary"
                >
                  Home
                </a>
                <a
                  href="#about"
                  onClick={(event) => scrollToSection(event, "about")}
                  className="transition-colors hover:text-primary"
                >
                  About
                </a>
                <a
                  href="#projects"
                  onClick={(event) => scrollToSection(event, "projects")}
                  className="transition-colors hover:text-primary"
                >
                  Projects
                </a>
                <a
                  href="#get-in-touch"
                  onClick={(event) => scrollToSection(event, "get-in-touch")}
                  className="transition-colors hover:text-primary"
                >
                  Contact
                </a>
              </nav>

              <button
                onClick={scrollToTop}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/82 text-primary transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mt-6 border-t border-border/50 pt-5 text-sm text-foreground/50">
            © {currentYear} {siteProfile.fullName}. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
