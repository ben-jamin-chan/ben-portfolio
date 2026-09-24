import { ArrowDown, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ResumeLink() {
  if (!__HAS_RESUME__) {
    return (
      <Link className="pill-button primary-button" to="/contact">
        Contact me <Mail aria-hidden="true" />
      </Link>
    );
  }

  return (
    <a
      className="pill-button primary-button"
      href={import.meta.env.BASE_URL + 'resume.pdf'}
      download="Benjamin-Chan-CV.pdf"
    >
      Download CV <ArrowDown aria-hidden="true" />
    </a>
  );
}
