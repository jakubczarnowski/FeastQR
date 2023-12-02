"use client";

import Link from "next/link";
import { useParams } from "next/navigation";

import { Icons } from "~/components/Icons";
import { type NavItem } from "~/components/Navbar/molecules/MainNav";
import { TranslatedText } from "~/components/TranslatedText";
import { cn } from "~/utils/cn";

export type SidebarNavItem = NavItem & {
  icon?: keyof typeof Icons;
};

const sidebarNavItems: SidebarNavItem[] = [
  {
    title: <TranslatedText id="sidebar.restaurant" />,
    href: "/menu/manage/[slug]/restaurant",
    icon: "menu",
  },
  {
    title: <TranslatedText id="sidebar.menu" />,
    href: "/menu/manage/[slug]/menu",
    icon: "menuSquare",
  },
  {
    title: <TranslatedText id="sidebar.QRMenu" />,
    href: "/menu/manage/[slug]/qr-menu",
    icon: "qrcode",
  },
  {
    title: <TranslatedText id="sidebar.edit" />,
    href: "/menu/manage/[slug]/edit",
    icon: "edit",
  },
];

export function Sidebar() {
  const { slug } = useParams() as { slug: string };

  return (
    <nav className="flex h-full grow flex-row flex-wrap gap-2 md:flex-col">
      {sidebarNavItems.map((item) => {
        const Icon = Icons[item.icon || "menu"];

        return (
          <Link href={item.href.replace("[slug]", slug)} key={item.href}>
            <span
              className={cn(
                "group flex items-center rounded-md px-3 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground",
              )}
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>{item.title}</span>
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
