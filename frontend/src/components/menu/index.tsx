import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IMenu } from "./menu.model";
import SvgIcon from "../svg";
import MenuItems from "./menuItems";
import { icons } from "../../types";
import { useStyles } from "./styles";


const Menu: React.FC<IMenu> = () => {
  const classes = useStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <AppBar className={classes.root} position="static" sx={{ flexDirection: "unset" }}>
      <Toolbar className={classes.toolbar}>
        {isMobile ? (
          <IconButton className={classes.iconButton}>
            <SvgIcon icon={<icons.burger />} />
          </IconButton>
        ) : (
          <MenuItems />
        )}
      </Toolbar>
      <div className={classes.contact}>
        <div className={classes.contactPhone}>
          <SvgIcon icon={<icons.phone />} width="28px" height="28px" />
          <Typography className={classes.contactItem} fontWeight="bold" fontSize="16px">796 793 513</Typography>
        </div>
        <div className={classes.contactSocial}>
          <SvgIcon icon={<icons.facebook />} width="28px" height="28px" />
          <SvgIcon icon={<icons.instagram />} width="28px" height="28px" />
          <SvgIcon icon={<icons.linkedin />} width="28px" height="28px" />
        </div>
      </div>
    </AppBar>
  );
};

export default Menu;
