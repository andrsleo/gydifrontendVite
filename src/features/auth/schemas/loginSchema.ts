// src/features/auth/schemas/loginSchema.ts
import { z } from "zod";

// Esquema de validación con Zod
export const loginSchema = z.object({
    email: z.string().email("El email no es válido"),
    password: z.string().min(6, "La contraseña debe tener mínimo 6 caracteres"),
});

// Exportamos el tipo inferido
export type LoginFormValues = z.infer<typeof loginSchema>;
