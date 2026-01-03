'use client';

import { useTheme } from '../contexts/ThemeContext';

interface QuestionItemProps {
  icon: React.ReactNode;
  text: string;
}

export default function QuestionItem({ icon, text }: QuestionItemProps) {
  const { theme } = useTheme();
  
  return (
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
        {icon}
      </div>
      <p className={`text-base lg:text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{text}</p>
    </div>
  );
}
