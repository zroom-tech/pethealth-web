import { cn } from "@/lib/utils";

export function GradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-primary-500 via-primary-400 to-secondary-400 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
