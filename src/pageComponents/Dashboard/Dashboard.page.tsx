"use client";

import { MenuItem } from "./molecules/MenuItem";
import { EmptyPlaceholder } from "~/components/EmptyPlaceholder";
import { DashboardHeader } from "./molecules/Header";
import { DashboardShell } from "./molecules/Shell";
import { api } from "~/trpc/react";
import { LoadingScreen } from "~/components/Loading";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { useTranslation } from "react-i18next";

export function DashboardPage() {
  const { data: menus, isLoading } = api.menus.getMenus.useQuery();
  const { t } = useTranslation();

  if (isLoading) return <LoadingScreen />;

  return (
    <main className="flex w-full flex-1 flex-col overflow-hidden">
      <DashboardShell>
        <DashboardHeader
          heading={t("dashboard.title")}
          text={t("dashboard.headingText")}
        >
          <Link href="/menu/create">
            <Button className="w-full" variant="outline">
              {t("dashboard.createMenu")}
            </Button>
          </Link>
        </DashboardHeader>

        <div>
          {menus?.length ? (
            <div className="divide-y divide-border rounded-md border">
              {menus
                .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())
                .map((menu) => (
                  <MenuItem key={menu.id} menu={menu} />
                ))}
            </div>
          ) : (
            <EmptyPlaceholder>
              <EmptyPlaceholder.Icon name="menu" />
              <EmptyPlaceholder.Title>
                {t("dashboard.noMenusCreated")}
              </EmptyPlaceholder.Title>
              <EmptyPlaceholder.Description>
                {t("dashboard.noMenusCreatedDescription")}
              </EmptyPlaceholder.Description>
              <Link href="/menu/create">
                <Button variant="outline">{t("dashboard.createMenu")}</Button>
              </Link>
            </EmptyPlaceholder>
          )}
        </div>
      </DashboardShell>
    </main>
  );
}
