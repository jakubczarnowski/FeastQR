import { type ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

export type FormInputProps = {
  label?: ReactNode;
  description?: ReactNode;
  children: React.ReactNode;
  className?: string;
  descriptionClassName?: string;
  messageClassName?: string;
};

export const FormInput = ({
  label,
  description,
  children,
  className,
  descriptionClassName,
  messageClassName,
}: FormInputProps) => (
  <FormItem className={className}>
    {label && <FormLabel>{label}</FormLabel>}
    <FormControl>{children}</FormControl>
    {description && (
      <FormDescription className={descriptionClassName}>
        {description}
      </FormDescription>
    )}

    <FormMessage className={messageClassName} />
  </FormItem>
);
