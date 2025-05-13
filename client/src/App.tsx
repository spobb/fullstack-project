import { Layout } from './ui/layout/Layout';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({ cssVariables: true });

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Layout>
                    <h1>Welcome!</h1>
                </Layout>
            </ThemeProvider>
        </>
    )
}

export default App
