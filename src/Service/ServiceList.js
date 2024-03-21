import axios from 'axios';

const INSURANCE_URL = 'http://localhost:8080/api/vi/stock';

export const inurancelist = () => {
    return axios.get(INSURANCE_URL);
}

export const createinsurance=(insruace)=>{
    return axios.post(INSURANCE_URL,insruace)
}

export const getinsurance= (id) =>{
    return axios.get(INSURANCE_URL+'/'+id)
}

export const updateinsurance= (id,insurance) =>{
    return axios.put(INSURANCE_URL+'/'+id,insurance)
}

export const deleteinsuracne = (id) =>{
    return axios.delete(INSURANCE_URL+'/'+id)
}