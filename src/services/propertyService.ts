// src/services/propertyService.ts

import type { Property } from "@/interfaces/Property";
import { mockProperties } from "@/mocks/properties";
import { config } from "@/config/config";
import type { PaginatedResponse } from "../interfaces/PaginatedResponse";

/**
 * Función genérica para hacer fetch a la API con configuración centralizada
 */
async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const baseUrl = config.api.baseUrl;

    if (!baseUrl) {
        console.warn("⚠️ API base URL no configurada, devolviendo mocks...");
        throw new Error("API_BASE_URL not set");
    }

    try {
        const response = await fetch(`${baseUrl}/${endpoint}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            ...options,
        });

        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API error: ${response.status} - ${errorText}`);
        }

        return (await response.json()) as T;
    } catch (err) {
        console.error(`❌ Error en apiFetch (${endpoint}):`, err);
        throw err;
    }
}

/**
 * Obtiene todas las propiedades con paginación.
 * @param page Número de página (default: 0)
 * @param size Tamaño de página (default: 20)
 */
export async function getAllProperties(page = 0, size = 20): Promise<Property[]> {
    try {
        const res = await apiFetch<PaginatedResponse<Property>>(
            `api/v1/properties?page=${page}&size=${size}`
        );
        return res.content;

    } catch {
        console.warn("⚠️ Usando mocks en getAllProperties()");
        return mockProperties;
    }
}

/**
 * Obtiene una propiedad por ID
 * @param id UUID de la propiedad
 */
export async function getPropertyById(id: string): Promise<Property | undefined> {
    try {
        return await apiFetch<Property>(`properties/${id}`);
    } catch {
        console.warn(`⚠️ Usando mock en getPropertyById(${id})`);
        return mockProperties.find((p) => p.id === id);
    }
}
