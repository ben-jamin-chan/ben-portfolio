import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import trend from "../asset/trend.png"
import holo from "../asset/holo.png"
import petal from "../asset/petal.png"
import portfolio from "../asset/portfolio.avif"
import datingapp from "../asset/gym-dating-app.png"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [expanded, setExpanded] = useState({});
  
  const filters = ['All', 'Web', 'Mobile', 'API'];
  
  const projects = [
    {
      title: "🌸 Florist's Service Platform",
      description: 'A beautifully designed web platform tailored for florists to showcase their floral services, manage bookings, and interact with customers in real time. Built with React, Firebase, and Tailwind CSS, this platform streamlines the customer experience with intuitive booking workflows and automated updates via API integrations.',
      image: petal,
      tags: ['Web', 'Mobile', 'API'],
      github: 'https://github.com',
      live: 'https://ben-jamin-chan.github.io/lynn-florist-website',
    },
    {
      title: '💪❤️ Fitness Themed Dating App',
      description: 'A mobile-first dating platform designed for fitness enthusiasts to connect, chat, and find their ideal match. Built with React Native (Expo) and Firebase, FitMatch delivers a seamless swiping experience, real-time chat, and profile discovery — all optimized for active lifestyles. Scan with Expo Go app (available on App Store/Play Store) to view the app.',
      image: datingapp,
      tags: ['Mobile'],
      github: 'https://github.com',
      live: 'https://expo.dev/preview/update?message=Fixed%20firebase%20connectivity%20for%20Superlike%20and%20Messages&updateRuntimeVersion=1.0.0&createdAt=2025-06-16T09%3A19%3A48.040Z&slug=exp&projectId=2d488a1a-eb72-4455-b6b1-7c5c29c8ddcd&group=ef4d4b4f-342e-42bd-99ba-50daabaa0b50',
    },
    {
      title: '🛍️ E-Commerce Platform',
      description: 'A modern, responsive e-commerce application designed specifically for skincare and cosmetic products. Built from the ground up using React, Firebase, and Tailwind CSS, it offers a seamless shopping experience across desktop and mobile devices.',
      image: holo,
      tags: ['Web', 'Mobile'],
      github: 'https://github.com',
      live: 'https://ben-jamin-chan.github.io/holobeauty/',
    },
    {
      title: '📈 Trend Watcher App',
      description: 'A full-stack web application that lets users track, save, and compare trending search topics using Google Trends data. Designed for data-driven users, marketers, and trend enthusiasts, TrendTracker delivers real-time updates, smart notifications, and an intuitive dashboard experience.',
      image: trend,
      tags: ['Web', 'Mobile', 'API'],
      github: 'https://github.com',
      live: 'https://trend-watcher-pro.onrender.com/',
    },
  ];
  
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
                  
                  <p className="text-foreground/70 text-sm mb-4">
                    {expanded[project.title] || project.description.length <= 180
                      ? project.description
                      : `${project.description.slice(0, 180)}... `}
                    {project.description.length > 180 && (
                      <button
                        className="text-primary underline underline-offset-2 font-mono text-xs ml-1 focus:outline-none"
                        onClick={() => toggleExpand(project.title)}
                        aria-label={expanded[project.title] ? 'Show less' : 'Read more'}
                        type="button"
                      >
                        {expanded[project.title] ? 'Show Less' : 'Read More'}
                      </button>
                    )}
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
