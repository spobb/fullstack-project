import { AppBar, Toolbar, Button, Link } from "@mui/material";
import { Outlet } from "react-router-dom";
import './Layout.css';

export const Layout = () => {
    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Link
                        href="/"
                        variant="h4"
                        underline="none"
                        color="white"
                        sx={{ flexGrow: 1 }}>
                        ContactApp</Link>
                    <Button color='inherit' href="/register">Sign up</Button>
                    <Button color='inherit' href="/login">Login</Button>
                </Toolbar>
            </AppBar>

            <main>
                <Outlet />
            </main>

            <footer>
                &copy; Guillaume {new Date().getFullYear()}
            </footer>
        </>
    )
}