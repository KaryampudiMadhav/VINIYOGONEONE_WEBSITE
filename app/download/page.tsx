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
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-300'}`}>
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

              {/* Right Content - Phone Mockup with Chat Animation */}
              <div className="flex justify-center lg:justify-center lg:ml-12">
                <div className="relative">
                  {/* Phone Frame - Larger Size */}
                  <div className="w-90 h-170 bg-linear-to-b from-gray-800 to-gray-900 rounded-[3rem] p-4 shadow-2xl border-10 border-gray-900">
                    {/* Screen */}
                    <div className="w-full h-full bg-[#0a0a0f] rounded-[2.5rem] overflow-hidden relative flex flex-col">
                      {/* Status Bar */}
                      <div className="flex items-center justify-between px-6 pt-3 pb-2 bg-[#0a0a0f] border-b border-white/5">
                        <span className="text-white text-xs font-semibold">9:41</span>
                        <div className="flex items-center gap-1">
                          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                          </svg>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M17.778 8.222c-4.296-4.296-11.26-4.296-15.556 0A1 1 0 01.808 6.808c5.076-5.077 13.308-5.077 18.384 0a1 1 0 01-1.414 1.414zM14.95 11.05a7 7 0 00-9.9 0 1 1 0 01-1.414-1.414 9 9 0 0112.728 0 1 1 0 01-1.414 1.414zM12.12 13.88a3 3 0 00-4.242 0 1 1 0 01-1.415-1.415 5 5 0 017.072 0 1 1 0 01-1.415 1.415zM9 16a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                          </svg>
                          <div className="w-6 h-3 border-2 border-white rounded-sm relative">
                            <div className="absolute right-0 top-0 bottom-0 w-1 bg-white"></div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Header */}
                      <div className="px-4 py-3 bg-[#1a1a2e] border-b border-white/5 flex items-center gap-3">
                        <div className="w-10 h-10 gradient-purple-pink rounded-full flex items-center justify-center font-bold text-white">
                          V
                        </div>
                        <div>
                          <div className="text-white text-sm font-semibold">ViniyogOne AI</div>
                          <div className="text-green-400 text-xs flex items-center gap-1">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            Online
                          </div>
                        </div>
                      </div>

                      {/* Chat Messages Area with Auto-Scroll */}
                      <div className="flex-1 overflow-hidden px-4 py-4 relative">
                        <div className="space-y-3 animate-chatScroll">
                          {/* User Message 1 */}
                          <div className="flex justify-end">
                            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                              <p className="text-white text-sm">I have ₹5000, what should I do?</p>
                            </div>
                          </div>

                          {/* AI Response 1 */}
                          <div className="flex justify-start">
                            <div className="bg-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/10">
                              <p className="text-white text-sm leading-relaxed">
                                Great start! For ₹5000, I suggest a mutual fund SIP. It&apos;s simple, low-risk, and perfect for beginners. 💡
                              </p>
                            </div>
                          </div>

                          {/* User Message 2 */}
                          <div className="flex justify-end">
                            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                              <p className="text-white text-sm">Should I invest in stocks?</p>
                            </div>
                          </div>

                          {/* AI Response 2 */}
                          <div className="flex justify-start">
                            <div className="bg-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/10">
                              <p className="text-white text-sm leading-relaxed">
                                Before stocks, build an emergency fund (3-6 months expenses). Then start with index funds for diversification. 📊
                              </p>
                            </div>
                          </div>

                          {/* User Message 3 */}
                          <div className="flex justify-end">
                            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                              <p className="text-white text-sm">What&apos;s a good saving goal?</p>
                            </div>
                          </div>

                          {/* AI Response 3 */}
                          <div className="flex justify-start">
                            <div className="bg-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/10">
                              <p className="text-white text-sm leading-relaxed">
                                Aim to save 20% of your income. Start small if needed - even ₹1000/month builds discipline and grows over time! 💪
                              </p>
                            </div>
                          </div>

                          {/* User Message 4 */}
                          <div className="flex justify-end">
                            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                              <p className="text-white text-sm">How do I track my expenses?</p>
                            </div>
                          </div>

                          {/* AI Response 4 */}
                          <div className="flex justify-start">
                            <div className="bg-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/10">
                              <p className="text-white text-sm leading-relaxed">
                                Use the 50-30-20 rule: 50% needs, 30% wants, 20% savings. I can help you categorize and optimize! ✨
                              </p>
                            </div>
                          </div>

                          {/* User Message 5 */}
                          <div className="flex justify-end">
                            <div className="bg-linear-to-r from-purple-600 to-pink-600 rounded-2xl rounded-tr-sm px-4 py-2.5 max-w-[85%]">
                              <p className="text-white text-sm">Is FD a good option?</p>
                            </div>
                          </div>

                          {/* AI Response 5 */}
                          <div className="flex justify-start">
                            <div className="bg-[#1a1a2e] rounded-2xl rounded-tl-sm px-4 py-2.5 max-w-[85%] border border-white/10">
                              <p className="text-white text-sm leading-relaxed">
                                FDs are safe for short-term goals. For long-term wealth, mutual funds typically give better inflation-adjusted returns. 📈
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Chat Input */}
                      <div className="p-3 bg-[#1a1a2e] border-t border-white/5">
                        <div className="flex items-center gap-2 bg-[#0a0a0f] rounded-full px-4 py-2.5 border border-white/10">
                          <input 
                            type="text" 
                            placeholder="Ask anything about money..." 
                            className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-500"
                            disabled
                          />
                          <div className="w-8 h-8 gradient-purple-pink rounded-full flex items-center justify-center shrink-0">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white/30 rounded-full"></div>
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

        {/* Scan for Early Registration Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-5xl mx-auto">
            <div className={`rounded-3xl border p-12 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
              <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div>
                  <h2 className={`text-3xl lg:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Scan for Early Registration
                  </h2>
                  <p className={`mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Use your phone&apos;s camera to scan the QR code and download Vinyog instantly
                  </p>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Quick & Easy Setup</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>₹500 Welcome Bonus</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className={`text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>No Hidden Charges</span>
                    </div>
                  </div>
                </div>

                {/* Right Content - QR Code */}
                <div className="flex flex-col items-center">
                  <div className={`w-64 h-64 rounded-3xl flex items-center justify-center ${theme === 'dark' ? 'bg-white' : 'bg-gray-100'}`}>
                    <div className="w-48 h-48 bg-gray-900 rounded-2xl flex items-center justify-center">
                      <div className="grid grid-cols-3 gap-2 p-4">
                        {/* QR Code Pattern */}
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="w-12 h-12 bg-white rounded"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className={`mt-4 text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    Scan with your phone camera
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Users Are Saying Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                What Users Are Saying
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Join thousands of happy investors
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Testimonial 1 */}
              <div className={`rounded-2xl border p-6 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  &quot;Super beginner-friendly!&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full"></div>
                  <div>
                    <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Aman</p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Age 24</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className={`rounded-2xl border p-6 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  &quot;Finally a site that talks like I do.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full"></div>
                  <div>
                    <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Sneha</p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Age 22</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className={`rounded-2xl border p-6 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className={`mb-4 text-sm ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  &quot;I use Vinyog ONE before every decision.&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full"></div>
                  <div>
                    <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Rahul</p>
                    <p className={`text-xs ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>Age 28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-12 text-center gradient-purple-pink">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Ready to start your financial journey?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Download Vinyog ONE today and get instant access to your AI financial mentor
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
                <button className="px-8 py-4 bg-white rounded-xl text-gray-900 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  Download on<br />App Store
                </button>
                <button className="px-8 py-4 bg-white rounded-xl text-gray-900 font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  Get it on<br />Google Play
                </button>
              </div>

              <p className="text-sm text-white/80">
                Free to download • No credit card required • Available on iOS & Android
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
