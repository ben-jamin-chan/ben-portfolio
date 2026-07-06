import { ArrowRight, Code, Database, Layout, Send, Server } from 'lucide-react';
import { useEffect, useState } from 'react';
import type { MouseEvent, ReactNode } from 'react';
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

type Skill = {
  name: string;
  icon: ReactNode;
  description: string;
  techs: string[];
};

type AboutTab = 'experience' | 'profile' | 'skills';

const skills: Skill[] = [
  {
    name: 'Front-end Development',
    icon: <Layout className="h-5 w-5" />,
    description: 'Responsive interfaces with strong hierarchy, motion, and polished interaction details.',
    techs: ['React', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Native', 'Expo'],
  },
  {
    name: 'Back-end Development',
    icon: <Server className="h-5 w-5" />,
    description: 'Robust backend services, integrations, and delivery flows that support production use.',
    techs: ['Node.js', 'Express', 'Firebase', 'Supabase', 'REST APIs', 'Authentication'],
  },
  {
    name: 'Database Management',
    icon: <Database className="h-5 w-5" />,
    description: 'Data models and cloud workflows built for performance, maintainability, and scale.',
    techs: ['MongoDB', 'MySQL', 'Cloud Functions', 'Supabase', 'Vercel', 'Netlify'],
  },
  {
    name: 'Product Architecture',
    icon: <Code className="h-5 w-5" />,
    description: 'Systems that balance speed of shipping with long-term clarity and flexibility.',
    techs: ['System Design', 'Figma', 'Git', 'Docker', 'Testing', 'Version Control'],
  },
];

const aboutTabs: { value: AboutTab; label: string }[] = [
  { value: 'experience', label: 'Experience' },
  { value: 'profile', label: 'Profile' },
  { value: 'skills', label: 'Skills' },
];

const mobileTabTriggerClass =
  'relative z-10 min-h-11 cursor-pointer rounded-xl bg-transparent px-2 text-xs font-semibold text-foreground/55 shadow-none transition-all duration-200 hover:bg-primary/8 hover:text-primary active:scale-[0.97] focus-visible:ring-primary data-[state=active]:bg-transparent data-[state=active]:text-primary-foreground data-[state=active]:shadow-none';

export default function About() {
  const [skillsApi, setSkillsApi] = useState<CarouselApi>();
  const [activeSkill, setActiveSkill] = useState(0);
  const [activeAboutTab, setActiveAboutTab] = useState<AboutTab>('experience');
  const activeAboutTabIndex = aboutTabs.findIndex((tab) => tab.value === activeAboutTab);

  useEffect(() => {
    if (!skillsApi) {
      return;
    }

    const updateActiveSkill = () => {
      setActiveSkill(skillsApi.selectedScrollSnap());
    };

    updateActiveSkill();
    skillsApi.on('select', updateActiveSkill);
    skillsApi.on('reInit', updateActiveSkill);

    return () => {
      skillsApi.off('select', updateActiveSkill);
      skillsApi.off('reInit', updateActiveSkill);
    };
  }, [skillsApi]);

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="relative px-1 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="container relative">
        <div className="mx-auto max-w-6xl space-y-10">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="section-kicker">About</p>
            <h2 className="section-heading mt-3">I build the parts of a product users actually feel.</h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              I help businesses and founders turn rough ideas, outdated websites, and early SaaS concepts into
              clean interfaces that are useful, fast, and ready to ship.
            </p>
          </div>

          <Tabs
            value={activeAboutTab}
            onValueChange={(value) => setActiveAboutTab(value as AboutTab)}
            className="lg:hidden"
            data-aos="fade-up"
          >
            <TabsList className="relative grid h-auto w-full grid-cols-3 overflow-hidden rounded-2xl border border-border/60 bg-background/78 p-1 shadow-md shadow-primary/5 backdrop-blur">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute bottom-1 left-1 top-1 w-[calc((100%-0.5rem)/3)] rounded-xl bg-primary shadow-lg shadow-primary/25 transition-transform duration-300 ease-out"
                style={{ transform: `translateX(${Math.max(activeAboutTabIndex, 0) * 100}%)` }}
              />
              {aboutTabs.map((tab) => (
                <TabsTrigger key={tab.value} value={tab.value} className={mobileTabTriggerClass}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="profile" className="mt-4">
              <div className="glass-panel p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-primary">
                    Who I am
                  </span>
                  <span className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-[0.68rem] font-medium uppercase tracking-[0.18em] text-foreground/50">
                    Developer + builder
                  </span>
                </div>

                <div className="mt-5 flex flex-col gap-3">
                  <p className="text-base leading-7 text-foreground/86">
                    I specialize in websites, web apps, and mobile products that feel crisp, modern, and easy to
                    trust.
                  </p>
                  <p className="text-sm leading-7 text-foreground/66">
                    My work combines front-end craft, backend awareness, and product judgment so the final result is
                    practical to maintain and scale.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  <a
                    href="#get-in-touch"
                    className="modern-btn-primary px-4 py-3 text-sm"
                    onClick={(event) => scrollToSection(event, 'get-in-touch')}
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Build
                  </a>
                  <a
                    href="#projects"
                    className="modern-btn-secondary px-4 py-3 text-sm"
                    onClick={(event) => scrollToSection(event, 'projects')}
                  >
                    Work
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="mt-4">
              <div className="glass-panel p-5">
                <p className="section-kicker">Experience</p>
                <div className="mt-5 flex flex-col gap-3">
                  <div className="rounded-2xl border border-primary/15 bg-primary/6 p-4">
                    <h3 className="text-base font-semibold">Independent Full-Stack Developer</h3>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/45">2023 - Present</p>
                    <p className="mt-3 text-sm leading-7 text-foreground/68">
                      Designing and developing modern websites, web/mobile applications, and digital products with a
                      focus on usability, polished interfaces, performance, and real-world user experience.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/72 p-4">
                    <h4 className="text-sm font-semibold">Partner Resource Manager</h4>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/45">
                      Majorel Group - 2021 - 2023
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                      Led partner resource coordination and cross-functional operational support, ensuring effective
                      stakeholder alignment, seamless communication, and consistent delivery across fast-paced business
                      operations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/72 p-4">
                    <h4 className="text-sm font-semibold">Resource Coordinator</h4>
                    <p className="mt-1 text-xs uppercase tracking-[0.18em] text-foreground/45">
                      Majorel Group - 2020 - 2021
                    </p>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                      Supported planning, workflow coordination, and team execution, building the operational habits
                      that now shape how I approach product delivery.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="mt-4">
              <Carousel setApi={setSkillsApi} opts={{ align: 'start', containScroll: 'trimSnaps' }}>
                <CarouselContent className="-ml-3">
                  {skills.map((skill) => (
                    <CarouselItem key={skill.name} className="basis-[88%] pl-3">
                      <div className="group flex min-h-[21rem] flex-col rounded-[1.5rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur">
                        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                          {skill.icon}
                        </div>
                        <h3 className="mt-5 text-lg font-semibold leading-snug">{skill.name}</h3>
                        <p className="mt-3 text-sm leading-7 text-foreground/66">{skill.description}</p>
                        <div className="mt-auto flex flex-wrap gap-2 pt-5">
                          {skill.techs.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/68"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-1">
                    {skills.map((skill, index) => (
                      <button
                        key={skill.name}
                        type="button"
                        className="flex h-11 w-11 items-center justify-center rounded-full"
                        aria-label={`Show ${skill.name}`}
                        onClick={() => skillsApi?.scrollTo(index)}
                      >
                        <span
                          className={cn(
                            'h-2 rounded-full transition-all duration-300',
                            activeSkill === index ? 'w-5 bg-primary' : 'w-2 bg-foreground/20',
                          )}
                        />
                      </button>
                    ))}
                  </div>
                  <div className="flex items-center gap-2">
                    <CarouselPrevious className="static h-11 w-11 translate-x-0 translate-y-0 border-border/60 bg-background/80" />
                    <CarouselNext className="static h-11 w-11 translate-x-0 translate-y-0 border-border/60 bg-background/80" />
                  </div>
                </div>
              </Carousel>
            </TabsContent>
          </Tabs>

          <div className="hidden gap-6 lg:grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="py-1 sm:py-4 lg:py-6" data-aos="fade-up">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary">
                  Who I am
                </span>
                <span className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-foreground/50">
                  Developer + builder
                </span>
              </div>

              <div className="mt-6 max-w-2xl space-y-4">
                <p className="text-lg leading-8 text-foreground/88 sm:text-xl sm:leading-9">
                  I specialize in websites, web apps, and mobile products that feel crisp, modern, and easy to trust.
                  My work combines front-end craft, backend awareness, and product judgment so the final result is
                  more than a nice screen.
                </p>
                <p className="text-base leading-7 text-foreground/68">
                  From landing pages and e-commerce experiences to API-backed applications, I focus on creating
                  systems that are not only visually sharp but also practical to maintain and scale.
                </p>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#get-in-touch"
                  className="modern-btn-primary w-full sm:w-auto"
                  onClick={(event) => scrollToSection(event, 'get-in-touch')}
                >
                  <Send className="mr-2 h-4 w-4" />
                  Let&apos;s build something
                </a>
                <a
                  href="#projects"
                  className="modern-btn-secondary w-full sm:w-auto"
                  onClick={(event) => scrollToSection(event, 'projects')}
                >
                  Explore work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="glass-panel p-5 sm:p-8" data-aos="fade-up">
              <p className="section-kicker">Experience</p>
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-primary/15 bg-primary/6 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Independent Full-Stack Developer</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-foreground/45">2023 - Present</p>
                    </div>
                    {/* <span className="rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-medium text-primary">
                      Current
                    </span> */}
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/68">
                  Designing and developing modern websites, web/mobile applications, and digital products with a focus on usability, polished interfaces, performance, and real-world user experience.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/60 bg-background/72 p-5">
                    <h4 className="font-semibold">Partner Resource Manager</h4>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-foreground/45">Majorel Group • 2021 - 2023</p>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                    Led partner resource coordination and cross-functional operational support, ensuring effective stakeholder alignment, seamless communication, and consistent delivery across fast-paced business operations.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/72 p-5">
                    <h4 className="font-semibold">Resource Coordinator</h4>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-foreground/45">Majorel Group • 2020 - 2021</p>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                      Supported planning, workflow coordination, and team execution, building the operational habits
                      that now shape how I approach product delivery.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden gap-5 lg:grid lg:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group min-w-0 rounded-[1.75rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
                data-aos="fade-up"
                data-aos-delay={120 + index * 90}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                  {skill.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{skill.name}</h3>
                <p className="mt-3 text-sm leading-7 text-foreground/66">{skill.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {skill.techs.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/68"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
