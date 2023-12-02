"use client";

import React from "react";
import { UserAccountNav } from "./molecules/UserAccountNav";
import { MainNav, type NavItem } from "./molecules/MainNav";
import { cn } from "~/utils/cn";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { useUser } from "~/providers/AuthProvider/AuthProvider";
import { LanguageToggle } from "../LanguageToggle/LanguageToggle";
import { useTranslation } from "react-i18next";
import { TranslatedText } from "../TranslatedText";

const navbarItems: NavItem[] = [
  {
    title: <TranslatedText id="navbar.home"></TranslatedText>,
    href: "/",
  },
  {
    title: <TranslatedText id="navbar.dashboard"></TranslatedText>,
    href: "/dashboard",
  },
];

export const Navbar = () => {
  const { user } = useUser();
  const userLoggedIn = !!user;
  const { t } = useTranslation();

  return (
    <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between py-4">
        <MainNav items={navbarItems} />
        <div className="flex items-center justify-center gap-4">
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
              {t("navbar.login")}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
