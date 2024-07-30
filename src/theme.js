import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
    h1: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '38px',
      fontFamily: 'Inter, Arial, sans-serif',
    },
    h2: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      fontFamily: 'Inter, Arial, sans-serif',
    },
    body1: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      fontFamily: 'Inter, Arial, sans-serif',
    },
    headline: {
      fontSize: '30px',
      fontWeight: 600,
      lineHeight: '38px',
      fontFamily: 'Inter, Arial, sans-serif',
    },
    semibold: {
      fontSize: '16px',
      fontWeight: 600,
      lineHeight: '24px',
      fontFamily: 'Inter, Arial, sans-serif',
    },
    normal: {
      fontSize: '14px',
      fontWeight: 400,
      lineHeight: '20px',
      fontFamily: 'Inter, Arial, sans-serif',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
