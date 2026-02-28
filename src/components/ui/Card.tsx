import { cn } from "@/lib/utils";

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "glass-card rounded-2xl p-6 transition-all duration-300",
        "hover:shadow-lg hover:shadow-primary-500/5",
        className
      )}
    >
      {children}
    </div>
  );
}
