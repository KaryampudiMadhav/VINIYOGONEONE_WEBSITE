'use client';

import { useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function AuthCallbackContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const token = searchParams.get('token');
    const refreshToken = searchParams.get('refreshToken');
    const error = searchParams.get('error');

    if (error) {
      // Handle OAuth errors with user-friendly messages
      const errorMessages: Record<string, string> = {
        'google_auth_failed': 'Google sign-in failed. Please try again.',
        'facebook_auth_failed': 'Facebook sign-in failed. Please try again.',
        'linkedin_auth_failed': 'LinkedIn sign-in failed. Please try again.',
        'twitter_auth_failed': 'Twitter sign-in failed. Please try again.',
        'instagram_auth_failed': 'Instagram sign-in failed. Please try again.',
        'auth_failed': 'Authentication failed. Please try again.'
      };
      
      const message = errorMessages[error] || 'Authentication failed. Please try again.';
      router.push(`/login?error=${encodeURIComponent(message)}`);
      return;
    }

    if (token && refreshToken) {
      try {
        // Store tokens in localStorage
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        
        // Optionally fetch user profile immediately
        fetchUserProfile(token);
        
        // Redirect to home/dashboard
        router.push('/');
      } catch (err) {
        console.error('Error saving authentication tokens:', err);
        router.push('/login?error=token_save_failed');
      }
    } else {
      // No tokens found, redirect to login
      router.push('/login?error=auth_failed');
    }
  }, [router, searchParams]);

  const fetchUserProfile = async (token: string) => {
    try {
      // Get API URL from environment variable
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      
      const response = await fetch(`${apiUrl}/api/auth/me`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        // Store user data in localStorage for quick access
        localStorage.setItem('user', JSON.stringify(data.data.user));
      }
    } catch (error) {
      console.error('Error fetching user profile:', error);
      // Non-critical error, don't block authentication
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center px-6">
      <div className="text-center">
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-purple-600/30 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Completing Authentication</h2>
        <p className="text-gray-400">Please wait while we sign you in...</p>
      </div>
    </div>
  );
}

export default function AuthCallback() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 flex items-center justify-center px-6">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-purple-600/30 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-purple-600 rounded-full animate-spin"></div>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Completing Authentication</h2>
          <p className="text-gray-400">Please wait while we sign you in...</p>
        </div>
      </div>
    }>
      <AuthCallbackContent />
    </Suspense>
  );
}
