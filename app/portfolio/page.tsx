"use client";

import Navbar from "../components/Navbar";
import GamificationBar from "../components/GamificationBar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";

export default function PortfolioPage() {
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
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Portfolio Health Check
            </h1>
            <p className={`text-xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Analyze your investments and get AI-powered insights
            </p>
          </div>
        </section>

        {/* Investment Summary Cards */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Total Invested Card */}
              <div className={`rounded-2xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Invested</p>
                    <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>₹410K</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Principal amount</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Current Value Card */}
              <div className={`rounded-2xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Current Value</p>
                    <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>₹438K</h3>
                    <p className="text-sm text-green-500 flex items-center gap-1">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                      </svg>
                      +6.71%
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Total Returns Card */}
              <div className={`rounded-2xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className={`text-sm mb-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Total Returns</p>
                    <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>₹27.5K</h3>
                    <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Unrealized gains</p>
                  </div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Health Score */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className={`rounded-2xl border p-10 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
              <div className="flex items-start gap-8">
                {/* Score Circle */}
                <div className="flex-shrink-0">
                  <div className="relative w-40 h-40">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle cx="80" cy="80" r="70" stroke={theme === 'dark' ? '#374151' : '#e5e7eb'} strokeWidth="12" fill="none" />
                      <circle cx="80" cy="80" r="70" stroke="url(#gradient)" strokeWidth="12" fill="none" strokeDasharray="439.6" strokeDashoffset="88" strokeLinecap="round" />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#a855f7" />
                          <stop offset="100%" stopColor="#ec4899" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>78</span>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Score</span>
                    </div>
                  </div>
                </div>

                {/* Health Details */}
                <div className="flex-1">
                  <h2 className={`text-3xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Portfolio Health: <span className="text-green-500">Good</span>
                  </h2>
                  <p className={`mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Your portfolio is well-balanced with good diversification. However, there are some areas for improvement to maximize returns and minimize risk.
                  </p>
                  
                  {/* Metrics */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Diversification</span>
                      <div className="flex items-center gap-3 flex-1 max-w-md ml-4">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-green-500" style={{ width: '85%' }}></div>
                        </div>
                        <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>85%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Risk Management</span>
                      <div className="flex items-center gap-3 flex-1 max-w-md ml-4">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-yellow-500" style={{ width: '72%' }}></div>
                        </div>
                        <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>72%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Growth Potential</span>
                      <div className="flex items-center gap-3 flex-1 max-w-md ml-4">
                        <div className="flex-1 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-full bg-orange-500" style={{ width: '78%' }}></div>
                        </div>
                        <span className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* AI-Powered Insights */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <h2 className={`text-4xl font-bold mb-10 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              AI-Powered Insights
            </h2>

            <div className="space-y-4">
              {/* Warning Insight */}
              <div className={`rounded-2xl border p-6 flex items-start gap-4 ${theme === 'dark' ? 'bg-yellow-900/20 border-yellow-500/30' : 'bg-yellow-50 border-yellow-200'}`}>
                <div className="w-10 h-10 bg-yellow-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-yellow-300' : 'text-yellow-800'}`}>High IT Sector Exposure</h3>
                  <p className={theme === 'dark' ? 'text-yellow-200/80' : 'text-yellow-700'}>
                    Your portfolio has 42% allocation in IT sector. Consider diversifying into other sectors.
                  </p>
                </div>
              </div>

              {/* Success Insight */}
              <div className={`rounded-2xl border p-6 flex items-start gap-4 ${theme === 'dark' ? 'bg-green-900/20 border-green-500/30' : 'bg-green-50 border-green-200'}`}>
                <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-green-300' : 'text-green-800'}`}>Good Stock Selection</h3>
                  <p className={theme === 'dark' ? 'text-green-200/80' : 'text-green-700'}>
                    All your holdings are fundamentally strong companies with good growth potential.
                  </p>
                </div>
              </div>

              {/* Info Insight */}
              <div className={`rounded-2xl border p-6 flex items-start gap-4 ${theme === 'dark' ? 'bg-purple-900/20 border-purple-500/30' : 'bg-purple-50 border-purple-200'}`}>
                <div className="w-10 h-10 bg-purple-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className={`font-bold mb-2 ${theme === 'dark' ? 'text-purple-300' : 'text-purple-800'}`}>AI Recommendation</h3>
                  <p className={theme === 'dark' ? 'text-purple-200/80' : 'text-purple-700'}>
                    Consider adding pharma and FMCG stocks to balance your portfolio risk.
                  </p>
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
