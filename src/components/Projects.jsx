import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import trend from "../asset/trend.png"
import holo from "../asset/holo.png"
import petal from "../asset/petal.png"
import portfolio from "../asset/portfolio.avif"
import datingapp from "../asset/gym-dating-app.png"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web', 'Mobile', 'API'];
  
  const projects = [
    {
      title: "Florist's Service Platform",
      description: 'An online platform for florists to showcase their services, manage bookings, and interact with customers using APIs for seamless transactions and updates.',
      image: petal,
      tags: ['Web', 'Mobile', 'API'],
      github: 'https://github.com',
      live: 'https://ben-jamin-chan.github.io/lynn-florist-website',
    },
    {
      title: 'Fitness Themed Dating App',
      description: 'A fitness-themed dating app to connect fitness enthusiasts and find their perfect match built with React Native, Expo, and Firebase.',
      image: datingapp,
      tags: ['Mobile'],
      github: 'https://github.com',
      live: 'https://github.com/',
    },
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with for skincare and make-up products with React, and Firebase.',
      image: holo,
      tags: ['Web', 'Mobile'],
      github: 'https://github.com',
      live: 'https://ben-jamin-chan.github.io/holobeauty/',
    },
    {
      title: 'Trend Watcher App',
      description: 'A React Native application for users to track and compare Google trends with real-time updates and in app notifications using APIs, Firebase, and MongoDB Atlas.',
      image: trend,
      tags: ['Web', 'Mobile', 'API'],
      github: 'https://github.com',
      live: 'https://github.com/',
    },
  ];
  
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="py-0">
      <div className="container mx-auto px-6">
        <h2 className="section-heading pb-4 font-mono" data-aos="fade-up">My Projects</h2>
        <p className="text-lg text-foreground/70 mb-10 max-w-2xl" data-aos="fade-up" data-aos-delay="100">
          A showcase of my recent work, featuring full-stack applications, mobile apps, and API integrations that solve real-world problems.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10" data-aos="fade-up" data-aos-delay="200">
          {filters.map(filter => (
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
                    href={project.image} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                    aria-label={`View ${project.title} image in full size`}
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
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label="View Github repository"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-foreground/70 hover:text-primary transition-colors"
                        aria-label="View live site"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    </div>
                  </div>
                  
                  <p className="text-foreground/70 text-sm mb-4">{project.description}</p>
                  
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
                    View Project <ArrowRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <a 
            href="https://github.com" 
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
