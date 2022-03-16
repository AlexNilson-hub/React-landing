import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';

import Logo from "../assets/images/logo-apple.png";
import Image from 'mui-image';
import {Tooltip} from "@mui/material";
// Icons ui
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddchartIcon from '@mui/icons-material/Addchart';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AddCircleIcon from '@mui/icons-material/AddCircle';




export default function Footer() {

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static" id="navbar">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{mr: 1, ml: 25}}
                    >
                        <Image width={45} height={45} src={Logo}/>
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{display: {xs: 'none', sm: 'block'}}}
                    >
                        Логотип
                    </Typography>
                    <Box sx={{flexGrow: 1}}/>
                    <Box size="large"
                         edge="start"
                         color="inherit"
                         sx={{mr: 90}}>
                        <Tooltip title='Каталог' arrow>
                            <IconButton size="large" color="inherit">
                                <AddPhotoAlternateIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Статистика' arrow>
                            <IconButton size="large" color="inherit">
                                <AddchartIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Поддержка' arrow>
                            <IconButton size="large" color="inherit">
                                <Badge badgeContent={4} color="error">
                                    <SupportAgentIcon/>
                                </Badge>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Создать НФТ' arrow>
                            <IconButton
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                            >
                                <AddCircleIcon/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title='Кабинет' arrow>
                            <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-haspopup="true"
                                color="inherit"
                            >
                                <AccountCircle/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Box sx={{display: {xs: 'flex', md: 'none'}}}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}