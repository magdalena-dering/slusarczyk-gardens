import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItems from '../menuItems';
import { useStyles } from './styles';
import { IconButton } from '@mui/material';
import SvgIcon from '../svg';
import { icons } from '../../types';

export interface IMenuMobile {
    anchorEl?: HTMLElement | null
    open: boolean;
    handleClose: any;
}

const MenuMobile = ({ anchorEl, open, handleClose }: IMenuMobile) => {
    const classes = useStyles();

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
                <SvgIcon icon={<icons.close />}
                />
            </IconButton>
            <MenuItems mobile />
        </Menu>
    );
}

export default MenuMobile