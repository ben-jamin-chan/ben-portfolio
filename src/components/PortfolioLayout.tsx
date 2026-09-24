import { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import ThemeToggle from '@/components/ThemeToggle';
import { siteProfile } from '@/lib/site';

const pageTitles: Record<string, string> = {
  '/': 'Software Developer',
  '/projects': 'Projects',
  '/experience': 'Experience',
  '/contact': 'Contact',
};

export default function PortfolioLayout() {
  const { pathname } = useLocation();
  const previousPath = useRef(pathname);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    document.title = siteProfile.fullName + ' | ' + (pageTitles[pathname] ?? 'Page not found');
    if (previousPath.current !== pathname) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      mainRef.current?.focus({ preventScroll: true });
      previousPath.current = pathname;
    }
  }, [pathname]);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content" onClick={(event) => {
        event.preventDefault();
        mainRef.current?.focus();
      }}>
        Skip to content
      </a>
      <ThemeToggle />
      <main id="main-content" ref={mainRef} tabIndex={-1} className="portfolio-main">
        <div key={pathname} className="page-content">
          <Outlet />
        </div>
      </main>
      <Navbar />
    </div>
  );
}
