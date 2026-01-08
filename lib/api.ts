// API Configuration and Utilities

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

export const apiConfig = {
  baseURL: API_URL,
  endpoints: {
    // Auth endpoints
    signup: '/api/auth/signup',
    login: '/api/auth/login',
    sendOTP: '/api/auth/send-otp',
    verifyOTP: '/api/auth/verify-otp',
    googleAuth: '/api/auth/google',
    logout: '/api/auth/logout',
    
    // User endpoints
    profile: '/api/users/profile',
    updateProfile: '/api/users/profile',
    
    // Streak endpoints
    getStreak: '/api/streak',
    updateStreak: '/api/streak/update',
    getHistory: '/api/streak/history',
  }
};

// Helper function to make API calls with credentials
export const apiClient = {
  async get(endpoint: string, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    return this.handleResponse(response);
  },

  async post(endpoint: string, data?: any, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse(response);
  },

  async put(endpoint: string, data?: any, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse(response);
  },

  async delete(endpoint: string, options = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      ...options,
    });
    return this.handleResponse(response);
  },

  async handleResponse(response: Response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: 'An error occurred',
      }));
      throw new Error(error.message || `HTTP error! status: ${response.status}`);
    }
    return response.json();
  },
};

export default apiClient;
