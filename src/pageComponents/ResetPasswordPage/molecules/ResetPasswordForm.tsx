import { zodResolver } from "@hookform/resolvers/zod";
import { isAuthError } from "@supabase/supabase-js";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FormInput } from "~/components/FormInput/FormInput";
import { Button } from "~/components/ui/button";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { supabase } from "~/server/supabase/supabaseClient";
import { getBaseUrl } from "~/utils/getBaseUrl";
import {
  type RegisterFormValues,
  resetPasswordValidationSchema,
} from "./ResetPasswordForm.schema";

export function ResetPasswordForm() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(resetPasswordValidationSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await supabase().auth.resetPasswordForEmail(data.email, {
        redirectTo: `${getBaseUrl()}/dashboard/settings`,
      });
      toast({
        title: t("resetPassword.checkYourEmailToReset"),
        description: t("register.checkYourEmailForConfirmation"),
        variant: "topDescructive",
      });
    } catch (e) {
      if (isAuthError(e)) {
        toast({
          title: "Error",
          description: e.message,
          variant: "topDescructive",
          duration: 9000,
        });
      }
    }
  };

  return (
    <Form {...form}>
      <form
        className="grid gap-6"
        onSubmit={(e) => void form.handleSubmit(onSubmit)(e)}
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormInput label={t("common.emailLabel")}>
              <Input {...field} autoComplete="email" />
            </FormInput>
          )}
        />

        <Button loading={form.formState.isSubmitting} type="submit">
          {t("resetPassword.resetButton")}
        </Button>
      </form>
    </Form>
  );
}
