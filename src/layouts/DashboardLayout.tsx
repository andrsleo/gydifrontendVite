// src/layouts/DashboardLayout.tsx
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";

export default function DashboardLayout() {
    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <Sidebar />

            {/* Contenido principal */}
            <div className="flex flex-1 flex-col">
                {/* Header */}
                <Header />

                {/* Contenido dinámico */}
                <main className="flex-1 p-6">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
