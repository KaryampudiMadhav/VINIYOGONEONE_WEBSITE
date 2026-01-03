'use client';

import { useTheme } from '../contexts/ThemeContext';

interface ToolCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  bgColor: string;
}

export default function ToolCard({ icon, title, description, bgColor }: ToolCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-2xl p-6 lg:p-8 border transition-all group ${
      theme === 'dark' 
        ? 'bg-[#1a1a2e] border-white/5 hover:border-white/10' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      <div className={`w-14 h-14 ${bgColor} rounded-2xl flex items-center justify-center mb-6`}>
        {icon}
      </div>
      <h3 className={`text-xl lg:text-2xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{title}</h3>
      <p className={`mb-6 text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{description}</p>
      <button className="text-purple-400 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
        Calculate
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
