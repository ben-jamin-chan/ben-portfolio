import { useState, type ChangeEvent, type FormEvent } from 'react';
import {
  MailIcon,
  PhoneIcon,
  MapPin,
  Send,
  Instagram,
  Github,
  MessageCircle,
  Clock,
  CheckCircle,
  Mail,
} from 'lucide-react';
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { siteProfile } from "@/lib/site";

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactInfoItem = {
  icon: JSX.Element;
  label: string;
  value: string;
  href: string | null;
  description: string;
};

type BenefitItem = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const emailJsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
} as const;

const isEmailJsConfigured = Boolean(
  emailJsConfig.publicKey &&
    emailJsConfig.serviceId &&
    emailJsConfig.contactTemplateId &&
    emailJsConfig.autoReplyTemplateId
);

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isEmailJsConfigured) {
      toast({
        title: "Contact form unavailable",
        description: `Please email me directly at ${siteProfile.email} while the form is being configured.`,
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      to_email: siteProfile.email,
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    try {
      emailjs.init(emailJsConfig.publicKey!);

      await emailjs.send(
        emailJsConfig.serviceId!,
        emailJsConfig.contactTemplateId!,
        templateParams
      );

      await emailjs.send(
        emailJsConfig.serviceId!,
        emailJsConfig.autoReplyTemplateId!,
        {
          to_name: formData.name,
          user_email: formData.email,
          from_name: "Benjamin Chan",
          reply_to: siteProfile.email,
          subject: "Thank you for contacting me",
          message: `Thank you for reaching out! I've received your message and will get back to you as soon as possible.\n\nBest regards,\nBenjamin Chan`,
        }
      ).catch((error) => {
        console.error('EmailJS auto-reply error:', error);
      });

      toast({
        title: "Message sent",
        description: "Your message has been sent successfully. I'll get back to you soon.",
        variant: "success",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Error",
        description: "There was an error sending your message. Please try again or email me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo: ContactInfoItem[] = [
    {
      icon: <MailIcon className="h-5 w-5" />,
      label: 'Email',
      value: siteProfile.email,
      href: `mailto:${siteProfile.email}`,
      description: 'Send me an email'
    },
    {
      icon: <PhoneIcon className="h-5 w-5" />,
      label: 'Phone',
      value: siteProfile.phoneDisplay,
      href: siteProfile.phoneHref,
      description: 'I am reachable via WhatsApp'
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: 'Location',
      value: siteProfile.location,
      href: null,
      description: 'Based in Malaysia'
    }
  ];

  const benefits: BenefitItem[] = [
    {
      icon: <Clock className="h-5 w-5" />,
      title: "Fast Replies",
      description: "I usually get back to messages within a day. Don't be shy - I'm just a message away!"
    },
    {
      icon: <MessageCircle className="h-5 w-5" />,
      title: "Free Consultation & Coffee Chat!",
      description: "Got an idea or need help? I'd love to hear about it - no pressure, just a friendly chat."
    },
    {
      icon: <CheckCircle className="h-5 w-5" />,
      title: "Quality Without the Fuss",
      description: "I care about doing things right. (and easy for you)!"
    }
  ];

  return (
    <section className="py-10 relative">
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-primary rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-2 relative z-10">
        <div className="container mx-auto px-6">
          <h2 className="section-heading pb-4 font-mono" data-aos="fade-up">Let's Work Together!</h2>
        </div>

        <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="100">
          <p className="text-lg text-foreground/70 mt-6 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your project and explore how we can create something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8" data-aos="fade-up" data-aos-delay="200">
          {benefits.map((benefit, index) => (
            <div key={benefit.title} className="modern-card text-center" data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                {benefit.icon}
              </div>
              <h3 className="font-bold text-lg mb-2">{benefit.title}</h3>
              <p className="text-foreground/70 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div id="get-in-touch" className="grid grid-cols-1 gap-8 xl:grid-cols-5 xl:gap-12">
          <div className="xl:col-span-2 space-y-8" data-aos="fade-right" data-aos-delay="400">
            <div className="modern-card p-5 sm:p-6 md:p-8">
              <div className="mb-6 flex items-center gap-3 sm:gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 sm:h-14 sm:w-14">
                  <MailIcon className="h-5 w-5 text-accent" />
                </div>
                <h3 className="text-[1.9rem] leading-none font-mono font-semibold decoration-primary underline decoration-2 underline-offset-8 sm:text-2xl">
                  Get in Touch
                </h3>
              </div>

              <p className="mb-8 text-foreground/80 leading-relaxed">
                Have a project in mind or want to discuss potential opportunities?
                I'd love to hear from you. Feel free to reach out through the form or using my contact information below.
              </p>

              <div className="space-y-4 sm:space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={info.label} className="group" data-aos="fade-up" data-aos-delay={500 + (index * 100)}>
                    <div className="flex items-center gap-3 rounded-2xl bg-muted/20 p-3 transition-colors duration-300 hover:bg-primary/5 sm:items-start sm:gap-4 sm:p-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary/20 sm:h-14 sm:w-14">
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="mb-1 text-sm font-medium text-foreground/60">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className={`block font-medium leading-snug transition-colors duration-300 hover:text-primary ${
                              info.label === 'Email'
                                ? 'break-words text-[0.98rem] font-medium leading-snug sm:text-xl'
                                : 'break-words text-[0.98rem] sm:text-xl'
                            }`}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="break-words text-[0.98rem] font-medium leading-snug sm:text-xl">{info.value}</p>
                        )}
                        <p className="mt-2 text-sm text-foreground/60">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border/20" data-aos="fade-up" data-aos-delay="800">
                <h4 className="mb-4 text-lg font-bold">Let's Connect:</h4>
                <div className="flex flex-wrap items-center gap-3">
                  <a
                    href={siteProfile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card/80 transition-all duration-300 hover:scale-110 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg group"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={siteProfile.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card/80 transition-all duration-300 hover:scale-110 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg group"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                  <a
                    href={`mailto:${siteProfile.email}`}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-border/50 bg-card/80 transition-all duration-300 hover:scale-110 hover:border-primary/30 hover:bg-primary/5 hover:shadow-lg group"
                    aria-label="Email"
                  >
                    <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="xl:col-span-3" data-aos="fade-left" data-aos-delay="600">
            <div className="modern-card relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-2xl leading-[1.75rem] font-mono font-semibold decoration-primary underline decoration-2 underline-offset-8">Let's Chat!</h3>
                <span className="text-2xl">💬</span>
              </div>

              {!isEmailJsConfigured && (
                <div className="mb-6 p-4 bg-amber-500/10 border border-amber-500/30 rounded-xl relative z-20">
                  <p className="text-sm text-foreground/80">
                    The form is temporarily using email fallback. Reach me directly at{" "}
                    <a href={`mailto:${siteProfile.email}`} className="font-semibold text-primary underline underline-offset-4">
                      {siteProfile.email}
                    </a>
                    {" "}until the EmailJS environment variables are configured.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 relative z-20" data-aos="fade-up" data-aos-delay="700">
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
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 relative z-30"
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
                      className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 relative z-30"
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
                    className="w-full px-4 py-3 bg-card/50 border border-border/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 hover:border-primary/30 resize-none relative z-30"
                    placeholder="Tell me about your project, timeline, and any specific requirements..."
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isEmailJsConfigured}
                  className="w-full modern-btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-lg relative z-30"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin"></div>
                      Sending...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center gap-2 font-mono">
                      <Send className="h-5 w-5" />
                      {isEmailJsConfigured ? "Send Message" : "Email Setup Required"}
                    </div>
                  )}
                </button>
              </form>

              <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-xl relative z-20" data-aos="fade-up" data-aos-delay="800">
                <p className="text-sm text-foreground/70 text-center">
                  Your information is only used to respond to your inquiry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
