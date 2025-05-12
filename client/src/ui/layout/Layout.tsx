import { AppBar, Toolbar, Typography, Button } from "@mui/material"
import './Layout.css';

export const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <>
        <AppBar>
            <Toolbar>
                <Typography variant='h6' component='div' sx={{flexGrow: 1}}>ContactApp</Typography>
                <Button color='inherit'>Login</Button>
            </Toolbar>
        </AppBar>

        <main>
            {children}
        </main>

        <footer>
            &copy; Spobb {new Date().getFullYear()}
        </footer>
        </>
    )
}