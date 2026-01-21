import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { TreeLogo } from "./TreeLogo";

interface NavItem {
  label: string;
  path: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export const MobileNav = ({ navItems }: MobileNavProps) => {
  const location = useLocation();

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-[85vh]">
        <div className="flex flex-col h-full p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 pb-8 border-b border-border">
            <TreeLogo className="w-10 h-12" />
            <div>
              <span className="font-mission text-lg font-bold text-foreground tracking-tight">JESUS FIRST</span>
              <span className="block text-[10px] text-muted-foreground font-mission-body tracking-widest uppercase">Christian Ministries</span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col gap-2 py-8 flex-1">
            {navItems.map((item) => (
              <DrawerClose asChild key={item.label}>
                <Link
                  to={item.path}
                  className={`font-mission-body text-lg py-4 px-4 rounded-xl transition-colors font-medium ${
                    location.pathname === item.path
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.label}
                </Link>
              </DrawerClose>
            ))}
          </nav>

          {/* CTA Button */}
          <DrawerClose asChild>
            <Link to="/mission#join-form">
              <Button variant="mission" className="w-full py-6 text-base hover:bg-primary/70">
                Join the Mission
              </Button>
            </Link>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
