// Streak and gamification utilities
import apiClient, { apiConfig } from './api';

export interface StreakData {
  currentStreak: number;
  longestStreak: number;
  lastActiveDate: string;
  isActiveToday: boolean;
}

export interface StreakHistory {
  id: string;
  date: string;
  streakCount: number;
  eventType: string;
}

export const streakService = {
  // Get current streak information
  async getStreak(): Promise<StreakData> {
    return apiClient.get(apiConfig.endpoints.getStreak);
  },

  // Update streak (mark activity for today)
  async updateStreak() {
    return apiClient.post(apiConfig.endpoints.updateStreak);
  },

  // Get streak history
  async getHistory(): Promise<StreakHistory[]> {
    return apiClient.get(apiConfig.endpoints.getHistory);
  },
};

export default streakService;
