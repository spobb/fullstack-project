export const ROUTES_CONFIG = {
    'HOME': '/',
    'PROFILE': '/profile',
    'AUTH': {
        'LOGIN': '/login',
        'REGISTER': '/register'
    },
    'CONTACT': {
        'LIST': '/contacts',
        'NEW': '/contacts/new',
        'ID': {
            'EDIT': '/contacts/:id/edit',
        }
    },
} as const;