import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SurfaceCardProps = {
  children: ReactNode;
  className?: string;
};

export default function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "rounded-[28px] border border-border/60 bg-card/78 shadow-[0_20px_80px_-40px_hsl(var(--foreground)/0.28)] backdrop-blur-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}
