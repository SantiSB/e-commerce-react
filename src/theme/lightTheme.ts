import { createTheme } from "@mui/material";
// Supports weights 100-900
import '@fontsource-variable/raleway';

const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#4C239F',
            light: '#7C52CC',
            dark: '#311B6C',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFB74D',
            light: '#FFCC80',
            dark: '#F57C00',
            contrastText: '#000',
        },
        error: {
            main: '#e53935',
            light: '#ef5350',
            dark: '#b71c1c',
            contrastText: '#fff',
        },
        warning: {
            main: '#fdd835',
            light: '#ffeb3b',
            dark: '#c6a700',
            contrastText: '#000',
        },
        info: {
            main: '#29b6f6',
            light: '#4fc3f7',
            dark: '#0288d1',
            contrastText: '#fff',
        },
        success: {
            main: '#66bb6a',
            light: '#81c784',
            dark: '#388e3c',
            contrastText: '#fff',
        },
        background: {
            default: '#f5f5f5',
            paper: '#ffffff',
        },
        text: {
            primary: '#4C239F',
            secondary: '#FFB74D',
            disabled: '#9e9e9e',
        },
        common: {
            black: '#000',
            white: '#fff',
        },
    },
    typography: {
        fontFamily: [
            'Raleway Variable',
            'Roboto',
            'sans-serif',
        ].join(','),
    }
})

export default lightTheme;
