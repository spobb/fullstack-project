import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#242424',
            contrastText: '#fff'
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#242424',
            contrastText: '#fff'
        },
        text: {
            primary: '#fff',
            secondary: '#fff',
            disabled: '#fff',
        },
        background: {
            default: '#242424'
        },
    },
    components: {
        MuiButtonBase: {
            defaultProps: {
                disableRipple: true,
            },
        },
        MuiTypography: {
            styleOverrides: {
                root: {
                    color: '#fff !important'
                }
            },
            defaultProps: {
                color: 'text.primary'
            }
        }
    }
})