import { Button, type ButtonProps } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { DishForm } from "../DishForm/DishForm";
import { useState } from "react";
import { type WithRequired } from "~/utils";
import { useTranslation } from "react-i18next";
import { type AddDishFormValues } from "../DishForm/DishForm.schema";

export const AddDishButton = ({
  defaultValues,
  buttonText,
  buttonProps,
}: {
  defaultValues?: Partial<AddDishFormValues>;
  buttonText?: string;
  buttonProps?: ButtonProps;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button {...buttonProps} className="w-full flex-1">
          {buttonText ?? t("addDishButton.addDish")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("addDishButton.addDish")}
          </DialogTitle>
        </DialogHeader>
        <DishForm
          defaultValues={defaultValues}
          onClose={() => setModalOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export const EditDishButton = ({
  defaultValues,
}: {
  defaultValues: WithRequired<AddDishFormValues, "id">;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button>{t("addDishButton.edit")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("addDishButton.editDish")}
          </DialogTitle>
        </DialogHeader>
        <DishForm
          onClose={() => setModalOpen(false)}
          defaultValues={defaultValues}
        />
      </DialogContent>
    </Dialog>
  );
};
