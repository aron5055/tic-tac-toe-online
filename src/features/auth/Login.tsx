import PasswordField from "@/components/form/PasswordFied";
import SimpleField from "@/components/form/SimpleField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Toaster } from "@/components/ui/toaster";
import { fieldMeta } from "@/data/fieldMeta";
import { toast } from "@/hooks/use-toast";
import supabase from "@/lib/supabase";
import { loginSchema, type LoginData } from "@/schemas/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link } from "react-router";

export default function LoginForm() {
  const form = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { control, handleSubmit, formState } = form;

  async function onSubmit(values: LoginData) {
    const { error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password,
    });

    if (error) {
      toast({
        variant: "destructive",
        title: "登陆失败, 请重试",
        description: error.message,
      });
    } else {
      toast({
        description: "登陆成功",
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

          <Button
            type="submit"
            disabled={formState.isSubmitting}
            className="w-full"
          >
            登陆
          </Button>
        </form>
      </Form>
      <div className="flex justify-center mt-4">
        <Link to="/register" className="hover:underline text-slate-600">
          没有账号？点击这里注册
        </Link>
      </div>
      <Toaster />
    </>
  );
}
