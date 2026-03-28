import { useState, useEffect } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { projectFilters, projects, siteProfile, type ProjectFilter } from "@/lib/site";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [isMobile, setIsMobile] = useState(false);

  // Hook to detect mobile vs desktop
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint in Tailwind
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  // Helper to toggle expanded state for a project
  const toggleExpand = (title) => {
    setExpanded(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <section id="projects" className="py-0">
      <div className="container mx-auto px-6">
        <h2 className="section-heading pb-4 font-mono" data-aos="fade-up">My Projects</h2>
        <p className="text-lg text-foreground/70 mb-10 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
          A showcase of my recent work, featuring full-stack applications, mobile apps, and API integrations that solve real-world problems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="200">
          {projectFilters.map(filter => (
            <button
              key={filter}
              className={`px-4 py-2 rounded-full font-mono text-sm transition-all ${
                activeFilter === filter 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-foreground/5 hover:bg-foreground/10'
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.title} 
              className="group h-full"
              data-aos="fade-up"
              data-aos-delay={100 * (index + 3)}
            >
              <div className="pixel-card h-full flex flex-col">
                <div className="relative overflow-hidden rounded-md mb-4 aspect-video">
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    aria-label={`Open ${project.title}`}
                  >
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105 cursor-pointer"
                    />
                  </a>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-foreground/70 hover:text-primary transition-colors"
                          aria-label={`View ${project.title} source code`}
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      )}
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label={`Open ${project.title}`}
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 text-sm mb-4">
                    {(() => {
                      const charLimit = isMobile ? 140 : 180;
                      const shouldTruncate = project.description.length > charLimit;
                      
                      if (expanded[project.title] || !shouldTruncate) {
                        return project.description;
                      }
                      
                      return `${project.description.slice(0, charLimit)}... `;
                    })()}
                    {(() => {
                      const charLimit = isMobile ? 140 : 180;
                      return project.description.length > charLimit && (
                        <button
                          className="text-primary underline underline-offset-2 font-mono text-xs ml-1 focus:outline-none"
                          onClick={() => toggleExpand(project.title)}
                          aria-label={expanded[project.title] ? 'Show less' : 'Read more'}
                          type="button"
                        >
                          {expanded[project.title] ? 'Show Less' : 'Read More'}
                        </button>
                      );
                    })()}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto mb-4">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-primary/10 text-primary rounded-full px-2 py-1">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <a 
                    href={project.live} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center font-mono text-sm underline underline-offset-4 font-medium text-primary hover:underline mt-auto"
                  >
                    {project.liveLabel ?? 'View Project'} <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a 
            href={siteProfile.githubUrl}
            target="_blank" 
            rel="noopener noreferrer" 
            className="pixel-btn bg-primary text-primary-foreground modern-btn-primary"
          >
            See More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
