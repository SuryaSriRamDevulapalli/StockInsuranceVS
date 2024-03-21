import { useState,useEffect } from "react";
import { createinsurance, getinsurance, updateinsurance } from "../Service/ServiceList";

import { useNavigate,useParams } from "react-router-dom";

export default function Insuarnce(){

    const navigation = useNavigate();

   const { id } = useParams();

    const[insruance,setInsurance] = useState({
        typeofstock: '',
        stockvalue: 0,
        damagescovered: 0,
        premiumcharges: 0,
        coverpremiumcount:0,
    });

    const handleChange= (e) =>{
       // SetInsurance({...insruace,[e.target.name]: e.target.value})
        //or
        const {name,value} = e.target;
        setInsurance(prevState => ({
            ...prevState,
            [name]: value
        }));
    };;

    // const handleSubmit = (e)=>{
    //     e.preventDefault();
    //     createinsurance(insruace)
    //     .then(response=>{
    //         console.log(response.data);
    //         navigation('/')
    //         alert(`Insurance created with ID: ${response.data.id}`);
    //     })
    //     .catch(error => {
    //         console.error('There was an error creating the insurance:', error)
    //     });
    // };
    
    // const handleSubmit = (e) => {
        
    //     updateproduct(id, insruace)
    //         .then((response) => {
    //             console.log(response.data);
    //             navigate('/');
    //         })
    //         .catch(error => {
    //             console.error('There was an error updating the insurance:', error);
    //         });
    // };

    useEffect(()=>{
        if(id){
            getinsurance(id).then((response)=>{
                setInsurance(response.data);
            })
        }
    },[id])

    function createoreditproduct(e){
        e.preventDefault();

        if(id){
            updateinsurance(id, insruance)
            .then((response) => {
                console.log(response.data);
                navigation('/');
            })
            .catch(error => {
                console.error('There was an error updating the insurance:', error);
            });

        }else{
            createinsurance(insruance)
        .then(response=>{
            console.log(response.data);
            navigation('/')
            alert(`Insurance created with ID: ${response.data.id}`);
        })
        .catch(error => {
            console.error('There was an error creating the insurance:', error)
        });

        }
    }

    function Title(){
        if(id){
            return(<h1 className="text-center">Update Insuarnce </h1>)
        }else{
            return(<h1 className="text-center">Create Insuarnce </h1>)
        }
        //or
       // return <h1 className="text-center">{id ? "Update Product" : "Create Product"}</h1>;
    }

    return(
        <form onSubmit={createoreditproduct}>
            {Title()}
            <input type="text" name="typeofstock" placeholder="Type of Stock" onChange={handleChange} value={insruance.typeofstock} />
            <input type="text" name="stockvalue" placeholder="stockvalue" onChange={handleChange} value={insruance.stockvalue} />
            <input type="text" name="damagescovered" placeholder="damagescovered" onChange={handleChange} value={insruance.damagescovered} />
            <input type="text" name="premiumcharges" placeholder="premiumcharges" onChange={handleChange} value={insruance.premiumcharges} />
            <input type="text" name="coverpremiumcount" placeholder="coverpremiumcount" onChange={handleChange} value={insruance.coverpremiumcount} />

            <button onClick={createoreditproduct}>Submit</button>
        </form>
    );

}