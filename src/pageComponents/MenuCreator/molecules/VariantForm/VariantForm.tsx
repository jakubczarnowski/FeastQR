"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { FormInput } from "~/components/FormInput/FormInput";
import { Button } from "~/components/ui/button";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import Image from "next/image";
import { cn } from "~/utils/cn";
import { getDefaultLanguage } from "~/utils/getDefaultLanguage";
import { useTranslation } from "react-i18next";
import { api } from "~/trpc/react";
import {
  type AddDishVariantFormValues,
  dishVariantValidationSchema,
} from "./VariantForm.schema";

export const DishVariantForm = ({
  defaultValues,
  onClose,
  dishId,
}: {
  defaultValues?: Partial<AddDishVariantFormValues>;
  onClose: () => void;
  dishId: string;
}) => {
  const form = useForm<AddDishVariantFormValues>({
    defaultValues: {
      translatedVariant: [],
      ...defaultValues,
    },
    resolver: zodResolver(dishVariantValidationSchema),
  });
  const { slug } = useParams() as { slug: string };
  const { data: menuData, isLoading } = api.menus.getMenuBySlug.useQuery({
    slug,
  });
  const { t } = useTranslation();

  const { mutateAsync } = api.menus.upsertDishVariant.useMutation();

  const onSubmit = async (values: AddDishVariantFormValues) => {
    await mutateAsync({ ...values, dishId: dishId });
    onClose();
  };

  if (isLoading || !menuData) return null;

  const initialLanguage = getDefaultLanguage(menuData.menuLanguages);

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
                      form.formState.errors.translatedVariant?.[index] &&
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
                        `translatedVariant.${index}.languageId`,
                      )}
                      value={lang.languageId}
                      className="hidden"
                    />
                    <FormField
                      control={form.control}
                      name={`translatedVariant.${index}.name`}
                      render={({ field }) => (
                        <FormInput
                          label={`${t("dishVariantForm.variantName")} (${
                            lang.languages.isoCode
                          })`}
                        >
                          <Input
                            {...field}
                            placeholder={t(
                              "dishVariantForm.variantNamePlaceholder",
                            )}
                          />
                        </FormInput>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`translatedVariant.${index}.description`}
                      render={({ field }) => (
                        <FormInput
                          label={`${t("dishVariantForm.variantDescription")} (${
                            lang.languages.isoCode
                          })`}
                        >
                          <Input
                            {...field}
                            placeholder={t(
                              "dishVariantForm.variantDescriptionPlaceholder",
                            )}
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
              <FormInput label={t("dishVariantForm.priceInPLN")}>
                <Input {...field} type="number" placeholder="10.99" />
              </FormInput>
            )}
          />
        </div>
        <Button loading={form.formState.isSubmitting} type="submit">
          Zapisz
        </Button>
      </form>
    </Form>
  );
};
