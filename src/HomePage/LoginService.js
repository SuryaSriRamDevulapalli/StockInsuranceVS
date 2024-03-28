import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/v2';

export const userlist = () => {
    return axios.get(`${API_BASE_URL}/users`);
}

export const login = async (credentials) => {
    try {
        
        const response = await userlist();
        const users = response.data;
        const user = users.find(u => u.username === credentials.username && u.password === credentials.password);
        const response1 = await axios.post(`${API_BASE_URL}/login`, credentials, {
            headers: {
                'Content-Type': 'application/json', 
            },
        });

        if (user && response1.data === true) {
            return response1.data;
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

