// src/components/layout/Header.tsx
import { useAuth } from "@/features/auth/context/AuthContext";

export default function Header() {
    const { user, logout } = useAuth();

    return (
        <header className="flex items-center justify-between bg-white px-6 py-3 shadow-sm">
            <h1 className="text-lg font-semibold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
                <span className="text-gray-700">{user?.email}</span>
                <button
                    onClick={logout}
                    className="rounded-md bg-red-500 px-3 py-1 text-sm font-medium text-white hover:bg-red-600"
                >
                    Cerrar sesión
                </button>
            </div>
        </header>
    );
}
