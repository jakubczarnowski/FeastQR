"use client";

import { api } from "~/trpc/react";
import { MenuPdfGenerator } from "./molecules/MenuPdfGenerator/MenuPdfGenerator";
import { Form, FormField } from "~/components/ui/form";
import { ControlledSwitch, Switch } from "~/components/ui/switch";
import { FormInput } from "~/components/FormInput/FormInput";
import { Input } from "~/components/ui/input";
import { Icons } from "~/components/Icons";
import { useForm } from "react-hook-form";
import { useEffect, useRef, useState } from "react";
import { useDebouncedCallback } from "use-debounce";
import { useTranslation } from "react-i18next";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  type PrintCreatorFormValues,
  printCreatorValidationSchema,
} from "./MenuPrintCreator.schema";
import { saveFormValuesToCookies } from "./MenuPrintCreator.common";

export const MenuPrintCreatorPage = ({
  slug,
  initialCookiesFormValues,
}: {
  slug: string;
  initialCookiesFormValues: PrintCreatorFormValues | null;
}) => {
  const { t } = useTranslation();
  const { data } = api.menus.getMenuBySlug.useQuery({ slug });

  const form = useForm<PrintCreatorFormValues>({
    mode: "onTouched",
    defaultValues: {
      restaurantNameEnabled: false,
      qrCodeEnabled: false,
      facebookEnabled: false,
      instagramEnabled: false,
      wifiPasswordEnabled: false,
      wifiPassword: "",
      facebookName: "",
      instagramHandle: "",
      restaurantName: "",
      menuLogoImageUrl: null,
      ...initialCookiesFormValues,
    },
    resolver: zodResolver(printCreatorValidationSchema),
  });

  const [debouncedValues, setDebouncedValues] =
    useState<PrintCreatorFormValues>(form.getValues());

  const debounceValues = useDebouncedCallback(
    (values: PrintCreatorFormValues) => {
      setDebouncedValues(values);
      saveFormValuesToCookies(values);
    },
    500,
  );
  const { watch, getValues } = form;

  useEffect(() => {
    const subscription = watch(() => {
      const values = getValues();

      debounceValues(values);
    });

    return () => subscription.unsubscribe();
  }, [watch, getValues, debounceValues]);
  const defaultDataSetRef = useRef(false);

  if (!defaultDataSetRef.current && data) {
    defaultDataSetRef.current = true;
    form.setValue("restaurantName", data.name);
    form.setValue("menuLogoImageUrl", data.logoImageUrl);
  }

  return (
    <div className="flex w-full flex-col gap-6  px-8 md:flex-row">
      <div className="flex w-full max-w-[300px] grow flex-col gap-8">
        <h1 className=" text-3xl font-bold ">{t("menuPrintCreator.title")}</h1>
        <Form {...form}>
          <form className="flex flex-col gap-4">
            <div className="space-x flex flex-col items-start justify-end gap-3 rounded-md border p-4">
              <FormInput
                descriptionClassName="text-xs"
                label={t("menuPrintCreator.socialMediaLabel")}
                description={t("menuPrintCreator.socialMediaDescription")}
              >
                <div className="flex flex-col gap-4">
                  <FormField
                    control={form.control}
                    name="facebookName"
                    render={({ field }) => (
                      <FormInput className="w-full" messageClassName="text-xs">
                        <div className="flex flex-row items-center gap-2">
                          <Icons.facebook className="h-6 w-6" />
                          <Input
                            {...field}
                            placeholder={t(
                              "menuPrintCreator.facebookHandlePlaceholder",
                            )}
                            className="h-7 w-full"
                          />
                          <ControlledSwitch
                            control={form.control}
                            name="facebookEnabled"
                          />
                        </div>
                      </FormInput>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="instagramHandle"
                    render={({ field }) => (
                      <FormInput className="w-full" messageClassName="text-xs">
                        <div className="flex flex-row items-center gap-2">
                          <Icons.instagram className="h-6 w-6" />

                          <Input
                            {...field}
                            placeholder={t(
                              "menuPrintCreator.instagramHandlePlaceholder",
                            )}
                            className="h-7 w-full"
                          />
                          <ControlledSwitch
                            control={form.control}
                            name="instagramEnabled"
                          />
                        </div>
                      </FormInput>
                    )}
                  />
                </div>
              </FormInput>
            </div>
            <div className="space-x flex flex-col items-start justify-end gap-3 rounded-md border p-4">
              <FormInput
                descriptionClassName="text-xs"
                label={t("menuPrintCreator.wifiPasswordLabel")}
                description={t("menuPrintCreator.wifiPasswordDescription")}
              >
                <div className="flex flex-row items-center gap-2">
                  <Icons.wifi className="h-6 w-6" />
                  <Input
                    {...form.register("wifiPassword")}
                    placeholder={t("menuPrintCreator.wifiPasswordPlaceholder")}
                    className="h-7 w-full"
                  />
                  <ControlledSwitch
                    control={form.control}
                    name="wifiPasswordEnabled"
                  />
                </div>
              </FormInput>
            </div>
            <FormField
              control={form.control}
              name="restaurantNameEnabled"
              render={({ field }) => (
                <FormInput
                  label={t("menuPrintCreator.restaurantNameLabel")}
                  className="space-x flex flex-row items-center justify-between gap-2 space-y-0 rounded-md border p-4"
                >
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormInput>
              )}
            />
            <FormField
              control={form.control}
              name="qrCodeEnabled"
              render={({ field }) => (
                <FormInput
                  label={t("menuPrintCreator.qrCodeEnabledLabel")}
                  className="space-x flex flex-row items-center justify-between gap-2 space-y-0 rounded-md border p-4 text-center"
                >
                  <Switch
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormInput>
              )}
            />
          </form>
        </Form>
      </div>
      <MenuPdfGenerator
        {...debouncedValues}
        qrCodeUrl={`www.feastqr.com/menu/${slug}`}
        menuLogoImageUrl={data?.logoImageUrl ?? null}
      />
    </div>
  );
};
