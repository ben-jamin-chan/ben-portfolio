import { Github, Instagram, Mail } from 'lucide-react';
import { siteProfile } from '@/lib/site';

export default function SocialLinks() {
  return (
    <div className="social-links" aria-label="Social links">
      <a href={siteProfile.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
        <Github aria-hidden="true" />
      </a>
      <a href={siteProfile.instagramUrl} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
        <Instagram aria-hidden="true" />
      </a>
      <a href={'mailto:' + siteProfile.email} aria-label="Email Benjamin">
        <Mail aria-hidden="true" />
      </a>
    </div>
  );
}
