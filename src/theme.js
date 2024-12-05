// src/theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4B0082',  // Dark Purple
    },
    secondary: {
      main: '#8874A3',  // Intermediate Purple
    },
    background: {
      default: '#E6E6FA',  // Lavender background
    },
    text: {
      primary: '#E6E6FA',  // Light text for dark background
      secondary: '#8874A3',
    },
  },
  typography: {
    fontFamily: [
      'Roboto', 'Helvetica', 'Arial', 'sans-serif',
    ].join(','),
  },
});

export default theme;
