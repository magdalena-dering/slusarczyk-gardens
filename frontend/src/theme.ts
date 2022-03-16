import { createTheme } from '@mui/material/styles';

const fontWeight = {
  regular: 400,
}

const theme = createTheme({
  typography: {
    fontFamily: ["Maven Pro", "sans-serif"].join(","),
    body1: {
      fontSize: 14,
      fontWeight: fontWeight.regular,
      lineHeight: 1.5,
      letterSpacing: 0,
    },
  },
  palette: {
    common: {
      black: "#000",
      white: "#fff"
    },
    primary: {
      light: '#5c5c5c',
      main: '#333333',
      dark: '#0c0c0c',
      contrastText: '#fff',
    },
    secondary: {
      light: '#3ee743',
      main: "#18c31d",
      dark: '#129216',
      contrastText: '#fff',
    },
  },
  spacing: [4, 8, 12, 20, 32, 52, 84],
  breakpoints: {
    values: {
      xs: 400,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: '16px',
          borderRadius: '30px',
          textTransform: 'capitalize',
        },
      },
    },
  },
})

export default theme
