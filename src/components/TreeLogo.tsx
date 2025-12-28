import { cn } from "@/lib/utils";

interface TreeLogoProps {
  className?: string;
  variant?: "default" | "light" | "dark";
}

export const TreeLogo = ({ className, variant = "default" }: TreeLogoProps) => {
  const colorClass = {
    default: "text-primary",
    light: "text-tree-green-light",
    dark: "text-tree-green-dark",
  }[variant];

  return (
    <svg
      viewBox="0 0 100 120"
      fill="currentColor"
      className={cn("w-12 h-14", colorClass, className)}
    >
      {/* Oak tree crown - realistic silhouette matching the reference */}
      <path d="M50 5 C35 5 25 15 20 25 C15 20 10 25 8 32 C5 30 2 35 3 42 C1 45 0 52 5 58 C3 62 5 70 12 73 C10 78 15 85 25 85 C25 90 30 95 40 95 C42 98 46 100 50 100 C54 100 58 98 60 95 C70 95 75 90 75 85 C85 85 90 78 88 73 C95 70 97 62 95 58 C100 52 99 45 97 42 C98 35 95 30 92 32 C90 25 85 20 80 25 C75 15 65 5 50 5 Z" />
      {/* Trunk */}
      <path d="M42 95 L42 100 Q40 105 38 110 L38 118 L44 115 L46 120 L50 117 L54 120 L56 115 L62 118 L62 110 Q60 105 58 100 L58 95 Q50 98 42 95 Z" />
    </svg>
  );
};
