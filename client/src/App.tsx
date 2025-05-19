import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

import { ROUTES_CONFIG } from './routes.config';

import { AuthProvider } from './features/auth/AuthContext';

import { Layout } from './ui/layout/Layout';
import { LoginForm } from './features/auth/LoginForm';
import { ErrorPage } from './pages/ErrorPage';


const theme = createTheme({ cssVariables: true });

function App() {
    return (
        <AuthProvider>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path={ROUTES_CONFIG.HOME} element={<Layout />}>
                        <Route path={ROUTES_CONFIG.AUTH.LOGIN} element={<LoginForm />}></Route>
                        <Route path={ROUTES_CONFIG.AUTH.REGISTER} element={<LoginForm />}></Route>
                        <Route path='*' element={<ErrorPage />} />
                    </Route>
                </Routes>
            </ThemeProvider>
        </AuthProvider>
    )
}

export default App
