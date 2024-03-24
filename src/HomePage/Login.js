import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useLocation, useNavigate } from 'react-router-dom';
import { login } from './LoginService';
import  { useState } from 'react';
import {  Container, IconButton, InputAdornment, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from '@mui/icons-material';
import HowToRegIcon from '@mui/icons-material/HowToReg';


export default function Login(){

    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

 
    const navigate = useNavigate();


    const updateUserName = (e) =>{
        setUsername(e.target.value);
    };

    const updatePassword = (e) =>{
        setPassword(e.target.value);
    };

    const handleback = () => {
        localStorage.removeItem('userData');
        navigate('/');
      };

      const location = useLocation();
       const { userData } = location.state || {};

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const Data = await login({ username, password });
            console.log(Data);
            localStorage.removeItem('userData');
            localStorage.setItem('userData', JSON.stringify(userData));
            navigate('/main', { state: { userData } }); 
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
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Stock Insurance
          </Typography>
          
        </Toolbar>
      </AppBar>
    </Box>

            <Container maxWidth="sm" sx={{mt:10}}>
                <Box sx={{border: "1px solid black", p: 3, minHeight:"50vh", display:"grid",boxShadow: '0px 0px 10px rgba(0,0,0,1.5)',}}>
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