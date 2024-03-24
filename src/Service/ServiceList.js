import axios from 'axios';

const INSURANCE_URL = 'http://localhost:8080/api/vi';

export const inurancelist = () => {
    return axios.get(`${INSURANCE_URL}/stock`);
}

export const createinsurance=(insruace)=>{
    return axios.post(`${INSURANCE_URL}/stock`,insruace)
}

export const getinsurance= (id) =>{
    return axios.get(`${INSURANCE_URL}/stock/${id}`)
}

export const updateinsurance= (id,insurance) =>{
    return axios.put(`${INSURANCE_URL}/stock/${id}`,insurance)
}

export const deleteinsuracne = (id) =>{
    return axios.delete(`${INSURANCE_URL}/stock/${id}`)
}