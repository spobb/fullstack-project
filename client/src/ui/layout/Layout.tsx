import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import './Layout.css';

export const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant='h4' sx={{ flexGrow: 1 }}>ContactApp</Typography>
                    <Button color='inherit'>Sign up</Button>
                    <Button color='inherit'>Login</Button>
                </Toolbar>
            </AppBar>

            <main>
                {children}
            </main>

            <footer>
                &copy; Guillaume {new Date().getFullYear()}
            </footer>
        </>
    )
}