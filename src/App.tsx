import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "@/pages/LoginPage";
import DashboardPage from "@/pages/DashboardPage";
import PrivateRoute from "@/routes/PrivateRoute";
import CatalogPage from "./pages/CatalogPage";
import PropertyDetailPage from "./pages/PropertyDetailPage";

export default function App() {
  return (
    <Routes>
      {/* Ruta pública */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      <Route path="/catalog/:id" element={<PropertyDetailPage />} />

      {/* Rutas protegidas */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Route>

      {/* Redirección si la ruta no existe */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
