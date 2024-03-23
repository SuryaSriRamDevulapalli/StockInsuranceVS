import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Grid, Card, CardContent, CardMedia,CardActions, Rating } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';


export default function FindInsurances(){

    const insurancePartners = [
        {image: 'https://static.pbcdn.in/sme-cdn/images/supplier-logo/DIGIT-General-Insurance.png' ,companyName: 'Go Digit', planName: 'Bharat Sookshma Udyam Suraksha', topFeatures: [' Fire & Terrorism', 'Theft Cover within 7 days', ' Start-Up Expenses'],rating: 5 },
        {image: 'https://static.pbcdn.in/sme-cdn/images/supplier-logo/bajajallianz.jpg',companyName: 'Bajaj Allianz', planName: 'Bharat Sookshma Udyam Suraksha', topFeatures: [' Fire & Terrorism', 'Theft Cover within 7 days', ' Start-Up Expenses'],rating: 4 },
        {image: 'https://static.pbcdn.in/sme-cdn/images/supplier-logo/Reliance.jpg', companyName: 'Reliance General', planName: 'Bharat Sookshma Udyam Suraksha', topFeatures: [' Fire & Terrorism', 'Theft Cover within 7 days', ' Start-Up Expenses'],rating: 5},
        {image: 'https://static.pbcdn.in/sme-cdn/images/supplier-logo/SBI-General-Insurance.png', companyName: 'SBI General Insurance Company Ltd', planName: 'Bharat Sookshma Udyam Suraksha',  topFeatures: [' Fire & Terrorism', 'Theft Cover within 7 days', ' Start-Up Expenses'],rating: 2 },
        {image: 'https://static.pbcdn.in/sme-cdn/images/supplier-logo/NationalInsurance.png', companyName: 'National Insurance', planName: 'Bharat Sookshma Udyam Suraksha',  topFeatures: [' Fire & Terrorism', 'Theft Cover within 7 days', ' Start-Up Expenses'],rating: 2 },
        {image: 'https://static.pbcdn.in/sme-cdn//images/supplier-logo/New-India-insurance.jpg', companyName: 'New India Assurance', planName: 'Bharat Sookshma Udyam Suraksha',  topFeatures: [' Fire & Terrorism', 'Theft Cover within 7 days', ' Start-Up Expenses'],rating: 4 },
    ];

       
        const location = useLocation();
        const { insurance } = location.state || {}; 

        const navigate = useNavigate();
      
        const handleSelectPartner = (selectedPartner) => {
          navigate('/quote', { state: { insurance, selectedPartner } });
        };

        const handleback = () => {
            navigate('/list');
          };

    return(
        <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Insuarnce Partners
          </Typography>
          <Button color="inherit">Logout</Button>     
        </Toolbar>
      </AppBar>
    </Box>
    <Grid container spacing={4} sx={{ p: 3 }}>
                {insurancePartners.map((partner, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card raised sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardContent>
                            <CardMedia
                                component="img"
                                sx={{
                                    height:100,
                                    width:100,
                                      maxWidth: '100%',
                                   objectFit: 'contain', 
                                }}      
                                image={partner.image}
                                alt={`${partner.companyName} logo`}
                            />
                            <CardActions>
                            <Typography component="legend" sx={{ml:15}}>Rating</Typography>
                            <Rating name="read-only" value={partner.rating} readOnly />
                            </CardActions>
                                <Typography variant="h5" component="h2">{partner.companyName}</Typography>
                                <Typography variant="body1">Plan: {partner.planName}</Typography>
                                <Typography variant="body2" sx={{ mt: 2 }}>Top Features:</Typography>
                                <ul>
                                    {partner.topFeatures.map((feature, featureIndex) => (
                                        <li key={featureIndex}>{feature}</li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardActions sx={{ mt: 'auto', justifyContent: 'center' }}> 
                            <Button variant="contained" sx={{mr:2}} onClick={handleback}>Back</Button>
                            <Button variant="contained" onClick={() => handleSelectPartner(partner)}>Select Partner</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
    </div>
    );

}