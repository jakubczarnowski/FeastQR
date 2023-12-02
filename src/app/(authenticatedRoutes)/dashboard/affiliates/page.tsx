import { useServerTranslation } from "~/i18n";
import { DashboardHeader } from "~/pageComponents/Dashboard/molecules/Header";
import { DashboardShell } from "~/pageComponents/Dashboard/molecules/Shell";

export default async function Page() {
  const { t } = await useServerTranslation();

  return (
    <DashboardShell className="flex-1">
      <DashboardHeader
        heading={t("affiliates.title")}
        text={t("affiliates.description")}
      />
      <div className="flex w-full justify-center">
        <h1 className="text-3xl font-medium">{t("affiliates.comingSoon")}</h1>
      </div>
    </DashboardShell>
  );
}
