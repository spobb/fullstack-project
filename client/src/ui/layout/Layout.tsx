import { AppBar, Toolbar, Button, Link } from "@mui/material";
import { Outlet } from "react-router-dom";
import './Layout.css';
import { useAuth } from "../../features/auth/AuthContext";

export const Layout = () => {
    const { user, logout } = useAuth();

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
                    {!user && <Button color='inherit' href="/register">Sign up</Button>}
                    {!user && <Button color='inherit' href="/login">Login</Button>}
                    {user && <Button color='inherit' onClick={logout}>Log out</Button>}
                    {user && <Button color='inherit' href="/profile">Profile</Button>}
                </Toolbar>
            </AppBar >

            <main>
                <Outlet />
            </main>

            <footer>
                &copy; Guillaume {new Date().getFullYear()}
            </footer>
        </>
    )
}