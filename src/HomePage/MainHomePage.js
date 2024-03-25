import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import PolicyIcon from '@mui/icons-material/Policy';
import { AccountCircle } from '@mui/icons-material';

export default function MainHomePage(){

  const [anchorEl, setAnchorEl] = useState(null);

    const navigate = useNavigate();

    const handleLogin = ()=>{
        navigate('/')

    }
    const handleMenu = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleInsurance = () =>{
      navigate('/list')
    }
    const location = useLocation();
        const { userData } = location.state || {};

    const handleProfile = () =>{
      navigate('/profile',{ state: { userData } })
    }

    return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            STOCK INSURANCE
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
       
          {/* <Button color="inherit" onClick={handleLogin}>Login</Button> */}
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
          <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleInsurance}>Add New Insurance</MenuItem>
                <MenuItem onClick={handleLogin}>Logout</MenuItem>
              </Menu>
        </Toolbar>
      </AppBar>
    </Box>
    );
}