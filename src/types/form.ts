import type { InputHTMLAttributes } from "react";
import type { Control, FieldPath } from "react-hook-form";

export type Field = Record<string, string>;

export interface SimpleFieldProps<T extends Field> {
  control: Control<T>;
  name: FieldPath<T>;
  label: string;
  description?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
  placeholder?: string;
}

export interface PasswordFieldProps<T extends Field>
  extends SimpleFieldProps<T> {
  type?: "password";
}
