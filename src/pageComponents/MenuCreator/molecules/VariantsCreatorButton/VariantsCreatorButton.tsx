import { Button, type ButtonProps } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useState } from "react";
import { type WithRequired } from "~/utils";
import { useTranslation } from "react-i18next";
import { DishVariantForm } from "../VariantForm/VariantForm";
import { type AddDishVariantFormValues } from "../VariantForm/VariantForm.schema";

export const AddVariantButton = ({
  defaultValues,
  buttonText,
  buttonProps,
  dishId,
}: {
  defaultValues?: Partial<AddDishVariantFormValues>;
  buttonText?: string;
  buttonProps?: ButtonProps;
  dishId: string;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button {...buttonProps}>
          {buttonText ?? t("addDishVariantButton.addVariant")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("addDishVariantButton.addVariant")}
          </DialogTitle>
        </DialogHeader>
        <DishVariantForm
          dishId={dishId}
          defaultValues={defaultValues}
          onClose={() => setModalOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export const EditVariantButton = ({
  defaultValues,
  dishId,
}: {
  defaultValues: WithRequired<AddDishVariantFormValues, "id">;
  dishId: string;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button>{t("addDishVariantButton.edit")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("addDishVariantButton.editVariant")}
          </DialogTitle>
        </DialogHeader>
        <DishVariantForm
          dishId={dishId}
          onClose={() => setModalOpen(false)}
          defaultValues={defaultValues}
        />
      </DialogContent>
    </Dialog>
  );
};
