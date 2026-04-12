import { ArrowDown, ArrowRight, Github, Instagram, Mail, Sparkles } from 'lucide-react';
import type { MouseEvent } from 'react';
import ben5 from '../asset/ben5.png';
import ben8 from '../asset/ben8.jpeg'
import { siteProfile } from '@/lib/site';

export default function Hero() {
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden px-1 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-[540px] sm:w-[540px]" />
        <div className="absolute right-[-5rem] top-28 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-[-4rem] h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="container relative">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          <div
            className="order-2 space-y-8 text-center lg:order-1 lg:text-left"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <div
              className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-primary shadow-sm shadow-primary/10 backdrop-blur md:text-sm lg:mx-0"
              data-aos="fade-up"
            >
              <Sparkles className="h-3.5 w-3.5" />
              Building polished digital products
            </div>

            <div className="space-y-5" data-aos="fade-up" data-aos-delay="150">
              <p className="font-mono text-sm uppercase tracking-[0.35em] text-foreground/55 sm:text-base">
                Software Developer
              </p>
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.05em] text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
                Modern web experiences for brands that want to stand out.
              </h1>
              <p className="mx-auto max-w-2xl text-pretty text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8 lg:mx-0">
                I am {siteProfile.fullName}, a full-stack developer crafting conversion-focused websites,
                app experiences, and product interfaces that feel fast, clear, and premium across every screen.
              </p>
            </div>

            <div
              className="grid gap-3 sm:mx-auto sm:max-w-xl sm:grid-cols-3 lg:mx-0 lg:max-w-none"
              data-aos="fade-up"
              data-aos-delay="250"
            >
              <div className="rounded-2xl border border-border/60 bg-background/85 p-4 text-left shadow-lg shadow-primary/5 backdrop-blur">
                <p className="text-2xl font-semibold tracking-tight">Mobile-first</p>
                <p className="mt-1 text-sm text-foreground/65">Layouts designed for the screens your users actually use.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/85 p-4 text-left shadow-lg shadow-primary/5 backdrop-blur">
                <p className="text-2xl font-semibold tracking-tight">Fast shipping</p>
                <p className="mt-1 text-sm text-foreground/65">Lean builds, sharp UI systems, and production-minded delivery.</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/85 p-4 text-left shadow-lg shadow-primary/5 backdrop-blur">
                <p className="text-2xl font-semibold tracking-tight">Clean systems</p>
                <p className="mt-1 text-sm text-foreground/65">Thoughtful structure that scales from launch to iteration.</p>
              </div>
            </div>

            <div
              className="flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start"
              data-aos="fade-up"
              data-aos-delay="350"
            >
              <a
                href="#projects"
                className="modern-btn-primary group min-h-[3.5rem] w-full text-sm sm:w-auto"
                onClick={(event) => scrollToSection(event, 'projects')}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#get-in-touch"
                className="modern-btn-secondary min-h-[3.5rem] w-full text-sm sm:w-auto"
                onClick={(event) => scrollToSection(event, 'get-in-touch')}
              >
                Start a Conversation
              </a>
            </div>

            <div
              className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-border/60 bg-background/72 px-5 py-4 shadow-xl shadow-primary/5 backdrop-blur sm:flex-row"
              data-aos="fade-up"
              data-aos-delay="450"
            >
              <div className="text-center sm:text-left">
                <p className="text-sm font-medium text-foreground/55">Based in Kuala Lumpur, working globally</p>
                <p className="mt-1 text-sm text-foreground/72">Web, mobile, and API-backed products for startups and small teams.</p>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={siteProfile.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={siteProfile.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href={`mailto:${siteProfile.email}`}
                  className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="order-1 flex justify-center lg:order-2 lg:justify-end" data-aos="fade-left" data-aos-delay="250">
            <div className="relative w-full max-w-[22rem] sm:max-w-sm lg:max-w-[30rem]">
              <div className="absolute inset-6 rounded-[2rem] bg-primary/15 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-border/60 bg-background/85 p-3 shadow-[0_30px_80px_-24px_rgba(249,115,22,0.35)] backdrop-blur-xl">
                <div className="absolute inset-x-6 top-4 flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/55" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-foreground/10" />
                </div>
                <div className="mt-6 overflow-hidden rounded-[1.5rem] border border-border/50 bg-gradient-to-br from-primary/8 via-transparent to-primary/12">
                  <img
                    src={ben8}
                    alt="Benjamin Chan portrait"
                    className="aspect-[4/5] h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-2xl border border-border/60 bg-background/80 p-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/50">Focus</p>
                    <p className="mt-2 text-sm font-medium text-foreground/80">Landing pages and product UX</p>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-background/80 p-3">
                    <p className="text-xs uppercase tracking-[0.24em] text-foreground/50">Stack</p>
                    <p className="mt-2 text-sm font-medium text-foreground/80">React, Expo, APIs, backend systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex justify-center sm:mt-14 lg:mt-16">
          <a
            href="#about"
            onClick={(event) => scrollToSection(event, 'about')}
            aria-label="Scroll down"
            className="flex h-12 w-12 items-center justify-center rounded-full border border-border/60 bg-background/80 text-primary shadow-lg shadow-primary/10 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <ArrowDown className="h-5 w-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
}
