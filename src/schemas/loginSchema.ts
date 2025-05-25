import { z } from "zod";
import { baseSchema } from "./baseSchema";

export const loginSchema = baseSchema;

export type LoginData = z.infer<typeof loginSchema>;
