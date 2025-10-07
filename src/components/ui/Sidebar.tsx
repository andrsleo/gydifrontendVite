import { ReactNode } from "react";
import { Home, Users, Settings } from "lucide-react";

type SidebarProps = {
    children?: ReactNode;
};

export default function Sidebar({ children }: SidebarProps) {
    return (
        <aside className="w-64 min-h-screen bg-white shadow-md">
            <nav className="flex flex-col p-4 space-y-2">
                <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                    <Home className="w-5 h-5" /> Inicio
                </a>
                <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                    <Users className="w-5 h-5" /> Usuarios
                </a>
                <a
                    href="#"
                    className="flex items-center gap-2 p-2 rounded-md hover:bg-gray-100 text-gray-700"
                >
                    <Settings className="w-5 h-5" /> Configuración
                </a>
            </nav>
            {children}
        </aside>
    );
}
