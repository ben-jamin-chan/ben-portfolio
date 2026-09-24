import { ArrowUpRight } from 'lucide-react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import portraitAvif from '@/asset/optimized/hero-portrait-480.avif';
import portraitWebp from '@/asset/optimized/hero-portrait-480.webp';
import SocialLinks from '@/components/SocialLinks';
import ResumeLink from '@/components/ResumeLink';
import { projects, siteProfile } from '@/lib/site';

const focusAreas = [
  'React', 'TypeScript', 'React Native', 'Expo', 'Node.js', 'REST APIs',
  'Firebase', 'Supabase', 'Tailwind CSS', 'Responsive UI', 'Figma', 'Git',
];

export default function Hero() {
  const featuredProject = projects.find((project) => project.featured) ?? projects[0];

  return (
    <div className="home-content">
      <header className="profile-heading">
        <picture className="profile-portrait">
          <source srcSet={portraitAvif} type="image/avif" />
          <img src={portraitWebp} alt={siteProfile.fullName} width={52} height={52} />
        </picture>
        <div>
          <h1>{siteProfile.fullName}</h1>
          <p className="profile-role">Software &amp; Web Developer</p>
        </div>
      </header>

      <p className="intro-paragraph">
        I build <strong>websites, web apps, and mobile experiences</strong> that feel intuitive,
        look considered, and work well. Based in <strong>Kuala Lumpur, Malaysia.</strong>
      </p>
      <p className="intro-paragraph">
        As an independent developer, I help founders and small teams turn ideas into working
        products. My work spans <strong>React and TypeScript interfaces</strong>, mobile apps
        with <strong>React Native and Expo</strong>, and the APIs and data behind them.
        From a florist’s booking experience to a fitness dating app, I take care of the
        design, development, and details that make a product ready to ship.
      </p>
      <p className="intro-paragraph">
        Previously, I worked in partner and resource management at <strong>Majorel Group</strong>.
        That experience still shapes how I build: clear communication, thoughtful planning,
        and a focus on the people using the product.
      </p>

      <section className="featured-project" aria-labelledby="featured-project-title">
        <div className="featured-heading">
          <h2 id="featured-project-title">{featuredProject.title}</h2>
          <a href={featuredProject.live} target="_blank" rel="noopener noreferrer" className="text-link mono-link">
            View live <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <p>{featuredProject.description}</p>
        <div className="featured-stack" aria-label="Built with">
          {featuredProject.stack.map((technology, index) => (
            <Fragment key={technology}>
              {index > 0 && <span aria-hidden="true">·</span>}
              {technology}
            </Fragment>
          ))}
        </div>
      </section>

      <div className="home-actions">
        <ResumeLink />
        <Link className="pill-button" to="/projects">
          Browse projects <ArrowUpRight aria-hidden="true" />
        </Link>
        <Link className="pill-button" to="/experience">Experience</Link>
      </div>

      <section className="focus-section" aria-labelledby="focus-heading">
        <h2 id="focus-heading" className="section-label">Focus</h2>
        <div className="tag-list">
          {focusAreas.map((area) => <span className="tag" key={area}>{area}</span>)}
        </div>
      </section>
      <SocialLinks />
    </div>
  );
}
