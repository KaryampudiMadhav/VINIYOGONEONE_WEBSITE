"use client";

import Navbar from "../components/Navbar";
import GamificationBar from "../components/GamificationBar";
import Footer from "../components/Footer";
import { useTheme } from "../contexts/ThemeContext";
import BenefitCard from "../components/BenefitCard";
import HiringStep from "../components/HiringStep";
import InfoCard from "../components/InfoCard";

export default function CareerPage() {
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

          <div className="max-w-5xl mx-auto relative z-10 text-center">
            {/* Join Our Mission Button */}
            <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-purple-600/30 backdrop-blur-sm border border-purple-500/30 mb-8">
              <svg className="w-5 h-5 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-white font-medium">Join Our Mission</span>
            </button>

            {/* Main Heading */}
            <h1 className={`text-5xl lg:text-6xl font-bold mb-6 leading-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Build the future of financial clarity
            </h1>

            {/* Subheading */}
            <p className={`text-xl mb-10 max-w-3xl mx-auto ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
              We&apos;re building a trust-first fintech for India. If you care about ethics, design, and impact — we&apos;d love to hear from you.
            </p>

            {/* CTA Button */}
            <button className="px-8 py-4 rounded-full gradient-purple-pink text-white font-semibold text-lg flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mx-auto">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              View open roles
            </button>
          </div>
        </section>

        {/* Why Join Viniyog Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Why join Viniyog?
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                More than just a job — it&apos;s a mission
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <InfoCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                }
                iconBgColor="bg-purple-500/20"
                iconColor="text-purple-300"
                title="Impact-driven work"
                description="Help millions of young Indians gain financial clarity and confidence. Your work directly changes lives."
                theme={theme}
              />
              <InfoCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                }
                iconBgColor="bg-green-500/20"
                iconColor="text-green-300"
                title="Grow with us"
                description="We're in our growth phase. Early team members get ownership, learning, and career acceleration."
                theme={theme}
              />
              <InfoCard
                icon={
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                }
                iconBgColor="bg-purple-500/20"
                iconColor="text-purple-300"
                title="Cutting-edge tech"
                description="Work with the latest in AI, machine learning, and modern web technologies to solve real problems."
                theme={theme}
              />
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Open Positions
              </h2>
            </div>

            <div className={`rounded-2xl border p-16 text-center ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
              <h3 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                No Position Available Right Now
              </h3>
            </div>
          </div>
        </section>

        {/* Our Hiring Process Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Our Hiring Process
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                Simple, respectful, and transparent
              </p>
            </div>

            <div className="space-y-4">
              <HiringStep
                stepNumber={1}
                title="Apply"
                description="Submit your application through our portal"
                theme={theme}
              />
              <HiringStep
                stepNumber={2}
                title="Screen"
                description="15-min call to understand mutual fit"
                theme={theme}
              />
              <HiringStep
                stepNumber={3}
                title="Assignment"
                description="Take-home task (paid for senior roles)"
                theme={theme}
              />
              <HiringStep
                stepNumber={4}
                title="Interviews"
                description="2-3 rounds with team members"
                theme={theme}
              />
              <HiringStep
                stepNumber={5}
                title="Offer"
                description="Decision within 2 days of final round"
                theme={theme}
              />
            </div>
          </div>
        </section>

        {/* Benefits & Perks Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className={`text-4xl lg:text-5xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Benefits & Perks
              </h2>
              <p className={`text-lg ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                We take care of our team
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitCard
                emoji="💰"
                title="Competitive Salary"
                description="Industry-leading compensation with ESOPs"
                theme={theme}
              />
              <BenefitCard
                emoji="🏥"
                title="Health Insurance"
                description="Premium health coverage for you and family"
                theme={theme}
              />
              <BenefitCard
                emoji="🏖️"
                title="Flexible PTO"
                description="Unlimited vacation days to recharge"
                theme={theme}
              />
              <BenefitCard
                emoji="💻"
                title="Remote Friendly"
                description="Work from anywhere in India"
                theme={theme}
              />
              <BenefitCard
                emoji="📚"
                title="Learning Budget"
                description="₹50,000 annual learning stipend"
                theme={theme}
              />
              <BenefitCard
                emoji="🍕"
                title="Free Meals"
                description="Daily lunch and unlimited snacks"
                theme={theme}
              />
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-white'}`}>
          <div className="max-w-5xl mx-auto">
            <div className={`rounded-3xl overflow-hidden border ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-gray-100 border-gray-200'}`}>
              {/* Team Image Placeholder */}
              <div className="aspect-video bg-linear-to-br from-gray-700 to-gray-600 flex items-center justify-center">
                <svg className="w-24 h-24 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>

              <div className="p-12 text-center">
                <h2 className={`text-3xl lg:text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  Join 50+ Passionate Team Members
                </h2>
                <p className={`text-lg mb-12 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  We&apos;re a diverse team of engineers, designers, analysts, and dreamers working together to democratize investing in India
                </p>

                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className={`text-5xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      4
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Team Members
                    </div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-blue-500 mb-2">
                      15+
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Cities Represented
                    </div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold text-green-500 mb-2">
                      10+
                    </div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                      Countries
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Don't See Right Role Section */}
        <section className={`py-20 px-6 ${theme === 'dark' ? 'bg-[#0a0a0f]' : 'bg-gray-50'}`}>
          <div className="max-w-4xl mx-auto">
            <div className="rounded-3xl p-12 text-center gradient-purple-pink">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Don&apos;t see the right role?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                We&apos;re always looking for exceptional people. Send us your profile anyway!
              </p>
              
              <button className="px-8 py-4 rounded-full bg-white text-purple-600 font-semibold text-lg hover:bg-gray-100 transition-colors">
                Send your profile
              </button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
