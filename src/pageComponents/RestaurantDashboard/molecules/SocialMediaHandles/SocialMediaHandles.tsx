import { useForm } from "react-hook-form";
import { FormInput } from "~/components/FormInput/FormInput";
import { Icons } from "~/components/Icons";
import { Button } from "~/components/ui/button";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { GoogleReviewGuideButton } from "../GoogleReviewGuideButton/GoogleReviewGuideButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { api } from "~/trpc/react";
import { useToast } from "~/components/ui/use-toast";
import { useTranslation } from "react-i18next";
import {
  type SocialMediaFormValues,
  socialMediaValidationSchema,
} from "./SocialMediaHandles.schema";

export const SocialMediaHandlesForm = ({
  defaultValues,
  menuId,
}: {
  defaultValues?: SocialMediaFormValues;
  menuId: string;
}) => {
  const { t } = useTranslation();
  const form = useForm<SocialMediaFormValues>({
    defaultValues: {
      facebookUrl: "",
      instagramUrl: "",
      googleReviewUrl: "",
      ...defaultValues,
    },
    resolver: zodResolver(socialMediaValidationSchema),
  });
  const { mutateAsync } = api.menus.updateMenuSocials.useMutation();
  const { toast } = useToast();
  const onSubmit = async (values: SocialMediaFormValues) => {
    try {
      await mutateAsync({ ...values, menuId });
      toast({
        title: t("socialMediaForm.updatedToastTitle"),
        description: t("socialMediaForm.updatedToastDescription"),
      });
    } catch (e) {
      toast({
        title: t("toastCommon.errorTitle"),
        description: t("toastCommon.errorDescription"),
        variant: "destructive",
      });
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2"
      >
        <div className="space-x flex flex-col items-start justify-end gap-3 rounded-md ">
          <h3 className="text-lg">{t("socialMediaForm.title")}</h3>
          <FormInput
            descriptionClassName="text-xs"
            description={t("socialMediaForm.description")}
          >
            <div className="flex flex-col gap-4">
              <FormField
                control={form.control}
                name="facebookUrl"
                render={({ field }) => (
                  <FormInput className="w-full" messageClassName="text-xs">
                    <div className="flex flex-row items-center gap-2">
                      <Icons.facebook className="h-6 w-6" />

                      <Input
                        {...field}
                        placeholder={t("socialMediaForm.facebookPlaceholder")}
                        className="h-7 w-full"
                      />
                    </div>
                  </FormInput>
                )}
              />

              <FormField
                control={form.control}
                name="instagramUrl"
                render={({ field }) => (
                  <FormInput className="w-full" messageClassName="text-xs">
                    <div className="flex flex-row items-center gap-2">
                      <Icons.instagram className="h-6 w-6" />

                      <Input
                        {...field}
                        placeholder={t("socialMediaForm.instagramPlaceholder")}
                        className="h-7 w-full"
                      />
                    </div>
                  </FormInput>
                )}
              />

              <FormField
                control={form.control}
                name="googleReviewUrl"
                render={({ field }) => (
                  <FormInput className="w-full" messageClassName="text-xs">
                    <div className="relative flex flex-row items-center gap-2">
                      <Icons.google className="h-6 w-6" />

                      <Input
                        {...field}
                        placeholder={t("socialMediaForm.googlePlaceholder")}
                        className="h-7 w-full"
                      />
                      <GoogleReviewGuideButton />
                    </div>
                  </FormInput>
                )}
              />
            </div>
          </FormInput>
        </div>
        <Button type="submit" variant="outline" className="w-full">
          {t("socialMediaForm.save")}
        </Button>
      </form>
    </Form>
  );
};
