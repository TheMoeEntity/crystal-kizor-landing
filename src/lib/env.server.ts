import "server-only";
import { readServerEnv } from "@/schemas/env.schema";

export const serverEnv = readServerEnv(process.env);
