import * as React from 'react';
import {styled, alpha} from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
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


const Search = styled('div')(({theme}) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({theme}) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({theme}) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '40ch',
        },
    },
}));

export default function NavBar() {

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
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon/>
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{'aria-label': 'search'}}
                        />
                    </Search>
                    <Box sx={{flexGrow: 1}}/>
                    <Box size="large"
                         edge="start"
                         color="inherit"
                         sx={{mr: 40}}>
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