import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "~/components/Icons";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";

export const GoogleReviewGuideButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button variant="link" type="button" className="absolute right-0 px-2">
          <Icons.help className="h-5 w-5 opacity-50" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("addDishButton.addDish")}
          </DialogTitle>
        </DialogHeader>
        <Tabs defaultValue="dashboard" className="gap-0">
          <TabsList className="gap-4 bg-white p-0">
            <TabsTrigger value="dashboard">
              {t("googleReviewGuideModal.googleDashboard.name")}
            </TabsTrigger>
            <TabsTrigger value="maps">
              {t("googleReviewGuideModal.googleMaps.name")}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="dashboard" className="px-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 1 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleDashboard.step1")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 2 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleDashboard.step2")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 3 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleDashboard.step3")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 4 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleDashboard.step4")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 5 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleDashboard.step5")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 6 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleDashboard.step6")}</p>
              </div>
              <p className="text-xs text-muted-foreground">
                {t("googleReviewGuideModal.description")}
              </p>
            </div>
          </TabsContent>
          <TabsContent value="maps" className="px-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 1 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleMaps.step1")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 2 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleMaps.step2")}</p>
              </div>
              <div className="flex flex-row gap-2">
                <p className="whitespace-nowrap font-semibold">
                  {t("googleReviewGuideModal.step", { step: 3 })}:
                </p>
                <p>{t("googleReviewGuideModal.googleMaps.step3")}</p>
              </div>

              <p className="text-xs text-muted-foreground">
                {t("googleReviewGuideModal.description")}
              </p>
            </div>
          </TabsContent>
        </Tabs>
        <Button onClick={() => setModalOpen(false)}>
          {t("googleReviewGuideModal.ready")}
        </Button>
      </DialogContent>
    </Dialog>
  );
};
