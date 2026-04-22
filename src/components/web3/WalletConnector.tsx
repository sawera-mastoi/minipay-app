import React from 'react';
import { Button, Card } from '../ui';
import { Wallet } from 'lucide-react';

export const WalletConnector = ({ onConnect }: { onConnect: (type: string) => void }) => {
  return (
    <div className='grid gap-4'>
      <Button onClick={() => onConnect('METAMASK')} variant='secondary' className='justify-start'>
        MetaMask / MiniPay
      </Button>
    </div>
  );
};
