import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react';
import {
  CheckCircle,
  Clock,
  Github,
  Instagram,
  Mail,
  MailIcon,
  MapPin,
  MessageCircle,
  PhoneIcon,
  Send,
} from 'lucide-react';
import emailjs from 'emailjs-com';
import { useToast } from '@/hooks/use-toast';
import { siteProfile } from '@/lib/site';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

type ContactInfoItem = {
  icon: ReactNode;
  label: string;
  value: string;
  href: string | null;
  description: string;
};

type BenefitItem = {
  icon: ReactNode;
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

const contactInfo: ContactInfoItem[] = [
  {
    icon: <MailIcon className="h-5 w-5" />,
    label: 'Email',
    value: siteProfile.email,
    href: `mailto:${siteProfile.email}`,
    description: 'Best for project enquiries and collaboration discussions.',
  },
  {
    icon: <PhoneIcon className="h-5 w-5" />,
    label: 'Phone',
    value: siteProfile.phoneDisplay,
    href: siteProfile.phoneHref,
    description: 'Reachable via WhatsApp for faster follow-ups.',
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: 'Location',
    value: siteProfile.location,
    href: null,
    description: 'Based in Malaysia and open to remote work.',
  },
];

const benefits: BenefitItem[] = [
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'Fast replies',
    description: 'I aim to respond quickly so momentum does not stall.',
  },
  {
    icon: <MessageCircle className="h-5 w-5" />,
    title: 'Friendly discovery',
    description: 'Happy to talk through ideas, timelines, and the right scope.',
  },
  {
    icon: <CheckCircle className="h-5 w-5" />,
    title: 'Thoughtful delivery',
    description: 'Clear communication, practical builds, and a polished final result.',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isEmailJsConfigured) {
      const mailtoUrl = `mailto:${siteProfile.email}?subject=${encodeURIComponent(
        `Portfolio inquiry from ${formData.name || 'Website visitor'}`
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`;

      window.location.href = mailtoUrl;
      toast({
        title: 'Opening your email app',
        description: `A draft will be prepared for ${siteProfile.email}.`,
        variant: 'success',
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

      await emailjs.send(emailJsConfig.serviceId!, emailJsConfig.contactTemplateId!, templateParams);
      await emailjs.send(emailJsConfig.serviceId!, emailJsConfig.autoReplyTemplateId!, {
        to_name: formData.name,
        user_email: formData.email,
        from_name: siteProfile.fullName,
        reply_to: siteProfile.email,
        subject: 'Thank you for contacting me',
        message:
          "Thank you for reaching out. I've received your message and will get back to you as soon as possible.\n\nBest regards,\nBenjamin Chan",
      });

      toast({
        title: 'Message sent',
        description: "Your message has been sent successfully. I'll get back to you soon.",
        variant: 'success',
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: 'Error',
        description: 'There was an error sending your message. Please try again or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="get-in-touch" className="relative overflow-hidden px-1 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-4rem] top-12 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 right-[-5rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
      </div>

      <div className="container relative">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl" data-aos="fade-up">
            <p className="section-kicker">Contact</p>
            <h2 className="section-heading mt-3">A SaaS-style closing section, but still personal.</h2>
            <p className="mt-5 text-base leading-7 text-foreground/70 sm:text-lg sm:leading-8">
              If you need a landing page refresh, a custom product build, or help tightening the experience across
              mobile and desktop, let&apos;s talk through it.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-[1.6rem] border border-border/60 bg-background/78 p-5 shadow-lg shadow-primary/5 backdrop-blur"
                data-aos="fade-up"
                data-aos-delay={100 + index * 80}
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm leading-7 text-foreground/65">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 xl:grid-cols-[0.9fr_1.1fr]">
            <div className="modern-card p-5 sm:p-8" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.24em] text-primary">
                Available for selected work
              </div>
              <h3 className="mt-6 text-2xl font-semibold tracking-tight sm:text-3xl">
                Let&apos;s make the next version of your digital presence feel sharper.
              </h3>
              <p className="mt-4 text-sm leading-7 text-foreground/66 sm:text-base">
                Share your idea, current pain points, or goals. I can help with redesigns, full builds, and product-focused improvements that bring more clarity to the experience.
              </p>

              <div className="mt-8 space-y-4">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.label}
                    className="rounded-2xl border border-border/60 bg-background/70 p-4"
                    data-aos="fade-up"
                    data-aos-delay={240 + index * 70}
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        {info.icon}
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-[0.22em] text-foreground/45">{info.label}</p>
                        {info.href ? (
                          <a
                            href={info.href}
                            className="mt-2 block break-words text-base font-semibold text-foreground/85 transition-colors duration-300 hover:text-primary sm:text-lg"
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="mt-2 break-words text-base font-semibold text-foreground/85 sm:text-lg">
                            {info.value}
                          </p>
                        )}
                        <p className="mt-2 text-sm leading-6 text-foreground/60">{info.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-border/50 pt-6">
                <p className="text-sm font-medium text-foreground/55">Elsewhere</p>
                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={siteProfile.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                  <a
                    href={siteProfile.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={`mailto:${siteProfile.email}`}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/60 bg-background/80 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:bg-primary/5"
                    aria-label="Email"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="modern-card p-5 sm:p-8" data-aos="fade-left">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Send className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-foreground/45">Project inquiry</p>
                  <h3 className="mt-1 text-2xl font-semibold tracking-tight">Send a message</h3>
                </div>
              </div>

              {!isEmailJsConfigured && (
                <div className="mt-6 rounded-2xl border border-emerald-500/25 bg-emerald-500/10 p-4 text-sm leading-7 text-foreground/75">
                  EmailJS is not configured yet, so the form will open your email app with a prepared draft to{' '}
                  <a href={`mailto:${siteProfile.email}`} className="font-semibold text-primary underline underline-offset-4">
                    {siteProfile.email}
                  </a>
                  .
                </div>
              )}

              <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-foreground/75">Your name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-border/60 bg-background/75 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-foreground/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                      placeholder="John Doe"
                      required
                    />
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-medium text-foreground/75">Email address</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-2xl border border-border/60 bg-background/75 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-foreground/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                      placeholder="john@example.com"
                      required
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-foreground/75">Project details</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={7}
                    className="w-full resize-none rounded-3xl border border-border/60 bg-background/75 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-foreground/35 focus:border-primary/40 focus:ring-2 focus:ring-primary/15"
                    placeholder="Tell me about your goals, audience, timeline, and the kind of experience you want to create."
                    required
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="modern-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="h-4 w-4 rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <Send className="h-4 w-4" />
                      {isEmailJsConfigured ? 'Send message' : 'Send via email app'}
                    </span>
                  )}
                </button>
              </form>

              <div className="mt-5 rounded-2xl border border-primary/15 bg-primary/7 p-4 text-center text-sm text-foreground/62">
                Your information is only used to respond to your inquiry.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
