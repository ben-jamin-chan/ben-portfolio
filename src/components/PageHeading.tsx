import { Link } from 'react-router-dom';
import { siteProfile } from '@/lib/site';

export default function PageHeading({ title }: { title: string }) {
  return (
    <header className="page-heading">
      <Link to="/" className="back-home">
        <span className="brand-initial" aria-hidden="true">b.</span>
        {siteProfile.fullName}
      </Link>
      <h1>{title}</h1>
    </header>
  );
}
