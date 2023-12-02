"use client";

import React from "react";
import { UserAccountNav } from "./molecules/UserAccountNav";
import { MainNav, type NavItem } from "./molecules/MainNav";
import { cn } from "~/utils/cn";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { useUser } from "~/providers/AuthProvider/AuthProvider";
import { ColorModeToggle } from "../ColorModeToggle";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";

const navbarItems: NavItem[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Dashboard",
    href: "/dashboard",
  },
];

export const Navbar = () => {
  const { user } = useUser();
  const userLoggedIn = !!user;

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={navbarItems} />
        <div className="flex items-center justify-center gap-4">
          <ColorModeToggle />
          <LanguageToggle />
          {userLoggedIn ? (
            <UserAccountNav />
          ) : (
            <Link
              href="/login"
              className={cn(
                buttonVariants({ variant: "secondary", size: "sm" }),
                "px-4",
              )}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
