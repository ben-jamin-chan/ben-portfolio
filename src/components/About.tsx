import { ArrowRight, Code, Database, Layout, Send, Server } from 'lucide-react';
import type { MouseEvent, ReactNode } from 'react';

type Skill = {
  name: string;
  icon: ReactNode;
  description: string;
  techs: string[];
};

type Stat = {
  label: string;
  value: string;
};

const stats: Stat[] = [
  { value: 'Full-stack', label: 'From product concept to launch-ready implementation.' },
  { value: 'Mobile-ready', label: 'Interfaces shaped for handheld use first, then scaled up.' },
  { value: 'Business-minded', label: 'Design and development choices tied to real outcomes.' },
];

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

export default function About() {
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
            <h2 className="section-heading mt-3">A portfolio built like a product landing page.</h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              I help businesses and founders turn ideas into clean, high-converting digital experiences. That
              means combining thoughtful design, reliable engineering, and mobile-first execution so every screen
              feels intentional.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="modern-card p-5 sm:p-8" data-aos="fade-right">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary">
                  Who I am
                </span>
                <span className="rounded-full border border-border/50 bg-background/70 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-foreground/50">
                  Developer + builder
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <p className="text-lg leading-8 text-foreground/88">
                  I specialize in websites, web apps, and mobile products that feel crisp, modern, and easy to
                  trust. My work leans on strong UX, careful performance decisions, and interfaces that guide users
                  naturally.
                </p>
                <p className="text-base leading-7 text-foreground/68">
                  From landing pages and e-commerce experiences to API-backed applications, I focus on creating
                  systems that are not only visually sharp but also practical to maintain and scale.
                </p>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {stats.map((stat, index) => (
                  <div
                    key={stat.value}
                    className="rounded-2xl border border-border/60 bg-background/75 p-4"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 80}
                  >
                    <p className="text-lg font-semibold tracking-tight">{stat.value}</p>
                    <p className="mt-2 text-sm leading-6 text-foreground/65">{stat.label}</p>
                  </div>
                ))}
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

            <div className="glass-panel p-5 sm:p-8" data-aos="fade-left">
              <p className="section-kicker">Experience</p>
              <div className="mt-6 space-y-6">
                <div className="rounded-2xl border border-primary/15 bg-primary/6 p-5">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg font-semibold">Independent Full-Stack Developer</h3>
                      <p className="mt-1 text-sm uppercase tracking-[0.2em] text-foreground/45">2023 - Present</p>
                    </div>
                    <span className="rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-medium text-primary">
                      Current
                    </span>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-foreground/68">
                    Designing and developing custom websites, web applications, and digital products for SMEs with a
                    focus on usability, visual polish, and practical business results.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-border/60 bg-background/72 p-5">
                    <h4 className="font-semibold">Partner Resource Manager</h4>
                    <p className="mt-1 text-sm uppercase tracking-[0.2em] text-foreground/45">Majorel Group • 2021 - 2023</p>
                    <p className="mt-3 text-sm leading-7 text-foreground/65">
                      Managed strategic partnerships and operational alignment between teams, giving me a strong view
                      into stakeholder communication and delivery discipline.
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

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group rounded-[1.75rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
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
