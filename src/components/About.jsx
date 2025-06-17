import React from 'react';
import { Code, Server, Layout, Database, Send } from 'lucide-react';

export default function About() {
  // Function to handle smooth scrolling
  const scrollToSection = (e, targetId) => {
    e.preventDefault();
    
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { 
      name: 'Front-end Development', 
      icon: <Layout className="h-6 w-6" />, 
      description: 'Building responsive and intuitive user interfaces with React, Vue, and modern CSS frameworks.',
      techs: ['JavaScript', 'TypeScript', 'React', 'HTML/CSS', 'Bootstrap', 'Tailwind CSS', 'shadcn/ui', 'React Native', 'Expo']
    },
    { 
      name: 'Back-end Development', 
      icon: <Server className="h-6 w-6" />, 
      description: 'Creating robust server-side applications using Node.js and modern backend services.',
      techs: ['Node.js', 'Express', 'Firebase', 'Supabase', 'RESTful APIs', 'Authentication']
    },
    { 
      name: 'Database Management', 
      icon: <Database className="h-6 w-6" />, 
      description: 'Designing and optimizing databases for performance and scalability.',
      techs: ['MongoDB', 'MySQL', 'Firebase', 'Supabase', 'Cloud Functions', 'Vercel', 'Netlify']
    },
    { 
      name: 'Software Architecture', 
      icon: <Code className="h-6 w-6" />, 
      description: 'Designing scalable and maintainable software architectures.',
      techs: ['System Design', 'Microservices', 'Figma', 'Git', 'RESTful APIs',  'Version Control', 'Test-Driven Development', 'Docker']
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="section-heading pb-4 font-mono" data-aos="fade-up">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
          <div className="space-y-4" data-aos="fade-right" data-aos-delay="100">
            <h3 className="text-2xl font-mono font-bold">Who I Am</h3>
            <p className="text-foreground/80 leading-relaxed">
              I'm a dedicated software engineer passionate about building efficient, scalable, and user-focused digital solutions. With experience in both front-end and back-end technologies, I help businesses solve complex problems with clean, modern software.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              As an independent developer, I bring a consultative approach to each project, working closely with clients to understand their unique requirements and translate them into technical specifications. My commitment to clean code practices and continuous learning ensures that I implement the latest industry standards and best practices.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              My goal is to be more than just a developer—I aim to be a trusted technology partner who understands your business objectives and delivers solutions that drive real value. Whether you need a complete web application, API integration, or performance optimization, I'm dedicated to exceeding expectations with every line of code.
            </p>
            <p className="text-foreground/80 leading-relaxed">
            Let's chat! I'm always open to cool projects or just geeking out about tech.
            </p>
            <div className="pt-4">
              <a href="#get-in-touch" className="modern-btn-primary font-mono" onClick={(e) => scrollToSection(e, 'get-in-touch')}>
              <Send className="h-4 w-4 mr-2" />Get In Touch
              </a>
            </div>
          </div>
          
          <div className="glass-panel p-6" data-aos="fade-left" data-aos-delay="300">
            <h3 className="text-2xl font-mono font-bold mb-6">My Experience</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 pb-6" data-aos="fade-up" data-aos-delay="400">
                <h4 className="font-bold">Full-Stack Developer</h4>
                <p className="text-sm text-foreground/70 font-mono">Independent • 2023 - Present</p>
                <p className="mt-2 text-foreground/80">Design and developing custom web applications and digital solutions for SMEs using modern technologies including React, Node.js, and modern web technologies. Collaborating with clients to build tailored digital solutions that enhance business operations and drive growth.</p>
              </div>
              <div className="border-l-2 border-primary/80 pl-4 pb-6" data-aos="fade-up" data-aos-delay="500">
                <h4 className="font-bold">Partner Resource Manager</h4>
                <p className="text-sm text-foreground/70 font-mono">Majorel Group • 2021 - 2023</p>
                <p className="mt-2 text-foreground/80">Managed strategic technology partnerships and resource allocation for enterprise clients, ensuring technical alignment with business objectives. Facilitated collaboration between development teams and business stakeholders, overseeing partnership initiatives to drive project success.</p>
              </div>
              <div className="border-l-2 border-primary/60 pl-4" data-aos="fade-up" data-aos-delay="600">
                <h4 className="font-bold">Resource Coordinator</h4>
                <p className="text-sm text-foreground/70 font-mono">Majorel Group • 2020 - 2021</p>
                <p className="mt-2 text-foreground/80">Optimized resource planning for developers and distribution to support project timelines and business objectives. Collaborated with cross-functional teams to assess resource needs, streamline workflows, and enhance operational efficiency. Ensured effective communication between stakeholders to maximize productivity and project's deliveries.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl font-mono font-bold mb-10 text-center" data-aos="fade-up" data-aos-delay="200">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="pixel-card" 
                data-aos="fade-up"
                data-aos-delay={100 * (index + 3)}
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
