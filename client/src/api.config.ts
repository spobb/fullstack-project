export const API_CONFIG = {
    BASE_URL: import.meta.env.VITE_SERVER_URL || 'http://localhost:3000',
    API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3000/api',
} as const;