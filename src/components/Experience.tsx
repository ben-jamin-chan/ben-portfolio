import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeading from '@/components/PageHeading';
import ResumeLink from '@/components/ResumeLink';
import { experiences } from '@/lib/site';

export default function Experience() {
  return (
    <>
      <PageHeading title="Experience" />
      <ol className="experience-timeline">
        {experiences.map((experience) => (
          <li key={experience.title} className="experience-item">
            <h2>{experience.title}</h2>
            <p className="experience-meta">{experience.company} <span aria-hidden="true">·</span> {experience.period}</p>
            <p className="experience-description">{experience.description}</p>
          </li>
        ))}
      </ol>
      <div className="experience-actions">
        <ResumeLink />
        <Link to="/projects" className="text-link">Explore my work <ArrowUpRight aria-hidden="true" /></Link>
      </div>
    </>
  );
}
