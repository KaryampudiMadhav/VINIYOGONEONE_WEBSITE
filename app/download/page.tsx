"use client";

import Navbar from "../components/Navbar";
import GamificationBar from "../components/GamificationBar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function DownloadPage() {
  const { theme } = useTheme();

  return (
    <>
      <Navbar />
      <GamificationBar />
      <div className={`min-h-screen ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
        {/* Hero Section */}
        <section className="relative pt-32 sm:pt-40 md:pt-48 lg:pt-60 pb-20 sm:pb-32 md:pb-40 px-4 sm:px-6 overflow-hidden">
          {/* Background GIF */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/triangle-neon-loop-video-background_7538946_small-ezgif.com-video-to-gif-converter.gif" 
              alt="Background" 
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          {/* Background Gradient */}
          <div className="absolute inset-0 hero-gradient opacity-70 z-[1]"></div>
          
          {/* Diagonal Light Rays */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-1/4 w-1 h-full bg-linear-to-b from-transparent via-purple-400 to-transparent rotate-12 blur-sm"></div>
            <div className="absolute top-0 left-1/3 w-1 h-full bg-linear-to-b from-transparent via-pink-400 to-transparent rotate-12 blur-sm"></div>
            <div className="absolute top-0 right-1/4 w-1 h-full bg-linear-to-b from-transparent via-purple-400 to-transparent -rotate-12 blur-sm"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-600/30 backdrop-blur-sm border border-purple-500/30 mb-8">
                  <svg className="w-4 h-4 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                    Will be available on iOS & Android
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  <span className={`${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Viniyog AI</span>
                  <br />
                  <span className="text-cyan-400">Coming Soon</span>
                </h1>

                <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  India&apos;s first gamified AI investing platform.
                </p>

                <button className="px-8 py-4 rounded-xl border-2 border-purple-500 text-purple-400 font-semibold text-lg flex items-center gap-2 hover:bg-purple-500/10 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                  Register Now
                </button>
              </div>

              {/* Right Content - Phone Mockup with Static COMING SOON */}
              <div className="flex justify-center lg:justify-center lg:ml-12">
                <div className="relative">
                  {/* Phone Frame - Larger Size */}
                  <div className="w-90 h-170 bg-linear-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl border-10 border-gray-900">
                    {/* Screen */}
                    <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative flex flex-col">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between px-6 pt-3 pb-2">
                        <span className="text-black text-xs font-semibold">9:41</span>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                          <svg className="w-3 h-3 text-black" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          <div className="w-6 h-3 border-2 border-black rounded-sm relative">
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-black"></div>
                          </div>
                        </div>
                      </div>

                      {/* Top Navigation Bar */}
                      <div className="px-4 py-3 flex items-center justify-between">
                        <button className="p-2">
                          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                          </svg>
                        </button>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 gradient-purple-pink rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">V</span>
                          </div>
                        </div>
                        <button className="p-2">
                          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                          </svg>
                        </button>
                      </div>

                      {/* Main Content Area with COMING SOON */}
                      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-20">
                        <div className="text-center mb-8">
                          <div className="inline-block mb-4">
                            <div className="w-20 h-20 gradient-purple-pink rounded-2xl flex items-center justify-center">
                              <span className="text-white font-bold text-3xl">V</span>
                            </div>
                          </div>
                          <h2 className="text-6xl font-extrabold mb-2" style={{background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>COMING</h2>
                          <h2 className="text-6xl font-extrabold" style={{background: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>SOON</h2>
                        </div>
                      </div>

                      {/* Bottom Input Area */}
                      <div className="px-4 pb-4">
                        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-3 border border-gray-200">
                          <button className="p-1">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                            </svg>
                          </button>
                          <input 
                            type="text" 
                            placeholder="Ask your question" 
                            className="flex-1 bg-transparent text-gray-900 text-sm outline-none placeholder-gray-500"
                            disabled
                          />
                          <button className="p-1">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                            </svg>
                          </button>
                        </div>
                      </div>

                      {/* Bottom Navigation Bar */}
                      <div className="flex items-center justify-around py-3 border-t border-gray-200">
                        <button className="flex flex-col items-center">
                          <div className="px-6 py-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-1">
                            <span className="text-white text-xs font-medium">Trading</span>
                          </div>
                        </button>
                        <button className="p-2">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </button>
                        <button className="p-2">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </button>
                        <button className="p-2">
                          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </button>
                      </div>

                      {/* Bottom Indicator */}
                      <div className="pb-2">
                        <div className="mx-auto w-32 h-1 bg-gray-300 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-linear-to-r from-purple-500 to-pink-500 rounded-[3rem] blur-3xl opacity-20 -z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Vinyog App Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Why Choose Vinyog App?
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Everything you need in one powerful app
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature 1 */}
              <div className={`rounded-2xl border p-8 text-center ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-16 h-16 gradient-purple-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  AI-Powered Insights
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Get personalized stock recommendations
                </p>
              </div>

              {/* Feature 2 */}
              <div className={`rounded-2xl border p-8 text-center ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-16 h-16 gradient-purple-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Gamification
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Earn badges and level up your skills
                </p>
              </div>

              {/* Feature 3 */}
              <div className={`rounded-2xl border p-8 text-center ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-16 h-16 gradient-purple-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Secure Trading
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Bank-grade security for your investments
                </p>
              </div>

              {/* Feature 4 */}
              <div className={`rounded-2xl border p-8 text-center ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="w-16 h-16 gradient-purple-pink rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Zero Commission
                </h3>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Invest without any hidden charges
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
