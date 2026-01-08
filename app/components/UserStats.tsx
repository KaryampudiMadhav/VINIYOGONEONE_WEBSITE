"use client";

import { useAuth } from "../contexts/AuthContext";

export function UserStats() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
      {/* Current Streak */}
      <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">🔥</span>
          <span className="text-xs font-medium uppercase tracking-wide opacity-90">
            Current Streak
          </span>
        </div>
        <div className="text-3xl font-bold">{user.currentStreak || 0}</div>
        <div className="text-xs opacity-75 mt-1">days in a row</div>
      </div>

      {/* Credits */}
      <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">💎</span>
          <span className="text-xs font-medium uppercase tracking-wide opacity-90">
            Credits
          </span>
        </div>
        <div className="text-3xl font-bold">{user.credits || 0}</div>
        <div className="text-xs opacity-75 mt-1">available balance</div>
      </div>

      {/* Total XP */}
      <div className="bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">⚡</span>
          <span className="text-xs font-medium uppercase tracking-wide opacity-90">
            Total XP
          </span>
        </div>
        <div className="text-3xl font-bold">{user.totalXP || 0}</div>
        <div className="text-xs opacity-75 mt-1">experience points</div>
      </div>

      {/* Level */}
      <div className="bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl p-6 text-white shadow-lg transform hover:scale-105 transition-transform">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-3xl">🏆</span>
          <span className="text-xs font-medium uppercase tracking-wide opacity-90">
            Level
          </span>
        </div>
        <div className="text-3xl font-bold">{user.level || 1}</div>
        <div className="text-xs opacity-75 mt-1">current rank</div>
      </div>
    </div>
  );
}
