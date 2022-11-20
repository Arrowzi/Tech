import React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CalculateIcon from '@mui/icons-material/Calculate';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import ContentPasteIcon from '@mui/icons-material/ContentPaste';
import CropOriginalIcon from '@mui/icons-material/CropOriginal';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import CameraswitchIcon from '@mui/icons-material/Cameraswitch';
import { Link } from 'react-router-dom';

export const Sidebar = (
    <React.Fragment>
            <ListSubheader component="div" inset>
                Меню
        </ListSubheader>
        <ListItemButton component={Link} to="/">
            <ListItemIcon>
                <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="О себе" />
        </ListItemButton>
        <ListItemButton component={Link} to="/calculator">
            <ListItemIcon>
                <CalculateIcon />
            </ListItemIcon>
            <ListItemText primary="Калькулятор" />
        </ListItemButton>
        <ListItemButton component={Link} to="/market">
            <ListItemIcon>
                <AddShoppingCartIcon />
            </ListItemIcon>
            <ListItemText primary="Корзина" />
        </ListItemButton>
        <ListItemButton component={Link} to="/slideshow">
            <ListItemIcon>
                <CropOriginalIcon />
            </ListItemIcon>
            <ListItemText primary="Слайд-шоу" />
        </ListItemButton>
        <ListItemButton component={Link} to="/test">
            <ListItemIcon>
                <ContentPasteIcon />
            </ListItemIcon>
            <ListItemText primary="Тест" />
        </ListItemButton>
        <ListItemButton component={Link} to="/city">
            <ListItemIcon>
                <LocationCityIcon />
            </ListItemIcon>
            <ListItemText primary="Города и памятники" />
        </ListItemButton>
        <ListItemButton component={Link} to="/change">
            <ListItemIcon>
                <CameraswitchIcon />
            </ListItemIcon>
            <ListItemText primary="Смена картинок" />
        </ListItemButton>
        </React.Fragment>
);

