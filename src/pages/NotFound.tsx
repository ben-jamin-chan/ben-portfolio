import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHeading from '@/components/PageHeading';

export default function NotFound() {
  return (
    <>
      <PageHeading title="Page not found" />
      <p className="intro-paragraph">This page doesn’t exist. You can head home to find my work and contact details.</p>
      <Link to="/" className="pill-button not-found-link"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
    </>
  );
}
