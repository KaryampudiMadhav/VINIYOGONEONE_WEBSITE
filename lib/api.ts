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
    resendVerification: '/api/auth/resend-verification',
    forgotPassword: '/api/auth/forgot-password',
    resetPassword: '/api/auth/reset-password',
    refreshToken: '/api/auth/refresh-token',
    googleAuth: '/api/auth/google',
    logout: '/api/auth/logout',
    me: '/api/auth/me',
    oauthStatus: '/api/auth/oauth-status',
    
    // User endpoints
    profile: '/api/users/profile',
    updateProfile: '/api/users/profile',
    
    // Streak endpoints
    currentStreak: '/api/streaks/current',
    streakHistory: '/api/streaks/history',
    getStreak: '/api/streaks/current',
    updateStreak: '/api/streaks/update',
    getHistory: '/api/streaks/history',
  }
};

// Token management
export const tokenManager = {
  getToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('accessToken');
    }
    return null;
  },
  
  setToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('accessToken', token);
    }
  },
  
  getRefreshToken: () => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('refreshToken');
    }
    return null;
  },
  
  setRefreshToken: (token: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('refreshToken', token);
    }
  },
  
  removeTokens: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('user');
    }
  },
  
  saveUser: (user: any) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },
  
  getUser: () => {
    if (typeof window !== 'undefined') {
      const user = localStorage.getItem('user');
      return user ? JSON.parse(user) : null;
    }
    return null;
  }
};

// Helper function to make API calls with credentials
export const apiClient = {
  getHeaders: (includeAuth = true) => {
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };
    
    if (includeAuth) {
      const token = tokenManager.getToken();
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }
    }
    
    return headers;
  },

  async get(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'GET',
      headers: this.getHeaders(),
      ...options,
    });
    return this.handleResponse(response);
  },

  async post(endpoint: string, data?: any, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: this.getHeaders(endpoint !== apiConfig.endpoints.login && endpoint !== apiConfig.endpoints.signup),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse(response);
  },

  async put(endpoint: string, data?: any, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'PUT',
      headers: this.getHeaders(),
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    return this.handleResponse(response);
  },

  async delete(endpoint: string, options: RequestInit = {}) {
    const response = await fetch(`${API_URL}${endpoint}`, {
      method: 'DELETE',
      headers: this.getHeaders(),
      ...options,
    });
    return this.handleResponse(response);
  },

  async handleResponse(response: Response) {
    const data = await response.json().catch(() => ({
      message: 'An error occurred',
      success: false
    }));
    
    if (!response.ok) {
      throw new Error(data.message || `HTTP error! status: ${response.status}`);
    }
    
    return data;
  },
};

export default apiClient;
