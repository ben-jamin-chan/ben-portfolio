type SectionSkeletonProps = {
  heightClassName?: string;
};

export default function SectionSkeleton({
  heightClassName = "min-h-[32rem]",
}: SectionSkeletonProps) {
  return (
    <div
      className={`container mx-auto px-6 py-16 ${heightClassName}`}
      aria-hidden="true"
    >
      <div className="h-10 w-48 rounded-full bg-foreground/5" />
      <div className="mt-8 h-5 max-w-2xl rounded-full bg-foreground/5" />
      <div className="mt-4 h-5 max-w-xl rounded-full bg-foreground/5" />
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        <div className="h-56 rounded-3xl bg-foreground/5" />
        <div className="h-56 rounded-3xl bg-foreground/5" />
      </div>
    </div>
  );
}
