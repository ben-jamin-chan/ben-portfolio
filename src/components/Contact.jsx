
import React, { useState } from 'react';
import { MailIcon, PhoneIcon, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };
  
  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: 'Email',
      value: 'john@example.com',
      href: 'mailto:john@example.com'
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: 'Phone',
      value: '+1 (123) 456-7890',
      href: 'tel:+11234567890'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'San Francisco, CA',
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="section-heading pb-4">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
            <p className="text-foreground/80">
              Have a project in mind or want to discuss potential opportunities? 
              Feel free to reach out through the form or using my contact information.
            </p>
            
            <div className="space-y-4 mt-8">
              {contactInfo.map((info) => (
                <div key={info.label} className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60 font-mono">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="hover:text-primary transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p>{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="pt-6">
              <h3 className="text-lg font-mono font-bold mb-4">Connect With Me</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.419 4.865 20.166 9 21.547V18.5C9 17.837 9.337 17.2 9.875 16.788C7.01 16.346 5 14.986 5 12C5 9.239 7.239 7 10 7C12.761 7 15 9.239 15 12C15 14.986 12.99 16.346 10.125 16.788C10.663 17.2 11 17.837 11 18.5V21.547C15.135 20.166 18 16.419 18 12C18 6.477 13.523 2 8 2H12Z" fill="currentColor"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 4.32353V19.6765C21 20.4071 20.4071 21 19.6765 21H4.32353C3.59294 21 3 20.4071 3 19.6765V4.32353C3 3.59294 3.59294 3 4.32353 3H19.6765C20.4071 3 21 3.59294 21 4.32353ZM8.82353 10.1765H6.35294V17.6471H8.82353V10.1765ZM9.06176 7.85294C9.06176 7.05 8.42647 6.41176 7.58824 6.41176C6.75 6.41176 6.11765 7.05 6.11765 7.85294C6.11765 8.65588 6.75 9.29412 7.58824 9.29412C8.42647 9.29412 9.06176 8.65588 9.06176 7.85294ZM17.6471 12.8824C17.6471 10.8088 17.1618 9.88235 15.4412 9.88235C14.3824 9.88235 13.7471 10.3676 13.4088 10.8088H13.4029V10.1765H11.1176V17.6471H13.5882V13.6618C13.5882 12.7353 13.7647 11.8529 14.9206 11.8529C16.0765 11.8529 16.0765 12.9118 16.0765 13.7059V17.6471H17.6471V12.8824Z" fill="currentColor"/>
                  </svg>
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="Twitter"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 5.46991C22.2639 5.78869 21.4732 6.00086 20.6432 6.09916C21.4904 5.59773 22.1413 4.79797 22.4475 3.84628C21.6547 4.31174 20.7754 4.64981 19.8407 4.82888C19.0879 3.99677 18.0162 3.5 16.847 3.5C14.5811 3.5 12.7513 5.31736 12.7513 7.57486C12.7513 7.89364 12.7878 8.20277 12.8584 8.49825C9.43935 8.32883 6.41504 6.71578 4.3926 4.20539C4.03903 4.80538 3.83747 5.49773 3.83747 6.23596C3.83747 7.62884 4.56139 8.86464 5.66528 9.59821C4.99139 9.57684 4.35782 9.39777 3.80366 9.09263V9.14473C3.80366 11.1444 5.2179 12.8322 7.09468 13.2052C6.75042 13.3 6.38756 13.35 6.01518 13.35C5.75036 13.35 5.49245 13.3252 5.24146 13.2776C5.76414 14.939 7.27926 16.1513 9.07446 16.1845C7.67017 17.3116 5.90157 17.9728 3.97892 17.9728C3.64751 17.9728 3.32149 17.9542 3 17.9173C4.81519 19.1062 6.9732 19.7902 9.2897 19.7902C16.837 19.7902 20.9652 13.4155 20.9652 7.92121C20.9652 7.7418 20.9613 7.56238 20.9535 7.38374C21.7548 6.81053 22.4495 6.09704 23 5.28715V5.46991Z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-xl font-mono font-bold mb-6">Send Me a Message</h3>
              
              {submitStatus === 'success' ? (
                <div className="bg-green-100 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-md p-4 text-center">
                  <p className="text-green-800 dark:text-green-200">Your message has been sent successfully! I'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-mono mb-1">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-mono mb-1">
                      Your Email <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-mono mb-1">
                      Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="w-full px-4 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="pixel-btn bg-primary text-primary-foreground w-full flex items-center justify-center"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
