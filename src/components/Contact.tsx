import { useState, type ChangeEvent, type FormEvent } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import emailjs from 'emailjs-com';
import PageHeading from '@/components/PageHeading';
import SocialLinks from '@/components/SocialLinks';
import { siteProfile } from '@/lib/site';

type ContactFormData = { name: string; email: string; message: string };

const emailJsConfig = {
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID,
} as const;

const isEmailJsConfigured = Boolean(
  emailJsConfig.publicKey && emailJsConfig.serviceId && emailJsConfig.contactTemplateId
);

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState('');
  const [hasError, setHasError] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
    setFeedback('');
    setHasError(false);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) return;
    setHasError(false);
    setFeedback('');

    if (!isEmailJsConfigured) {
      const subject = encodeURIComponent('Portfolio inquiry from ' + formData.name);
      const body = encodeURIComponent(
        'Name: ' + formData.name + '\nEmail: ' + formData.email + '\n\nMessage:\n' + formData.message
      );
      window.location.href = 'mailto:' + siteProfile.email + '?subject=' + subject + '&body=' + body;
      setFeedback('Your email draft is ready. Send it from your email app, or email me directly using the link above.');
      return;
    }

    setIsSubmitting(true);
    try {
      emailjs.init(emailJsConfig.publicKey!);
      await emailjs.send(emailJsConfig.serviceId!, emailJsConfig.contactTemplateId!, {
        to_email: siteProfile.email,
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });

      setFeedback('Thanks for reaching out. Your message has been sent, and I’ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });

      if (emailJsConfig.autoReplyTemplateId) {
        // A failed confirmation email must not suggest the original message failed.
        await emailjs.send(emailJsConfig.serviceId!, emailJsConfig.autoReplyTemplateId, {
          to_name: formData.name,
          user_email: formData.email,
          from_name: siteProfile.fullName,
          reply_to: siteProfile.email,
          subject: 'Thank you for contacting me',
          message: "Thank you for reaching out. I've received your message and will get back to you as soon as possible.\n\nBest regards,\nBenjamin Chan",
        }).catch(() => undefined);
      }
    } catch {
      setHasError(true);
      setFeedback('Your message couldn’t be sent. Please try again or reach me at ' + siteProfile.email + '.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <PageHeading title="Contact" />
      <div className="contact-content">
        <p className="intro-paragraph">
          I’m open to interesting projects, collaborations, and new opportunities.
          Have something in mind? Feel free to reach out through any of the channels below.
        </p>
        <div className="contact-details">
          <a href={'mailto:' + siteProfile.email}><Mail aria-hidden="true" /><span>{siteProfile.email}</span></a>
          <a href={siteProfile.phoneHref}><Phone aria-hidden="true" /><span>{siteProfile.phoneDisplay}</span></a>
          <p><MapPin aria-hidden="true" /><span>{siteProfile.location}</span></p>
        </div>
        <section aria-labelledby="social-heading">
          <h2 className="section-label" id="social-heading">Social</h2>
          <SocialLinks />
        </section>
        <section aria-labelledby="message-heading">
          <h2 className="section-label" id="message-heading">Send a message</h2>
          <form className="contact-form" onSubmit={handleSubmit} aria-busy={isSubmitting}>
            <label className="sr-only" htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" placeholder="Name" autoComplete="name" required maxLength={100}
              value={formData.name} onChange={handleChange} disabled={isSubmitting} />
            <label className="sr-only" htmlFor="contact-email">Email</label>
            <input id="contact-email" name="email" type="email" placeholder="Email" autoComplete="email" required maxLength={254}
              value={formData.email} onChange={handleChange} disabled={isSubmitting} />
            <label className="sr-only" htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Message" rows={4} required maxLength={5000}
              value={formData.message} onChange={handleChange} disabled={isSubmitting} />
            {!isEmailJsConfigured && (
              <p className="form-note" id="email-draft-note">This opens a draft in your email app for you to send.</p>
            )}
            <button type="submit" className="send-button primary-button" disabled={isSubmitting}
              aria-describedby={!isEmailJsConfigured ? 'email-draft-note' : undefined}>
              {isSubmitting ? 'Sending…' : isEmailJsConfigured ? 'Send' : 'Open email draft'}
            </button>
            <p className={'form-feedback' + (hasError ? ' is-error' : '')} role="status" aria-live="polite">{feedback}</p>
          </form>
        </section>
      </div>
    </>
  );
}
