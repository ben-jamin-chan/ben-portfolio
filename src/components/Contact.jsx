import React, { useState, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPin, Send, Instagram } from 'lucide-react';
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef();
  const { toast } = useToast();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Initialize EmailJS with your User ID (Public Key)
    emailjs.init("YtV_Gb-sBV_edWDZV");
    
    // Prepare template parameters
    const templateParams = {
      to_email: "chanbenjamin.tl@gmail.com",
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };
    
    // Send the email using EmailJS
    emailjs.send('service_iowu9ba', 'template_yug4c13', templateParams)
      .then(() => {
        // After successful sending of the main email, send an auto-reply to the user
        // Make sure these parameter names match EXACTLY what's in your EmailJS template
        const autoReplyParams = {
          to_name: formData.name,
          user_email: formData.email, // Try using user_email instead of to_email
          from_name: "Benjamin Chan",
          reply_to: "chanbenjamin.tl@gmail.com",
          subject: "Thank you for contacting me",
          message_html: `Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Best regards,
Benjamin Chan`
        };
        
        console.log("Sending auto-reply with params:", autoReplyParams);
        
        // Try using different parameter values - this is a common issue with EmailJS templates
        const fallbackParams = {
          // Standard EmailJS parameters
          from_name: "Benjamin Chan",
          to_name: formData.name,
          email: formData.email,
          reply_to: "chanbenjamin.tl@gmail.com",
          message: `Thank you for reaching out! I've received your message and will get back to you as soon as possible.

Best regards,
Benjamin Chan`
        };
        
        // Send the auto-reply email - specify your service ID and template ID carefully
        return emailjs.send('default_service', 'template_kc9ad7n', fallbackParams)
          .catch(error => {
            console.error('Auto-reply error details:', error);
            // Continue with the success flow even if auto-reply fails
            return Promise.resolve();
          });
      })
      .then(() => {
        setIsSubmitting(false);
        toast({
          title: "Message Sent!",
          description: "Your message has been sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        setIsSubmitting(false);
        console.error('EmailJS error:', error);
        toast({
          title: "Error.",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      });
  };
  
  const contactInfo = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: 'Email',
      value: 'chanbenjamin.tl@gmail.com',
      href: 'mailto:chanbenjamin.tl@gmail.com'
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: 'Phone',
      value: '+6017-338-0511',
      href: 'tel:+60173380511'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Kuala Lumpur, Malaysia',
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
                  href="https://github.com/ben-jamin-chan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="GitHub"
                >
                  <svg
                    className="h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a 
                  href="https://www.instagram.com/neb.neb.neb.neb/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-foreground/5 hover:bg-primary/10 flex items-center justify-center transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <div className="glass-panel p-8 rounded-xl">
              <h3 className="text-xl font-mono font-bold mb-6">Send Me a Message</h3>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
