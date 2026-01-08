"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { authService, User } from '@/lib/auth';
import { tokenManager } from '@/lib/api';
import { useRouter } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password?: string, otp?: string) => Promise<void>;
  signup: (data: any) => Promise<void>;
  logout: () => Promise<void>;
  refreshUser: () => Promise<void>;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Load user from localStorage on mount
  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = tokenManager.getUser();
        const token = tokenManager.getToken();
        
        if (storedUser && token) {
          setUser(storedUser);
          // Optionally fetch fresh user data
          try {
            const response = await authService.getCurrentUser();
            if (response.success && response.data) {
              setUser(response.data.user);
              tokenManager.saveUser(response.data.user);
            }
          } catch (error) {
            // Token expired or invalid - clear everything
            console.log('Token expired or invalid, clearing session');
            setUser(null);
            tokenManager.removeTokens();
          }
        }
      } catch (error) {
        console.error('Failed to load user:', error);
        setUser(null);
        tokenManager.removeTokens();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password?: string, otp?: string) => {
    try {
      setLoading(true);
      const response = await authService.login({ email, password, otp });
      
      if (response.success && response.data) {
        setUser(response.data.user);
        router.push('/');
      } else {
        throw new Error(response.message || 'Login failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const signup = async (data: any) => {
    try {
      setLoading(true);
      const response = await authService.signup(data);
      
      if (response.success && response.data) {
        setUser(response.data.user);
        // Don't redirect here - let the signup page handle it after showing tutorial
      } else {
        throw new Error(response.message || 'Signup failed');
      }
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
    } finally {
      setUser(null);
      setLoading(false);
      router.push('/login');
    }
  };

  const refreshUser = async () => {
    try {
      const response = await authService.getCurrentUser();
      if (response.success && response.data) {
        setUser(response.data.user);
        tokenManager.saveUser(response.data.user);
      }
    } catch (error) {
      console.error('Failed to refresh user:', error);
    }
  };

  const value = {
    user,
    loading,
    login,
    signup,
    logout,
    refreshUser,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
