"use client";

import { MenuForm } from "~/components/MenuForm/MenuForm";
import { DashboardHeader } from "./molecules/Header";
import { useTranslation } from "react-i18next";

export const CreateMenuPage = () => {
  const { t } = useTranslation();

  return (
    <main className="flex w-full max-w-3xl flex-1 flex-col gap-8 overflow-hidden md:mx-auto ">
      <DashboardHeader
        heading={t("createMenu.header")}
        text={t("createMenu.title")}
      />
      <MenuForm />
    </main>
  );
};
