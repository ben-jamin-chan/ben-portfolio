import React, { useState, useRef } from 'react';
import { MailIcon, PhoneIcon, MapPin, Send, Instagram, Github, MessageCircle, Clock, CheckCircle, Mail } from 'lucide-react';
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
          variant: "success",
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
      href: 'mailto:chanbenjamin.tl@gmail.com',
      description: 'Send me an email'
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: 'Phone',
      value: '+6017-338-0511',
      href: 'tel:+60173380511',
      description: 'I am reachable via WhatsApp'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: 'Kuala Lumpur, Malaysia',
      href: null,
      description: 'Based in Malaysia'
    }
  ];

  const benefits = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Fast Replies",
      description: "I usually get back to messages within a day. Don’t be shy — I’m just a message away!"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Free Consultation & Coffee Chat!", 
      description: "Got an idea or need help? I’d love to hear about it — no pressure, just a friendly chat."
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Quality Without the Fuss",
      description: "I care about doing things right. (and easy for you)!"
    }
  ];

  return (
    <section  className="py-10 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-2 relative z-10">
        {/* Section Header */}
          <div className='container mx-auto px-6'>
          <h2 className="section-heading pb-4 font-mono">Let's Work Together!</h2>
          </div>
        <div className="text-center mb-8 fade-in-up animate">
          <p className="text-lg text-foreground/70 mt-6 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and explore how we can create something amazing together.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 fade-in-up animate stagger-delay-1">
          {benefits.map((benefit, index) => (
            <div key={index} className="modern-card text-center">
              <div  className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-foreground/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* FIXME: */}
        <div id="get-in-touch" className="grid grid-cols-1 xl:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div  className="xl:col-span-2 space-y-8 fade-in-up animate stagger-delay-2">
            <div className="modern-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                  <MailIcon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-2xl font-semibold font-mono">Get in Touch</h3>
              </div>
              
              <p className="text-foreground/80 leading-relaxed mb-8">
                Have a project in mind or want to discuss potential opportunities? 
                I'd love to hear from you. Feel free to reach out through the form or using my contact information below.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="group">
                    <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-primary/5 transition-colors duration-300">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center text-primary transition-colors duration-300">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-foreground/60 font-medium mb-1">{info.label}</p>
                        {info.href ? (
                          <a 
                            href={info.href} 
                            className="font-medium hover:text-primary transition-colors duration-300 block"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="font-medium">{info.value}</p>
                        )}
                        <p className="text-xs text-foreground/60 mt-1">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-border/20">
                <h4 className="text-lg font-bold mb-4">Let's Connect:</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/ben-jamin-chan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 
                             hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center 
                             transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://www.instagram.com/neb.neb.neb.neb/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 
                             hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center 
                             transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                  href="mailto:chanbenjamin.tl@gmail.com" 
                  className="w-12 h-12 rounded-xl bg-card/80 border border-border/50 
                           hover:border-primary/30 hover:bg-primary/5 flex items-center justify-center 
                           transition-all duration-300 hover:scale-110 hover:shadow-lg group"
                  aria-label="Email"
                >
                  <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* FIXME: */}
          {/* Contact Form */}
          <div className="xl:col-span-3 fade-in-up animate stagger-delay-3">
            <div className="modern-card relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-[1.375rem] leading-[1.75rem] font-mono font-semibold decoration-primary underline decoration-2 underline-offset-8">Drop Me a Message!</h3>
              </div>
              
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label htmlFor="name" className="block text-sm font-medium mb-3 text-foreground/80">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                               transition-all duration-300 hover:border-primary/30 relative z-30"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  
                  <div className="relative">
                    <label htmlFor="email" className="block text-sm font-medium mb-3 text-foreground/80">
                      Email Address <span className="text-primary">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-xl 
                               focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                               transition-all duration-300 hover:border-primary/30 relative z-30"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium mb-3 text-foreground/80">
                    Your Message <span className="text-primary">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-xl 
                             focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50
                             transition-all duration-300 hover:border-primary/30 resize-none relative z-30"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full modern-btn-primary disabled:opacity-50 disabled:cursor-not-allowed
                           disabled:transform-none disabled:shadow-lg relative z-30"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </div>
                  )}
                </button>
              </form>
              
              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl relative z-20">
                <p className="text-sm text-foreground/70 text-center">
                  🔒 Your information is secure and will only be used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
