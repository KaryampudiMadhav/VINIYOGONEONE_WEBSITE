"use client";

import Link from "next/link";
import { useTheme } from "../contexts/ThemeContext";

export default function LoginPage() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen flex items-center justify-center px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
      <div className="w-full max-w-md">
        {/* Back Button */}
        <Link href="/" className={`inline-flex items-center gap-2 mb-8 transition-colors ${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </Link>

        {/* Login Card */}
        <div className={`rounded-3xl p-8 lg:p-10 ${theme === 'dark' ? 'bg-[#1a1a2e] border border-white/10' : 'bg-white border border-gray-200 shadow-lg'}`}>
          <h1 className={`text-3xl lg:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Welcome Back!</h1>
          <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Sign in to your account</p>

          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Email</label>
              <input
                type="email"
                placeholder="anonymous@xyz.com"
                className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 transition-colors ${theme === 'dark' ? 'bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400'}`}
              />
            </div>

            {/* Password Input */}
            <div>
              <label className={`block text-sm font-medium mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Password</label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className={`w-full px-4 py-3 rounded-lg focus:outline-none focus:border-purple-500 transition-colors ${theme === 'dark' ? 'bg-[#0a0a0f] border border-white/10 text-white placeholder-gray-500' : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400'}`}
                />
                <button className={`absolute right-3 top-1/2 -translate-y-1/2 transition-colors ${theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <button className="w-full py-3 rounded-full gradient-purple-pink text-white font-semibold hover:opacity-90 transition-opacity">
              Sign-in
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className={`w-full border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className={`px-4 ${theme === 'dark' ? 'bg-[#1a1a2e] text-gray-400' : 'bg-white text-gray-600'}`}>Or Continue With</span>
              </div>
            </div>

            {/* Google Sign In */}
            <button 
              onClick={() => {
                const backendUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
                window.location.href = `${backendUrl}/api/auth/google`;
              }}
              className={`w-full py-3 rounded-lg border font-medium transition-colors flex items-center justify-center gap-2 hover:bg-opacity-80 ${theme === 'dark' ? 'bg-[#0a0a0f] border-white/10 text-white hover:bg-white/5' : 'bg-gray-50 border-gray-300 text-gray-900 hover:bg-gray-100'}`}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            {/* Social Media Icons */}
            <div className="flex items-center justify-center gap-4">
              <button 
                onClick={() => alert('LinkedIn login will be available soon!')}
                disabled
                className="w-12 h-12 rounded-full bg-[#0077B5] transition-colors flex items-center justify-center opacity-40 cursor-not-allowed"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </button>
              <button 
                onClick={() => alert('🚀 OAuth login coming soon! For now, please use email verification.')}
                disabled
                className="w-12 h-12 rounded-full bg-[#1877F2] transition-colors flex items-center justify-center opacity-60 cursor-not-allowed"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              <button 
                onClick={() => alert('🚀 OAuth login coming soon! For now, please use email verification.')}
                disabled
                className="w-12 h-12 rounded-full bg-black transition-colors flex items-center justify-center opacity-60 cursor-not-allowed"
              >
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Sign Up Link */}
          <p className={`text-center mt-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
            Create a new account,{" "}
            <Link href="/signup" className={`font-medium ${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
              Sign-up Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
