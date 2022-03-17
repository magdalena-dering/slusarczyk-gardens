import { Stack, Typography, useMediaQuery, useTheme } from '@mui/material';

import React from 'react';
import { icons } from '../../types';
import SvgIcon from '../svg';
import { useStyles } from './styles';

const TopBar = () => {
    const theme = useTheme();
    const classes = useStyles();
    const isXsMobile = useMediaQuery(theme.breakpoints.down("xs"));

    return (
        <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            sx={{ marginY: theme.spacing(2) }}
            className={classes.root}
        >
            <div className={classes.logo}>
                <SvgIcon icon={<icons.logo />} width="65px" height="65px" color={theme.palette.primary.main} />
            </div>
            {!isXsMobile &&
                (<div className={classes.wrapper}>
                    <SvgIcon icon={<icons.location />} width="32px" height="32px" color={theme.palette.secondary.main} />
                    <div className={classes.address}>
                        <Typography fontWeight="bold" fontSize="16px" color={theme.palette.primary.main}>Adres:</Typography>
                        <Typography>63 Ave, Brooklyn, NY</Typography>
                    </div>
                    <SvgIcon icon={<icons.clock />} width="32px" height="32px" color={theme.palette.secondary.main} />
                    <div className={classes.hours}>
                        <Typography fontWeight="bold" fontSize="16px" color={theme.palette.primary.main}>Godziny pracy:</Typography>
                        <Typography>Pn. - Pt. 8 - 16</Typography>
                    </div>
                </div>)
            }
        </Stack>
    )
}
export default TopBar;