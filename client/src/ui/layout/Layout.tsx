import { AppBar, Toolbar, Button } from "@mui/material";
import { Outlet } from "react-router-dom";

import { useAuth } from "#features/auth/AuthContext";

import './Layout.css';

export const Layout = () => {
    const { user, logout } = useAuth();

    return (
        <>
            <AppBar position="fixed" color="transparent" sx={{ boxShadow: 'none' }}>
                <Toolbar>
                    <Button
                        color='inherit'
                        href='/'
                        size='large'
                        sx={{ marginRight: 'auto', fontSize: '2rem', textTransform: 'none' }}>
                        Contact.
                    </Button>
                    <span className="divider"></span>
                    <Button color='inherit' href="/contacts">Contacts</Button>
                    <span className="divider"></span>
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