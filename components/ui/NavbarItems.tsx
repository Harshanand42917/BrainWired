"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Companion", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavbarItems = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-4">
      {navItems.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={cn(
            "transition-colors hover:text-primary",
            pathname === href && "text-primary font-semibold"
          )}>
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavbarItems;
