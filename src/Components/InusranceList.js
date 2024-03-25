import { useNavigate } from 'react-router-dom';
import { deleteinsuracne, inurancelist } from '../Service/ServiceList';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState,useEffect } from "react";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';

import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import PolicyIcon from '@mui/icons-material/Policy';



export default function InsuranceList(){

    const [insruaces,setInsurances] = useState([]);

    const navigation = useNavigate();

    useEffect(()=>{
        listinsurances();
    },[]);
    
    function listinsurances(){
        inurancelist().then((response)=>{
            setInsurances(response.data)
        })
    }
    const handleGetQuote = (insurance) => {
        navigation('/insurances', { state: { insurance } });
      };
      
      const handleBack = ()=>{
        navigation('/main')

    };  

    function addnewinsurance(){
        navigation('/create')
        }

        function updateinsrance(id){
            navigation(`/edit/${id}`);
            }  
         
            function deleteInsurance(id) { 
                deleteinsuracne(id).then((response) => {
                    listinsurances();
                })
            }    

    return(
        <div>
                <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Insurances List
          </Typography>
          <Button color="inherit" onClick={handleBack}>Back</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
            <TableContainer component={Paper} sx={{mt:10}}></TableContainer>
        <Table  className='center' sx={{boxShadow: '0px 0px 10px rgba(0,0,0,1.5)'}}>
        
            <thead>
                <tr>
                    <th>Insuarnce ID: </th>
                    <th>Type Of Stock: </th>
                    <th>Stock Value: </th>
                    <th>Recover Percentage: </th>
                    <th>Damages Covered: </th>
                    <th>Premium Charges: </th>
                    <th>Cover Premiums: </th>
                    <th>Cover Premium Values: </th>
                    <th>Monthly Premium: </th>
                    <th>Update & Delete: </th>
                </tr>
            </thead>
            <tbody>
                {insruaces.map((insruace)=>{
                   return <tr key={insruace.id}>
                        <td>{insruace.id}</td>
                        <td>{insruace.typeofstock}</td>
                        <td>{insruace.stockvalue}</td>
                        <td>{insruace.riskfactor *100}%</td>
                        <td>{insruace.damagescovered}</td>
                        <td>{insruace.premiumcharges}</td>
                        <td>{insruace.coverpremiumcount}</td>
                        <td>{insruace.coverpremiumvlaue}</td>
                        <td><Button variant="contained" color="success" sx={{fontSize:"small"}} onClick={()=>handleGetQuote(insruace)} > Get Quote</Button></td>
                        <td>
                        <EditIcon sx={{ color: "blue",marginRight:2 }} onClick={()=>updateinsrance(insruace.id)}/>
                        <DeleteIcon sx={{ color: "red" }}  onClick={() => deleteInsurance(insruace.id)}/>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
        <br></br>
        <Fab color="primary" aria-label="add" onClick={()=> addnewinsurance()} ><AddIcon /></Fab>
        </div>

    );
}