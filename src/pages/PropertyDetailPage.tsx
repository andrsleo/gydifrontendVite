// src/pages/PropertyDetailPage.tsx
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPropertyById, Property } from "@/services/propertyService";
import PublicLayout from "@/components/ui/PublicLayout";

export default function PropertyDetailPage() {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [property, setProperty] = useState<Property | null>(null);
    const [loading, setLoading] = useState(true);

    // Estado para el visualizador
    const [isViewerOpen, setIsViewerOpen] = useState(false);
    const [viewerMedia, setViewerMedia] = useState<{ type: "image" | "video"; url: string }[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!id) return;
        let mounted = true;
        (async () => {
            setLoading(true);
            const data = await getPropertyById(id);
            if (!mounted) return;
            setProperty(data ?? null);
            setLoading(false);
        })();
        return () => {
            mounted = false;
        };
    }, [id]);

    const openViewer = (media: { type: "image" | "video"; url: string }[], index: number) => {
        setViewerMedia(media);
        setCurrentIndex(index);
        setIsViewerOpen(true);
    };

    const closeViewer = () => {
        setIsViewerOpen(false);
        setViewerMedia([]);
        setCurrentIndex(0);
    };

    const showPrev = () => {
        setCurrentIndex((prev) => (prev === 0 ? viewerMedia.length - 1 : prev - 1));
    };

    const showNext = () => {
        setCurrentIndex((prev) => (prev === viewerMedia.length - 1 ? 0 : prev + 1));
    };

    if (loading) {
        return (
            <PublicLayout>
                <p className="text-gray-600">Cargando propiedad...</p>
            </PublicLayout>
        );
    }

    if (!property) {
        return (
            <PublicLayout>
                <div className="max-w-3xl">
                    <p className="text-red-600">❌ Propiedad no encontrada</p>
                    <button
                        onClick={() => navigate("/catalog")}
                        className="mt-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
                    >
                        ← Volver al catálogo
                    </button>
                </div>
            </PublicLayout>
        );
    }

    return (
        <PublicLayout>
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg overflow-hidden">
                {/* Botón arriba */}
                <div className="p-4">
                    <button
                        onClick={() => navigate("/catalog")}
                        className="px-4 py-2 rounded-md bg-gray-50 border hover:bg-gray-100"
                    >
                        ← Volver al catálogo
                    </button>
                </div>

                {/* Imagen principal */}
                <div className="w-full h-72 bg-gray-200">
                    <img
                        src={property.images?.[0] ?? ""}
                        alt={property.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-8">
                    {/* Header */}
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h1 className="text-4xl font-bold leading-tight text-gray-900">
                                {property.title}
                            </h1>
                            <p className="text-gray-600 mt-2">{property.location}</p>
                        </div>

                        <div className="text-right">
                            <div className="text-lg text-gray-600">
                                Min. stay: {property.minimumStay} nights
                            </div>
                            <div className="text-2xl font-bold text-indigo-600 mt-2">
                                ${property.pricePerNight} / night
                            </div>
                        </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6">{property.description}</p>

                    {/* Grid info */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <InfoCard label="Bathrooms" value={property.bathrooms} />
                        <InfoCard label="Bedrooms" value={property.bedrooms} />
                        <InfoCard label="Beds" value={property.beds} />
                        <InfoCard label="Capacity" value={`${property.capacity} guests`} />
                        <InfoCard label="Unit type" value={property.unitType} />
                        <InfoCard label="Location" value={property.location} />
                    </div>

                    {/* Amenities */}
                    <div className="mb-10">
                        <h2 className="text-xl font-semibold mb-4">Amenities</h2>
                        <div className="flex flex-wrap gap-2">
                            {property.amenities.map((a, i) => (
                                <span
                                    key={i}
                                    className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800 shadow-sm"
                                >
                                    {a}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Media Catalogs */}
                    {property.mediaCatalogs && (
                        <div className="mt-10">
                            <h2 className="text-2xl font-bold mb-6">Fotos y Videos</h2>
                            {Object.entries(property.mediaCatalogs).map(([category, media]) => (
                                <div key={category} className="mb-8">
                                    <h3 className="text-lg font-semibold mb-3">{category}</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                                        {media.map((item, index) => (
                                            <div
                                                key={index}
                                                className="rounded-lg overflow-hidden shadow-md cursor-pointer"
                                                onClick={() => openViewer(media, index)}
                                            >
                                                {item.type === "image" ? (
                                                    <img
                                                        src={item.url}
                                                        alt={`${category}-${index}`}
                                                        className="w-full h-48 object-cover hover:scale-105 transition-transform"
                                                    />
                                                ) : (
                                                    <video
                                                        className="w-full h-48 object-cover bg-black"
                                                        muted
                                                    >
                                                        <source src={item.url} type="video/mp4" />
                                                    </video>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            {/* Visualizador a pantalla completa */}
            {isViewerOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50">
                    {/* Botón cerrar */}
                    <button
                        onClick={closeViewer}
                        className="absolute top-4 right-6 text-white text-3xl font-bold"
                    >
                        ✕
                    </button>

                    {/* Botón previo */}
                    <button
                        onClick={showPrev}
                        className="absolute left-4 text-white text-5xl font-bold px-3 py-2"
                    >
                        ‹
                    </button>

                    {/* Botón siguiente */}
                    <button
                        onClick={showNext}
                        className="absolute right-4 text-white text-5xl font-bold px-3 py-2"
                    >
                        ›
                    </button>

                    {/* Contenido más grande */}
                    <div className="max-w-7xl w-full flex justify-center items-center px-4">
                        {viewerMedia[currentIndex].type === "image" ? (
                            <img
                                src={viewerMedia[currentIndex].url}
                                alt="media-viewer"
                                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                            />
                        ) : (
                            <video
                                src={viewerMedia[currentIndex].url}
                                controls
                                autoPlay
                                className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
                            />
                        )}
                    </div>
                </div>
            )}
        </PublicLayout>
    );
}

function InfoCard({ label, value }: { label: string; value: React.ReactNode }) {
    return (
        <div className="p-4 bg-gray-50 rounded-xl shadow-sm">
            <div className="text-sm text-gray-500 mb-1">{label}</div>
            <div className="text-lg font-semibold text-gray-900">{value}</div>
        </div>
    );
}
