import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
    socialIcons: {
        display: "flex",
        alignItems: "center",
        "& > div": {
            [theme.breakpoints.up("sm")]: {
                margin: "0 6px",
            },
            margin: "0 6px",
        },
        "& svg": {
            fill: theme.palette.common.white,
        },
    },
}));