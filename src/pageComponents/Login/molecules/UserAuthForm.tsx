"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { type Provider } from "@supabase/supabase-js";
import * as React from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { FormInput } from "~/components/FormInput/FormInput";
import { Icons } from "~/components/Icons";
import { Button, buttonVariants } from "~/components/ui/button";
import { Form, FormField } from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { useToast } from "~/components/ui/use-toast";
import { supabase } from "~/server/supabase/supabaseClient";
import { cn } from "~/utils/cn";
import {
  type LoginFormValues,
  loginValidationSchema,
} from "./UserAuthForm.schema";

const signInWithOauth = (provider: Provider) => {
  void supabase().auth.signInWithOAuth({
    provider: provider,
    options: { redirectTo: `${window.location.origin}/dashboard` },
  });
};

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
        <Button loading={form.formState.isSubmitting} type="submit">
          {t("login.submitButton")}
        </Button>
      </form>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "outline" }), "flex gap-2")}
        onClick={() => {
          signInWithOauth("google");
        }}
      >
        <Icons.google width={16} />
        Google
      </button>
    </Form>
  );
}
