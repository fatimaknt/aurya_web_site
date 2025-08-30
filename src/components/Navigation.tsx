import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const location = useLocation();

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Nos Parfums', path: '/parfums' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2, color: theme.palette.secondary.main }}>
        AURYA ✨
      </Typography>
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} component={Link} to={item.path}>
            <ListItemText 
              primary={item.name} 
              sx={{ 
                color: location.pathname === item.path ? theme.palette.secondary.main : 'inherit',
                textAlign: 'center'
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ backgroundColor: 'rgba(0,0,0,0.9)', backdropFilter: 'blur(10px)' }}>
        <Toolbar>
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              color: theme.palette.secondary.main,
              textDecoration: 'none',
              fontWeight: 700,
              fontSize: '1.5rem'
            }}
          >
            AURYA ✨
          </Typography>
          
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 2 }}>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: theme.palette.secondary.main,
                    },
                    ...(location.pathname === item.path && {
                      color: theme.palette.secondary.main,
                      borderBottom: `2px solid ${theme.palette.secondary.main}`
                    })
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true
        }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box', 
            width: 240,
            backgroundColor: theme.palette.background.paper
          }
        }}
      >
        {drawer}
      </Drawer>
      
      <Toolbar />
    </>
  );
};

export default Navigation;
