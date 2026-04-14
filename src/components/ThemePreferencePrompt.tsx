import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import { setTheme } from '../utils/useTheme';

const THEME_PROMPT_SESSION_KEY = 'theme-prompt-shown';

export default function ThemePreferencePrompt() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const hasShownPromptThisSession = window.sessionStorage.getItem(THEME_PROMPT_SESSION_KEY) === 'true';
    setIsOpen(!hasShownPromptThisSession);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = '';
      return;
    }

    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSelectTheme = (theme: 'light' | 'dark') => {
    window.sessionStorage.setItem(THEME_PROMPT_SESSION_KEY, 'true');
    setTheme(theme, { silent: true });
    setIsOpen(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 z-30 overflow-y-auto bg-background/80 px-4 pb-6 pt-4 backdrop-blur-md sm:flex sm:items-center sm:justify-center sm:px-6 sm:py-8 md:top-24">
      <div className="relative mx-auto w-full max-w-3xl overflow-hidden rounded-[2rem] border border-border/60 bg-card/95 shadow-2xl shadow-black/10 sm:max-h-[min(92dvh,52rem)] sm:overflow-y-auto">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_hsl(var(--primary)/0.22),_transparent_42%),linear-gradient(135deg,_hsl(var(--background))_0%,_hsl(var(--card))_55%,_hsl(var(--background))_100%)]" />
        <div className="relative p-5 sm:p-8 md:p-10">
          <div className="mx-auto mb-6 max-w-xl text-center sm:mb-8">
            {/* TODO: HOW TO CHECK GITHUB'S CURRENT MAIN BRANCH CODE AND TAKE SOME TO MERGE WITH FEATURE BRANCH? */}
            <p className="font-mono font-medium text-sm uppercase tracking-[0.3em] text-primary sm:text-lg ">
              Display Preference
            </p>
            <h2 className="mt-3 font-pixel text-lg leading-relaxed text-foreground sm:mt-4 sm:text-2xl md:text-[1.7rem]">
              Choose your viewing mode
            </h2>
            <p className="mt-3 text-sm leading-6 text-foreground/70 sm:mt-4 sm:text-base">
              Pick the experience that feels best for you. You can switch it again anytime from the navigation bar.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <button
              type="button"
              onClick={() => handleSelectTheme('light')}
              className="group min-h-[220px] rounded-[1.75rem] border border-border/70 bg-background/85 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:min-h-[240px] sm:p-6"
            >
              <div className="flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 shadow-sm shadow-emerald-200/70 dark:bg-emerald-200/10 dark:shadow-none">
                    <Sun className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-border/80 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-foreground/60">
                    Light
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-mono text-lg font-bold text-foreground">Bright and crisp</h3>
                  <p className="text-sm leading-6 text-foreground/70 sm:text-base">
                    Keeps the portfolio airy, warm, and clear for daytime browsing.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-2xl border border-border/70 bg-white shadow-sm" />
                  <div className="h-12 rounded-2xl border border-emerald-200 bg-emerald-100/80" />
                  <div className="h-12 rounded-2xl border border-border/70 bg-zinc-100" />
                </div>
                <span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Select light mode
                </span>
              </div>
            </button>

            <button
              type="button"
              onClick={() => handleSelectTheme('dark')}
              className="group min-h-[220px] rounded-[1.75rem] border border-border/70 bg-zinc-950 p-5 text-left text-zinc-50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/40 sm:min-h-[240px] sm:p-6"
            >
              <div className="flex h-full flex-col">
                <div className="mb-5 flex items-center justify-between">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <Moon className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-zinc-300">
                    Dark
                  </span>
                </div>
                <div className="space-y-3">
                  <h3 className="font-mono text-lg font-bold text-zinc-50">Calm and focused</h3>
                  <p className="text-sm leading-6 text-zinc-300 sm:text-base">
                    Gives the site a more cinematic feel with softer contrast for evening viewing.
                  </p>
                </div>
                <div className="mt-6 grid grid-cols-3 gap-2">
                  <div className="h-12 rounded-2xl border border-white/10 bg-zinc-900" />
                  <div className="h-12 rounded-2xl border border-primary/30 bg-primary/20" />
                  <div className="h-12 rounded-2xl border border-white/10 bg-zinc-800" />
                </div>
                <span className="mt-auto pt-6 font-mono text-xs uppercase tracking-[0.25em] text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Select dark mode
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
