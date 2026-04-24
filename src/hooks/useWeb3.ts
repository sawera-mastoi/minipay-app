import { useState, useEffect, useCallback } from 'react';
import { CELO_CHAIN_ID } from '../utils/constants';

export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [chainId, setChainId] = useState<number | null>(null);
  const [isWrongNetwork, setIsWrongNetwork] = useState(false);
  const [provider, setProvider] = useState<any>(null);

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
    window.location.reload();
  }, [checkNetwork]);

  const connect = async (walletProvider: any) => {
    if (!walletProvider) return;
    
    try {
      const accounts = await walletProvider.request({ method: 'eth_requestAccounts' });
      const currentChainId = await walletProvider.request({ method: 'eth_chainId' });
      
      setProvider(walletProvider);
      handleAccountsChanged(accounts);
      checkNetwork(currentChainId);

      // Setup listeners
      walletProvider.on('accountsChanged', handleAccountsChanged);
      walletProvider.on('chainChanged', handleChainChanged);

    } catch (error) {
      console.error('Connection failed', error);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const eth = (window as any).ethereum;
      if (eth?.isMiniPay) {
        setIsMiniPay(true);
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
