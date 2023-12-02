"use client";

import { DashboardNav } from "~/components/DashboardNav";
import { TranslatedText } from "~/components/TranslatedText";

const sidebarNavItems = [
  {
    title: <TranslatedText id="dashboardSidenav.menus" />,
    href: "/dashboard",
    icon: "menu",
  },
  {
    title: "Billing",
    href: "/dashboard/billing",
    icon: "billing",
  },
  // {
  //   title: <TranslatedText id="dashboardSidenav.affiliates" />,
  //   href: "/dashboard/affiliates",
  //   icon: "user",
  // },
  {
    title: <TranslatedText id="dashboardSidenav.settings" />,
    href: "/dashboard/settings",
    icon: "settings",
  },
] as const;

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="flex w-full flex-1 flex-col gap-4 md:flex-row">
        <aside className=" flex flex-col  md:w-[200px]">
          <DashboardNav items={sidebarNavItems} />
        </aside>
        {children}
      </div>
    </>
  );
}

export default RootLayout;
