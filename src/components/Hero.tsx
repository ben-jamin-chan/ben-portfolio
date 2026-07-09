import { ArrowDown, ArrowRight, Github, Instagram, Mail } from 'lucide-react';
import type { MouseEvent } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import heroPortrait480 from '@/asset/optimized/hero-portrait-480.avif';
import heroPortrait720 from '@/asset/optimized/hero-portrait-720.avif';
import heroPortrait960 from '@/asset/optimized/hero-portrait-960.avif';
import { siteProfile } from '@/lib/site';

const portraitCapabilities = [
  {
    label: 'Interfaces',
    detail: 'React, TypeScript, polished product UI',
  },
  {
    label: 'Apps',
    detail: 'Expo, Firebase, web and mobile flows',
  },
];

const portraitBadges = ['Product UI', 'Mobile UX', 'API-backed apps'];

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
      className="relative overflow-hidden px-4 pb-14 pt-24 sm:px-6 sm:pb-20 sm:pt-28 lg:px-8 lg:pb-24 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-primary/12 blur-3xl sm:h-[540px] sm:w-[540px]" />
        <div className="absolute right-[-5rem] top-28 h-56 w-56 rounded-full bg-primary/10 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute bottom-0 left-[-4rem] h-64 w-64 rounded-full bg-accent/10 blur-3xl sm:h-80 sm:w-80" />
        <div className="bg-grid-pattern absolute inset-0 opacity-[0.04]" />
      </div>

      <div className="container relative">
        <div className="mx-auto grid max-w-6xl items-center gap-8 sm:gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-11 xl:gap-10">
          <div className="contents lg:order-1 lg:block lg:space-y-5">
            <div
              className="order-1 mx-auto w-full max-w-[22rem] text-center lg:mx-0 lg:max-w-none lg:text-left"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {/* <div
                className="mx-auto inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-primary shadow-sm shadow-primary/10 backdrop-blur md:text-sm lg:mx-0"
                data-aos="fade-up"
              >
                <Sparkles className="h-3.5 w-3.5" />
                Building polished digital products
              </div> */}

              <div className="space-y-5" data-aos="fade-up" data-aos-delay="150">
                <p className="font-mono text-md text-primary sm:text-base">
                  Hello! I'm
                </p>
                <h1 className="text-balance text-[1.9rem] font-semibold leading-tight tracking-[-0.03em] text-foreground min-[390px]:text-[2rem] sm:text-5xl sm:tracking-[-0.05em] md:text-6xl lg:text-7xl">
                  {siteProfile.brandName}
                </h1>
                <p className="font-mono text-base tracking-[0.05em] text-foreground/68 min-[390px]:text-lg sm:text-2xl sm:tracking-[0.18em]">
                  {siteProfile.role}<span className='animate-blink'>_</span>
                </p>
              </div>
            </div>

            <div
              className="order-3 mx-auto w-full max-w-[22rem] space-y-7 text-center sm:space-y-8 lg:mx-0 lg:max-w-none lg:text-left"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="space-y-5">
                <p className="mx-auto max-w-2xl text-base leading-7 text-foreground/72 sm:text-lg sm:leading-8 lg:mx-0 lg:max-w-[38rem]">
                I build polished web and mobile experiences with modern design, scalable architecture, and smooth interactions that help products feel intuitive and refined from end to end.
                </p>
              </div>

              {/* <div
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
              </div> */}

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
                  Start a Project
                </a>
              </div>

              <div
                className="flex flex-col items-center justify-between gap-5 rounded-3xl border border-border/60 bg-background/72 px-5 py-4 shadow-xl shadow-primary/5 backdrop-blur sm:flex-row"
                data-aos="fade-up"
                data-aos-delay="450"
              >
                <div className="text-center sm:text-left">
                  <p className="text-sm font-medium text-foreground/55">Based in Kuala Lumpur, working globally</p>
                  <p className="mt-1 text-sm text-foreground/72">From concept to deployment — building modern apps for the web and mobile.</p>
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
          </div>

          <div className="order-2 flex justify-center lg:order-2 lg:justify-end" data-aos="fade-up" data-aos-delay="250">
            <div className="relative w-full max-w-[18.5rem] min-[390px]:max-w-[20.5rem] sm:max-w-sm lg:max-w-[28rem]">
              <Card className="overflow-hidden rounded-2xl border-border/70 bg-card/80 p-2 shadow-[0_30px_90px_-38px_hsl(var(--primary)/0.42)] backdrop-blur-xl sm:p-3">
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-xl bg-muted">
                    <picture>
                      <source
                        type="image/avif"
                        srcSet={`${heroPortrait480} 480w, ${heroPortrait720} 720w, ${heroPortrait960} 960w`}
                        sizes="(min-width: 1024px) 28rem, (min-width: 640px) 24rem, 21rem"
                      />
                      <img
                        src={heroPortrait720}
                        alt="Benjamin Chan portrait"
                        width="720"
                        height="1080"
                        decoding="async"
                        className="aspect-[4/5] h-full w-full object-cover object-center transition-transform duration-700 hover:scale-[1.025]"
                      />
                    </picture>
                    {/* <div className="absolute left-3 top-3 rounded-md border border-white/20 bg-black/35 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/90 backdrop-blur">
                      Product builder
                    </div> */}
                  </div>

                  <div className="px-2 py-3.5 sm:px-3 sm:py-4">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="font-mono text-[0.68rem] uppercase tracking-[0.18em] text-primary">Software Developer</p>
                        <p className="mt-1 text-sm font-medium leading-5 text-foreground/80">
                          Designing and shipping web and mobile product surfaces.
                        </p>
                      </div>
                      {/* <div className="mt-1 flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/10 px-2 py-1">
                        <span className="size-1.5 rounded-full bg-primary" />
                        <span className="font-mono text-[0.58rem] uppercase tracking-[0.14em] text-primary">Online</span>
                      </div> */}
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {portraitBadges.map((badge) => (
                        <Badge
                          key={badge}
                          variant="outline"
                          className="rounded-full border-border/70 bg-background/60 px-2.5 py-1 font-mono text-[0.62rem] font-medium uppercase tracking-[0.12em] text-foreground/65"
                        >
                          {badge}
                        </Badge>
                      ))}
                    </div>

                    <Separator className="my-4 bg-border/55" />

                    <div className="grid gap-2">
                      {portraitCapabilities.map((capability) => (
                        <div
                          key={capability.label}
                          className="grid grid-cols-[5.5rem_1fr] items-start gap-3 rounded-lg border border-border/50 bg-background/45 px-3 py-2.5"
                        >
                          <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-foreground/45">
                            {capability.label}
                          </p>
                          <p className="text-sm font-medium leading-5 text-foreground/75">
                            {capability.detail}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
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
