import { createTheme } from "@mui/material"

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
      black: "#000000",
      white: "#ffffff",
    },
    primary: {
      main: "#12bc66",
      dark: "#333",
    },
    secondary: {
      main: "#ffffff",
    },
    text: {
      primary: "#000000",
    },
    background: {
      default: "#F5F6F7",
    },
    error: {
      main: "#d32f2f",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  // overrides: {
  //   MuiButton: {
  //     root: {
  //       borderRadius: "50px",
  //     },
  //     textSizeSmall: {
  //       padding: "6px 12px",
  //     },
  //   },
  //   MuiButtonBase: {
  //     root: {
  //       borderRadius: "50px",
  //       boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
  //       padding: "12px 14px",
  //     },
  //   },
  //   MuiPaper: {
  //     rounded: {
  //       borderRadius: "15px",
  //     },
  //     elevation1: {
  //       boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.1)",
  //     },
  //   },
  //   MuiTextField: {
  //     root: {
  //       padding: "0 16px",
  //       "& > *": {
  //         padding: "0 16px",
  //       },
  //     },
  //   },
  //   MuiFormHelperText: {
  //     root: {
  //       padding: 0,
  //     },
  //   },
  //   MuiTableContainer: {
  //     root: {
  //       width: "auto",
  //     },
  //   },
  // },
})

export default theme
