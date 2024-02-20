import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_LOGIN_SERVER_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1tbW0iLCJpYXQiOjE3MDg0MzkzNzcsImV4cCI6MTcwODQ0Mjk3N30.Hah-NrBk8kHCbb5z97Nu4denPgKddNtaIWcVCZgqBBg`,
  },
});

export default instance;
