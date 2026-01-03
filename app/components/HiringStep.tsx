'use client';

import React from 'react';

interface HiringStepProps {
  stepNumber: number;
  title: string;
  description: string;
  theme: 'dark' | 'light';
}

export default function HiringStep({ stepNumber, title, description, theme }: HiringStepProps) {
  return (
    <div className={`rounded-2xl border p-8 flex items-start gap-6 ${theme === 'dark' ? 'bg-gray-800/30 border-white/10' : 'bg-white border-gray-200'}`}>
      <div className="w-14 h-14 gradient-purple-pink rounded-full flex items-center justify-center flex-shrink-0">
        <span className="text-2xl font-bold text-white">{stepNumber}</span>
      </div>
      <div className="flex-1">
        <h3 className={`text-2xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h3>
        <p className={`text-base ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
