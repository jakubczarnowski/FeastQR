import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { useState } from "react";
import { CategoryForm } from "../CategoryForm/CategoryForm";
import { type WithRequired } from "~/utils";
import { useTranslation } from "react-i18next";
import { type AddCategoryFormValues } from "../CategoryForm/CategoryForm.schema";

export const AddCategoryButton = ({
  defaultValues,
}: {
  defaultValues?: Partial<AddCategoryFormValues>;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button variant="secondary">
          {t("addCategoryButton.addCategory")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {" "}
            {t("addCategoryButton.addCategory")}
          </DialogTitle>
        </DialogHeader>
        <CategoryForm
          defaultValues={defaultValues}
          onClose={() => setModalOpen(false)}
        />
      </DialogContent>
    </Dialog>
  );
};

export const EditCategoryButton = ({
  defaultValues,
}: {
  defaultValues: WithRequired<AddCategoryFormValues, "id">;
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <Dialog open={modalOpen} onOpenChange={(open) => setModalOpen(open)}>
      <DialogTrigger asChild>
        <Button variant="secondary">{t("addCategoryButton.edit")}</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl">
            {t("addCategoryButton.editCategory")}
          </DialogTitle>
        </DialogHeader>
        <CategoryForm
          onClose={() => setModalOpen(false)}
          defaultValues={defaultValues}
        />
      </DialogContent>
    </Dialog>
  );
};
