import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";
import { MenuItem } from "@mui/material";
import { IMenuItems } from "../header/menu.model";
import { MenuContext } from "../../context/menu";

const MenuItems: React.FC<IMenuItems> = (mobile) => {
  const classes = useStyles(mobile);
  const { menu } = useContext(MenuContext);

  return (
    <>
      {menu?.map((menuItems) => {
        const { id, home, about, projects, contact } = menuItems;
        return (
          <div key={id} className={classes.menu}>
            <MenuItem className={classes.menuItem} to="/" component={NavLink} sx={{
              fontWeight: "bold",
              fontSize: "16px",
            }}>
              {home}
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              activeClassName={classes.active}
              to={`/${about}`}
              component={NavLink}
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}

            >
              {about}
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              activeClassName={classes.active}
              to={`/${projects}`}
              component={NavLink}
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {projects}
            </MenuItem>
            <MenuItem
              className={classes.menuItem}
              activeClassName={classes.active}
              to={`/${contact}`}
              component={NavLink}
              sx={{
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              {contact}
            </MenuItem>
          </div>
        );
      })}
    </>
  );
};

export default MenuItems;
