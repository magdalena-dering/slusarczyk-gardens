import React from "react"
import { ThemeProvider } from "@mui/material"
import theme from "./theme"
import AppRouter from "./router"

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  )
}

export default App
