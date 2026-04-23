export interface UserStats {
  streak: number;
  lastCheckIn: number;
  totalCheckIns: number;
  rewardsEarned: string;
}

export interface WalletState {
  address: string | null;
  chainId: string | null;
  isConnected: boolean;
}

export interface LeaderboardEntry {
  rank: number;
  address: string;
  streak: number;
}

export type ComponentVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
export type ComponentSize = 'sm' | 'md' | 'lg';

export interface TransactionHistory {
  hash: string;
  timestamp: number;
  type: 'check-in' | 'reward';
  status: 'pending' | 'confirmed' | 'failed';
}

export interface Milestone {
  id: string;
  day: number;
  reward: string;
  isCompleted: boolean;
  title: string;
  description?: string;
}

export enum StreakStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  BROKEN = 'broken',
  COMPLETED = 'completed'
}
