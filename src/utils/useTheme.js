
import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Check if the user has a saved preference in localStorage
  const savedTheme = localStorage.getItem('theme');
  
  // Use the saved theme, or use the system preference, or fallback to 'light'
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = savedTheme || (prefersDark ? 'dark' : 'light');
  
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
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };
  
  return { theme, toggleTheme };
};
