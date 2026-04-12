import { useEffect, useState } from 'react';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { projectFilters, projects, siteProfile, type ProjectFilter } from '@/lib/site';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const filteredProjects =
    activeFilter === 'All' ? projects : projects.filter((project) => project.tags.includes(activeFilter));

  const toggleExpand = (title: string) => {
    setExpanded((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="projects" className="relative px-1 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl" data-aos="fade-up">
              <p className="section-kicker">Projects</p>
              <h2 className="section-heading mt-3">Selected work with a more product-led presentation.</h2>
              <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
                A mix of mobile apps, web platforms, and API-backed products designed to feel clear, useful, and
                visually refined from the first interaction.
              </p>
            </div>

            <div
              className="flex flex-wrap gap-2 rounded-[1.6rem] border border-border/60 bg-background/72 p-2 backdrop-blur"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/20'
                      : 'text-foreground/68 hover:bg-primary/8 hover:text-primary'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {filteredProjects.map((project, index) => {
              const charLimit = isMobile ? 120 : 170;
              const shouldTruncate = project.description.length > charLimit;
              const isExpanded = expanded[project.title];
              const preview = isExpanded || !shouldTruncate
                ? project.description
                : `${project.description.slice(0, charLimit)}...`;

              return (
                <article
                  key={project.title}
                  className="group overflow-hidden rounded-[2rem] border border-border/60 bg-background/78 shadow-xl shadow-primary/5 backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/25 hover:shadow-2xl hover:shadow-primary/10"
                  data-aos="fade-up"
                  data-aos-delay={140 + index * 80}
                >
                  <div className="relative overflow-hidden border-b border-border/50 bg-gradient-to-br from-primary/6 via-transparent to-primary/10 p-3 sm:p-5">
                    <div className="overflow-hidden rounded-[1.4rem] border border-border/60 bg-background/80">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                        aria-label={`Open ${project.title}`}
                      >
                        <img
                          src={project.image}
                          alt={project.title}
                          className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </a>
                    </div>
                  </div>

                  <div className="p-4 sm:p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
                        <div className="mt-3 flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-full border border-primary/15 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:border-primary/20 hover:bg-primary/8 hover:text-primary"
                            aria-label={`View ${project.title} source code`}
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:border-primary/20 hover:bg-primary/8 hover:text-primary"
                          aria-label={`Open ${project.title}`}
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-foreground/66 sm:text-base">
                      {preview}
                      {shouldTruncate && (
                        <button
                          type="button"
                          onClick={() => toggleExpand(project.title)}
                          className="ml-2 inline-flex text-sm font-medium text-primary underline underline-offset-4"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                        </button>
                      )}
                    </p>

                    <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-semibold text-primary"
                      >
                        {project.liveLabel ?? 'View project'}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </a>
                      <p className="text-xs uppercase tracking-[0.2em] text-foreground/42">Built for real users, not just demos</p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex justify-center" data-aos="fade-up" data-aos-delay="300">
            <a
              href={siteProfile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="modern-btn-primary"
            >
              See more on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
