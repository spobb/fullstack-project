import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import { ROUTES_CONFIG } from '#routes/routes.config';

import { AuthProvider } from '#features/auth/AuthContext';
import { ProtectedRoute } from '#features/auth/ProtectedRoute';

import { Layout } from '#layout/Layout';
import { LoginForm } from '#features/auth/LoginForm';
import { RegisterForm } from '#features/auth/RegisterForm.tsx';
import { ErrorPage } from '#pages/ErrorPage';
import { ProfilePage } from '#pages/ProfilePage';
import { ContactsPage } from '#pages/ContactsPage.tsx';
import { ContactForm } from '#features/contact/ContactForm';

import { theme, darkTheme } from './theme';
import { HomePage } from '#pages/HomePage.tsx';
import { CssBaseline } from '@mui/material';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Routes>
                    <Route path={ROUTES_CONFIG.HOME} element={<Layout />}>
                        <Route path={ROUTES_CONFIG.HOME} element={<HomePage />}></Route>

                        <Route path={ROUTES_CONFIG.CONTACT.LIST} element={<ProtectedRoute><ContactsPage /></ProtectedRoute>}></Route>
                        <Route path={ROUTES_CONFIG.CONTACT.NEW} element={<ProtectedRoute><ContactForm /></ProtectedRoute>}></Route>
                        <Route path={ROUTES_CONFIG.CONTACT.ID.EDIT} element={<ProtectedRoute><ContactForm /></ProtectedRoute>}></Route>

                        <Route path={ROUTES_CONFIG.AUTH.LOGIN} element={<LoginForm />}></Route>
                        <Route path={ROUTES_CONFIG.AUTH.REGISTER} element={<RegisterForm />}></Route>
                        <Route path={ROUTES_CONFIG.PROFILE} element={<ProtectedRoute><ProfilePage /></ProtectedRoute>}></Route>
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App
