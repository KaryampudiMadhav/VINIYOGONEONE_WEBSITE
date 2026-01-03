'use client';

import { useTheme } from '../contexts/ThemeContext';

interface StatsCardProps {
  icon: React.ReactNode;
  value: string | number;
  label: string;
  color: "orange" | "blue" | "green";
}

const colorClasses = {
  orange: "text-orange-500",
  blue: "text-blue-500",
  green: "text-green-500",
};

export default function StatsCard({ icon, value, label, color }: StatsCardProps) {
  const { theme } = useTheme();
  
  return (
    <div className={`rounded-2xl p-8 border transition-all ${
      theme === 'dark' 
        ? 'bg-[#1a1a2e] border-white/5 hover:border-white/10' 
        : 'bg-white border-gray-200 hover:border-gray-300'
    }`}>
      <div className={`${colorClasses[color]} mb-4 flex justify-center`}>
        {icon}
      </div>
      <div className="text-center">
        <div className={`text-4xl lg:text-5xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{value}</div>
        <div className={`text-sm lg:text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{label}</div>
      </div>
    </div>
  );
}
