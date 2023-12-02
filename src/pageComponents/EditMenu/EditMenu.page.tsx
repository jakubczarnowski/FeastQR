"use client";

import { redirect, useParams } from "next/navigation";
import { LoadingScreen } from "~/components/Loading";
import { MenuForm } from "~/components/MenuForm/MenuForm";
import { api } from "~/trpc/react";
import { DashboardHeader } from "./molecules/Header";
import { useTranslation } from "react-i18next";

export const EditMenuPage = () => {
  const { slug } = useParams() as { slug: string };
  const { data, error, isLoading } = api.menus.getMenuBySlug.useQuery({ slug });
  const { t } = useTranslation();

  if (isLoading) return <LoadingScreen />;

  if (error) return redirect("/dashboard");

  return (
    <main className="flex w-full max-w-3xl flex-1 flex-col gap-8 overflow-hidden">
      <DashboardHeader
        heading={t("editMenu.header")}
        text={t("editMenu.title")}
      />
      <MenuForm
        defaultValues={{
          address: data.address,
          city: data.city,
          name: data.name,
          contactPhoneNumber: data.contactNumber || undefined,
          id: data.id,
          backgroundImgUrl: data.backgroundImageUrl || undefined,
          logoImgUrl: data.logoImageUrl || undefined,
        }}
      />
    </main>
  );
};
