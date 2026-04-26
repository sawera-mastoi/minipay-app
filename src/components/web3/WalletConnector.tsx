import React from 'react';
import { Button } from '../ui';

export const WalletConnector = ({ onConnect }: { onConnect: (type: string) => void }) => {
  return (
    <div className='grid gap-3'>
      <Button onClick={() => onConnect('OKX')} variant='secondary' className='justify-start w-full'>
        OKX Wallet
      </Button>
      <Button onClick={() => onConnect('BITGET')} variant='secondary' className='justify-start w-full'>
        Bitget Wallet
      </Button>
      <Button onClick={() => onConnect('METAMASK')} variant='secondary' className='justify-start w-full'>
        MetaMask / MiniPay
      </Button>
    </div>
  );
};
