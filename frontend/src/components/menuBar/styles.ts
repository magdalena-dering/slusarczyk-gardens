import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
  root: {
    borderRadius: "32px",
    minHeight: "60px",
    flexDirection: "unset",
    backgroundColor: theme.palette.primary.main,
  },
  toolbar: {
    width: "10%",
    display: "inline-flex",
    backgroundColor: theme.palette.secondary.main,
    borderBottomLeftRadius: "30px",
    borderTopLeftRadius: "30px",
    [theme.breakpoints.up("sm")]: {
      width: "65%",
    },
    [theme.breakpoints.up("md")]: {
      padding: `0 ${theme.spacing(4)}`,
    },
  },
  iconButton: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(5),
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
    padding: `0 ${theme.spacing(4)}`,
    [theme.breakpoints.up("sm")]: {
      width: "35%",
    },
  },
  contactPhone: {
    display: "flex",
    alignItems: "center",
    paddingRight: theme.spacing(4),
    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  link: {
    textDecoration: 'unset',
  },
  contactEmail: {
    display: "flex",
    alignItems: "center",
    cursor: 'pointer',
    borderLeft: `2px solid ${theme.palette.common.white}`,
    paddingLeft: theme.spacing(4),
    "& svg": {
      fill: theme.palette.common.white,
    },
  },
  text: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    fontSize: "16px",
    paddingLeft: theme.spacing(2),
    textAlign: "center",
    [theme.breakpoints.up("md")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  paper: {
    "& div": {
      width: '100%',
    }
  },
}));