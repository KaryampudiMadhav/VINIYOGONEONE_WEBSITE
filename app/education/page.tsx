"use client";

import Navbar from "../components/Navbar";
import GamificationBar from "../components/GamificationBar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function EducationPage() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <GamificationBar />
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        {/* Hero Section */}
        <section className="relative pt-60 pb-40 px-6 overflow-hidden">
          {/* Background Gradient */}
          <div className="absolute inset-0 hero-gradient"></div>
          
          {/* Diagonal Light Rays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-linear-to-b from-transparent via-purple-400 to-transparent rotate-12 blur-sm"></div>
            <div className="absolute top-0 left-1/3 w-1 h-full bg-linear-to-b from-transparent via-pink-400 to-transparent rotate-12 blur-sm"></div>
            <div className="absolute top-0 right-1/4 w-1 h-full bg-linear-to-b from-transparent via-purple-400 to-transparent -rotate-12 blur-sm"></div>
          </div>

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            {/* Viniyog Academy Badge */}
            <div className="inline-block mb-6">
              <span className="px-6 py-2 bg-purple-600/30 border border-purple-400/50 rounded-full text-purple-200 text-sm font-medium">
                Viniyog Academy
              </span>
            </div>

            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Money is a skill. We help you practice it.
            </h1>
            <p className={`text-xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Learn at your own pace with bite-sized lessons designed for real-life clarity.
            </p>
            
            <button className="px-8 py-4 rounded-full gradient-purple-pink text-white font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mx-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              Start Learning
            </button>
          </div>
        </section>

        {/* Learning Paths Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Learning Paths
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Structured courses to master investing
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Money Basics Path */}
              <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-14 h-14 bg-green-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="inline-block px-3 py-1 bg-green-500/20 rounded-full text-green-400 text-xs font-medium mb-4">
                  Beginner
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Money Basics
                </h3>
                <p className={`mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Start from zero. Learn budgeting, saving, and basic investing concepts.
                </p>
                
                <div className={`space-y-2 mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    12 short lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    ~30 mins total
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Beginner badge
                  </div>
                </div>

                <button className="w-full py-3 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors">
                  Start Path
                </button>
              </div>

              {/* Smart Investing Path */}
              <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="inline-block px-3 py-1 bg-blue-500/20 rounded-full text-blue-400 text-xs font-medium mb-4">
                  Intermediate
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Smart Investing
                </h3>
                <p className={`mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Understand SIPs, mutual funds, stocks, and building a diversified portfolio.
                </p>
                
                <div className={`space-y-2 mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    18 lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    ~1 hour total
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Investor badge
                  </div>
                </div>

                <button className="w-full py-3 rounded-full bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
                  Start Path
                </button>
              </div>

              {/* Wealth Building Path */}
              <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4">
                  <svg className="w-7 h-7 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="inline-block px-3 py-1 bg-purple-500/20 rounded-full text-purple-400 text-xs font-medium mb-4">
                  Advanced
                </div>
                <h3 className={`text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Wealth Building
                </h3>
                <p className={`mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Tax planning, retirement, real estate, and advanced strategies.
                </p>
                
                <div className={`space-y-2 mb-6 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    24 lessons
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    ~90 mins total
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    Wealth Builder badge
                  </div>
                </div>

                <button className="w-full py-3 rounded-full gradient-purple-pink hover:opacity-90 text-white font-semibold transition-opacity">
                  Start Path
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Learning Made Simple Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Learning Made Simple
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Beginner-friendly lessons
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  No jargon. No pressure. Just clear explanations that make sense.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Short, practical modules
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  5-10 minute lessons you can complete during a coffee break.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-pink-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Live & recorded sessions
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Learn live with experts or watch recordings at your pace.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Lessons Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-10">
              <div>
                <h2 className={`text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Quick Lessons
                </h2>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bite-sized content for busy learners
                </p>
              </div>
              <button className={`px-6 py-2 rounded-full font-medium ${theme === 'dark' ? 'text-purple-400 hover:text-purple-300' : 'text-purple-600 hover:text-purple-700'}`}>
                View All →
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Lesson 1 */}
              <div className={`rounded-2xl border p-6 flex items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Understanding SIPs
                  </h3>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Learn how systematic investing builds wealth over time
                  </p>
                  <div className={`flex items-center gap-4 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      8 min
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      12,450 enrolled
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors">
                  Start
                </button>
              </div>

              {/* Lesson 2 */}
              <div className={`rounded-2xl border p-6 flex items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Emergency Fund Basics
                  </h3>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Why you need it and how to build one
                  </p>
                  <div className={`flex items-center gap-4 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      6 min
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      10,339 enrolled
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors">
                  Start
                </button>
              </div>

              {/* Lesson 3 */}
              <div className={`rounded-2xl border p-6 flex items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Mutual Funds Explained
                  </h3>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Demystify mutual funds in simple terms
                  </p>
                  <div className={`flex items-center gap-4 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      10 min
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      8,940 enrolled
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors">
                  Start
                </button>
              </div>

              {/* Lesson 4 */}
              <div className={`rounded-2xl border p-6 flex items-center gap-4 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Tax Saving Investments
                  </h3>
                  <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Smart ways to save tax under Section 80C
                  </p>
                  <div className={`flex items-center gap-4 text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      7 min
                    </span>
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                      </svg>
                      6,870 enrolled
                    </span>
                  </div>
                </div>
                <button className="px-6 py-2 rounded-full bg-green-500 hover:bg-green-600 text-white text-sm font-semibold transition-colors">
                  Start
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Track Your Progress Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Track Your Progress
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Build habits, earn rewards, unlock achievements
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Learning Badges */}
              <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Learning Badges
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className={`rounded-xl p-4 text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                    <div className="text-3xl mb-2">🎖️</div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>First Step</p>
                  </div>
                  <div className={`rounded-xl p-4 text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                    <div className="text-3xl mb-2">🔥</div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Week Warrior</p>
                  </div>
                  <div className={`rounded-xl p-4 text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                    <div className="text-3xl mb-2">👑</div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Knowledge King</p>
                  </div>
                  <div className={`rounded-xl p-4 text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                    <div className="text-3xl mb-2">⚡</div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Streak King</p>
                  </div>
                  <div className={`rounded-xl p-4 text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                    <div className="text-3xl mb-2">💎</div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Diamond</p>
                  </div>
                  <div className={`rounded-xl p-4 text-center ${theme === 'dark' ? 'bg-gray-700/30' : 'bg-gray-100'}`}>
                    <div className="text-3xl mb-2">🏆</div>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Champion</p>
                  </div>
                </div>
              </div>

              {/* Completion Streaks */}
              <div className={`rounded-3xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <h3 className={`text-2xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Completion Streaks
                </h3>
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-4">
                    <svg className="w-5 h-5 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                    </svg>
                    <span className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Current Streak</span>
                    <span className="ml-auto text-2xl font-bold text-orange-500">7 days</span>
                  </div>
                  <p className={`text-sm mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    3 more days to unlock &quot;10-Day Master&quot; badge
                  </p>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                      <div key={day} className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
