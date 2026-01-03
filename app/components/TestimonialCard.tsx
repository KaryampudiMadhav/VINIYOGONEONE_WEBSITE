'use client';

import { useTheme } from '../contexts/ThemeContext';

interface TestimonialCardProps {
  quote: string;
  name: string;
  age: number;
  avatar: string;
}

export default function TestimonialCard({ quote, name, age, avatar }: TestimonialCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-3xl p-6 lg:p-8 border transition-all ${
      theme === 'dark' 
        ? 'bg-[#1a1a2e] border-white/10 hover:border-white/20' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      {/* Star Rating */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <p className={`text-lg lg:text-xl mb-6 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{quote}</p>

      {/* User Info */}
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg">
          {avatar}
        </div>
        <div>
          <div className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{name}</div>
          <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Age {age}</div>
        </div>
      </div>
    </div>
  );
}
