'use client';

import React from 'react';

interface InfoCardProps {
  icon: React.ReactNode;
  iconBgColor: string;
  iconColor: string;
  title: string;
  description: string;
  theme: 'dark' | 'light';
}

export default function InfoCard({ icon, iconBgColor, iconColor, title, description, theme }: InfoCardProps) {
  return (
    <div className={`rounded-2xl border p-8 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
      <div className={`w-16 h-16 ${iconBgColor} rounded-2xl flex items-center justify-center ${iconColor} mb-6`}>
        {icon}
      </div>
      <h3 className={`text-2xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
