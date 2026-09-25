import { useEffect, useRef, useState, type RefObject } from 'react';
import { Content as DialogContent } from '@radix-ui/react-dialog';
import { ArrowUpRight, Moon, Sun, SunMoon, X } from 'lucide-react';
import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import { setTheme } from '@/utils/useTheme';

const appearances = [
  { value: 'light', label: 'Light', description: 'Warm & bright', Icon: Sun },
  { value: 'dark', label: 'Dark', description: 'Soft & subdued', Icon: Moon },
] as const;

export default function AppearancePrompt({ focusTargetRef }: { focusTargetRef: RefObject<HTMLElement> }) {
  // Deliberately independent of saved preferences: every page load gets a choice.
  const [open, setOpen] = useState(true);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const handlePageShow = (event: PageTransitionEvent) => {
      // A return from another website can restore this page without remounting React.
      if (event.persisted) setOpen(true);
    };
    window.addEventListener('pageshow', handlePageShow);
    return () => window.removeEventListener('pageshow', handlePageShow);
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogPortal>
        <DialogOverlay className="z-[70] bg-black/40 backdrop-blur-sm" />
        <DialogContent
          className="appearance-dialog"
          onOpenAutoFocus={(event) => {
            event.preventDefault();
            titleRef.current?.focus();
          }}
          onCloseAutoFocus={(event) => {
            event.preventDefault();
            focusTargetRef.current?.focus({ preventScroll: true });
          }}
        >
          <div className="appearance-heading">
            <p className="appearance-eyebrow">Make yourself at home</p>
            <DialogTitle ref={titleRef} tabIndex={-1} className="appearance-title">
              Choose your appearance.
            </DialogTitle>
            <DialogDescription className="appearance-description">
              Pick the look that feels right for you.
            </DialogDescription>
          </div>

          <div className="appearance-options">
            {appearances.map(({ value, label, description, Icon }) => (
              <button
                key={value}
                type="button"
                className="appearance-option"
                data-appearance={value}
                aria-label={'Use ' + value + ' appearance'}
                onClick={() => {
                  setTheme(value, { silent: true });
                  setOpen(false);
                }}
              >
                <span className="appearance-preview" aria-hidden="true">
                  <Icon className="appearance-preview-icon" size={24} strokeWidth={1.5} />
                  <span className="appearance-preview-profile">
                    <span className="appearance-preview-avatar" />
                    <span className="appearance-preview-lines"><span /><span /></span>
                  </span>
                  <span className="appearance-preview-card"><span /><span /></span>
                </span>
                <span className="appearance-option-name">
                  {label}<ArrowUpRight size={18} strokeWidth={1.5} aria-hidden="true" />
                </span>
                <span className="appearance-option-description">{description}</span>
              </button>
            ))}
          </div>

          <p className="appearance-note">
            <SunMoon size={16} strokeWidth={1.5} aria-hidden="true" />
            You can change this anytime.
          </p>
          <DialogClose className="appearance-close" aria-label="Close appearance chooser">
            <X size={18} strokeWidth={1.5} aria-hidden="true" />
          </DialogClose>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
}
