import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export const useStyles = makeStyles(() => ({
    form: {
        backgroundColor: theme.palette.common.white,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(4),
    },
    buttonClose: {
        position: 'absolute',
        top: 0,
        right: 0,
        margin: theme.spacing(2),
    },
}))