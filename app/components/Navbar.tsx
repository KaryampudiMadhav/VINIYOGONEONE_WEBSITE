'use client';

import Link from 'next/link';
import { useTheme } from '../contexts/ThemeContext';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-[#0a0a0f]/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 sm:w-10 sm:h-10 gradient-purple-pink rounded-lg flex items-center justify-center font-bold text-lg sm:text-xl">
            V
          </div>
        </Link>

        {/* Navigation Links - Desktop */}
        <div className="hidden lg:flex items-center gap-1 xl:gap-2">
          <Link 
            href="/" 
            className={`px-3 xl:px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm xl:text-base ${
              isActive('/') 
                ? 'gradient-purple-pink text-white' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Home
          </Link>
          <Link 
            href="/about" 
            className={`px-3 xl:px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm xl:text-base ${
              isActive('/about') 
                ? 'gradient-purple-pink text-white' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            About
          </Link>
          <Link 
            href="/portfolio" 
            className={`px-3 xl:px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm xl:text-base ${
              isActive('/portfolio') 
                ? 'gradient-purple-pink text-white' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            Portfolio
          </Link>
          <Link 
            href="/education" 
            className={`px-3 xl:px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm xl:text-base ${
              isActive('/education') 
                ? 'gradient-purple-pink text-white' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            Education
          </Link>
          <Link 
            href="/career" 
            className={`px-3 xl:px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm xl:text-base ${
              isActive('/career') 
                ? 'gradient-purple-pink text-white' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Career
          </Link>
          <Link 
            href="/download" 
            className={`px-3 xl:px-6 py-2.5 rounded-full font-medium flex items-center gap-2 transition-colors text-sm xl:text-base ${
              isActive('/download') 
                ? 'gradient-purple-pink text-white' 
                : theme === 'dark' 
                  ? 'text-gray-300 hover:text-white' 
                  : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download
          </Link>
        </div>

        {/* Auth Buttons & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Dark/Light Mode Toggle */}
          <button 
            onClick={toggleTheme}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
          
          {/* Desktop Auth Buttons */}
          <Link href="/login" className="hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 rounded-full gradient-purple-pink text-white font-medium hover:opacity-90 transition-opacity text-sm lg:text-base">
            Log in
          </Link>
          <Link href="/signup" className={`hidden md:block px-4 lg:px-6 py-2 lg:py-2.5 rounded-full border font-medium transition-colors text-sm lg:text-base ${theme === 'dark' ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'}`}>
            Sign up
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-colors ${theme === 'dark' ? 'bg-white/5 hover:bg-white/10' : 'bg-gray-100 hover:bg-gray-200'}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className={`w-5 h-5 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className={`lg:hidden border-t ${theme === 'dark' ? 'bg-[#0a0a0f]/98 border-white/10' : 'bg-white/98 border-gray-200'}`}>
          <div className="px-4 py-4 space-y-2">
            <Link 
              href="/" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/') ? 'gradient-purple-pink text-white' : theme === 'dark' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/about') ? 'gradient-purple-pink text-white' : theme === 'dark' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              About
            </Link>
            <Link 
              href="/portfolio" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/portfolio') ? 'gradient-purple-pink text-white' : theme === 'dark' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Portfolio
            </Link>
            <Link 
              href="/education" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/education') ? 'gradient-purple-pink text-white' : theme === 'dark' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Education
            </Link>
            <Link 
              href="/career" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/career') ? 'gradient-purple-pink text-white' : theme === 'dark' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Career
            </Link>
            <Link 
              href="/download" 
              onClick={() => setIsMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-lg font-medium transition-colors ${isActive('/download') ? 'gradient-purple-pink text-white' : theme === 'dark' ? 'text-gray-300 hover:bg-white/5' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              Download
            </Link>
            
            {/* Mobile Auth Buttons */}
            <div className="pt-4 space-y-2 border-t ${theme === 'dark' ? 'border-white/10' : 'border-gray-200'}">
              <Link 
                href="/login" 
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg gradient-purple-pink text-white font-medium text-center"
              >
                Log in
              </Link>
              <Link 
                href="/signup" 
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg border font-medium text-center ${theme === 'dark' ? 'border-white/20 text-white' : 'border-gray-300 text-gray-900'}`}
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
