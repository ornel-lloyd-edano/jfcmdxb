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
      {/* Tree crown - organic shape */}
      <ellipse cx="50" cy="35" rx="35" ry="30" />
      <ellipse cx="35" cy="45" rx="20" ry="18" />
      <ellipse cx="65" cy="45" rx="20" ry="18" />
      <ellipse cx="50" cy="55" rx="25" ry="20" />
      {/* Trunk */}
      <rect x="43" y="65" width="14" height="35" rx="2" />
      {/* Roots */}
      <path d="M43 100 Q35 105 30 110 L35 110 Q40 105 45 102 Z" />
      <path d="M57 100 Q65 105 70 110 L65 110 Q60 105 55 102 Z" />
    </svg>
  );
};
