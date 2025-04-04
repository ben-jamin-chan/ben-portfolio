
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../utils/useTheme';
import { Switch } from '@/components/ui/switch';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = (e) => {
    // Always stop propagation to prevent any parent handlers from firing
    if (e) e.stopPropagation();
    toggleTheme();
  };
  
  return (
    <div 
      className={`flex items-center gap-2 hover:text-primary transition-colors cursor-pointer ${className}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
    >
      <Sun className={`h-5 w-5 ${theme === 'light' ? 'text-amber-400 animate-pulse' : 'text-amber-400 animate-pulse'}`} />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={(checked) => {
          // Handle the switch directly instead of calling toggleTheme again
          // This prevents double toggling
        }}
        className="data-[state=checked]:bg-primary/90"
        aria-label="Toggle theme"
        onClick={handleToggle}
        // onClick={(e) => e.stopPropagation()} -> Prevent double toggle when clicking directly on the switch
      />
      <Moon className={`h-5 w-5 ${theme === 'dark' ? 'text-primary animate-pulse' : 'text-primary animate-pulse'}`} />
      <span className="sr-only md:not-sr-only md:inline-block text-xs font-mono ml-1 whitespace-nowrap">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  );
}
