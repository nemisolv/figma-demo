import axios from 'axios';

const login = async (data) => {
  return await axios.post('http://localhost:8080/auth/login', data);
};

const register = async (data) => {
  return await axios.post('http://localhost:8080/auth/register', data);
};


export { login, register };
