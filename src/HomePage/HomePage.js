import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import PolicyIcon from '@mui/icons-material/Policy';
import { useState } from 'react';
import { Grid, Slider } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { PieChart, Pie, Cell } from 'recharts';




export default function HomePage(){

    const navigate = useNavigate();
    const [sliderValue, setSliderValue] = useState(5000);
    
    const handleLogin = ()=>{
        navigate('/login')

    }
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
          <Button color="inherit" onClick={handleLogin}>Login</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
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