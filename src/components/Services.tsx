import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Code2,
  LayoutTemplate,
  PlugZap,
  Rocket,
  ShoppingBag,
  Smartphone,
} from 'lucide-react';
import { useEffect, useRef, useState, type MouseEvent } from 'react';
import type { LucideIcon } from 'lucide-react';

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  examples: string[];
};

const services: Service[] = [
  {
    title: 'SaaS MVPs',
    description: 'Launch-ready web apps with authentication, dashboards, payments, and clear product flows.',
    icon: Rocket,
    examples: ['Founder MVPs', 'Client portals', 'Admin tools'],
  },
  {
    title: 'Dashboards',
    description: 'Operational interfaces for tracking customers, content, trends, activity, and business metrics.',
    icon: BarChart3,
    examples: ['Data views', 'Saved workflows', 'Internal tools'],
  },
  {
    title: 'Landing Pages',
    description: 'Conversion-focused pages with sharp messaging, responsive layouts, and polished visual rhythm.',
    icon: LayoutTemplate,
    examples: ['Service pages', 'Launch pages', 'Portfolio sites'],
  },
  {
    title: 'E-commerce',
    description: 'Storefront experiences that make product browsing, comparison, and checkout paths feel clear.',
    icon: ShoppingBag,
    examples: ['Catalogs', 'Product pages', 'Brand sites'],
  },
  {
    title: 'API Integrations',
    description: 'Connected product workflows for payments, email, analytics, maps, AI features, and automations.',
    icon: PlugZap,
    examples: ['Stripe', 'Firebase', 'Third-party APIs'],
  },
  {
    title: 'Mobile Apps',
    description: 'Mobile-first app experiences for discovery, profiles, messaging, bookings, and account flows.',
    icon: Smartphone,
    examples: ['Expo apps', 'Mobile UX', 'Firebase apps'],
  },
];

export default function Services() {
  const [activeService, setActiveService] = useState(0);
  const serviceTabsRef = useRef<HTMLDivElement>(null);
  const serviceTabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const selectedService = services[activeService];
  const SelectedIcon = selectedService.icon;

  useEffect(() => {
    const tabsContainer = serviceTabsRef.current;
    const activeTab = serviceTabRefs.current[activeService];

    if (!tabsContainer || !activeTab) return;

    const centeredScrollPosition =
      activeTab.offsetLeft - tabsContainer.clientWidth / 2 + activeTab.clientWidth / 2;

    tabsContainer.scrollTo({
      left: centeredScrollPosition,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  }, [activeService]);

  const showPreviousService = () => {
    setActiveService((current) => (current - 1 + services.length) % services.length);
  };

  const showNextService = () => {
    setActiveService((current) => (current + 1) % services.length);
  };

  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();

    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="relative scroll-mt-32 px-1 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[-5rem] top-10 h-72 w-72 rounded-full bg-primary/8 blur-3xl" />
        <div className="absolute bottom-8 left-[-4rem] h-64 w-64 rounded-full bg-accent/8 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="md:hidden" data-aos="fade-up">
            <p className="section-kicker">Services</p>
            <h2 className="section-heading mt-3">What I can build for you.</h2>
            <p className="mt-4 text-base leading-7 text-foreground/70">
              Choose a service to see how I can help bring your product to life.
            </p>

            <div
              ref={serviceTabsRef}
              className="mt-7 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              <div className="flex w-max gap-2" role="tablist" aria-label="Services">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  const isActive = index === activeService;

                  return (
                    <button
                      key={service.title}
                      ref={(element) => {
                        serviceTabRefs.current[index] = element;
                      }}
                      id={`service-tab-${index}`}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      aria-controls="mobile-service-panel"
                      onClick={() => setActiveService(index)}
                      className={`inline-flex min-h-11 items-center gap-2 rounded-full border px-4 text-sm font-medium transition-colors ${
                        isActive
                          ? 'border-primary bg-primary text-primary-foreground shadow-md shadow-primary/15'
                          : 'border-border/70 bg-background/75 text-foreground/70'
                      }`}
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                      {service.title}
                    </button>
                  );
                })}
              </div>
            </div>

            <article
              id="mobile-service-panel"
              role="tabpanel"
              aria-labelledby={`service-tab-${activeService}`}
              className="mt-3 rounded-[1.75rem] border border-border/60 bg-background/80 p-5 shadow-lg shadow-primary/5 backdrop-blur"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <SelectedIcon className="h-5 w-5" aria-hidden="true" />
                </div>
                <span className="pt-1 font-mono text-xs text-foreground/45">
                  {String(activeService + 1).padStart(2, '0')} / {String(services.length).padStart(2, '0')}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-tight">{selectedService.title}</h3>
              <p className="mt-3 text-sm leading-6 text-foreground/66">{selectedService.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {selectedService.examples.map((example) => (
                  <span
                    key={example}
                    className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/68"
                  >
                    {example}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-between border-t border-border/55 pt-4">
                <p className="text-xs font-medium text-foreground/55">Explore services</p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={showPreviousService}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    aria-label="Show previous service"
                  >
                    <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={showNextService}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-md shadow-primary/15 transition-transform active:scale-95"
                    aria-label="Show next service"
                  >
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>

            <a
              href="#get-in-touch"
              className="modern-btn-primary mt-5 w-full"
              onClick={(event) => scrollToSection(event, 'get-in-touch')}
            >
              Discuss a build
            </a>
          </div>

          <div className="hidden gap-8 md:grid lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-28" data-aos="fade-up">
              <p className="section-kicker">Services</p>
              <h2 className="section-heading mt-3">What I can build for you.</h2>
              <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
                I work best with founders, small teams, and service businesses that need a clear product surface,
                not just a nice-looking page.
              </p>
              <div className="mt-8 rounded-[1.6rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <Code2 className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">From idea to usable product</h3>
                    <p className="mt-2 text-sm leading-7 text-foreground/65">
                      Scope the core flow, design the interface, build the front end, connect the backend, and ship a
                      version people can actually use.
                    </p>
                  </div>
                </div>
              </div>
              <a
                href="#get-in-touch"
                className="modern-btn-primary mt-6 w-full sm:w-auto"
                onClick={(event) => scrollToSection(event, 'get-in-touch')}
              >
                Discuss a build
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;

                return (
                  <article
                    key={service.title}
                    className="group rounded-[1.75rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10"
                    data-aos="fade-up"
                    data-aos-delay={100 + index * 60}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-foreground/66">{service.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {service.examples.map((example) => (
                        <span
                          key={example}
                          className="rounded-full border border-border/60 bg-muted/40 px-3 py-1 text-xs font-medium text-foreground/68"
                        >
                          {example}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
