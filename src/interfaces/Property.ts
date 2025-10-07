export interface MediaItem {
    type: "image" | "video";
    url: string;
}

export interface Property {
    id: string;
    title: string;
    description: string;
    location: string;
    pricePerNight: number;
    minimumStay: number;
    bathrooms: number;
    bedrooms: number;
    beds: number;
    capacity: number;
    unitType: string;
    amenities: string[];
    images: string[];
    currency: string;

    // Nuevo campo opcional
    mediaCatalogs?: {
        [category: string]: MediaItem[]; // Ej: "Sala", "Cocina", "Habitaciones"
    };
}