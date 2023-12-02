"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Icons } from "~/components/Icons";
import { type NavItem } from "~/components/Navbar/molecules/MainNav";
import { cn } from "~/utils/cn";

export type SidebarNavItem = NavItem & {
  icon?: keyof typeof Icons;
};

interface DashboardNavProps {
  items: readonly SidebarNavItem[];
}

export function DashboardNav({ items }: DashboardNavProps) {
  const path = usePathname();

  if (!items?.length) {
    return null;
  }

  return (
    <nav className="flex w-full   grow flex-row flex-wrap gap-2 md:flex-col">
      {items.map((item, index) => {
        const Icon = Icons[item.icon || "arrowRight"];

        return (
          item.href && (
            <Link key={index} href={item.disabled ? "/" : item.href}>
              <span
                className={cn(
                  "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
                  path === item.href ? "bg-accent" : "transparent",
                  item.disabled && "cursor-not-allowed opacity-80",
                )}
              >
                <Icon className="mr-2 h-4 w-4" />
                <span>{item.title}</span>
              </span>
            </Link>
          )
        );
      })}
    </nav>
  );
}
