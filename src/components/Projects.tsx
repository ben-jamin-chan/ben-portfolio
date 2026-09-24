import { useState } from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import PageHeading from '@/components/PageHeading';
import { projectFilters, projects, siteProfile, type ProjectFilter } from '@/lib/site';

export default function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const visibleProjects = projects.filter((project) => filter === 'All' || project.tags.includes(filter));

  return (
    <>
      <PageHeading title="Projects" />
      <div className="project-filters" role="group" aria-label="Filter projects">
        {projectFilters.map((value) => (
          <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)} className="filter-button">
            {value}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">{visibleProjects.length} projects shown</p>
      <div className="project-list">
        {visibleProjects.map((project) => (
          <article key={project.title} className="work-card">
            <h2>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                {project.title}<ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </h2>
            <p>{project.description}</p>
            <div className="tag-list">
              {project.stack.map((technology) => <span className="tag" key={technology}>{technology}</span>)}
            </div>
            <div className="project-links">
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-link">
                {project.liveLabel ?? 'Live website'} <ArrowUpRight aria-hidden="true" />
              </a>
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-link">
                  Source code <ArrowUpRight aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
      <div className="project-more">
        <p>Explore more projects and experiments.</p>
        <a
          href={`${siteProfile.githubUrl}?tab=repositories`}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-button primary-button"
        >
          <Github aria-hidden="true" />
          View more on GitHub
          <ArrowUpRight aria-hidden="true" />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
    </>
  );
}
