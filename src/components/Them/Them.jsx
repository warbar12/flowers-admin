import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultThem = createTheme({
    components: {
        MuiTextField: {
            defaultProps: {
                fullWidth: true,
                variant: 'outlined',
            },
        },
        MuiButton: {
            defaultProps: {
                variant: 'contained',
            },
        },
    },
});

const Them = ({ children }) => {
    return (
        <ThemeProvider theme={defaultThem}>
            {children}
        </ThemeProvider>
    );
};

export default Them;
