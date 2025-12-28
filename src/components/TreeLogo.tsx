import { cn } from "@/lib/utils";
import jfcmTree from "@/assets/jfcm-tree.png";

interface TreeLogoProps {
  className?: string;
  variant?: "default" | "light" | "dark";
}

export const TreeLogo = ({ className, variant = "default" }: TreeLogoProps) => {
  // Apply CSS filter for color variants
  const filterStyle = {
    default: {}, // Original green color
    light: { filter: "brightness(1.3) saturate(0.8)" },
    dark: { filter: "brightness(0.7) saturate(1.2)" },
  }[variant];

  return (
    <img
      src={jfcmTree}
      alt="JFCM Tree Logo"
      style={filterStyle}
      className={cn("w-12 h-14 object-contain", className)}
    />
  );
};
