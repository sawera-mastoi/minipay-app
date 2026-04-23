/**
 * Blockchain and Application Constants
 */

export const CELO_CHAIN_ID = 42220;
export const ALF AJORES_CHAIN_ID = 44787;

export const CONTRACT_ADDRESSES = {
  DAILY_STREAK: process.env.NEXT_PUBLIC_DAILY_STREAK_ADDRESS || '0x0000000000000000000000000000000000000000',
};

export const RPC_URLS = {
  CELO: 'https://forno.celo.org',
  ALFAJORES: 'https://alfajores-forno.celo-testnet.org',
};

export const APP_CONFIG = {
  NAME: 'MiniPay Streak',
  DESCRIPTION: 'Daily check-in streak rewards for Celo users.',
  MAX_STREAK_WINDOW: 48 * 60 * 60, // 48 hours in seconds
  MIN_STREAK_WINDOW: 24 * 60 * 60, // 24 hours in seconds
};

export const SOCIAL_LINKS = {
  TWITTER: 'https://twitter.com/minipay',
  GITHUB: 'https://github.com/your-username/mini-pay-app',
};
