import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "32px",
    minHeight: "60px",
    flexDirection: "unset"
  },
  toolbar: {
    width: "10%",
    display: "inline-flex",
    backgroundColor: theme.palette.secondary.dark,
    borderBottomLeftRadius: "20px",
    borderTopLeftRadius: "20px",
    [theme.breakpoints.up("sm")]: {
      borderBottomLeftRadius: "30px",
      borderTopLeftRadius: "30px",
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
    justifyContent: "center",
    width: "90%",
    padding: "0 24px",
    [theme.breakpoints.up("sm")]: {
      width: "35%",
    },
  },
  contactPhone: {
    display: "flex",
    alignItems: "center",
    paddingRight: '25px',
    [theme.breakpoints.up("md")]: {
      paddingRight: '50px',
    },
    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  contactEmail: {
    borderLeft: `2px solid ${theme.palette.common.white}`,
    paddingLeft: '25px',
    [theme.breakpoints.up("md")]: {
      paddingLeft: '50px',
    },
    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  phone: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "16px",
    paddingLeft: "6px",
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      textAlign: "unset",
      paddingLeft: "16px",
    },
  },
}));