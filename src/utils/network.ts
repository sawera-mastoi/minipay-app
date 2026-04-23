import { CELO_CHAIN_ID, ALF AJORES_CHAIN_ID } from './constants';

/**
 * Checks if the given chain ID is a supported Celo network.
 * @param chainId The chain ID to check.
 * @returns True if supported, false otherwise.
 */
export const isSupportedNetwork = (chainId: number | string): boolean => {
  const id = typeof chainId === 'string' ? parseInt(chainId, 16) : chainId;
  return id === CELO_CHAIN_ID || id === ALF AJORES_CHAIN_ID;
};

/**
 * Returns the network name for a given chain ID.
 * @param chainId The chain ID.
 * @returns The human-readable network name.
 */
export const getNetworkName = (chainId: number | string): string => {
  const id = typeof chainId === 'string' ? parseInt(chainId, 16) : chainId;
  if (id === CELO_CHAIN_ID) return 'Celo Mainnet';
  if (id === ALF AJORES_CHAIN_ID) return 'Celo Alfajores';
  return 'Unsupported Network';
};
