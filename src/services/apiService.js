// services/apiService.js
import axios from 'axios';

const apiService = axios.create({
  baseURL: 'http://localhost:3001/api', // Replace with your backend API URL
});

export default apiService;
