import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';
import MedicationIcon from '@mui/icons-material/Medication';
import FactoryIcon from '@mui/icons-material/Factory';
import PolicyIcon from '@mui/icons-material/Policy';
import AddIcon from '@mui/icons-material/Add';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AUTH } from '../lib/auth';
import { useAuthenticated } from '../hooks/useAuthenticated';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    })
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open'
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end'
}));

export default function Navbar() {
  const theme = useTheme();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useAuthenticated();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const logout = () => {
    AUTH.logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position='fixed' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div'>
            Do You Know Your Meds?
          </Typography>
          {isLoggedIn && (
            <List>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon sx={{ pr: 0 }} />
                  </ListItemIcon>
                  <Link to='/' onClick={logout}>
                    <ListItemText sx={{ pl: 0 }}>Logout</ListItemText>
                  </Link>
                </ListItemButton>
              </ListItem>
            </List>
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box'
          }
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <Link to='/'>
                <ListItemText>Home</ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <MedicationIcon />
              </ListItemIcon>
              <Link to='/products'>
                <ListItemText>Products</ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FactoryIcon />
              </ListItemIcon>
              <Link to='/brands'>
                <ListItemText>Brands</ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PolicyIcon />
              </ListItemIcon>
              <Link to='/categories'>
                <ListItemText>The Legal Categories of medications</ListItemText>
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {isLoggedIn ? (
            <>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to='/add'>
                    <ListItemButton>
                      <ListItemIcon>
                        <AddIcon />
                      </ListItemIcon>
                      <ListItemText>Contribute to the Database</ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItemButton>
              </ListItem>
            </>
          ) : (
            <>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <AppRegistrationIcon />
                    </ListItemIcon>
                    <Link to='/register'>
                      <ListItemText>Register</ListItemText>
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <Link to='/login'>
                      <ListItemText>Login</ListItemText>
                    </Link>
                  </ListItemButton>
                </ListItem>
              </List>
              <ListItem disablePadding>
                <ListItemButton>
                  <Link to='/newRequest'>
                    <ListItemButton>
                      <ListItemIcon>
                        <MailIcon />
                      </ListItemIcon>
                      <ListItemText>
                        See something not right? Send up a request to change
                      </ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItemButton>
              </ListItem>
            </>
          )}
        </List>{' '}
        {AUTH.isSuperuser() && (
          <ListItem disablePadding>
            <ListItemButton>
              <Link to='/requests'>
                <ListItemButton>
                  <ListItemIcon>
                    <InboxIcon />
                  </ListItemIcon>
                  <ListItemText>Requests</ListItemText>
                </ListItemButton>
              </Link>
            </ListItemButton>
          </ListItem>
        )}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
      </Main>
    </Box>
  );
}
