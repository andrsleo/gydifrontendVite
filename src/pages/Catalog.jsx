// src/pages/Catalog.jsx
import PropertyCard from "../components/PropertyCard";
import { properties } from "../data/properties";

export default function Catalog() {
    return (
        <div className="p-4 space-y-4">
            <h2 className="text-xl font-bold text-gray-800">Catálogo de Propiedades</h2>
            <div className="grid grid-cols-1 gap-4">
                {properties.map((property) => (
                    <PropertyCard key={property.id} {...property} />
                ))}
            </div>
        </div>
    );
}
