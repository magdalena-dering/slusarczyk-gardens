import React, { useEffect, useState } from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "./theme";
import AppRouter from "./router";
import { MenuContext } from "./context/menu";
import useFetch from "./hooks/useFetch";
import { IMenuItems } from "./components/header/menu.model";
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';

const App = () => {
  const [responses] = useFetch<IMenuItems>("http://localhost:1337/menus");
  const [menu, setMenu] = useState<IMenuItems[]>([]);

  const cache = createCache({
    key: 'css',
    prepend: true,
  });

  useEffect(() => {
    if (responses) {
      setMenu(responses);
    }
  }, [responses]);


  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        <MenuContext.Provider value={{ menu }}>
          <AppRouter />
        </MenuContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
