import axios from 'axios';


export const getAccounts = async () => {
  return await axios.get('http://localhost:8080/accounts');
};

export const getAccountById = async (id) => {
  return await axios.get(`http://localhost:8080/accounts/${id}`);
}

export const deleteAccount = async (id) => {
  return await axios.delete(`http://localhost:8080/accounts/${id}`);
}



