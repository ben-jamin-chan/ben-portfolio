
import { useState, useEffect } from 'react';

export function useTheme() {
  // Check if we're on the client side
  const isBrowser = typeof window !== 'undefined';
  
  // Use system preference as initial state
  const getSystemTheme = () => {
    if (!isBrowser) return 'light';
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  // Check for saved theme preference or use system preference
  const getSavedTheme = () => {
    if (!isBrowser) return getSystemTheme();
    return localStorage.getItem('theme') || getSystemTheme();
  };

  const [theme, setTheme] = useState(getSavedTheme);
  
  // Update theme in localStorage and document
  useEffect(() => {
    if (!isBrowser) return;
    
    localStorage.setItem('theme', theme);
    
    const root = window.document.documentElement;
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
  }, [theme, isBrowser]);
  
  // Update theme if system preference changes
  useEffect(() => {
    if (!isBrowser) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = () => {
      // Only update if the user hasn't manually set a preference
      if (!localStorage.getItem('theme')) {
        setTheme(getSystemTheme());
      }
    };
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isBrowser]);
  
  // Toggle theme function
  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  
  return { theme, toggleTheme };
}
