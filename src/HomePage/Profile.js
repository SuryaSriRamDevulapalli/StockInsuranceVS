import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react';

export default function Profile() {
    const location = useLocation();
    const navigate = useNavigate();
    const [userData, setUserData] = useState(location.state?.userData);



    useEffect(() => {
        if (!userData) {
            const storedUserData = localStorage.getItem('userData');
            if (storedUserData) {
                setUserData(JSON.parse(storedUserData));
            } else {
                navigate('/login');
            }
        }
    }, [userData, navigate]);


    
    

    if (!userData) {
        return <div>Loading user details or redirecting...</div>;
    }

    const handleback = () => {
        navigate('/main');
      };

    return (
        <div>
            <h2 style={{marginTop:"100px"}}>User Details for ID: {userData.id}</h2>
            <Box display="flex" justifyContent="center" alignItems="center">
                <TableContainer component={Paper} sx={{ maxWidth: 650, mt: 0 }}>
                    <Table aria-label="insurance details">
                        <TableBody>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Type of Stock:</strong></TableCell>
                                <TableCell>{userData.firstname}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Stock Value: </strong></TableCell>
                                <TableCell>{userData.lastname}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Damages Covered:</strong></TableCell>
                                <TableCell>{userData.username}</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell component="th" scope="row"><strong>Premium Charges:</strong></TableCell>
                                <TableCell>{userData.password}</TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                    <br></br>
                <Button variant="contained" size="medium" sx={{mr:2}} onClick={handleback}>Back</Button>
                </TableContainer>
                
            </Box>
        </div>
    );
}
