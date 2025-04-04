import { useState, useEffect } from 'react';
import { toast } from 'sonner';

export const useTheme = () => {
  // Check if the user has a saved preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Use the saved theme, or use the system preference, or fallback to 'light'
  // const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  // Always default to 'light' if no saved preference exists
  const defaultTheme = savedTheme || 'light';
  
  const [theme, setTheme] = useState(defaultTheme);
  
  // Apply the theme
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  
  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    
    // Show toast notification when theme changes
    toast(`Switched to ${newTheme} mode`, {
      icon: newTheme === 'dark' ? '🌙' : '☀️',
      position: 'bottom-right',
      duration: 1500,
    });
  };
  
  return { theme, toggleTheme };
};
