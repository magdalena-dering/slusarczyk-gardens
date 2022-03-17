import * as React from 'react';
import MenuItems from '../menuItems';
import { useStyles } from './styles';
import { IconButton, Menu, useTheme } from '@mui/material';
import SvgIcon from '../svg';
import { icons } from '../../types';

export interface IMobileDialog {
    anchorEl?: HTMLElement | null
    open: boolean;
    handleClose: any;
}

const MobileDialog = ({ anchorEl, open, handleClose }: IMobileDialog) => {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
            classes={{ paper: classes.paper }}
        >
            <IconButton
                className={classes.iconButton} aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClose}>
                <SvgIcon icon={<icons.close />} color={theme.palette.primary.dark}
                />
            </IconButton>
            <MenuItems mobile />
        </Menu>
    );
}

export default MobileDialog