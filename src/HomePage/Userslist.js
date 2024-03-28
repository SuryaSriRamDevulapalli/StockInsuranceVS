import { useNavigate } from 'react-router-dom';
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
import { userlist } from './LoginService';



export default function UsersList(){

    const [users,setUsers] = useState([]);

    const navigation = useNavigate();

    useEffect(()=>{
        listusers();
    },[]);
    
    
    function listusers(){
        userlist().then((response)=>{
            setUsers(response.data)
        })
    }
    const handleGetQuote = (user) => {
        navigation(`/login`, { state: { user } });
      };
      
      const handleBack = ()=>{
        navigation('/main')
    };  

    // function addnewinsurance(){
    //     navigation('/create')
    //     }

    //     function updateinsrance(id){
    //         navigation(`/edit/${id}`);
    //         }  
         
    //         function deleteInsurance(id) { 
    //             deleteinsuracne(id).then((response) => {
    //                 listinsurances();
    //             })
            // }    

    return(
        <div>
                <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <PolicyIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Users List
          </Typography>
          <Button color="inherit" onClick={handleBack}>Back</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
            <TableContainer component={Paper} sx={{mt:10}}></TableContainer>
        <Table  className='center' sx={{boxShadow: '0px 0px 10px rgba(0,0,0,1.5)'}}>
        
            <thead>
                <tr>
                    <th>User ID: </th>
                    <th>FirstName: </th>
                    <th>Lastname: </th>
                    <th>Username </th>
                    <th>Password: </th>
                    {/* <th>Premium Charges: </th>
                    <th>Cover Premiums: </th>
                    <th>Cover Premium Values: </th>
                    <th>Monthly Premium: </th>
                    <th>Update & Delete: </th> */}
                </tr>
            </thead>
            <tbody>
                {users.map((user)=>{
                   return <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.firstname}</td>
                        <td>{user.lastname}</td>
                        <td>{user.username}</td>
                        <td>{user.password}</td>
                        {/* <td>{insruace.premiumcharges}</td>
                        <td>{insruace.coverpremiumcount}</td>
                        <td>{insruace.coverpremiumvlaue}</td> */}
                        {/* <td><Button variant="contained" color="success" sx={{fontSize:"small"}} onClick={()=>handleGetQuote(insruace)} > Get Quote</Button></td>
                        <td>
                        <EditIcon sx={{ color: "blue",marginRight:2 }} onClick={()=>updateinsrance(insruace.id)}/>
                        <DeleteIcon sx={{ color: "red" }}  onClick={() => deleteInsurance(insruace.id)}/>
                        </td> */}
                        <td>
                        <Button variant="contained" onClick={()=>handleGetQuote(user)} >Login</Button>
                        </td>
                    </tr>
                })}
            </tbody>
        </Table>
        <br></br>
        {/* <Fab color="primary" aria-label="add" onClick={()=> addnewinsurance()} ><AddIcon /></Fab> */}
        
        </div>

    );
}