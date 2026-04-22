import React from 'react';
import { Button } from '../ui';

export const CheckInButton = ({ isLoading, onClick, account }: { isLoading: boolean, onClick: () => void, account: string | null }) => {
  return (
    <Button 
      onClick={onClick} 
      isLoading={isLoading} 
      className='w-full py-6 text-xl'
      disabled={!account}
    >
      {isLoading ? 'Confirming...' : account ? 'Check In Now' : 'Connect to Check In'}
    </Button>
  );
};
