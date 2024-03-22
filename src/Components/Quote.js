import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import axios from 'axios';
import { Box } from '@mui/material';

function Quote() {
  const { id } = useParams();
  const [insuranceDetails, setInsuranceDetails] = useState({typeofstock: '',
  stockvalue: 0,
  premiumcharges: 0,
  insurancecalculation: 0,
  damagescovered: 0,
  coverpremiumcount:0,
  selectedPremiums: [], });

  useEffect(() => {
    axios.get(`http://localhost:8080/api/vi/stock/${id}`)
      .then(response => {
        setInsuranceDetails(response.data);
      })
      .catch(error => console.error('Failed to fetch insurance details', error));
      
  }, [id]);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <Box sx={{ border: "1px solid black", maxWidth: "50%", p: 3, justifyContent:"center", alignItems: "center",display:"flex" }}>
      {insuranceDetails ? (
        <div>
          <h2>Insurance Quote for ID: {id}</h2>
          <p>Type of Stock: {insuranceDetails.typeofstock}</p>
          <p>Stock Value: {insuranceDetails.stockvalue}</p>
          <p>Damages Covered:{insuranceDetails.damagescovered}</p>
          <p>Premium Charges: {insuranceDetails.premiumcharges}</p>
          <p>Number of Covers Selected from ("Startup", "Theft with 7 Days", "Cyber"): {insuranceDetails.coverpremiumcount} </p>
          <p>Monthly Insurance Premium: {insuranceDetails.insurancecalculation}</p>
          
        </div>) : (
        <p>Loading insurance details...</p>
      )}
    </Box>
    </div>
  );
}

export default Quote;
