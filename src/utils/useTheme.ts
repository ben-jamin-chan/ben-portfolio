import { useEffect, useSyncExternalStore } from 'react';
import { toast } from 'sonner';

type Theme = 'light' | 'dark';

const THEME_STORAGE_KEY = 'theme';
const listeners = new Set<() => void>();
let inMemoryTheme: Theme | null = null;

const getStoredTheme = (): Theme | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const storedTheme = window.localStorage.getItem(THEME_STORAGE_KEY);
    return storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : inMemoryTheme;
  } catch {
    return inMemoryTheme;
  }
};

const getThemeSnapshot = (): Theme => getStoredTheme() ?? (
  typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
);

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

  inMemoryTheme = theme;
  try {
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Theme switching still works when browser storage is unavailable.
  }
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
    if (event.key === THEME_STORAGE_KEY || event.key === null) {
      inMemoryTheme = null;
      listener();
    }
  };

  window.addEventListener('storage', handleStorage);
  const colorScheme = window.matchMedia('(prefers-color-scheme: dark)');
  const handleColorScheme = () => {
    if (!getStoredTheme()) listener();
  };
  colorScheme.addEventListener('change', handleColorScheme);

  return () => {
    listeners.delete(listener);
    window.removeEventListener('storage', handleStorage);
    colorScheme.removeEventListener('change', handleColorScheme);
  };
};

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribe, getThemeSnapshot, getThemeSnapshot);

  useEffect(() => {
    applyThemeToDocument(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light', { silent: true });
  };

  return { theme, setTheme, toggleTheme, hasSavedThemePreference };
};
