import PasswordField from "@/components/form/PasswordFied";
import SimpleField from "@/components/form/SimpleField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { fieldMeta } from "@/data/fieldMeta";
import { toast } from "@/hooks/use-toast";
import supabase from "@/lib/supabase";
import { type RegisterData, registerSchema } from "@/schemas/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import type { AuthError } from "@supabase/supabase-js";
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
      const message = errorMessage(error);
      toast({
        variant: "destructive",
        title: "操作失败",
        description: message,
      });
    } else {
      toast({
        description: "注册成功",
      });
      void navigate("/login");
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
    </>
  );
}

function errorMessage(error: AuthError): string {
  let message = "注册失败，请重试";
  switch (error.code) {
    case "user_already_exists":
      message = "用户名或邮箱已注册过，请换一个试试。";
      break;
    case "network_error":
      message = "网络连接出现问题，请检查您的网络。";
      break;
    default:
      break;
  }
  return message;
}
