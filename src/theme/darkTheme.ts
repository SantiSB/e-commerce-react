import { createTheme } from "@mui/material";
import '@fontsource-variable/raleway';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#4caf50',
            light: '#81c784',
            dark: '#388e3c',
            contrastText: '#fff',
        },
        secondary: {
            main: '#ff9800',
            light: '#ffc947',
            dark: '#c66900',
            contrastText: '#000',
        },
        error: {
            main: '#f44336',
            light: '#e57373',
            dark: '#d32f2f',
            contrastText: '#fff',
        },
        warning: {
            main: '#ffa726',
            light: '#ffb74d',
            dark: '#f57c00',
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
            default: '#121212',
            paper: '#1e1e1e',
        },
        text: {
            primary: '#fff',
            secondary: '#b9b9b9',
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
