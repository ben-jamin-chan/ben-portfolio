import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { useTheme } from '../utils/useTheme';

const Index = () => {
  // Initialize theme on page load
  const { theme } = useTheme();
  
  // Modern intersection observer for animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add animate class to trigger animations
          entry.target.classList.add('animate');
          
          // Also animate any child elements with fade-in-up class
          const animatedElements = entry.target.querySelectorAll('.fade-in-up');
          animatedElements.forEach((el, index) => {
            setTimeout(() => {
              el.classList.add('animate');
            }, index * 100); // Stagger the animations
          });
          
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
    
    // Observe all sections and fade-in-up elements
    const sections = document.querySelectorAll('section');
    const fadeElements = document.querySelectorAll('.fade-in-up');
    
    sections.forEach(section => {
      observer.observe(section);
    });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
      fadeElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
