import { useNavigate } from 'react-router-dom';
import { deleteinsuracne, inurancelist } from '../Service/ServiceList';
import { useState,useEffect } from "react";



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

    function addnewinsurance(){
        navigation('/create')
        }

        function updateinsrance(id){
            navigation(`/edit/${id}`)
            }  
         
            function deleteInsurance(id) { 
                deleteinsuracne(id).then((response) => {
                    listinsurances();
                })
            }    

    return(
        <div>
        <table className='center'>
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
                    <th>View & Delete: </th>
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
                        <td>{insruace.insurancecalculation}</td>
                        <td>
                        <button className='btn btn-info' onClick={()=>updateinsrance(insruace.id)}>View & Update</button>
                        <button className='btn btn-info' onClick={() => deleteInsurance(insruace.id)}>Delete</button>
                        </td>
                    </tr>
                })}
            </tbody>
        </table>
        <button onClick={()=> addnewinsurance()}>addnewinsurance</button>
        </div>

    );

}