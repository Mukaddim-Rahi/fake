// services/authService.js
import apiService from './apiService';

const authService = {
  async login(email, password) {
    try {
      const response = await apiService.post('/login', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  async signup(email, password) {
    try {
      const response = await apiService.post('/signup', { email, password });
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default authService;
