import { BriefcaseBusiness, FolderOpen, House, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Home', Icon: House },
  { to: '/projects', label: 'Projects', Icon: FolderOpen },
  { to: '/experience', label: 'Experience', Icon: BriefcaseBusiness },
  { to: '/contact', label: 'Contact', Icon: Mail },
];

export default function Navbar() {
  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <div className="bottom-nav-inner">
        {navigation.map(({ to, label, Icon }) => (
          <NavLink key={to} to={to} end className={({ isActive }) => 'bottom-nav-link' + (isActive ? ' is-active' : '')}>
            <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
