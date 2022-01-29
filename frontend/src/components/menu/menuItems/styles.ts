import { makeStyles } from '@mui/styles';
import theme from '../../../theme';

export const useStyles = makeStyles(() => ({
  menu: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "600px",
    width: "100%",
  },
  menuItem: {
    color: theme.palette.common.white,
    fontWeight: "bold",
    textDecoration: "none",
    textTransform: "capitalize",
    "&:hover": {
      color: theme.palette.primary.main,
    },
  },
  active: {
    textDecoration: "underline",
  },
}));