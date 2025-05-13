import { Layout } from './ui/layout/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { LoginForm } from './features/auth/LoginForm';

const theme = createTheme({ cssVariables: true });

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout>
                    <LoginForm />
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default App
