import { FormField } from "@/components/ui/form";
import type { Field, PasswordFieldProps } from "@/types/form";
import { useState } from "react";
import { Input } from "../ui/input";
import FieldWrapper from "./FieldWrapper";
import ToggleButton from "./ToggleButton";

export default function PasswordField<T extends Field>({
  control,
  name,
  label,
  placeholder,
  description,
}: PasswordFieldProps<T>) {
  const [visible, setVisible] = useState(false);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FieldWrapper
          label={label}
          description={description}
          htmlfor={name}
          suffix={
            <ToggleButton
              visible={visible}
              handleHide={() => setVisible(!visible)}
            />
          }
        >
          <Input
            id={name}
            type={visible ? "text" : "password"}
            placeholder={placeholder ?? label}
            {...field}
          />
        </FieldWrapper>
      )}
    />
  );
}
