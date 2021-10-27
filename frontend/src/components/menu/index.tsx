import * as React from "react"
import { NavLink } from "react-router-dom"
import { Box, AppBar, Toolbar, Typography } from "@mui/material"
import useFetch from "../../hooks/useFetch"
import { IMenu } from "./menu.model"

const Menu: React.FC<IMenu> = () => {
  const [responses] = useFetch<IMenu>("http://localhost:1337/menus")
  return (
    <Box>
      <AppBar>
        <Toolbar>
          {responses?.map(menuItem => {
            const { id, home, about, projects, contact } = menuItem
            return (
              <div key={id}>
                <NavLink to="/">
                  <Typography>{home}</Typography>
                </NavLink>
                <NavLink to={`/${about}`}>
                  <Typography>{about}</Typography>
                </NavLink>
                <NavLink to={`/${projects}`}>
                  <Typography>{projects}</Typography>
                </NavLink>
                <NavLink to={`/${contact}`}>
                  <Typography>{contact}</Typography>
                </NavLink>
              </div>
            )
          })}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Menu
