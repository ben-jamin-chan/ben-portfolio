import { cn } from "@/lib/utils";

type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionIntroProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <div className={cn("max-w-3xl", alignment, className)}>
      <p className="mb-3 text-[0.68rem] font-medium uppercase tracking-[0.34em] text-primary/80 sm:mb-4">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-[-0.05em] text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-foreground/70 sm:mt-5 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
