"use client";

import { Input } from "~/components/ui/input";
import { Form, FormField } from "~/components/ui/form";
import { useForm } from "react-hook-form";
import { FormInput } from "~/components/FormInput/FormInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "~/components/ui/button";
import { useToast } from "~/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { ImageUploadInput } from "~/components/ImageUploadInput/ImageUploadInput";
import { useUser } from "~/providers/AuthProvider/AuthProvider";
import { assert } from "~/utils/assert";
import { uploadFileToStorage } from "~/utils/uploadFile";
import {
  generateBackgroundImagePath,
  generateMenuImagePath,
} from "~/server/supabase/storagePaths";
import { useTranslation } from "react-i18next";
import { api } from "~/trpc/react";
import {
  type UpsertMenuFormValues,
  menuValidationSchemaWithImage,
  type UpsertMenuFormWithImageValues,
} from "./MenuForm.schema";

export const useUpsertMenu = () => {
  const { user } = useUser();
  const { mutateAsync } = api.menus.upsertMenu.useMutation();
  const { mutateAsync: updateBgImage } =
    api.menus.updateMenuBackgroundImg.useMutation();
  const { mutateAsync: updateLogoImage } =
    api.menus.updateMenuLogoImg.useMutation();
  const router = useRouter();
  const { toast } = useToast();
  const upsertMenu = async (values: UpsertMenuFormWithImageValues) => {
    try {
      assert(!!user, "User should be logged in.");
      const { menuLogoImageToUpload, backgroundImageToUpload, ...menu } =
        values;

      const newMenu = await mutateAsync({
        ...menu,
      });
      let menuLogoImageUrl: string | undefined | null;

      if (menuLogoImageToUpload) {
        const { url, error } = await uploadFileToStorage(
          generateMenuImagePath({ menuId: newMenu.id, userId: user.id }),
          menuLogoImageToUpload,
        );

        if (error) throw error;

        menuLogoImageUrl = url;
      } else if (menuLogoImageToUpload === null) {
        menuLogoImageUrl = null;
      }

      let backgroundImageUrl: string | undefined | null;

      if (backgroundImageToUpload) {
        const { url, error } = await uploadFileToStorage(
          generateBackgroundImagePath({ menuId: newMenu.id, userId: user.id }),
          backgroundImageToUpload,
        );

        if (error) throw error;

        backgroundImageUrl = url;
      } else if (backgroundImageToUpload === null) {
        backgroundImageUrl = null;
      }

      const updateLogoPromise = updateLogoImage({
        menuId: newMenu.id,
        logoImgUrl: menuLogoImageUrl,
      });
      const updateBgPromise = updateBgImage({
        menuId: newMenu.id,
        backgroundImgUrl: backgroundImageUrl,
      });

      await Promise.all([updateLogoPromise, updateBgPromise]);

      router.push(`/menu/manage/${newMenu.slug}/restaurant`);
    } catch (error) {
      toast({
        title: "Coś poszło nie tak",
        description: "Odśwież stronę i spróbuj ponownie",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return { mutateAsync: upsertMenu };
};

export const MenuForm = ({
  defaultValues,
}: {
  defaultValues?: UpsertMenuFormValues;
}) => {
  const { mutateAsync } = useUpsertMenu();

  const form = useForm<UpsertMenuFormWithImageValues>({
    defaultValues: {
      name: "",
      city: "",
      address: "",
      contactPhoneNumber: "",
      ...defaultValues,
    },
    resolver: zodResolver(menuValidationSchemaWithImage),
  });

  const onSubmit = async (values: UpsertMenuFormWithImageValues) => {
    await mutateAsync(values);
  };

  const { t } = useTranslation();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-8 p-2"
      >
        <FormInput label={t("menuForm.backgroundImage")}>
          <div className="w-full  ">
            <ImageUploadInput
              control={form.control}
              name="backgroundImageToUpload"
              aspectRatio={2 / 1}
              defaultImageUrl={defaultValues?.backgroundImgUrl}
            />
          </div>
        </FormInput>
        <FormInput label={t("menuForm.menuLogoImage")}>
          <div className="w-full max-w-[200px]  ">
            <ImageUploadInput
              control={form.control}
              name="menuLogoImageToUpload"
              aspectRatio={1 / 1}
              defaultImageUrl={defaultValues?.logoImgUrl}
            />
          </div>
        </FormInput>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormInput label={t("menuForm.nameOfRestaurant")}>
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="city"
          render={({ field }) => (
            <FormInput label={t("menuForm.city")}>
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormInput label={t("menuForm.streetAndNumber")}>
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="contactPhoneNumber"
          render={({ field }) => (
            <FormInput label={t("menuForm.phoneNumber")}>
              <Input {...field} />
            </FormInput>
          )}
        />
        <Button loading={form.formState.isSubmitting}>
          {t("menuForm.save")}
        </Button>
      </form>
    </Form>
  );
};
