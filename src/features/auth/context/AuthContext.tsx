// src/features/auth/context/AuthContext.tsx
import { createContext, useContext, useState, ReactNode } from "react";
import { LoginFormValues } from "@/schemas/loginSchema";
import { useLogin } from "@/features/auth/hooks/useLogin";

type User = {
    email: string;
};

type AuthContextType = {
    user: User | null;
    loading: boolean;
    login: (data: LoginFormValues) => Promise<boolean>;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(null);
    const { login: loginRequest, loading } = useLogin();

    const login = async (data: LoginFormValues): Promise<boolean> => {
        const result = await loginRequest(data);
        if (result.success) {
            setUser({ email: data.email });
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loading, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

// Hook para consumir el contexto fácilmente
export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth debe usarse dentro de un AuthProvider");
    }
    return context;
}
