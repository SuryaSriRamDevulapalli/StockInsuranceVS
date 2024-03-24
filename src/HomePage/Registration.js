import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './LoginService';
import { Box, Button, Container, TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

export default function Registration() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });
  // const [usernameAvailable, setUsernameAvailable] = useState(true);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleback = () => {
    navigate('/login');
  };

  // const handleback = (userData) => {
  //   navigate('/login', { state: { userData } });
  // };
  



  const handleSubmit = async (e) => {
    e.preventDefault();
    // if (usernameAvailable) {
      try {
        await register(userData).then((response) => {
          console.log(response.data); 
          localStorage.setItem('userData', JSON.stringify(response.data));
          navigate('/login', { state: { userData: response.data } });
           alert(`Account created successfully for ${response.data.firstname} ${response.data.lastname} with username: ${response.data.username}. and ID: ${response.data.id}`);        
          
          })
       
      } catch (error) {
        alert('Failed to register');
      }
    // } else {
    //   alert("Please choose a different username.");
    // }
  };

  return (
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
    <Container maxWidth="sm">
    <Box sx={{alignItems: 'center',justifyContent: 'center',mt:10,border: '4px solid', borderColor: "white",borderRadius: '16px', p: 4, 
    boxShadow: '0px 0px 10px rgba(0,0,0,1.5)', maxWidth: 400}}>
    <form onSubmit={handleSubmit}>
           <h3>Please provide your details:</h3>
            <TextField sx={{mb:2}} id="firstname" label="First Name" variant="outlined" name="firstname" placeholder="Stock Value" onChange={handleChange}  value={userData.firstname} />
            <br></br>
            <TextField sx={{mb:2}} id="lastname" label="Last Name" variant="outlined" name="lastname" placeholder="Damages Covered" onChange={handleChange}  value={userData.lastname} />
            <br></br>
            <TextField sx={{mb:2}} id="username" label="Username" variant="outlined" name="username" placeholder="Premium Charges" onChange={handleChange}  value={userData.username} />
            {/* {!usernameAvailable && <div style={{color: 'red'}}>Username is not available</div>} */}
            <br></br>
            <TextField sx={{mb:2}} id="password" label="Password" variant="outlined" name="password" placeholder="Stock Value" onChange={handleChange}  value={userData.password} />
            <br></br>
            <Button variant="contained" size="medium" sx={{mr:2}} onClick={handleback}>Back</Button>
            <Button type="submit" variant="contained">Submit</Button>
    </form>
    </Box>
    </Container>
    </div>
  );
}