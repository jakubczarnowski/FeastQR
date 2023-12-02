import { useServerTranslation } from "~/i18n";
import { DashboardHeader } from "../Dashboard/molecules/Header";
import { DashboardShell } from "../Dashboard/molecules/Shell";
import { ResetPasswordSettingsForm } from "./molecules/ResetPasswordSettingsForm";

const SettingsPage = async () => {
  const { t } = await useServerTranslation();

  return (
    <DashboardShell className="flex-1">
      <DashboardHeader
        heading={t("dashboardSidenav.settings")}
        text={t("settingsPage.headerDescription")}
      />
      <div className="flex justify-center ">
        <ResetPasswordSettingsForm></ResetPasswordSettingsForm>
      </div>
    </DashboardShell>
  );
};

export default SettingsPage;
