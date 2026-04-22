import { useState, useEffect } from 'react';

export const useWeb3 = () => {
  const [account, setAccount] = useState<string | null>(null);
  const [isMiniPay, setIsMiniPay] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  return { account, isMiniPay };
};
