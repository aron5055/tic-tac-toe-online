import type { Field, SimpleFieldProps } from "@/types/form";
import { FormField } from "../ui/form";
import { Input } from "../ui/input";
import FieldWrapper from "./FieldWrapper";

export default function SimpleField<T extends Field>({
  control,
  name,
  label,
  description,
  type = "text",
  placeholder,
}: SimpleFieldProps<T>) {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FieldWrapper label={label} description={description} htmlfor={name}>
          <Input
            id={name}
            {...field}
            type={type}
            placeholder={placeholder ?? label}
            autoComplete="on"
          />
        </FieldWrapper>
      )}
    />
  );
}
