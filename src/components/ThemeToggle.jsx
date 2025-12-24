import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../utils/useTheme';
import { Switch } from '@/components/ui/switch';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  
  const handleToggle = (e) => {
    // Prevent default action and stop propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    toggleTheme();
  };
  
  return (
    <div 
      className={`flex items-center gap-2 hover:text-primary transition-colors cursor-pointer ${className}`}
      onClick={handleToggle}
      role="button"
      tabIndex={0}
      aria-label="Toggle theme"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleToggle(e);
        }
      }}
    >
      <Sun className={`h-5 w-5 ${theme === 'light' ? 'text-amber-400 animate-pulse' : 'text-amber-400 animate-pulse'}`} />
      <Switch
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme} // Call toggleTheme directly when switch changes
        className="data-[state=checked]:bg-primary/90"
        aria-label="Toggle theme"
        onClick={(e) => {
          // Only stop propagation to prevent parent div click handler from firing
          // This allows the switch's own click handler to still work
          e.stopPropagation();
        }}
      />
      <Moon className={`h-5 w-5 ${theme === 'dark' ? 'text-primary animate-pulse' : 'text-primary animate-pulse'}`} />
      <span className="sr-only md:not-sr-only md:inline-block text-base font-mono ml-1 whitespace-nowrap">
        {theme === 'light' ? 'Light Mode' : 'Dark Mode'}
      </span>
    </div>
  );
}
