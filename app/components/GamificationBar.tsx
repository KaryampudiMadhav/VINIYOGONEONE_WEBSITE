'use client';

import { useTheme } from '../contexts/ThemeContext';
import { useAuth } from '../contexts/AuthContext';

export default function GamificationBar() {
  const { theme } = useTheme();
  const { user } = useAuth();

  // Calculate level and XP progress
  const totalXP = user?.totalXP || 0;
  const level = user?.level || 1;
  const credits = user?.credits || 0;
  const badges = user?.badgesCount || 0;
  
  // XP required for next level (100 XP per level)
  const xpPerLevel = 100;
  const currentLevelXP = (level - 1) * xpPerLevel;
  const nextLevelXP = level * xpPerLevel;
  const xpInCurrentLevel = totalXP - currentLevelXP;
  const xpProgress = Math.min((xpInCurrentLevel / xpPerLevel) * 100, 100);

  return (
    <div className={`fixed top-[64px] sm:top-[73px] left-0 right-0 z-40 backdrop-blur-md border-b ${theme === 'dark' ? 'bg-[#0a0a0f]/95 border-white/10' : 'bg-white/95 border-gray-200'}`}>
      <div className="px-3 sm:px-6 py-2 sm:py-3">
        {/* Mobile Layout */}
        <div className="flex flex-col sm:hidden gap-2">
          {/* Level & XP */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-purple-pink rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Lvl {level}</span> / 100
                </span>
                <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{xpInCurrentLevel} / {xpPerLevel} XP</span>
              </div>
              <div className={`h-2 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'}`}>
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${xpProgress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-around py-1">
            {/* Badges */}
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Badges</div>
                <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{badges}</div>
              </div>
            </div>

            {/* Credits (Coins) */}
            <div className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Coins</div>
                <div className={`text-sm font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{credits}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet/Desktop Layout */}
        <div className="hidden sm:flex items-center justify-between gap-4 md:gap-8">
          {/* Level & XP - Full Width */}
          <div className="flex items-center gap-3 md:gap-4 flex-1">
            <div className="w-10 h-10 md:w-12 md:h-12 gradient-purple-pink rounded-xl flex items-center justify-center">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span className={`font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Level {level}</span> / 100
                </span>
                <span className={`text-xs sm:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{xpInCurrentLevel} / {xpPerLevel} XP</span>
              </div>
              <div className={`h-2.5 md:h-3 rounded-full overflow-hidden ${theme === 'dark' ? 'bg-white/10' : 'bg-gray-200'}`}>
                <div className="h-full bg-gradient-to-r from-cyan-400 to-blue-500" style={{ width: `${xpProgress}%` }}></div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="flex items-center gap-4 md:gap-6">
            {/* Badges */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-orange-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <span className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{badges}</span>
            </div>

            {/* Credits (Coins) */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <div className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>Coins</div>
                <div className={`text-base md:text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>{credits}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
