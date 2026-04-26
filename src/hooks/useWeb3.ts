import { useState, useEffect, useCallback } from 'react';
import { CELO_CHAIN_ID } from '../utils/constants';
import { type Eip1193Provider } from 'ethers';

interface MiniPayProvider extends Eip1193Provider {
  isMiniPay?: boolean;
}

/**
 * Core Web3 hook for managing Celo network connectivity and account state.
 * Specifically optimized for MiniPay detection and gas abstraction support.
 * 
 * @returns {object} Web3 state and connection utilities.
 * @property {string | null} account - The currently connected wallet address.
 * @property {boolean} isMiniPay - Whether the user is browsing via the MiniPay mobile wallet.
 * @property {number | null} chainId - The current blockchain network ID.
 * @property {boolean} isWrongNetwork - True if the connected network is not Celo Mainnet.
 * @property {Eip1193Provider | null} provider - The underlying Ethereum provider.
 * @property {Function} connect - Function to initiate wallet connection.
 */
export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const [provider, setProvider] = useState<Eip1193Provider | null>(null);

  const checkNetwork = useCallback((id: string | number) => {
    const networkId = typeof id === 'string' ? parseInt(id, 16) : id;
    setChainId(networkId);
    setIsWrongNetwork(networkId !== CELO_CHAIN_ID);
  }, []);

  const handleAccountsChanged = useCallback((accounts: string[]) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
    } else {
      setAccount(null);
    }
  }, []);

  const handleChainChanged = useCallback((id: string) => {
    checkNetwork(id);
    if (typeof window !== 'undefined') {
      window.location.reload();
    }
  }, [checkNetwork]);

  const connect = useCallback(async (walletProvider: Eip1193Provider) => {
    if (!walletProvider) return;
    
    try {
      const accounts = await walletProvider.request({ method: "eth_requestAccounts" }) as string[];
      const currentChainId = await walletProvider.request({ method: "eth_chainId" }) as string;
      
      setProvider(walletProvider);
      handleAccountsChanged(accounts);
      checkNetwork(currentChainId);

      const providerWithEvents = walletProvider as { on?: (event: string, cb: (...args: unknown[]) => void) => void };
      if (providerWithEvents.on) {
        providerWithEvents.on('accountsChanged', handleAccountsChanged);
        providerWithEvents.on('chainChanged', handleChainChanged);
      }

    } catch (error) {
      console.error('Connection failed', error);
    }
  }, [handleAccountsChanged, handleChainChanged, checkNetwork]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const eth = window.ethereum as MiniPayProvider | undefined;
      if (eth?.isMiniPay) {
        setTimeout(() => setIsMiniPay(true), 0);
      }
    }
  }, []);

  return { 
    account, 
    isMiniPay, 
    chainId, 
    isWrongNetwork, 
    provider, 
    connect 
  };
};
