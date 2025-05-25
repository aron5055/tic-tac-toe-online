import PasswordField from "@/components/form/PasswordFied";
import SimpleField from "@/components/form/SimpleField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { fieldMeta } from "@/data/fieldMeta";
import { toast } from "@/hooks/use-toast";
import supabase from "@/lib/supabase";
import { type RegisterData, registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";

export default function RegisterForm() {
  const navigate = useNavigate();
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

  async function onSubmit(values: RegisterData) {
    const { error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          username: values.username,
        },
      },
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "注册失败，请重试",
        description: error.message,
      });
    } else {
      toast({
        description: "注册成功",
      });
    }
  }

  return (
    <>
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
          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full"
          >
            提交
          </Button>
        </form>
      </Form>
      <div className="flex justify-center mt-4">
        <Link to="/login" className="hover:underline text-slate-600">
          已有账号？点击这里登陆
        </Link>
      </div>
      <Toaster />
    </>
  );
}
