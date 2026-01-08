// Authentication utilities
import apiClient, { apiConfig } from './api';

export interface SignupData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  otp: string;
}

export interface LoginData {
  email: string;
  password: string;
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
  badges: any[];
}

export const authService = {
  // Send OTP for email verification
  async sendOTP(email: string) {
    return apiClient.post(apiConfig.endpoints.sendOTP, { email });
  },

  // Verify OTP
  async verifyOTP(email: string, otp: string) {
    return apiClient.post(apiConfig.endpoints.verifyOTP, { email, otp });
  },

  // Register new user
  async signup(data: SignupData) {
    return apiClient.post(apiConfig.endpoints.signup, data);
  },

  // Login user
  async login(data: LoginData) {
    return apiClient.post(apiConfig.endpoints.login, data);
  },

  // Logout user
  async logout() {
    return apiClient.post(apiConfig.endpoints.logout);
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
