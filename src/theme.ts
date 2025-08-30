import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#000000',
            light: '#333333',
            dark: '#000000',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#D4AF37',
            light: '#E5C158',
            dark: '#B8941F',
            contrastText: '#000000',
        },
        background: {
            default: '#ffffff',
            paper: '#fafafa',
        },
        text: {
            primary: '#000000',
            secondary: '#666666',
        },
    },
    typography: {
        fontFamily: '"Playfair Display", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 700,
            fontSize: '3.5rem',
        },
        h2: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            fontSize: '2.5rem',
        },
        h3: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 600,
            fontSize: '2rem',
        },
        h4: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: '1.5rem',
        },
        h5: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: '1.25rem',
        },
        h6: {
            fontFamily: '"Playfair Display", serif',
            fontWeight: 500,
            fontSize: '1rem',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 0,
                    textTransform: 'none',
                    fontWeight: 500,
                    padding: '12px 24px',
                },
                contained: {
                    boxShadow: 'none',
                    '&:hover': {
                        boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 8,
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 8px 25px rgba(0,0,0,0.15)',
                    },
                },
            },
        },
    },
});
