import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
  root: {
    display: "block",
    borderRadius: "32px",
  },
  toolbar: {
    width: "10%",
    display: "inline-flex",
    backgroundColor: theme.palette.secondary.dark,
    borderBottomLeftRadius: "30px",
    borderTopLeftRadius: "30px",
    [theme.breakpoints.up("sm")]: {
      width: "65%",
    },
  },
  iconButton: {
    marginRight: "20px",
    [theme.breakpoints.up("sm")]: {
      marginRight: "40px",
    },
    "& svg": {
      fill: theme.palette.common.white,
    },
    "&:hover": {
      "& svg": {
        fill: theme.palette.secondary.dark,
      },
    },
  },
  contact: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "90%",
    padding: "0 24px",
    [theme.breakpoints.up("sm")]: {
      width: "35%",
    },
  },
  contactPhone: {
    display: "flex",

    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  contactSocial: {
    display: "flex",
    alignItems: "center",
    "& > div": {
      [theme.breakpoints.up("sm")]: {
        margin: "0 6px",
      },
      margin: "0 12px",
    },
    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  contactItem: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    paddingLeft: "24px",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      textAlign: "unset",
    },
  },
}));