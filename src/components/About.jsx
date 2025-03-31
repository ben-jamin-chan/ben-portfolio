
import React from 'react';
import { Code, Server, Layout, Database } from 'lucide-react';

export default function About() {
  const skills = [
    { 
      name: 'Front-end Development', 
      icon: <Layout className="h-6 w-6" />, 
      description: 'Building responsive and intuitive user interfaces with React, Vue, and modern CSS frameworks.',
      techs: ['JavaScript', 'React', 'HTML/CSS', 'TypeScript', 'Tailwind CSS']
    },
    { 
      name: 'Back-end Development', 
      icon: <Server className="h-6 w-6" />, 
      description: 'Creating robust server-side applications using Node.js and Python.',
      techs: ['Node.js', 'Express', 'Python', 'Django', 'GraphQL']
    },
    { 
      name: 'Database Management', 
      icon: <Database className="h-6 w-6" />, 
      description: 'Designing and optimizing databases for performance and scalability.',
      techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firebase']
    },
    { 
      name: 'Software Architecture', 
      icon: <Code className="h-6 w-6" />, 
      description: 'Designing scalable and maintainable software architectures.',
      techs: ['System Design', 'Microservices', 'RESTful APIs', 'Docker', 'AWS']
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="section-heading pb-4">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-4 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-2xl font-mono font-bold">Who I Am</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a dedicated software engineer with a passion for creating efficient, scalable, and user-centric digital solutions. With a strong foundation in both front-end and back-end technologies, I deliver comprehensive software that addresses complex business challenges.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              As a freelance developer, I bring a consultative approach to each project, working closely with clients to understand their unique requirements and translate them into technical specifications. My commitment to clean code practices and continuous learning ensures that I implement the latest industry standards and best practices.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My goal is to be more than just a developer—I aim to be a trusted technology partner who understands your business objectives and delivers solutions that drive real value. Whether you need a complete web application, API integration, or performance optimization, I'm dedicated to exceeding expectations with every line of code.
            </p>
            <div className="pt-4">
              <a href="#contact" className="pixel-btn bg-primary text-primary-foreground">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="glass-panel p-6 animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-2xl font-mono font-bold mb-6">My Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 pb-6">
                <h4 className="font-bold">Freelance Full-Stack Developer</h4>
                <p className="text-sm text-foreground/70 font-mono">Independent • 2021 - Present</p>
                <p className="mt-2 text-foreground/80">Developing custom web applications and e-commerce solutions for small to medium-sized businesses. Specializing in React, Node.js, and modern web technologies.</p>
              </div>
              <div className="border-l-2 border-primary/80 pl-4 pb-6">
                <h4 className="font-bold">Web Development Consultant</h4>
                <p className="text-sm text-foreground/70 font-mono">Various Clients • 2019 - 2021</p>
                <p className="mt-2 text-foreground/80">Provided technical consultation and development services for startups and established businesses. Focused on performance optimization and responsive design.</p>
              </div>
              <div className="border-l-2 border-primary/60 pl-4">
                <h4 className="font-bold">Frontend Developer</h4>
                <p className="text-sm text-foreground/70 font-mono">Digital Agency • 2017 - 2019</p>
                <p className="mt-2 text-foreground/80">Collaborated with design and development teams to create engaging user interfaces and interactive web experiences for agency clients.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-mono font-bold mb-10 text-center">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="pixel-card animate-slideUp" 
                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
              >
                <div className="flex items-center mb-3">
                  <div className="text-primary mr-2">{skill.icon}</div>
                  <h4 className="font-bold">{skill.name}</h4>
                </div>
                <p className="text-sm text-foreground/70 mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2">
                  {skill.techs.map(tech => (
                    <span key={tech} className="text-xs bg-foreground/5 rounded-full px-2 py-1 border border-foreground/10">
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
