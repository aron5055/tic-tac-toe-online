import { z } from "zod";
import { baseSchema } from "./baseSchema";

export const registerSchema = baseSchema
  .extend({
    username: z
      .string()
      .trim()
      .min(2, {
        message: "用户名至少 2 位",
      })
      .max(30, { message: "用户名最多 30 位" })
      .regex(/^[A-Za-z0-9_]+$/, { message: "只能包含英文字母、数字和下划线" }),
    confirmPassword: z
      .string()
      .min(8, { message: "请确保密码最少 8 位" })
      .max(64, { message: "密码最多 64 位" }),
  })
  .refine((val) => val.password === val.confirmPassword, {
    message: "两次密码输入不一致",
    path: ["confirmPassword"],
  });

export type RegisterData = z.infer<typeof registerSchema>;
