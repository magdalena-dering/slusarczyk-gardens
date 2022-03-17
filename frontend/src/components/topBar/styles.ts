import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center"
    },
  },
  logo: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginLeft: theme.spacing(4),
    },
  },
  wrapper: {
    display: 'flex',
    alignItems: 'center',
  },
  address: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(6),
    },
  },
  hours: {
    marginRight: theme.spacing(3),
    marginLeft: theme.spacing(2),
    [theme.breakpoints.up("md")]: {
      marginRight: theme.spacing(4),
    },
  },
}));