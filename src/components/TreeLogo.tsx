import { cn } from "@/lib/utils";
import jfcmTree from "@/assets/jfcm-tree.png";

interface TreeLogoProps {
  className?: string;
  variant?: "default" | "light" | "dark" | "white";
}

export const TreeLogo = ({ className, variant = "default" }: TreeLogoProps) => {
  // Apply CSS filter for color variants
  const filterStyle = {
    default: {}, // Original green color
    light: { filter: "brightness(1.3) saturate(0.8)" },
    dark: { filter: "brightness(0.7) saturate(1.2)" },
    white: { filter: "brightness(0) invert(1)" }, // Makes it white for dark/green backgrounds
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
