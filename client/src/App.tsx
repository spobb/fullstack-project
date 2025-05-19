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

import { theme } from './theme';
import { HomePage } from '#pages/HomePage.tsx';

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path={ROUTES_CONFIG.HOME} element={<Layout />}>
                        <Route path={ROUTES_CONFIG.HOME} element={<HomePage />}></Route>

                        <Route path={ROUTES_CONFIG.CONTACT.LIST} element={<ContactsPage />}></Route>


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
