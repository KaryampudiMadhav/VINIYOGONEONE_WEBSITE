'use client';

import React from 'react';
import { Target, Activity, Heart, Shield } from 'lucide-react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import GamificationBar from '../components/GamificationBar';
import { useTheme } from '../contexts/ThemeContext';

export default function AboutPage() {
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

        <div className="relative text-center max-w-5xl mx-auto z-10">
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-purple-600/30 border border-purple-400/50 rounded-full text-purple-200 text-sm font-medium">
              About Viniyog ONE
            </span>
          </div>
          <h1 className={`text-5xl md:text-7xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Built for clarity. Designed for trust.
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            Viniyog ONE is an AI-first fintech platform helping young Indians make smarter money decisions without confusion or pressure.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl mb-8">
            <Target className="w-10 h-10 text-white" />
          </div>
          <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Mission</h2>
          <p className={`text-xl max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
            To empower every young Indian with the knowledge and tools to build a financially secure future through transparent, AI-driven guidance.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Core Values</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>What drives us every day</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className={`backdrop-blur-sm border rounded-3xl p-8 hover:border-blue-500/50 transition-all ${theme === 'dark' ? 'bg-gray-800/40 border-gray-700/50' : 'bg-white border-gray-200'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl mb-6">
                <Activity className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Clarity over complexity</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                We simplify finance so everyone can understand and make confident decisions.
              </p>
            </div>

            {/* Value 2 */}
            <div className={`backdrop-blur-sm border rounded-3xl p-8 hover:border-green-500/50 transition-all ${theme === 'dark' ? 'bg-gray-800/40 border-gray-700/50' : 'bg-white border-gray-200'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Guidance over selling</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                We mentor, we don&apos;t push products. Your understanding comes first.
              </p>
            </div>

            {/* Value 3 */}
            <div className={`backdrop-blur-sm border rounded-3xl p-8 hover:border-purple-500/50 transition-all ${theme === 'dark' ? 'bg-gray-800/40 border-gray-700/50' : 'bg-white border-gray-200'}`}>
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Trust over hype</h3>
              <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                We build lasting relationships through transparency, not flashy promises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Our Story</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Milestones that define us</p>
          </div>
          
          <div className={`backdrop-blur-sm border rounded-3xl p-12 space-y-6 text-lg leading-relaxed ${theme === 'dark' ? 'bg-gray-800/40 border-gray-700/50 text-gray-300' : 'bg-white border-gray-200 text-gray-700'}`}>
            <p>
              Viniyog ONE was born from a simple observation: young Indians are hungry to learn about money, but the finance industry overwhelms them with jargon, pressure, and conflicting advice.
            </p>
            <p>
              We saw friends paralyzed by choice, family members giving contradictory advice, and countless people delaying important financial decisions because they felt confused and anxious.
            </p>
            <p>
              So we asked ourselves: What if there was a financial mentor available 24/7? One that understood your unique situation, spoke your language, and guided you without any hidden agenda?
            </p>
            <p>
              That&apos;s how Viniyog ONE came to life — an AI-powered platform that combines cutting-edge technology with human empathy to make financial literacy accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-black/20' : 'bg-gray-100'}`}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Meet Our Team</h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>The brilliant minds behind Vinyog</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="aspect-square bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-700 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Soum Chakraborty</h3>
                <p className="text-purple-400 mb-4">Founder and CEO</p>
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">in</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">𝕏</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">@</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="aspect-square bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-700 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Saikiran</h3>
                <p className="text-purple-400 mb-4">CTO & Head of Technical</p>
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">in</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">𝕏</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">@</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="aspect-square bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-700 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Pooja Kudale</h3>
                <p className="text-purple-400 mb-4">CMO & Head of Design</p>
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">in</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">𝕏</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">@</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all md:col-start-1">
              <div className="aspect-square bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-700 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Neeraj Rakhecha</h3>
                <p className="text-purple-400 mb-4">UI/UX Designer</p>
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">in</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">𝕏</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">@</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Team Member 5 */}
            <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl overflow-hidden hover:border-purple-500/50 transition-all">
              <div className="aspect-square bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                <div className="w-40 h-40 bg-gray-700 rounded-full"></div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">Madhav</h3>
                <p className="text-purple-400 mb-4">Founding Engineer</p>
                <div className="flex justify-center gap-3">
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">in</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">𝕏</span>
                  </button>
                  <button className="w-10 h-10 bg-gray-700/50 hover:bg-gray-600 rounded-lg flex items-center justify-center transition-colors">
                    <span className="text-white text-sm">@</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12">
            <div className="grid md:grid-cols-4 gap-12">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  50K+
                </div>
                <p className="text-gray-400">Happy Investors</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  ₹500Cr+
                </div>
                <p className="text-gray-400">Assets Under Management</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  4.9★
                </div>
                <p className="text-gray-400">App Store Rating</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <p className="text-gray-400">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-800/40 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Mission</h2>
            <p className="text-gray-300 text-lg mb-8">
              We&apos;re always looking for talented individuals who share our vision
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-xl transition-all transform hover:scale-105">
              View Open Positions
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
    </>
  );
}
