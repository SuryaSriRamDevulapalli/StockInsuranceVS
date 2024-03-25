import { useEffect, useState } from "react";
import { createinsurance, getinsurance, updateinsurance } from "../Service/ServiceList";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate,useParams } from "react-router-dom";
import { Checkbox,FormControlLabel, FormControl, InputLabel, Select, MenuItem, Box } from '@mui/material';


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

        if (name === "typeofstock") {
            updatePremiumCharges(value);
        }

        if (name === "typeofstock" || name === "stockvalue") {
            updateDamagesCovered(e.target.name, value);
        }
    };

    const updatePremiumCharges = (typeofstock) => {
        let charges = 0;
        switch (typeofstock) {
            case 'Building': charges = 3000;
                break;
            case 'Inventory': charges = 2500;
                break;
            case 'Content': charges = 2000;
                break;
            default: charges = 0;
        }
        setInsurance((prevState) => ({
            ...prevState,
            premiumcharges: charges,
        }));
    };

    const handleback = () => {
        navigation('/list');
      };

    const updateDamagesCovered = (changedField, value) => {
        let damagesPercentage = 0;
        const stockType = changedField === "typeofstock" ? value : insruance.typeofstock;
        const stockValue = changedField === "stockvalue" ? value : insruance.stockvalue;
    
        switch(stockType) { 
            case 'Building': damagesPercentage = 0.85;
             break;
            case 'Inventory':damagesPercentage = 0.80;
            break;
            case 'Content':damagesPercentage = 0.75;
            break;
            default:damagesPercentage = 0;
        }
        const damagesCovered = Math.round(stockValue * damagesPercentage);
    
        setInsurance(prevState => ({
            ...prevState,
            damagescovered: damagesCovered
        }));
    };

    function Checkboxes()  {
        const premiumOptions = ["Startup", "Theft with 7 Days", "Cyber"];
        return (
            <div>
                {premiumOptions.map((option, index) => (
                    <FormControlLabel
                        key={index}
                        control={<Checkbox name={option} />}
                        label={option}
                    />
                ))}
            </div>
        );
    };
    
    

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
                navigation('/list');
            })
            .catch(error => {
                console.error('There was an error updating the insurance:', error);
            });

        }else{
            createinsurance(insruance)
        .then(response=>{
            console.log(response.data);
            navigation('/list')
            alert(`Insurance created with ID: ${response.data.id}`);
        })
        .catch(error => {
            console.error('There was an error creating the insurance:', error)
        });

        }
    }

    function Title(){
        if(id){
            return(<h1 >Update Insuarnce </h1>)
        }else{
            return(<h1>Create Insuarnce </h1>)
        }
        //or
       // return <h1 className="text-center">{id ? "Update Product" : "Create Product"}</h1>;
    }

  

    return(
            <Box sx={{alignItems: 'center',justifyContent: 'center',mt:20,border: '4px solid', borderColor: "white",borderRadius: '16px', p: 4, 
            boxShadow: '0px 0px 10px rgba(0,0,0,1.5)',}}>
        <form onSubmit={createoreditproduct}>
            {Title()}
            <FormControl sx={{width: '15%'}}>
                <InputLabel>Type of Stock</InputLabel>
                <Select
                    name="typeofstock"
                    value={insruance.typeofstock}
                    label="Type of Stock"
                    onChange={handleChange}
                >
                    <MenuItem value="Building">Building</MenuItem>
                    <MenuItem value="Inventory">Inventory</MenuItem>
                    <MenuItem value="Content">Content</MenuItem>
                </Select>
            </FormControl>
            <TextField id="outlined-basic" label="Stock Value" variant="outlined" name="stockvalue" placeholder="Stock Value" onChange={handleChange}  value={insruance.stockvalue} />
            <TextField id="outlined-basic" label="Damages Covered" variant="outlined" name="damagescovered" placeholder="Damages Covered" onChange={handleChange}  value={insruance.damagescovered} />
            <TextField id="outlined-basic" label="Premium Charges" variant="outlined" name="premiumcharges" placeholder="Premium Charges" onChange={handleChange}  value={insruance.premiumcharges} />
            <FormControl sx={{width: '15%'}}>
                <InputLabel id="demo-simple-select-label">Cover Premium Count</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="coverpremiumcount"
                value={insruance.coverpremiumcount}
                label="Cover Premium Count"
                onChange={handleChange}
                    >
                <MenuItem value={1}>1</MenuItem>
                <MenuItem value={2}>2</MenuItem>
                <MenuItem value={3}>3</MenuItem>
            </Select>
             </FormControl>
             {Checkboxes()}
            <br></br>
            <Button variant="contained" size="large" sx={{mr:2}} onClick={handleback}>Back</Button>
            <Button variant="contained" color="success" size="large"  onClick={createoreditproduct}> Submit </Button>
        </form>
        </Box>      
        
    );

}