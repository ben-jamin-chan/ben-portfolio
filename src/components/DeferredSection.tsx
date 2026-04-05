import { type ReactNode, useEffect, useRef, useState } from "react";

type DeferredSectionProps = {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  rootMargin?: string;
};

export default function DeferredSection({
  children,
  className,
  fallback,
  rootMargin = "200px 0px",
}: DeferredSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const markerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isVisible) {
      return;
    }

    const marker = markerRef.current;
    if (!marker) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(marker);

    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div ref={markerRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  );
}
