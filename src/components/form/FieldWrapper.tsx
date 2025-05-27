import type { ReactNode } from "react";
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";

interface FieldWrapperProsp {
  label: string;
  description?: string;
  children: ReactNode;
  suffix?: ReactNode;
  htmlfor: string;
}

export default function FieldWrapper({
  label,
  description,
  children,
  suffix,
  htmlfor,
}: FieldWrapperProsp) {
  return (
    <FormItem>
      <FormLabel htmlFor={htmlfor}>{label}</FormLabel>
      <FormControl>
        <div className="relative">
          {children}
          {suffix && (
            <div className="absolute right-0 inset-y-0 pr-3">{suffix}</div>
          )}
        </div>
      </FormControl>
      {description && <FormDescription>{description}</FormDescription>}
      <FormMessage />
    </FormItem>
  );
}
