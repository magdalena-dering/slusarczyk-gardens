import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import AppRouter from "./router";
import { MenuContext } from "./context/menu";
import useFetch from "./hooks/useFetch";
import { IMenu } from "./components/menu/menu.model";
const App = () => {
  const [responses] = useFetch<IMenu>("http://localhost:1337/menus");
  const [menu, setMenu] = useState<IMenu[]>([]);

  useEffect(() => {
    if (responses) {
      setMenu(responses);
    }
  }, [responses]);
  return (
    <ThemeProvider theme={theme}>
      <MenuContext.Provider value={{ menu }}>
        <AppRouter />
      </MenuContext.Provider>
    </ThemeProvider>
  );
};

export default App;
