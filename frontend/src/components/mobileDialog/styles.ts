import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    paper: {
        width: '100%',
        top: '0 !important',
        left: '0 !important',
        borderRadius: 'unset',
        padding: '16px',
    },
    iconButton: {
        position: 'absolute',
        top: '0',
        right: '0',
        zIndex: 1,
    }
}));