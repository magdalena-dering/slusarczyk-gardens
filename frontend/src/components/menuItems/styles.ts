import { makeStyles } from '@mui/styles';
import theme from '../../theme';
import { IMenuItems } from '../header/menu.model';

export const useStyles = makeStyles(() => ({
  menu: ({ mobile }: IMenuItems) => ({
    display: mobile ? "block" : "flex",
    justifyContent: mobile ? "unset" : "space-between",
    maxWidth: mobile ? "unset" : "680px",
    width: "100%",
  }),
  menuItem: ({ mobile }: IMenuItems) => ({
    color: mobile ? theme.palette.common.black : theme.palette.common.white,
    fontWeight: "bold",
    height: "60px",
    justifyContent: mobile ? "center !important" : "unset",
    textTransform: "capitalize",
    padding: 0,
    "&:hover": {
      backgroundColor: "unset !important"
    },
  }),
  active: {
    borderBottom: `2px solid ${theme.palette.common.white} !important`,
    height: '100px',
  },
}));