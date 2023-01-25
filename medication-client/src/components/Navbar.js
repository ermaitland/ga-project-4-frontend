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
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import EmailIcon from '@mui/icons-material/Email';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { AUTH } from '../lib/auth';
import { useAuthenticated } from '../hooks/useAuthenticated';
import '../styles/Home.scss';

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

  const userId = AUTH.id();

  const logout = () => {
    AUTH.logout();
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <section className='nav-responsive'>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='fixed' open={open} sx={{ pb: 0, mb: 0 }}>
          <Toolbar className='top_nav' sx={{ pb: 0, mb: 0 }}>
            <section className='left_of_nav'>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                onClick={handleDrawerOpen}
                edge='start'
                sx={{ mr: 2, ...(open && { display: 'none' }) }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant='h6' noWrap component='div' className='title'>
                Do You Know Your Meds?
              </Typography>
            </section>
            {isLoggedIn && (
              <List>
                <ListItem>
                  <ListItemButton>
                    <Link
                      to='/'
                      onClick={logout}
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        flexDirection: 'row'
                      }}
                    >
                      <ListItemIcon>
                        <LogoutIcon sx={{ pr: 0, color: '#FFFFFF' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ pl: 0, color: '#FFFFFF' }}>
                        Logout
                      </ListItemText>
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
                <ChevronLeftIcon sx={{ color: '#003459' }} />
              ) : (
                <ChevronRightIcon sx={{ color: '#003459' }} />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />{' '}
          <List className='drawer'>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <HomeIcon sx={{ color: '#003459' }} />
                </ListItemIcon>
                <Link
                  to='/'
                  onClick={handleDrawerClose}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItemText sx={{ color: '#003459' }}>Home</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MedicationIcon sx={{ color: '#003459' }} />
                </ListItemIcon>
                <Link
                  to='/products'
                  onClick={handleDrawerClose}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItemText sx={{ color: '#003459' }}>
                    Products
                  </ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <FactoryIcon sx={{ color: '#003459' }} />
                </ListItemIcon>
                <Link
                  to='/brands'
                  onClick={handleDrawerClose}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItemText sx={{ color: '#003459' }}>Brands</ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PolicyIcon sx={{ color: '#003459' }} />
                </ListItemIcon>
                <Link
                  to='/categories'
                  onClick={handleDrawerClose}
                  style={{ textDecoration: 'none' }}
                >
                  <ListItemText sx={{ color: '#003459' }}>
                    The Legal Categories of medications
                  </ListItemText>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
          <Divider />
          <List className='drawer'>
            {isLoggedIn ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link
                      to='/add'
                      onClick={handleDrawerClose}
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <AddIcon sx={{ color: '#003459' }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: '#003459' }}>
                          Contribute to the Database
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link
                      to={`/letter/${userId}`}
                      onClick={handleDrawerClose}
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <EmailIcon sx={{ color: '#003459' }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: '#003459' }}>
                          Medication Letter
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link
                      to={`/${userId}`}
                      onClick={handleDrawerClose}
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <MedicalInformationIcon sx={{ color: '#003459' }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: '#003459' }}>
                          Medication Tracker
                        </ListItemText>
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
                        <AppRegistrationIcon sx={{ color: '#003459' }} />
                      </ListItemIcon>
                      <Link
                        to='/register'
                        onClick={handleDrawerClose}
                        style={{ textDecoration: 'none' }}
                      >
                        <ListItemText sx={{ color: '#003459' }}>
                          Register
                        </ListItemText>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                </List>
                <List>
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        <LoginIcon sx={{ color: '#003459' }} />
                      </ListItemIcon>
                      <Link
                        to='/login'
                        onClick={handleDrawerClose}
                        style={{ textDecoration: 'none' }}
                      >
                        <ListItemText sx={{ color: '#003459' }}>
                          Login
                        </ListItemText>
                      </Link>
                    </ListItemButton>
                  </ListItem>
                </List>
                <ListItem disablePadding>
                  <ListItemButton>
                    <Link
                      to='/newRequest'
                      onClick={handleDrawerClose}
                      style={{ textDecoration: 'none' }}
                    >
                      <ListItemButton>
                        <ListItemIcon>
                          <MailIcon sx={{ color: '#003459' }} />
                        </ListItemIcon>
                        <ListItemText sx={{ color: '#003459' }}>
                          See something not right? Send up a request to change
                        </ListItemText>
                      </ListItemButton>
                    </Link>
                  </ListItemButton>
                </ListItem>
              </>
            )}{' '}
            {AUTH.isSuperuser() && (
              <ListItem disablePadding>
                <ListItemButton>
                  <Link
                    to='/requests'
                    onClick={handleDrawerClose}
                    style={{ textDecoration: 'none' }}
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <InboxIcon sx={{ color: '#003459' }} />
                      </ListItemIcon>
                      <ListItemText sx={{ color: '#003459' }}>
                        Requests
                      </ListItemText>
                    </ListItemButton>
                  </Link>
                </ListItemButton>
              </ListItem>
            )}
            <ListItem disablePadding>
              <ListItemButton>
                <Link to='/faqs' onClick={handleDrawerClose}>
                  <ListItemButton>
                    <ListItemIcon>
                      <QuestionMarkIcon sx={{ color: '#003459' }} />
                    </ListItemIcon>
                    <ListItemText sx={{ color: '#003459' }}>FAQs</ListItemText>
                  </ListItemButton>
                </Link>
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </section>
  );
}
