export interface UserStats {
  streak: number;
  lastCheckIn: number;
  totalCheckIns: number;
}

export interface WalletState {
  address: string | null;
  chainId: string | null;
  isConnected: boolean;
}
