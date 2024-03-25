import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PolicyIcon from '@mui/icons-material/Policy';


export default function Profile() {
    const navigate = useNavigate();

    const location = useLocation();
    const { userData } = location.state || {};

    // useEffect(() => {
    //     if (!userData) {
    //         const storedUserData = localStorage.getItem('userData');
    //         if (storedUserData) {
    //             setUserData(JSON.parse(storedUserData));
    //         } else {
    //             navigate('/login');
    //         }
    //     }
    // }, [userData, navigate]);


    
    

    if (!userData) {
        return <div>Loading user details or redirecting...</div>;
    }

    const handleback = () => {
        navigate('/main');
      };

    return (
        <div>
             <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           User Profile
          </Typography>
          <Button color="inherit" ></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
            <h2 style={{marginTop:"100px"}}>Details for ID: {userData.id}</h2>
            <Box display="flex" justifyContent="center" alignItems="center">
                <TableContainer component={Paper} sx={{ maxWidth: 650, mt: 0 ,boxShadow: '0px 0px 10px rgba(0,0,0,1.5)'}}>
                    <Table aria-label="insurance details">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Firstname:</strong></TableCell>
                                <TableCell>{userData.firstname}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Lastname: </strong></TableCell>
                                <TableCell>{userData.lastname}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Username:</strong></TableCell>
                                <TableCell>{userData.username}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Password:</strong></TableCell>
                                <TableCell>{userData.password}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                   
                </TableContainer>
            
            </Box>
            <Button variant="contained" size="medium" sx={{mt:2}} onClick={handleback}>Back</Button>
        </div>
    );
}
