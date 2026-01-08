"use client";

import Link from "next/link";
import StepCircle from "./components/StepCircle";
import StatsCard from "./components/StatsCard";
import ToolCard from "./components/ToolCard";
import TestimonialCard from "./components/TestimonialCard";
import QuestionItem from "./components/QuestionItem";
import PartnerLogo from "./components/PartnerLogo";
import Navbar from "./components/Navbar";
import GamificationBar from "./components/GamificationBar";
import Footer from "./components/Footer";
import { useTheme } from "./contexts/ThemeContext";
import { useAuth } from "./contexts/AuthContext";
import { UserStats } from "./components/UserStats";

export default function Home() {
  const { theme } = useTheme();
  const { isAuthenticated } = useAuth();

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
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-purple-600/30 backdrop-blur-sm border border-purple-500/30 mb-6 sm:mb-8">
                <svg className="w-5 h-5 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className={`font-medium text-xs sm:text-sm md:text-base ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Trusted by 50,000+ Young Investors</span>
              </div>

              {/* Main Heading */}
              <h1 className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Invest Smarter,<br />
                Grow Faster
              </h1>

              {/* Subheading */}
              <p className={`text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto lg:mx-0 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                Viniyog ONE is your AI financial mentor, built for young Indians who want clarity, not confusion.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12">
                <button className="px-6 sm:px-8 py-3 sm:py-4 rounded-full gradient-purple-pink text-white font-semibold text-base sm:text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Start Chat with Viniyog AI
                </button>
                <button className={`px-6 sm:px-8 py-3 sm:py-4 rounded-full backdrop-blur-sm border font-semibold text-base sm:text-lg flex items-center justify-center gap-2 transition-colors ${theme === 'dark' ? 'bg-gray-800/50 border-gray-600 text-white hover:bg-gray-700/50' : 'bg-white/50 border-gray-300 text-gray-900 hover:bg-white/70'}`}>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  Watch How It Works
                </button>
              </div>

              {/* Feature Badges */}
              <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start text-sm sm:text-base">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Free to start</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>No spam</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className={`font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>Secure by design</span>
                </div>
              </div>
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

      {/* Features Section */}
      <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 px-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Money feels confusing. You&apos;re not alone.
            </h2>
            <p className={`text-lg sm:text-xl px-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              Viniyog ONE helps you <span className="gradient-text font-semibold">understand before you invest.</span>
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {/* Card 1 - Understand your money */}
            <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all card-hover border ${theme === 'dark' ? 'bg-[#1a1a2e] hover:bg-[#1e1e32] border-white/5' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Understand your money</h3>
              <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Track spending, savings, and investments in one place.</p>
              <div className="w-20 sm:w-24 h-1 bg-blue-500 rounded-full"></div>
            </div>

            {/* Card 2 - Get AI insights */}
            <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all card-hover border ${theme === 'dark' ? 'bg-[#1a1a2e] hover:bg-[#1e1e32] border-white/5' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-red-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Get AI insights</h3>
              <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Ask questions. Get instant, personalised financial guidance.</p>
              <div className="w-20 sm:w-24 h-1 bg-red-500 rounded-full"></div>
            </div>

            {/* Card 3 - Behavioral Nudges */}
            <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all card-hover border ${theme === 'dark' ? 'bg-[#1a1a2e] hover:bg-[#1e1e32] border-white/5' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-green-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Behavioral Nudges</h3>
              <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Know where your money is working - and where it isn&apos;t.</p>
              <div className="w-20 sm:w-24 h-1 bg-green-500 rounded-full"></div>
            </div>

            {/* Card 4 - Learn as you go */}
            <div className={`rounded-2xl sm:rounded-3xl p-6 sm:p-8 transition-all card-hover border ${theme === 'dark' ? 'bg-[#1a1a2e] hover:bg-[#1e1e32] border-white/5' : 'bg-gray-50 hover:bg-gray-100 border-gray-200'}`}>
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-orange-500 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6">
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                </svg>
              </div>
              <h3 className={`text-xl sm:text-2xl font-bold mb-2 sm:mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Learn as you go</h3>
              <p className={`mb-3 sm:mb-4 text-sm sm:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Short lessons and real examples, not boring finance theory.</p>
              <div className="w-20 sm:w-24 h-1 bg-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <div className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full border flex items-center gap-2 text-sm ${theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>AI-Powered</span>
            </div>
            <div className={`px-6 py-3 rounded-full border flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>100% Secure</span>
            </div>
            <div className={`px-6 py-3 rounded-full border flex items-center gap-2 ${theme === 'dark' ? 'bg-gray-900/50 border-gray-700' : 'bg-gray-100 border-gray-300'}`}>
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className={`font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Made for India</span>
            </div>
          </div>
        </div>
      </section>
  <section className={`py-16 sm:py-20 md:py-24 px-4 sm:px-6 relative overflow-hidden ${theme === 'dark' ? 'bg-[#0f1420]' : 'bg-gray-100'}`}>
  <div className={`max-w-7xl mx-auto relative z-10 border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>

    {/* Heading */}
    <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 md:mb-24 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
      How Viniyog works?
    </h2>

    {/* Steps Wrapper */}
    <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-24">

      {/* STEP 1 */}
      <StepCircle
        color="purple"
        step="Step 1"
        title="Start a conversation"
        desc="Ask anything about money — no question is too basic."
        icon={
          <path d="M18 10c0 3.866-3.582 7-8 7a8.84 8.84 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7z" />
        }
      />

      {/* STEP 2 */}
      <StepCircle
        color="pink"
        step="Step 2"
        title="Get clarity-first guidance"
        desc="Simple explanations tailored to you, not sales pitches."
        icon={
          <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
        }
      />

      {/* STEP 3 */}
      <StepCircle
        color="red"
        step="Step 3"
        title="Build better money habits"
        desc="Track your learning, earn rewards, grow confident."
        icon={
          <path d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5z" />
        }
      />
    </div>
  </div>
</section>

      {/* Learning Stats Section */}
      <section className={`py-12 sm:py-16 md:py-20 px-4 sm:px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className={`max-w-6xl mx-auto border rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Learning pays off — clarity is a habit
            </h2>
            <p className={`text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              No rankings based on money or returns.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <StatsCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
                </svg>
              }
              value="7 days"
              label="Learning streak"
              color="orange"
            />
            <StatsCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                </svg>
              }
              value="24"
              label="Questions asked"
              color="blue"
            />
            <StatsCard
              icon={
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              }
              value="5"
              label="Modules completed"
              color="green"
            />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="px-8 py-4 rounded-full gradient-purple-pink text-white font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
              </svg>
              Start Learning
            </button>
          </div>
        </div>
      </section>

      {/* Helpful Tools Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0f1420]' : 'bg-gray-100'}`}>
        <div className={`max-w-6xl mx-auto border rounded-3xl p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Helpful tools — when you need them
            </h2>
            <p className={`text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Use tools to validate decisions — not replace understanding.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <ToolCard
              icon={
                <svg className="w-7 h-7 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                </svg>
              }
              title="SIP Calculator"
              description="See how regular investing grows over time"
              bgColor="bg-blue-100"
            />
            <ToolCard
              icon={
                <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4z" />
                  <path fillRule="evenodd" d="M18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" clipRule="evenodd" />
                </svg>
              }
              title="FD Calculator"
              description="Compare fixed deposit returns easily"
              bgColor="bg-green-100"
            />
            <ToolCard
              icon={
                <svg className="w-7 h-7 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              }
              title="Inflation Calculator"
              description="Understand how inflation affects your money"
              bgColor="bg-orange-100"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className={`max-w-6xl mx-auto border rounded-3xl p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              What early users say?
            </h2>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="Super beginner-friendly!"
              name="Aman"
              age={24}
              avatar="A"
            />
            <TestimonialCard
              quote="I use Viniyog ONE before every big money move.."
              name="Karan"
              age={26}
              avatar="K"
            />
            <TestimonialCard
              quote="Finally a site that talks like I do."
              name="Sneha"
              age={22}
              avatar="S"
            />
          </div>
        </div>
      </section>

      {/* AI Mentor Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0f1420]' : 'bg-gray-100'}`}>
        <div className={`max-w-6xl mx-auto border rounded-3xl p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Meet Viniyog — your 24×7 AI financial mentor
              </h2>
              <p className={`text-lg lg:text-xl mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Ask questions freely. Get simple, personalized guidance — like a calm mentor, not a salesman.
              </p>

              {/* Example Questions */}
              <div className="mb-8">
                <QuestionItem
                  icon={
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  }
                  text="Am I saving enough?"
                />
                <QuestionItem
                  icon={
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                  }
                  text="Where should I start investing?"
                />
                <QuestionItem
                  icon={
                    <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
                    </svg>
                  }
                  text="Explain SIP like I'm new."
                />
              </div>

              {/* CTA Button */}
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                <button className="px-8 py-4 rounded-full gradient-purple-pink text-white font-semibold text-lg flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                  </svg>
                  Chat with Viniyog AI
                </button>
                <div className={`flex items-center gap-2 font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  <span className="text-2xl">|</span>
                  <span className="text-lg">It&apos;s Free</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Right Content - Placeholder for visual */}
            <div className="hidden lg:flex justify-center">
              <div className="w-full h-80 bg-linear-to-br from-purple-500/20 to-pink-500/20 rounded-3xl border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-400 text-lg">AI Chat Interface</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className={`max-w-6xl mx-auto border rounded-3xl p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content - Founder */}
            <div className="flex flex-col items-center lg:items-start">
              {/* Video Placeholder */}
              <div className="w-full max-w-md bg-linear-to-br from-purple-100 to-pink-100 rounded-3xl p-12 mb-6">
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                <p className="text-center text-gray-700 font-medium mt-6 text-lg">Founder Message</p>
              </div>

              {/* Founder Info */}
              <div className="text-center lg:text-left mb-4">
                <h3 className={`text-2xl font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Soum Chakraborty</h3>
                <p className={`text-lg mb-4 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Founder</p>
                <a href="#" className="inline-flex items-center justify-center w-12 h-12 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Right Content - Mission */}
            <div>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                We built Viniyog ONE because young Indians deserve financial clarity before financial products.
              </h2>
              <p className={`text-lg lg:text-xl mb-6 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Our mission is simple: help you think clearly about money — one conversation at a time.
              </p>
              <div className="space-y-3">
                <p className={`text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>A Hustler&apos;s Journey.</p>
                <p className={`text-xl lg:text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>A Mission-Driven Startup.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0f1420]' : 'bg-gray-100'}`}>
        <div className={`max-w-6xl mx-auto border rounded-3xl p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              We believe transparency builds confidence.
            </h2>
          </div>

          {/* Partners Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            <PartnerLogo
              name="IIFL Finance"
              bgColor="bg-linear-to-br from-blue-900 to-blue-800"
              logo={<span className="text-2xl lg:text-3xl">IIFL<br/>FINANCE</span>}
            />
            <PartnerLogo
              name="SBI Mutual Fund"
              bgColor="bg-linear-to-br from-blue-600 to-blue-500"
              logo={<span className="text-xl lg:text-2xl">SBI MUTUAL FUND</span>}
            />
            <PartnerLogo
              name="SBI General"
              bgColor="bg-linear-to-br from-purple-600 to-pink-600"
              logo={<span className="text-xl lg:text-2xl">SBI general</span>}
            />
            <PartnerLogo
              name="Bharti AXA"
              bgColor="bg-linear-to-br from-blue-700 to-blue-600"
              logo={<span className="text-xl lg:text-2xl">bharti AXA</span>}
            />
            <PartnerLogo
              name="Smallcase"
              bgColor="bg-linear-to-br from-blue-600 to-blue-500"
              logo={<span className="text-xl lg:text-2xl">smallcase</span>}
            />
            <PartnerLogo
              name="TradingView"
              bgColor="bg-black"
              logo={<span className="text-xl lg:text-2xl">TradingView</span>}
            />
          </div>
        </div>
      </section>

      {/* Why Viniyog Exists Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
        <div className={`max-w-6xl mx-auto border rounded-3xl p-8 lg:p-12 ${theme === 'dark' ? 'border-white/10' : 'border-gray-300'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className={`text-4xl lg:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Why Viniyog exists.
              </h2>
              <p className={`text-lg lg:text-xl mb-8 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Finance shouldn&apos;t feel intimidating or exclusive. Viniyog was built to make money decisions
              </p>

              {/* Check Items */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`text-lg lg:text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Simple</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`text-lg lg:text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Transparent</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-500 rounded-md flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className={`text-lg lg:text-xl font-medium ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Accessible</span>
                </div>
              </div>

              <p className={`text-lg lg:text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                for India&apos;s next generation.
              </p>
            </div>

            {/* Right Content - Hero Image Placeholder */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative">
                <div className="w-80 h-80 bg-linear-to-br from-green-400 to-green-600 rounded-full opacity-20 blur-3xl absolute -bottom-10 -right-10"></div>
                <div className="relative z-10 text-center">
                  <div className="text-9xl mb-4">💸</div>
                  <div className="text-6xl">🦸</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-linear-to-br from-purple-600 via-purple-700 to-pink-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Ready to feel confident about money?
          </h2>
          <p className="text-lg lg:text-xl text-purple-100 mb-10">
            Join thousands of young Indians building better money habits with AI guidance.
          </p>
          <button className="px-10 py-5 rounded-full bg-white text-gray-900 font-bold text-lg lg:text-xl flex items-center gap-3 hover:scale-105 transition-transform mx-auto shadow-2xl">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
            </svg>
            Start Chat with Viniyog AI
          </button>
        </div>
      </section>

      <Footer />
      </div>
    </>
  );
}
