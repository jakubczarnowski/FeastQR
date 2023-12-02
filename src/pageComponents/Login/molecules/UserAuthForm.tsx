"use client";

import { zodResolver } from "@hookform/resolvers/zod";
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

const loginValidationSchema = (translate: TFunction) =>
  z.object({
    email: z.string().email(),
    password: z.string().min(8, translate("register.passwordLengthValidation")),
  });

type LoginFormValues = ZodReturnType<typeof loginValidationSchema>;

export function UserAuthForm() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginValidationSchema(t)),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = async (data: LoginFormValues) => {
    const { error } = await supabase().auth.signInWithPassword(data);

    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
        duration: 9000,
      });

      return;
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
            <FormInput label={t("login.emailLabel")}>
              <Input {...field} />
            </FormInput>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormInput label={t("login.passwordLabel")}>
              <Input {...field} type="password" />
            </FormInput>
          )}
        />
        <Button type="submit">{t("login.submitButton")}</Button>
      </form>
    </Form>
  );
}
