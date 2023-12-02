"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { isAuthError } from "@supabase/supabase-js";
import { type TFunction } from "i18next";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { z } from "zod";

import { FormInput } from "~/components/FormInput/FormInput";
import { Button } from "~/components/ui/button";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { supabase } from "~/server/supabase/supabaseClient";
import { type ZodReturnType } from "~/utils";

const registerValidationSchema = (translate: TFunction) =>
  z
    .object({
      email: z.string().email(),
      password: z
        .string()
        .min(8, translate("register.passwordLengthValidation"))
        .regex(/[A-Z]/, translate("register.passwordUppercaseValidation"))
        .regex(/[a-z]/, translate("register.passwordLowercaseValidation"))
        .regex(
          /[^A-Za-z0-9]/,
          translate("register.passwordSpecialCharacterValidation"),
        ),
      passwordConfirmation: z.string(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: translate("register.passwordConfirmationValidation"),
      path: ["passwordConfirmation"],
    });

type RegisterFormValues = ZodReturnType<typeof registerValidationSchema>;

export function UserAuthForm() {
  const { toast } = useToast();
  const { t } = useTranslation();
  const form = useForm<RegisterFormValues>({
    resolver: zodResolver(registerValidationSchema(t)),
    defaultValues: {
      email: "",
      password: "",
      passwordConfirmation: "",
    },
  });
  const onSubmit = async (data: RegisterFormValues) => {
    try {
      await supabase().auth.signUp(data);

      toast({
        title: "Account created.",
        description: "Creation successful!",
        variant: "default",
        duration: 9000,
      });
    } catch (e) {
      if (isAuthError(e)) {
        toast({
          title: "Error",
          description: e.message,
          variant: "destructive",
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
            <FormInput label={t("register.emailLabel")}>
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormInput label={t("register.passwordLabel")}>
              <Input {...field} type="password" />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="passwordConfirmation"
          render={({ field }) => (
            <FormInput label={t("register.passwordConfirmLabel")}>
              <Input {...field} type="password" />
            </FormInput>
          )}
        />
        <Button type="submit">{t("register.submitButton")}</Button>
      </form>
    </Form>
  );
}
