// import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

// import axios from 'axios';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Table, TableBody, TableCell, TableRow, Paper, TableContainer, Fab, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import NumbersIcon from '@mui/icons-material/Numbers';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import NavigationIcon from '@mui/icons-material/Navigation';
import { useState } from 'react';
import PolicyIcon from '@mui/icons-material/Policy';



function Quote() {

    const location = useLocation();
    const { insurance, selectedPartner } = location.state || {};
    
    const [open, setOpen] = useState(false);
  
    // const { id } = useParams();
    const navigate = useNavigate();

  const handleback = () => {
    navigate('/list');
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleLogout = () => {
    navigate('/');
  };
  

  const handleClose = () => {
    setOpen(false);
  };

//   const [insuranceDetails, setInsuranceDetails] = useState({typeofstock: '',
//   stockvalue: 0,
//   premiumcharges: 0,
//   insurancecalculation: 0,
//   damagescovered: 0,
//   coverpremiumcount:0,
//   selectedPremiums: [], });

//   useEffect(() => {
//     axios.get(`http://localhost:8080/api/vi/stock/${id}`)
//       .then(response => {
//         setInsuranceDetails(response.data);
//       })
//       .catch(error => console.error('Failed to fetch insurance details', error));
      
//   }, [id]);

  return (
    <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Final Quote Estimation
          </Typography>
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
    <h2 style={{marginTop:"100px"}}>Insurance Quote for ID: {insurance.id}</h2>
    <Box display="flex" justifyContent="center" alignItems="center">
      <TableContainer component={Paper} sx={{ maxWidth: 650, mt: 0 ,boxShadow: '0px 0px 10px rgba(0,0,0,1.5)'}}>
      <Table aria-label="insurance details">
        {insurance ? (
          <TableBody>
            
            <TableRow>
              <TableCell component="th" scope="row"><strong>Type of Stock:</strong></TableCell>
              <TableCell>{insurance.typeofstock}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><strong>Stock Value: </strong></TableCell>
              <TableCell>{insurance.stockvalue}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><strong>Damages Covered:</strong></TableCell>
              <TableCell>{insurance.damagescovered}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><strong>Premium Charges:</strong></TableCell>
              <TableCell>{insurance.premiumcharges}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><strong>Number of Covers Selected(Cyber,Startup,Theft within 7days):</strong></TableCell>
              <TableCell>{insurance.coverpremiumcount}<NumbersIcon sx={{fontSize:"small"}}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><strong>Monthly Insurance Premium:</strong></TableCell>
              <TableCell>{insurance.insurancecalculation}<CurrencyRupeeIcon sx={{fontSize:"small"}}/></TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row"><strong>Policy Partner:</strong></TableCell>
              <TableCell>{selectedPartner.companyName}</TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableRow>
            <TableCell>Loading insurance details...</TableCell>
          </TableRow>
        )}
      </Table>
    </TableContainer>
    </Box>
    <br></br>
    <Fab variant="extended" size='medium' color="primary" onClick={handleback} sx={{mr:2}}> <KeyboardBackspaceIcon sx={{ mr: 1 }} /> Back </Fab>
    <Fab variant="extended" size='medium' color="primary" onClick={handleClickOpen}> Complete  <NavigationIcon fontSize='small' sx={{ ml: 1 }} /> </Fab>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          style: { backgroundColor: "#2196f3", color: "white" },
        }}
      >
        <DialogTitle id="alert-dialog-title">
          {"Successful Completion"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your process was completed successfully. Here are some details for your reference and remaing will be sent through mail.
            <p>Insurance ID: {insurance.id}</p>
            <p>Monthly Insuarnce: <CurrencyRupeeIcon sx={{fontSize:"small"}}/> {insurance.insurancecalculation} </p>
            <p>Type of Stock: {insurance.typeofstock} </p>
            <p>Insurance Provider: {selectedPartner.companyName} </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="inherit" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default Quote;



