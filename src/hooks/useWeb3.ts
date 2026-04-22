/**
 * Custom hook for Web3 wallet interactions on Celo
 */
import { useState, useEffect } from 'react';
import { BrowserProvider } from 'ethers';

export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [provider, setProvider] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connect = async (walletProvider: any) => {
    try {
      const accounts = await walletProvider.request({ method: 'eth_requestAccounts' });
      if (accounts.length > 0) {
        setAccount(accounts[0]);
        setProvider(walletProvider);
      }
    } catch (error) {
      console.error('Connection failed', error);
    }
  };

  return { account, isMiniPay, provider, connect };
};
