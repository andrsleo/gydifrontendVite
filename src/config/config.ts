// src/config/config.ts

/**
 * Configuración centralizada de variables de entorno
 * para asegurar consistencia, mantenibilidad y escalabilidad
 */
export const config = {
    appName: import.meta.env.VITE_APP_NAME ?? "MyPropertiesApp",

    api: {
        baseUrl:
            import.meta.env.VITE_API_BASE_URL ??
            "http://localhost:8080", // fallback seguro
        version: import.meta.env.VITE_API_VERSION ?? "v1",
    },

    logs: {
        level: import.meta.env.VITE_LOG_LEVEL ?? "info",
    },
} as const;
