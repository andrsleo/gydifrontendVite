// src/components/layout/Sidebar.tsx
import { NavLink } from "react-router-dom";

export default function Sidebar() {
    const links = [
        { to: "/dashboard", label: "Inicio" },
        { to: "/dashboard/profile", label: "Perfil" },
        { to: "/dashboard/settings", label: "Configuración" },
    ];

    return (
        <aside className="w-64 bg-white shadow-md">
            <div className="p-4 text-xl font-bold text-blue-600">Mi App</div>
            <nav className="mt-6 flex flex-col space-y-2">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        className={({ isActive }) =>
                            `px-4 py-2 font-medium transition ${isActive
                                ? "bg-blue-100 text-blue-600"
                                : "text-gray-700 hover:bg-gray-50"
                            }`
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
