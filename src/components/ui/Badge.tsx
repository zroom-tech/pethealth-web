import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium",
        "bg-primary-500/10 text-primary-600 dark:bg-primary-400/10 dark:text-primary-400",
        "border border-primary-500/20 dark:border-primary-400/20",
        className
      )}
    >
      {children}
    </span>
  );
}
