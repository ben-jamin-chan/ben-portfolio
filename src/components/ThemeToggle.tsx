import { Moon, Sparkles, Sun } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { useTheme } from '@/utils/useTheme';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  const currentMode = theme === 'light' ? 'Light mode' : 'Dark mode';
  const label = 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' mode';

  return (
    <Tooltip delayDuration={250}>
      <TooltipTrigger asChild>
        <button
          type="button"
          className={'theme-toggle ' + className}
          data-theme={theme}
          onClick={toggleTheme}
          aria-label={'Theme: ' + currentMode + '. ' + label}
        >
          <span className="theme-toggle-scene" aria-hidden="true">
            <Sparkles className="theme-toggle-stars" size={15} strokeWidth={1.4} />
            <Moon className="theme-toggle-horizon" size={15} strokeWidth={1.4} />
            <span className="theme-toggle-thumb">
              <Sun className="theme-toggle-sun" size={18} strokeWidth={1.7} />
              <Moon className="theme-toggle-moon" size={18} strokeWidth={1.7} />
            </span>
          </span>
        </button>
      </TooltipTrigger>
      <TooltipContent side="bottom" align="end" sideOffset={10} collisionPadding={16} className="z-[65] rounded-lg">
        {label}
      </TooltipContent>
    </Tooltip>
  );
}
