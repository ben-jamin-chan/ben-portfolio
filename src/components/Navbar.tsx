import { Menu, Sparkles, X } from "lucide-react";
import type { MouseEvent, TouchEvent } from "react";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

type NavLink = {
  name: string;
  href: string;
  targetId: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "#home", targetId: "home" },
  { name: "About", href: "#about", targetId: "about" },
  { name: "Projects", href: "#projects", targetId: "projects" },
  { name: "Contact", href: "#get-in-touch", targetId: "get-in-touch" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const touchStartY = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    event.preventDefault();
    event.stopPropagation();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  const handleOverlayClose = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeMenu();
    }
  };

  const handleOverlayTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      touchStartY.current = event.touches[0]?.clientY ?? null;
    }
  };

  const handleOverlayTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget || touchStartY.current === null) {
      return;
    }

    const currentY = event.touches[0]?.clientY;
    if (
      typeof currentY === "number" &&
      Math.abs(currentY - touchStartY.current) > 12
    ) {
      closeMenu();
      touchStartY.current = null;
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 px-1 pt-3 transition-all duration-300 sm:px-6 lg:px-8 ${
        isScrolled ? "pt-2" : "pt-3 sm:pt-4"
      }`}
      data-aos="fade-down"
      data-aos-duration="600"
    >
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-[1.6rem] border px-3 py-3 transition-all duration-300 sm:px-5 ${
          isScrolled
            ? "border-border/60 bg-background/82 shadow-xxl shadow-primary/10 backdrop-blur-xl"
            : "border-transparent bg-background/55 backdrop-blur-md"
        }`}
      >
        <a
          href="#home"
          className="flex items-center gap-2 text-sm font-semibold tracking-[0.18em] text-foreground sm:text-base"
          onClick={(event) => scrollToSection(event, "home")}
        >
          {/* <span className="rounded-full bg-primary/10 p-1.5 text-primary">
            <Sparkles className="h-4 w-4" />
            
          </span> */}
          <span className="text-balance text-primary">
           Benjamin Chan(陳)<span className="animate-blink">_</span>
          </span>
        </a>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-1 rounded-full border border-border/60 bg-background/65 p-1 backdrop-blur">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition-all duration-300 hover:bg-primary/10 hover:text-primary"
                onClick={(event) => scrollToSection(event, link.targetId)}
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div onClick={(event) => event.stopPropagation()}>
            <ThemeToggle />
          </div>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <div onClick={(event) => event.stopPropagation()}>
            <ThemeToggle />
          </div>
          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="rounded-2xl border border-border/60 bg-background/80 p-2.5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-background/78 px-1 pt-24 backdrop-blur-xl md:hidden"
          onClick={handleOverlayClose}
          onTouchStart={handleOverlayTouchStart}
          onTouchMove={handleOverlayTouchMove}
          onTouchEnd={() => {
            touchStartY.current = null;
          }}
        >
          <div
            className="mx-auto w-full max-w-none rounded-[2rem] border border-border/60 bg-background/95 p-3 shadow-2xl shadow-primary/10"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-3 flex items-center justify-between px-2">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.24em] text-foreground/45">
                  Menu
                </p>
                <p className="mt-1 text-sm text-foreground/70">
                  Explore the portfolio
                </p>
              </div>
              <button
                type="button"
                onClick={closeMenu}
                className="rounded-2xl border border-border/60 bg-background/80 p-2 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                aria-label="Close menu"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(event) => scrollToSection(event, link.targetId)}
                  className="flex min-h-[3.4rem] items-center rounded-2xl border border-transparent bg-muted/25 px-4 text-base font-medium text-foreground/80 transition-all duration-300 hover:border-primary/20 hover:bg-primary/8 hover:text-primary"
                  data-aos="fade-up"
                  data-aos-delay={100 + index * 50}
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
