// components/PropertyCard.tsx
import { FC } from "react";
import { PropertyCardProps } from "../interfaces/PropertyCard";

const PropertyCard: FC<PropertyCardProps> = ({ property, showDescription = true }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
            {/* Imagen principal */}
            <img
                src={property.images[0]}
                alt={property.title}
                className="w-full h-48 object-cover"
            />

            {/* Contenido */}
            <div className="p-4 flex flex-col flex-1">
                <div className="space-y-3 flex-1">
                    {/* Título */}
                    <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>

                    {/* Ubicación */}
                    <p className="text-sm text-gray-500">{property.location}</p>

                    {/* Descripción opcional */}
                    {showDescription && (
                        <p className="text-sm text-gray-600 line-clamp-2">
                            {property.description}
                        </p>
                    )}

                    {/* Detalles */}
                    <div className="flex flex-wrap gap-2 text-sm text-gray-700">
                        <span>{property.bedrooms} Bedrooms</span>
                        <span>{property.bathrooms} Bathrooms</span>
                        <span>{property.beds} Beds</span>
                        <span>Up to {property.capacity} guests</span>
                    </div>

                    {/* Amenities destacados */}
                    <div className="flex flex-wrap gap-2">
                        {property.amenities.slice(0, 5).map((amenity, i) => (
                            <span
                                key={i}
                                className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                            >
                                {amenity}
                            </span>
                        ))}
                        {property.amenities.length > 5 && (
                            <span className="text-xs text-gray-500">
                                +{property.amenities.length - 5} more
                            </span>
                        )}
                    </div>
                </div>

                {/* Footer (precio) */}
                <div className="flex justify-between items-center pt-3 border-t mt-3">
                    <span className="text-lg font-bold text-gray-800">
                        {property.currency} {property.pricePerNight}
                    </span>
                    <span className="text-sm text-gray-500">/night</span>
                </div>
            </div>
        </div>
    );
};

export default PropertyCard;
