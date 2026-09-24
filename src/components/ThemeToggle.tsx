import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/utils/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const label = 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode';

  return (
    <button type="button" className={'theme-toggle ' + className} onClick={toggleTheme} aria-label={label} title={label}>
      {theme === 'light'
        ? <Moon size={19} strokeWidth={1.6} aria-hidden="true" />
        : <Sun size={19} strokeWidth={1.6} aria-hidden="true" />}
    </button>
  );
}
