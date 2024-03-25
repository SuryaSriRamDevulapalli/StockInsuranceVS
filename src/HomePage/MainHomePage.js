import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { IconButton, Menu, MenuItem, Paper } from '@mui/material';
import { useState } from 'react';
import PolicyIcon from '@mui/icons-material/Policy';
import { AccountCircle } from '@mui/icons-material';
import { Grid, Slider } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';

import building from '../building.jpg'
import content from '../content.jpg'
import inventory from '../inventory.jpg'

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

    const [sliderValue, setSliderValue] = useState(5000);
    
    const calculateValues = (value) => ({
      building: Math.round(value * 0.85),
      inventory: Math.round(value * 0.80),
      content: Math.round(value * 0.75),
  });

  const data = [
    { name: 'Building', riskFactor: 15 },
    { name: 'Content', riskFactor: 20 },
    { name: 'Inventory', riskFactor: 25 },
  ];

  const data1 = [
    { name: 'Building', value: 3000 },
    { name: 'Content', value: 2000 },
    { name: 'Inventory', value: 2500 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];


const { building, inventory, content } = calculateValues(sliderValue);

    return(
      <div>
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
    <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 4, mb: 4 }}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            About Stock Insurance
                        </Typography>
                        <Typography>
                            Stock insurance provides businesses with financial protection against loss or damage to their inventory. Whether it's due to natural disasters, theft, or accidental damage, stock insurance ensures that your business can recover swiftly and sustain its operations without bearing the full financial burden.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ p: 2 }}>
                        <Typography variant="h5" gutterBottom>
                            Why Stock Insurance?
                        </Typography>
                        <Typography>
                            Ensuring your stock is protected is crucial for business continuity and financial stability. Stock insurance not only covers the cost of lost or damaged goods but also supports your business in managing risks more effectively, helping to maintain customer trust and uphold your brand's reputation.
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={2} justifyContent="center" alignItems="center">
        
        
<Grid item xs={12} md={4}>
<h3>Building</h3>
  <Paper elevation={2} sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
    <img src={building} alt="" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
  </Paper>
</Grid>

<Grid item xs={12} md={4}>
<h3>Content</h3>
  <Paper elevation={2} sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
    <img src={content} alt="" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
  </Paper>
</Grid>

<Grid item xs={12} md={4}>
<h3>Inventory</h3>
  <Paper elevation={2} sx={{ padding: 2, display: 'flex', justifyContent: 'center' }}>
    <img src={inventory} alt="" style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
  </Paper>
</Grid>

      </Grid>
     <Grid container spacing={2} justifyContent="center" alignItems="center" direction="row" sx={{ mt: 4 }}>
     <Grid item  sx={{ boxShadow: 3, border: "none",borderRadius: 2,p: 2,mr: 2}}>
         <Typography><strong>Stock value:</strong>{sliderValue}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></Typography>
         <Slider 
             value={sliderValue}
             onChange={(event, newValue) => setSliderValue(newValue)}
             aria-labelledby="input-slider"
             min={10000}
             max={1000000}
             sx={{ width: 300 }}
         />
     
         <Typography><strong>Damages Covered for Building:</strong> {building}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></Typography>
         <Typography><strong>Damages Covered for Inventory:</strong> {inventory}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></Typography>
         <Typography><strong>Damages Covered for Content:</strong> {content}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></Typography>
     </Grid>
     <Grid item  sx={{ boxShadow: 3, border: "none",borderRadius: 2,p: 2,mr:2}}>
     <h3>Risk Factor</h3>
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
            top: 20, right: 30, left: 20, bottom: 5,
            }}
            >
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey="name" />
<YAxis />
<Tooltip />
<Legend />
<Bar dataKey="riskFactor" fill="#8884d8" name="Risk Factor (%)" />
</BarChart>
</Grid>
<Grid item  sx={{ boxShadow: 3,border: "none",borderRadius: 2,p: 2}}>
  <h3>Premium Charges</h3>
<PieChart  width={400} height={400}>
<Pie
data={data1}
cx={200}
cy={200}
labelLine={false}
outerRadius={100}
fill="#8884d8"
dataKey="value"
nameKey="name"
label={({ name, value }) => ` ${value}`}
>
{data.map((entry, index) => (
<Cell key={`${index}`} fill={COLORS[index % COLORS.length]} />
))}
</Pie>
<Tooltip />
<Legend />
</PieChart>
</Grid>
</Grid>
</div>
    );
}