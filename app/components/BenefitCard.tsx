'use client';

import React from 'react';

interface BenefitCardProps {
  emoji: string;
  title: string;
  description: string;
  theme: 'dark' | 'light';
}

export default function BenefitCard({ emoji, title, description, theme }: BenefitCardProps) {
  return (
    <div className={`rounded-2xl border p-8 transition-all hover:scale-105 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10 hover:border-purple-500/50' : 'bg-white border-gray-200 hover:border-purple-400'}`}>
      <div className="text-5xl mb-4">{emoji}</div>
      <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
        {title}
      </h3>
      <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
        {description}
      </p>
    </div>
  );
}
