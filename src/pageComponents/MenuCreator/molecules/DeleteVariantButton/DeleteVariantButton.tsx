import { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { api } from "~/trpc/react";

export const DeleteVariantButton = ({
  variantName,
  id,
}: {
  variantName: string;
  id: string;
}) => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);
  const { mutateAsync } = api.menus.deleteVariant.useMutation();
  const onDelete = async () => {
    await mutateAsync({ variantId: id });
  };

  return (
    <>
      <AlertDialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
        <AlertDialogTrigger asChild>
          <Button variant="destructive">
            {t("deleteVariantButton.delete")}
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>
              {t("deleteVariantButton.deleteVariant")}
            </AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            {t("deleteVariantButton.areYouSureYouWantToDeleteThisVariant")}{" "}
            {variantName}?
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel>
              {t("deleteVariantButton.cancel")}
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                onDelete();
                setModalOpen(false);
              }}
            >
              {t("deleteVariantButton.delete")}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
