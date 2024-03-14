import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';
import { NavLink } from 'react-router-dom';

const NAME = 'GESTIÓN'
const drawerWidth = 260;
const navItems = [
  {
    title: 'Inicio',
    path: '/',
    //icon: <MenuIcon />
  },
  {
    title: 'Vistas',
    path: '#',
    //icon: <MenuIcon />
  },
  {
    title: 'Herramientas',
    path: '#',
    //icon: <MenuIcon />
  },
  {
    title: 'Contratar',
    path: '#',
    //icon: <MenuIcon />
  },
  {
    title: 'Contacto',
    path: '#',
    //icon: <MenuIcon />
  }
]

function NavBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant='h6' sx={{ my: 2 }}>
        {NAME}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.title} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item.title}
                component={NavLink}
                to='/'
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component='nav' position='static'>
        <Container>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant='h4'
              component='div'
              sx={{ mr: 8, display: { xs: 'none', sm: 'block' } }}
            >
              {NAME}
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button
                key={item.title}
                sx={{ color: '#fff' }}
                component={NavLink}
                to={item.path}
                >
                  {item.title}
                </Button>
              ))}
            </Box>
            <Box sx={{}}>
              <Button sx={{ borderRadius: 10 }}
                variant='contained'
                color='secondary'
                component={NavLink}
                to='/login'
                startIcon={<LoginIcon />}
              >
                Entrar
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

NavBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default NavBar;
