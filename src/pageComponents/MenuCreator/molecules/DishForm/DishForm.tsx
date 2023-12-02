import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormInput } from "~/components/FormInput/FormInput";
import { ImageUploadInput } from "~/components/ImageUploadInput/ImageUploadInput";
import { Button } from "~/components/ui/button";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { useUser } from "~/providers/AuthProvider/AuthProvider";
import { assert } from "~/utils/assert";
import { uploadFileToStorage } from "~/utils/uploadFile";
import Select from "react-select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Image from "next/image";
import { cn } from "~/utils/cn";
import { generateDishImagePath } from "~/server/supabase/storagePaths";
import { getCategoryTranslations } from "~/utils/categoriesUtils";
import { getDefaultLanguage } from "~/utils/getDefaultLanguage";
import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";
import { TagType } from "@prisma/client";
import { tagsTranslations } from "~/utils/tags";
import { api } from "~/trpc/react";
import {
  addDishValidationSchemaWithImage,
  type AddDishFormValues,
  type AddDishFormValuesWithImage,
} from "./DishForm.schema";

export const useUpsertDish = () => {
  const { user } = useUser();
  const { mutateAsync } = api.menus.upsertDish.useMutation();
  const { mutateAsync: updateBgImage } =
    api.menus.updateDishImageUrl.useMutation();
  const utils = api.useContext();

  const { slug } = useParams() as { slug: string };
  const { data: menuData } = api.menus.getMenuBySlug.useQuery({ slug });
  const { t } = useTranslation();
  const { toast } = useToast();
  const upsertDish = async (values: AddDishFormValuesWithImage) => {
    try {
      assert(!!user, "User should be logged in.");
      assert(!!menuData, "Menu should be fetched.");
      const { dishImageToUpload, ...dish } = values;

      const newDish = await mutateAsync({ ...dish, menuId: menuData.id });
      let imageUrl: string | undefined | null;

      if (dishImageToUpload) {
        const { url, error } = await uploadFileToStorage(
          generateDishImagePath({
            dishId: newDish.id,
            userId: user.id,
          }),
          dishImageToUpload,
        );

        if (error) throw error;

        imageUrl = url;
      } else if (dishImageToUpload === null) {
        imageUrl = null;
      }

      await updateBgImage({ dishId: newDish.id, imageUrl });
      utils.menus.invalidate();
    } catch (error) {
      toast({
        title: t("notifications.somethingWentWrong"),
        description: t("notifications.tryAgainLater"),
        variant: "destructive",
        duration: 5000,
      });
    }
  };

  return { mutateAsync: upsertDish };
};

export const DishForm = ({
  defaultValues,
  onClose,
}: {
  defaultValues?: Partial<AddDishFormValues>;
  onClose: () => void;
}) => {
  const form = useForm<AddDishFormValuesWithImage>({
    defaultValues: {
      translatedDishData: [],
      tags: [],
      price: 0,
      categoryId: "",
      ...defaultValues,
    },
    resolver: zodResolver(addDishValidationSchemaWithImage),
  });
  const { slug } = useParams() as { slug: string };
  const { data: menuData, isLoading } = api.menus.getMenuBySlug.useQuery({
    slug,
  });
  const { t } = useTranslation();
  const { data: categoriesList, isLoading: categoriesLoading } =
    api.menus.getCategoriesBySlug.useQuery({
      menuSlug: slug,
    });
  const { mutateAsync } = useUpsertDish();

  const onSubmit = async (values: AddDishFormValuesWithImage) => {
    await mutateAsync(values);
    onClose();
  };

  if (isLoading || !menuData) return null;

  const initialLanguage = getDefaultLanguage(menuData.menuLanguages);

  const mappedCategories =
    categoriesList?.map((val) => ({
      value: val.id,
      label: getCategoryTranslations({
        category: val,
        languageId: initialLanguage.languageId,
      }),
    })) || [];

  const categoriesSelectOptions = [
    { value: "", label: t("menuCreator.noCategory") },
    ...mappedCategories,
  ];
  const tagsSelectOptions = Object.values(TagType).map((value) => ({
    value,
    label: t(tagsTranslations[value]),
  }));

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex w-full flex-col gap-4">
          <div className="flex flex-col">
            <Tabs defaultValue={initialLanguage.languageId} className="gap-0">
              <TabsList className="gap-4 bg-white p-0">
                {menuData?.menuLanguages.map((lang, index) => (
                  <TabsTrigger
                    className={cn(
                      "data-[state=active]:bg-muted",
                      form.formState.errors.translatedDishData?.[index] &&
                        "border-2 border-red-300",
                    )}
                    key={lang.languageId}
                    value={lang.languageId}
                  >
                    <div className="flex flex-row items-center gap-4">
                      <Image
                        src={lang.languages.flagUrl}
                        alt="Flag"
                        width={16}
                        height={16}
                      />
                      {lang.languages.name}
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
              {menuData?.menuLanguages.map((lang, index) => (
                <TabsContent
                  value={lang.languageId}
                  key={lang.languageId}
                  className="mt-0 rounded-b-lg bg-muted p-4 "
                >
                  <div className="flex flex-col gap-4">
                    <Input
                      {...form.register(
                        `translatedDishData.${index}.languageId`,
                      )}
                      value={lang.languageId}
                      className="hidden"
                    />
                    <FormField
                      control={form.control}
                      name={`translatedDishData.${index}.name`}
                      render={({ field }) => (
                        <FormInput
                          label={`${t("dishForm.dishName")} (${
                            lang.languages.isoCode
                          })`}
                        >
                          <Input {...field} placeholder="Pierogi Ruskie" />
                        </FormInput>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`translatedDishData.${index}.description`}
                      render={({ field }) => (
                        <FormInput
                          label={`${t("dishForm.dishDescription")} (${
                            lang.languages.isoCode
                          })`}
                        >
                          <Input
                            {...field}
                            placeholder={t("dishForm.descriptionPlaceholder")}
                          />
                        </FormInput>
                      )}
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormInput label={t("dishForm.priceInPLN")}>
                <Input {...field} type="number" placeholder="10.99" />
              </FormInput>
            )}
          />
          <FormInput label={t("dishForm.dishPhoto")}>
            <div className="h-[100px] w-[200px]  ">
              <ImageUploadInput
                control={form.control}
                defaultImageUrl={defaultValues?.imageUrl ?? undefined}
                name="dishImageToUpload"
                aspectRatio={2 / 1}
                cropImageAspectRatio={1 / 1}
                restoreButton={false}
              />
            </div>
          </FormInput>
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormInput label={t("dishForm.categoryLabel")}>
                <Select
                  name={field.name}
                  ref={field.ref}
                  value={categoriesSelectOptions.find(
                    (val) => val.value === field.value,
                  )}
                  isSearchable
                  onChange={(val) => field.onChange(val?.value)}
                  options={categoriesSelectOptions}
                  isLoading={categoriesLoading}
                />
              </FormInput>
            )}
          />
          <FormField
            control={form.control}
            name="tags"
            render={({ field }) => (
              <FormInput label={t("dishForm.tagsLabel")}>
                <Select
                  options={tagsSelectOptions}
                  value={tagsSelectOptions?.filter((option) =>
                    field.value.includes(option.value),
                  )}
                  onChange={(newValue) =>
                    field.onChange(newValue.map((val) => val.value))
                  }
                  isSearchable
                  isMulti
                />
              </FormInput>
            )}
          />

          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {t("dishForm.macronutrientsButton")}
              </AccordionTrigger>
              <AccordionContent>
                <div className="flex flex-col gap-4 p-4 ">
                  <div className="flex flex-row justify-between gap-4">
                    <FormField
                      control={form.control}
                      name="calories"
                      render={({ field }) => (
                        <FormInput
                          label={t("dishForm.calories")}
                          className="w-full"
                        >
                          <Input {...field} type="number" />
                        </FormInput>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="weight"
                      render={({ field }) => (
                        <FormInput
                          label={t("dishForm.weight")}
                          className="w-full"
                        >
                          <Input {...field} type="number" />
                        </FormInput>
                      )}
                    />
                  </div>
                  <div className="flex flex-row gap-4">
                    <FormField
                      control={form.control}
                      name="carbohydrates"
                      render={({ field }) => (
                        <FormInput label={t("dishForm.carbs")}>
                          <Input {...field} type="number" />
                        </FormInput>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="fats"
                      render={({ field }) => (
                        <FormInput label={t("dishForm.fat")}>
                          <Input {...field} type="number" />
                        </FormInput>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="proteins"
                      render={({ field }) => (
                        <FormInput label={t("dishForm.protein")}>
                          <Input {...field} type="number" />
                        </FormInput>
                      )}
                    />
                  </div>
                  <p className="text-sm text-gray-600">
                    {t("dishForm.macronutrientsDescription")}
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        <Button loading={form.formState.isSubmitting} type="submit">
          {t("menuForm.save")}
        </Button>
      </form>
    </Form>
  );
};
