import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  useMediaQuery,
  Dialog,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SvgIcon from "../svg";
import MenuItems from "../menuItems";
import { icons } from "../../types";
import { useStyles } from "./styles";
import MenuMobile from "../menuMobile";
import Form from "../form";

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [displayForm, setDisplayForm] = useState<boolean>(false);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleContactFormOpen = () => {
    setDisplayForm(true)
  };
  const handleContactFormClose = () => {
    setDisplayForm(false)
  };

  const classes = useStyles();
  const theme = useTheme();
  const isXsMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <AppBar className={classes.root} position="static">
        <Toolbar className={classes.toolbar}>
          {isMobile ? (
            <IconButton className={classes.iconButton} aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleMenuOpen}>
              <SvgIcon icon={<icons.burger />} color="red" />
            </IconButton>
          ) : (
            <MenuItems mobile={false} />
          )}
        </Toolbar>
        <div className={classes.contact}>
          <a className={classes.link} href="tel:0048 796 793 513">
            <div className={classes.contactPhone}>
              <IconButton>
                <SvgIcon icon={<icons.phone />} width="28px" height="28px" />
              </IconButton>
              <Typography className={classes.text} >796 793 513</Typography>
            </div>
          </a>
          <div className={classes.contactEmail} onClick={handleContactFormOpen}>
            <IconButton >
              <SvgIcon icon={<icons.mail />} width="28px" height="28px" />
            </IconButton>
            {!isXsMobile && (<Typography className={classes.text} >Napisz do nas</Typography>)}
          </div>
        </div>
      </AppBar>
      {isMobile && (
        <MenuMobile anchorEl={anchorEl} open={open} handleClose={handleMenuClose} />
      )}
      <Dialog open={displayForm} onClose={handleContactFormClose} className={classes.paper} >
        <Form displayForm={displayForm} onClose={handleContactFormClose} />
      </Dialog>
    </>
  );
};

export default Header;
