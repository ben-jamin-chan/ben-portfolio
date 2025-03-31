
import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../utils/useTheme';
import { Switch } from '@/components/ui/switch';

export default function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Sun className="h-5 w-5 text-amber-400" />
      <Switch 
        checked={theme === 'dark'}
        onCheckedChange={toggleTheme}
        className="data-[state=checked]:bg-primary/90"
        aria-label="Toggle theme"
      />
      <Moon className="h-5 w-5 text-orange-600" />
    </div>
  );
}
