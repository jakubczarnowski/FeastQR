import { notFound } from "next/navigation";
import React from "react";
import { MainMenuView } from "~/components/MainMenuView/MainMenuView";
import { api } from "~/trpc/server";

export const MenuPage = async ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const data = await api.menus.getPublicMenuBySlug
    .query({ slug })
    .catch(() => notFound());

  if (!data.isPublished) {
    notFound();
  }

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl">
      <MainMenuView menu={data} />
    </main>
  );
};
