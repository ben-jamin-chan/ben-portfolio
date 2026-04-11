import { useEffect, useSyncExternalStore } from 'react';
import { toast } from 'sonner';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
  return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : null;
};

const getThemeSnapshot = (): Theme => getStoredTheme() ?? 'light';

const applyThemeToDocument = (theme: Theme) => {
  if (typeof document === 'undefined') {
    return;
  }

  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
};

const emitThemeChange = () => {
  listeners.forEach((listener) => listener());
};

export const hasSavedThemePreference = () => getStoredTheme() !== null;

export const setTheme = (theme: Theme, options?: { silent?: boolean }) => {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  applyThemeToDocument(theme);
  emitThemeChange();

  if (!options?.silent) {
    toast(`Switched to ${theme} mode`, {
      icon: theme === 'dark' ? '🌙' : '☀️',
      position: 'bottom-right',
      duration: 1500,
    });
  }
};

const subscribe = (listener: () => void) => {
  listeners.add(listener);

  const handleStorage = (event: StorageEvent) => {
    if (event.key === THEME_STORAGE_KEY) {
      listener();
    }
  };

  window.addEventListener('storage', handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
  };
};

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getThemeSnapshot);

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, setTheme, toggleTheme, hasSavedThemePreference };
};
