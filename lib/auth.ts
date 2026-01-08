// Authentication utilities
import apiClient, { apiConfig, tokenManager } from './api';

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otp: string;
}

export interface LoginData {
  email: string;
  password?: string;
  otp?: string;
}

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  isEmailVerified: boolean;
  credits: number;
  currentStreak: number;
  longestStreak: number;
  totalXP: number;
  level: number;
  badgesCount: number;
  lastLoginDate: string | null;
  phoneNumber?: string;
  dateOfBirth?: string;
}

export const authService = {
  // Send OTP for email verification
  async sendOTP(email: string, purpose: 'signup' | 'login' | 'reset-password' = 'signup') {
    return apiClient.post(apiConfig.endpoints.sendOTP, { email, purpose });
  },

  // Verify OTP
  async verifyOTP(email: string, otp: string, purpose: string) {
    return apiClient.post(apiConfig.endpoints.verifyOTP, { email, otp, purpose });
  },

  // Resend verification email
  async resendVerification(email: string) {
    return apiClient.post(apiConfig.endpoints.resendVerification, { email });
  },

  // Register new user
  async signup(data: SignupData) {
    const response = await apiClient.post(apiConfig.endpoints.signup, data);
    if (response.success && response.data) {
      tokenManager.setToken(response.data.token);
      tokenManager.setRefreshToken(response.data.refreshToken);
      tokenManager.saveUser(response.data.user);
    }
    return response;
  },

  // Login user
  async login(data: LoginData) {
    const response = await apiClient.post(apiConfig.endpoints.login, data);
    if (response.success && response.data) {
      tokenManager.setToken(response.data.token);
      tokenManager.setRefreshToken(response.data.refreshToken);
      tokenManager.saveUser(response.data.user);
    }
    return response;
  },

  // Forgot password
  async forgotPassword(email: string) {
    return apiClient.post(apiConfig.endpoints.forgotPassword, { email });
  },

  // Reset password
  async resetPassword(email: string, otp: string, newPassword: string) {
    return apiClient.post(apiConfig.endpoints.resetPassword, { email, otp, newPassword });
  },

  // Get current user
  async getCurrentUser() {
    return apiClient.get(apiConfig.endpoints.me);
  },

  // Refresh token
  async refreshToken() {
    const refreshToken = tokenManager.getRefreshToken();
    if (!refreshToken) throw new Error('No refresh token available');
    
    const response = await apiClient.post(apiConfig.endpoints.refreshToken, { refreshToken });
    if (response.success && response.data) {
      tokenManager.setToken(response.data.token);
      tokenManager.setRefreshToken(response.data.refreshToken);
    }
    return response;
  },

  // Logout user
  async logout() {
    try {
      await apiClient.post(apiConfig.endpoints.logout);
    } finally {
      tokenManager.removeTokens();
    }
  },
  
  // Check if user is authenticated
  isAuthenticated() {
    return !!tokenManager.getToken();
  },
  
  // Get OAuth providers status
  async getOAuthStatus() {
    return apiClient.get(apiConfig.endpoints.oauthStatus);
  },

  // Get current user profile
  async getProfile(): Promise<User> {
    return apiClient.get(apiConfig.endpoints.profile);
  },

  // Update user profile
  async updateProfile(data: Partial<User>) {
    return apiClient.put(apiConfig.endpoints.updateProfile, data);
  },
};

export default authService;
