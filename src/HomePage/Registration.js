// import React, {  useEffect, useState } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import {  getuser, register } from './LoginService';
// import { Avatar, Box, Button, Container, TextField } from '@mui/material';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import AppBar from '@mui/material/AppBar';
// import PolicyIcon from '@mui/icons-material/Policy';
// import HowToRegIcon from '@mui/icons-material/HowToReg';


// export default function Registration() {
//   const [userData, setUserData] = useState({
//     firstname: '',
//     lastname: '',
//     username: '',
//     password: '',
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

  

//   const handleback = () => {
//     navigate('/login');
//   };


// //   const { id } = useParams();

// //   useEffect(()=>{
// //     if(id){
// //         getuser(id).then((response)=>{
// //             setUserData(response.data);
// //         })
// //     }
// // },[id])


  
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//       try {
//         await register(userData).then((response) => {
//           console.log(response.data); 
//             navigate(`/login`, { state: { userData: response.data } });
//            alert(`Account created successfully for ${response.data.firstname} ${response.data.lastname} with username: ${response.data.username}. and ID: ${response.data.id}`);        
          
//           })
       
//       } catch (error) {
//         alert('Failed to register');
//       }

//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();

//   //     try {
//   //       await register(userData).then((response) => {
//   //         console.log(response.data); 
//   //           navigate(`/login`);
//   //          alert(`Account created successfully for ${response.data.firstname} ${response.data.lastname} with username: ${response.data.username}. and ID: ${response.data.id}`);        
          
//   //         })
       
//   //     } catch (error) {
//   //       alert('Failed to register');
//   //     }

//   // };

//   return (
//     <div>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//         <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
//         <Typography
//             variant="h6"
//             noWrap
//             component="a"
//             href="#app-bar-with-responsive-menu"
//             sx={{
//               mr: 2,
//               display: { xs: 'none', md: 'flex' },
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               letterSpacing: '.3rem',
//               color: 'inherit',
//               textDecoration: 'none',
//             }}
//           >
//             STOCK INSURANCE
//           </Typography>
          
//         </Toolbar>
//       </AppBar>
//     </Box>
//     <Container maxWidth="sm">
    
//     <Box sx={{alignItems: 'center',justifyContent: 'center',mt:10,border: '4px solid', borderColor: "white",borderRadius: '16px', p: 4, 
//     boxShadow: '0px 0px 10px rgba(0,0,0,1.5)', maxWidth: 400}}>
//       <Avatar sx={{ m: 1, bgcolor: 'secondary.main',ml:21}}>
//             <HowToRegIcon/>
//             </Avatar>
//     <form onSubmit={handleSubmit}>
//            <h3>Please provide your details:</h3>
//             <TextField sx={{mb:2}} id="firstname" label="First Name" variant="outlined" name="firstname" placeholder="Stock Value" onChange={handleChange}  value={userData.firstname} required/>
//             <br></br>
//             <TextField sx={{mb:2}} id="lastname" label="Last Name" variant="outlined" name="lastname" placeholder="Damages Covered" onChange={handleChange}  value={userData.lastname} required/>
//             <br></br>
//             <TextField sx={{mb:2}} id="username" label="Username" variant="outlined" name="username" placeholder="Premium Charges" onChange={handleChange}  value={userData.username} required/>
//             <br></br>
//             <TextField sx={{mb:2}} id="password" label="Password" variant="outlined" name="password" placeholder="Stock Value" onChange={handleChange}  value={userData.password} required/>
//             <br></br>
//             <Button variant="contained" size="medium" sx={{mr:2}} onClick={handleback}>Back</Button>
//             <Button type="submit" variant="contained">Submit</Button>
//     </form>
//     </Box>
//     </Container>
//     </div>
//   );
// }

import React, {  useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {  getuser, register } from './LoginService';
import { Box, Button, Container, TextField } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';
import PolicyIcon from '@mui/icons-material/Policy';


export default function Registration() {
  const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    password: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  

  const handleback = () => {
    navigate('/login');
  };


  const { id } = useParams();

  useEffect(()=>{
    if(id){
        getuser(id).then((response)=>{
            setUserData(response.data);
        })
    }
},[id])


  
  const handleSubmit = async (e) => {
    e.preventDefault();

      try {
        await register(userData).then((response) => {
          console.log(response.data); 
            navigate(`/login`, { state: { userData: response.data } });
           alert(`Account created successfully for ${response.data.firstname} ${response.data.lastname} with username: ${response.data.username}. and ID: ${response.data.id}`);        
                     
          })
       
      } catch (error) {
        alert('Failed to register');
      }

  };

  return (
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