// shared/src/services/api/authService.js

import apiClient from "./apiClient.js"; // make sure apiClient.js exists in the same folder

const authService = {
  /**
   * Login user with email and password
   */
  async login(email, password) {
    const response = await apiClient.post("/auth/login", { email, password });
    return response.data;
  },

  /**
   * Register a new user
   */
  async register(userData) {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
  },

  /**
   * Fetch logged-in user's profile
   */
  async getProfile() {
    const response = await apiClient.get("/auth/profile");
    return response.data;
  },
};

export default authService;
