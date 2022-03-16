import { IMenuItems } from './menuItems.model';
import { makeStyles } from '@mui/styles';
import theme from '../../theme';

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
    fontSize: "16px",
    height: "60px",
    justifyContent: mobile ? "center" : "unset",
    textTransform: "capitalize",
    padding: 0,
    "&:hover": {
      backgroundColor: "unset"
    },
  }),
  active: {
    borderBottom: `2px solid ${theme.palette.common.white}`,
    height: '100px',
  },
}));