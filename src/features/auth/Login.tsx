import PasswordField from "@/components/form/PasswordFied";
import SimpleField from "@/components/form/SimpleField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { fieldMeta } from "@/data/fieldMeta";
import { loginSchema, type LoginData } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function LoginForm() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control, handleSubmit, formState } = form;

  function onSubmit(values: LoginData) {
    console.log(values);
  }

  return (
    <Form {...form}>
      {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        <SimpleField
          control={control}
          name="email"
          {...fieldMeta["email"]}
          description=""
        />
        <PasswordField
          control={control}
          name="password"
          {...fieldMeta["password"]}
          description=""
        />

        <Button type="submit" disabled={formState.isSubmitting}>
          提交
        </Button>
      </form>
    </Form>
  );
}
