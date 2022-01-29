import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";
import { Typography } from "@mui/material";
import { IMenu } from "../menu.model";
import { MenuContext } from "../../../context/menu";

const MenuItems: React.FC<IMenu> = () => {
  const classes = useStyles();
  const { menu } = useContext(MenuContext);

  return (
    <>
      {menu?.map((menuItems) => {
        const { id, home, about, projects, contact } = menuItems;
        return (
          <div key={id} className={classes.menu}>
            <Typography className={classes.menuItem} to="/" component={NavLink} fontWeight="bold">
              {home}
            </Typography>
            <Typography
              className={classes.menuItem}
              activeClassName={classes.active}
              to={`/${about}`}
              component={NavLink}
              fontWeight="bold"
            >
              {about}
            </Typography>
            <Typography
              className={classes.menuItem}
              activeClassName={classes.active}
              to={`/${projects}`}
              component={NavLink}
              fontWeight="bold"
            >
              {projects}
            </Typography>
            <Typography
              className={classes.menuItem}
              activeClassName={classes.active}
              to={`/${contact}`}
              component={NavLink}
              fontWeight="bold"
            >
              {contact}
            </Typography>
          </div>
        );
      })}
    </>
  );
};

export default MenuItems;
