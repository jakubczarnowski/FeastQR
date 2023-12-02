import { BillingForm } from "./molecules/BillingForm";
import { DashboardHeader } from "../Dashboard/molecules/Header";
import { DashboardShell } from "../Dashboard/molecules/Shell";
import { useServerTranslation } from "~/i18n";

export const BillingPage = async () => {
  const { t } = await useServerTranslation();

  return (
    <DashboardShell>
      <DashboardHeader
        heading={t("billing.heading")}
        text={t("billing.description")}
      />
      <BillingForm />
    </DashboardShell>
  );
};
