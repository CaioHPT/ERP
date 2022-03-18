import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import Avatar from '@mui/material/Avatar';

import { connect } from "react-redux";
import renderPage from "../../store/renderPage"
import { Link } from "react-router-dom"

import './index.css'

const icons = [<GroupIcon />, <AssignmentIndIcon />, <ShoppingBagIcon />, <AssessmentIcon />, <ExitToAppIcon />]

const drawerWidth = 240;

const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);


function Aside({RenderizedPage, dispatch}) {

    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="fixed" open={open} color="inherit" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar sx={{ display: "flex", justifyContent: 'space-between' }}>
                    {open ? 
                    <IconButton 
                        onClick={handleDrawerClose} 
                        edge="start" sx={{
                            marginRight: 5,
                            outline: "none !important"
                        }}>
                        <CloseIcon />
                    </IconButton> 
                    : <IconButton
                        baseClassName="material-icons-two-tone"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            outline: "none !important",
                            ...(open && { display: 'none' }),
                        }}
                    >
                        <MenuIcon />
                    </IconButton>}
                    <Typography className="textNav" >
                        <h1>Magsoft</h1>
                    </Typography>
                    <Typography sx={{ display: "flex", alignItems: "center" }} className="avatarText">
                        <Avatar src="/broken-image.jpg" />
                        <h6>CaioHPT</h6>
                    </Typography>
                </Toolbar>
                
            </AppBar>
            <Drawer variant="permanent" open={open}>
                <DrawerHeader>
                    
                </DrawerHeader>
                <List>
                    {['Clientes', 'Funcionarios', 'Produtos', 'Vendas', 'Sair'].map((text, index) => (
                        <Link to={`/${text}`} >
                            <ListItemButton 
                            
                                key={text}
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                    minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }}
                                 primaryTypographyProps={{ fontWeight: 'bold', fontFamily: 'Poppins', color:"black" }} />
                                
                            </ListItemButton>
                        </Link>
                    ))}
                </List>
               
            </Drawer>
            
        </Box>
    );  
}

export default connect(state => (
    { RenderizedPage: state.RenderizedPage }
))(Aside);