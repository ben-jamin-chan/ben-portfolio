import { ArrowDown, Mail } from 'lucide-react';
import { siteProfile } from '@/lib/site';

export default function ResumeLink() {
  return (
    <a
      className="pill-button primary-button"
      href={__HAS_RESUME__
        ? import.meta.env.BASE_URL + 'resume.pdf'
        : 'mailto:' + siteProfile.email + '?subject=CV%20request'}
      download={__HAS_RESUME__ ? 'Benjamin-Chan-CV.pdf' : undefined}
    >
      {__HAS_RESUME__ ? <>Download CV <ArrowDown aria-hidden="true" /></> : <>Request CV <Mail aria-hidden="true" /></>}
    </a>
  );
}
