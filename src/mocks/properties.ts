// mocks/properties.ts
import { Property } from "../interfaces/Property";


export const mockProperties: Property[] = [
    {
        id: "1",
        title: "Apartamento moderno en el centro",
        description:
            "Hermoso apartamento moderno ubicado en el corazón de la ciudad, cerca de restaurantes, transporte y zonas culturales.",
        location: "Bogotá, Colombia",
        pricePerNight: 120,
        minimumStay: 2,
        bathrooms: 2,
        bedrooms: 3,
        beds: 4,
        capacity: 6,
        unitType: "Apartamento",
        amenities: ["WiFi", "Televisor", "Cocina equipada", "Parqueadero", "Lavadora"],
        images: ["/images/apartamento1.jpg"],
        currency: "USD",

        // Nuevo campo multimedia
        mediaCatalogs: {
            Sala: [
                { type: "image", url: "/images/sala1.jpg" },
                { type: "image", url: "/images/sala2.jpg" },
                { type: "video", url: "/videos/sala-tour.mp4" },
            ],
            Cocina: [
                { type: "image", url: "/images/cocina1.jpg" },
                { type: "image", url: "/images/cocina2.jpg" },
            ],
            Habitaciones: [
                { type: "image", url: "/images/habitacion1.jpg" },
                { type: "video", url: "/videos/habitacion-tour.mp4" },
            ],
        },
    },
    {
        id: "2",
        title: "Casa de campo con vista a la montaña",
        description:
            "Acogedora casa de campo rodeada de naturaleza con una vista espectacular de las montañas.",
        location: "Medellín, Colombia",
        pricePerNight: 90,
        minimumStay: 3,
        bathrooms: 1,
        bedrooms: 2,
        beds: 3,
        capacity: 4,
        unitType: "Casa",
        amenities: ["Chimenea", "WiFi", "Jardín", "Zona BBQ"],
        images: ["/images/casa1.jpg"],
        currency: "USD",

        mediaCatalogs: {
            Exteriores: [
                { type: "image", url: "/images/jardin1.jpg" },
                { type: "video", url: "/videos/jardin-drone.mp4" },
            ],
            Sala: [
                { type: "image", url: "/images/casa-sala1.jpg" },
                { type: "image", url: "/images/casa-sala2.jpg" },
            ],
        },
    },
    {
        id: "3",
        title: "Estudio minimalista",
        description:
            "Un espacio pequeño pero muy funcional, ideal para viajeros que buscan comodidad y buen precio.",
        location: "Cartagena, Colombia",
        pricePerNight: 60,
        minimumStay: 1,
        bathrooms: 1,
        bedrooms: 1,
        beds: 1,
        capacity: 2,
        unitType: "Estudio",
        amenities: ["Aire acondicionado", "WiFi", "Cocina pequeña"],
        images: ["/images/estudio1.jpg"],
        currency: "USD",

        mediaCatalogs: {
            Estudio: [
                { type: "image", url: "/images/estudio-interior1.jpg" },
                { type: "image", url: "/images/estudio-interior2.jpg" },
            ],
        },
    },
];
