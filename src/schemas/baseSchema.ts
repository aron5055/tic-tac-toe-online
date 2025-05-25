import { z } from "zod";

export const baseSchema = z.object({
  email: z.string().trim().email({ message: "邮箱格式错误" }),
  password: z
    .string()
    .min(8, {
      message: "密码至少 8 位",
    })
    .max(64, { message: "密码最多 64 位" }),
});

export type BaseFormType = z.infer<typeof baseSchema>;
