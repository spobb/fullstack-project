export const fetchService = async (url: string, method: string = 'GET', body: unknown = null, token: string | null = null) => {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${url}`, {
        method,
        body: ['PUT', 'PATCH', 'POST'].includes(method) ? JSON.stringify(body) : undefined,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
    });

    return await response.json();
}