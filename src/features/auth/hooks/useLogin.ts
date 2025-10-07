// src/features/auth/hooks/useLogin.ts
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

type LoginData = {
    email: string;
    password: string;
};

export function useLogin() {
    const { login: loginContext } = useAuth();
    const [loading, setLoading] = useState(false);

    const login = async (data: LoginData) => {
        setLoading(true);
        try {
            // simulamos request
            await new Promise((res) => setTimeout(res, 1000));

            if (data.email === "admin@demo.com" && data.password === "123456") {
                const user = { id: "1", email: data.email };
                loginContext(user); // guardamos en el contexto
                return { success: true };
            } else {
                return { success: false, error: "Credenciales inválidas" };
            }
        } catch (err) {
            return { success: false, error: "Error en el servidor" };
        } finally {
            setLoading(false);
        }
    };

    return { login, loading };
}
