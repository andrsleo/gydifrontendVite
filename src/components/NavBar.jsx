// src/components/NavBar.jsx
import { Link, useLocation } from "react-router-dom";
import { FaBuilding, FaChartLine, FaUserGroup, FaUser, FaGear } from "react-icons/fa6";

const tabs = [
    { path: "/", label: "Catálogo", icon: <FaBuilding /> },
    { path: "/dashboard", label: "Dashboard", icon: <FaChartLine /> },
    { path: "/referrals", label: "Referidos", icon: <FaUserGroup /> },
    { path: "/profile", label: "Perfil", icon: <FaUser /> },
    { path: "/settings", label: "Ajustes", icon: <FaGear /> },
];

export default function NavBar() {
    const location = useLocation();
    return (
        <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around py-2 px-6 max-w-md">
            {tabs.map(({ path, label, icon }) => (
                <Link
                    key={path}
                    to={path}
                    className={`flex flex-col items-center text-sm ${location.pathname === path ? "text-indigo-600" : "text-gray-500"
                        }`}
                >
                    <span className="text-lg">{icon}</span>
                    {label}
                </Link>
            ))}
        </nav>
    );
}
