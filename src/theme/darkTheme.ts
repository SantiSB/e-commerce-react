import { createTheme } from "@mui/material";
import '@fontsource-variable/raleway';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#9C79E6',
            light: '#BFA8F0',
            dark: '#6D48C9',
            contrastText: '#fff',
        },
        secondary: {
            main: '#FFD54F',
            light: '#FFE082',
            dark: '#FFA000',
            contrastText: '#000',
        },
        error: {
            main: '#EF5350',
            light: '#E57373',
            dark: '#C62828',
            contrastText: '#fff',
        },
        warning: {
            main: '#FFCA28',
            light: '#FFD54F',
            dark: '#FFA000',
            contrastText: '#000',
        },
        info: {
            main: '#29B6F6',
            light: '#4FC3F7',
            dark: '#0288D1',
            contrastText: '#fff',
        },
        success: {
            main: '#66BB6A',
            light: '#81C784',
            dark: '#388E3C',
            contrastText: '#fff',
        },
        background: {
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#EDE7F6',
            secondary: '#B9B9B9',
            disabled: '#666',
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

export default darkTheme;
