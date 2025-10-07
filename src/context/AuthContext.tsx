import React, { createContext, useContext, useState, ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface User {
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    const login = async (email: string, password: string) => {
        // Simulación de login
        if (email === "admin@demo.com" && password === "123456") {
            const loggedUser = { email };
            setUser(loggedUser);
            navigate("/dashboard/resumen"); // Redirige al dashboard
            return true;
        }
        return false;
    };

    const logout = () => {
        setUser(null);
        navigate("/");
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
};
