import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from './LoginService';
import  { useState } from 'react';
import {  Avatar, Container, CssBaseline, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PolicyIcon from '@mui/icons-material/Policy';



export default function Login(){

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    // const [userLogin,setUserLogin] = useState([]);
 
    const navigate = useNavigate();

   // const { id } = useParams();

    const updateUserName = (e) =>{
        setUsername(e.target.value);
    };


    const updatePassword = (e) =>{
        setPassword(e.target.value);
    };

    const handleback = () => {
        navigate('/');
      };

      const location = useLocation();
       const { user } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const Data = await login({ username, password });
            console.log(Data);
            navigate('/main', { state: { user } }); 
        } catch (error) {
            console.error(error); 
            alert(error.message); 
        }
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         const response = await login({ username, password });
    //         console.log(response.data); 
    //         localStorage.setItem('userData', JSON.stringify(response.data)); 
    //         navigate('/main', { state: { userData: response.data } }); 
    //     } catch (error) {
    //         console.error(error); 
    //         alert(error.message); 
    //     }
    // };
    
    
    const handleRegister= () =>{
        navigate('/register')
    };
    

    // const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPassword = () => setShowPassword(!showPassword);

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
          
        </Toolbar>
      </AppBar>
    </Box>
    
            <Container maxWidth="sm" sx={{mt:10}}>
            <CssBaseline />
            
                <Box sx={{border: "1px solid black", p: 3, minHeight:"50vh", display:"grid",boxShadow: '0px 0px 10px rgba(0,0,0,1.5)',}}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main',ml:27}}>
            <LockOutlinedIcon/>
            </Avatar>
                    <h3>Provide Login Details:</h3>
                    <form onSubmit={handleSubmit}>
                        <TextField
                            sx={{mb:2}}
                            id="username"
                            label="Username"
                            variant="outlined"
                            value={username}
                            onChange={updateUserName}
                            placeholder="Username"
                        />
                        <TextField
                            sx={{mb:2}}
                            id="password"
                            label="Password"
                            variant="outlined"
                            type={showPassword ? 'text' : 'password'}
                            value={password}
                            onChange={updatePassword}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                                            <Button variant="contained" size="medium" sx={{mr:2}} onClick={handleback}>Back</Button>
                          <Button type="submit" variant="contained">Login</Button>
                      
                      
                    </form>
                </Box>
            </Container>

            <h4>Loggin for the first time?</h4>        
            <p>Click on the  button to Register!!<Button variant="contained" onClick={handleRegister}>Register<HowToRegIcon/></Button></p>        

        </div>
    );
}