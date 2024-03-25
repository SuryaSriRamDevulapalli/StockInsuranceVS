import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v2';

export const userlist = () => {
    return axios.get(`${API_BASE_URL}/users`);
}

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, credentials);
        if (response.data === true) {
            return response.data;
        } else {
            throw new Error('Invalid credentials');
        }
    } catch (error) {
        throw new Error('An error occurred during login');
    }
};



export const register = async (userData) => {
  return axios.post(`${API_BASE_URL}/register`, userData);
};


export const checkUsername = async (username) => {
    return axios.get(`${API_BASE_URL}/checkusername/${username}`);
  };

  export const getuser= (id) =>{
    return axios.get(`${API_BASE_URL}/register/${id}`)
}

