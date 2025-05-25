import PasswordField from "@/components/form/PasswordFied";
import SimpleField from "@/components/form/SimpleField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { fieldMeta } from "@/data/fieldMeta";
import { type RegisterData, registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const { control, handleSubmit, formState } = form;

  function onSubmit(values: RegisterData) {
    console.log(values);
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <SimpleField
          control={control}
          name="username"
          {...fieldMeta["username"]}
        />
        <SimpleField
          control={control}
          name="email"
          type="email"
          {...fieldMeta["email"]}
        />
        <PasswordField
          control={control}
          name="password"
          {...fieldMeta["password"]}
        />
        <PasswordField
          control={control}
          name="confirmPassword"
          {...fieldMeta["confirmPassword"]}
        />
        <Button type="submit" disabled={formState.isSubmitting}>
          提交
        </Button>
      </form>
    </Form>
  );
}
