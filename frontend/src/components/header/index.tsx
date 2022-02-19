import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { IMenuItems } from "./menu.model";
import SvgIcon from "../svg";
import MenuItems from "../menuItems";
import { icons } from "../../types";
import { useStyles } from "./styles";
import MenuMobile from "../menuMobile";
import { Link } from "react-router-dom";


const Header: React.FC<IMenuItems> = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <IconButton className={classes.iconButton} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}>
              <SvgIcon icon={<icons.burger />} />
            </IconButton>
          ) : (
            <MenuItems mobile={false} />
          )}
        </Toolbar>
        <div className={classes.contact}>
          <div className={classes.contactPhone}>
            <IconButton>
              <SvgIcon icon={<icons.phone />} width="28px" height="28px" />
            </IconButton>
            <Typography className={classes.phone} >796 793 513</Typography>
          </div>
          <div className={classes.contactEmail}>
            <IconButton component={Link} to="/kontakt">
              <SvgIcon icon={<icons.mail />} width="28px" height="28px" />
            </IconButton>
          </div>
        </div>
      </AppBar>
      {isMobile && (
        <MenuMobile anchorEl={anchorEl} open={open} handleClose={handleClose} />
      )}
    </>
  );
};

export default Header;
