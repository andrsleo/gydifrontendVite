import { NavLink, Outlet } from "react-router-dom";
import Layout from "@/components/ui/Layout";
import { useAuth } from "@/context/AuthContext";

export default function DashboardPage() {
    const { user, logout } = useAuth();

    const tabs = [
        { label: "Resumen", path: "resumen" },
        { label: "Usuarios", path: "usuarios" },
        { label: "Configuración", path: "configuracion" },
    ];

    return (
        <Layout>
            {/* Header */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Dashboard</h1>

                {user && (
                    <div className="flex items-center space-x-4">
                        <span className="text-gray-700 font-medium">{user.email}</span>
                        <button
                            onClick={logout}
                            className="rounded-md bg-red-600 px-3 py-1 text-white font-semibold hover:bg-red-700 transition"
                        >
                            Logout
                        </button>
                    </div>
                )}
            </div>

            {/* Tabs */}
            <nav className="flex space-x-4 border-b pb-2 mb-6">
                {tabs.map((tab) => (
                    <NavLink
                        key={tab.path}
                        to={tab.path}
                        className={({ isActive }) =>
                            `px-3 py-2 rounded-md font-medium ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100"
                            }`
                        }
                    >
                        {tab.label}
                    </NavLink>
                ))}
            </nav>

            {/* Contenido del tab */}
            <Outlet />
        </Layout>
    );
}
