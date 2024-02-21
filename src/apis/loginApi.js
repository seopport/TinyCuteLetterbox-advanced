import axios from 'axios';

const accessToken = localStorage.getItem('accessToken');

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOGIN_SERVER_URL,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

export default instance;
