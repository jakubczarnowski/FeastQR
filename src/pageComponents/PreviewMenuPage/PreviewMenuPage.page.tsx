"use client";

import { notFound } from "next/navigation";
import { useTranslation } from "react-i18next";
import { LoadingScreen } from "~/components/Loading";
import { MainMenuView } from "~/components/MainMenuView/MainMenuView";
import { useToast } from "~/components/ui/use-toast";
import { useHandleFetchError } from "~/shared/hooks/useHandleFetchError";
import { api } from "~/trpc/react";

export const PreviewMenuPage = ({
  params: { slug },
}: {
  params: { slug: string };
}) => {
  const { t } = useTranslation();
  const { toast } = useToast();

  const { data, isLoading, error } = api.menus.getMenuBySlug.useQuery({ slug });

  useHandleFetchError({
    error,
    onError: () =>
      toast({
        title: "Error",
        description: t("notifications.menuNotFound"),
        variant: "destructive",
      }),
  });
  if (error) {
    notFound();
  }

  if (isLoading) return <LoadingScreen />;

  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl">
      <MainMenuView menu={data} />
    </main>
  );
};
