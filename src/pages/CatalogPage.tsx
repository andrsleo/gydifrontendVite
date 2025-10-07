// src/pages/CatalogPage.tsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllProperties } from "@/services/propertyService";
import type { Property } from "@/interfaces/Property";
import PublicLayout from "@/components/ui/PublicLayout";
import PropertyCard from "@/components/PropertyCard";

export default function CatalogPage() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            try {
                // ✅ Llamada directa al service (que ya decide entre API o mocks)
                const data = await getAllProperties(0, 20);
                if (isMounted) {
                    setProperties(data);
                }
            } catch (err) {
                console.error("❌ Error en CatalogPage.fetchData:", err);
                if (isMounted) {
                    setError("No se pudieron cargar las propiedades");
                }
            } finally {
                if (isMounted) setLoading(false);
            }
        };

        fetchData();

        return () => {
            isMounted = false;
        };
    }, []);

    return (
        <PublicLayout>
            <div className="w-full max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Catálogo de Propiedades</h1>

                {loading && <p className="text-gray-600">Cargando propiedades...</p>}
                {error && <p className="text-red-600">{error}</p>}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
                    {properties.map((property) => (
                        <Link key={property.id} to={`/catalog/${property.id}`} className="h-full">
                            <PropertyCard property={property} />
                        </Link>
                    ))}
                </div>
            </div>
        </PublicLayout>
    );
}
