/**
 * Time utility functions for streak calculations.
 */

export const SECONDS_IN_DAY = 86400;

/**
 * Calculates the time remaining until the next check-in window.
 * @param lastCheckInTimestamp The timestamp of the last check-in (in seconds).
 * @returns Seconds remaining until the next 24-hour window opens.
 */
export const getTimeUntilNextCheckIn = (lastCheckInTimestamp: number): number => {
  const now = Math.floor(Date.now() / 1000);
  const nextAllowed = lastCheckInTimestamp + SECONDS_IN_DAY;
  return Math.max(0, nextAllowed - now);
};

/**
 * Formats seconds into a human-readable duration (HH:MM:SS).
 * @param seconds Total seconds.
 * @returns Formatted string.
 */
export const formatDuration = (seconds: number): string => {
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  return [h, m, s].map(v => v.toString().padStart(2, '0')).join(':');
};

/**
 * Checks if the streak is still valid (within 48 hours of last check-in).
 * @param lastCheckInTimestamp The timestamp of the last check-in (in seconds).
 * @returns True if active, false otherwise.
 */
export const isStreakValid = (lastCheckInTimestamp: number): boolean => {
  if (lastCheckInTimestamp === 0) return false;
  const now = Math.floor(Date.now() / 1000);
  return now <= lastCheckInTimestamp + (SECONDS_IN_DAY * 2);
};
