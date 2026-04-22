/**
 * Navbar.tsx component for layout structure.
 */
import { formatAddress } from '../../utils/format';
import React from 'react';
import { Container } from './Container';
import { Zap, Wallet, Bell } from 'lucide-react';
import { NotificationCenter, ThemeToggle } from '../ui';
import { Button } from '../ui/Button';

export const Navbar = ({ account }: { account?: string | null }) => {
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl'>
      <Container className='flex justify-between h-20 items-center'>
        <div className='flex items-center gap-2'>
          <Zap aria-label='MiniPay Streak Logo' className='w-6 h-6 text-yellow-500 fill-yellow-500' />
          <div className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600'>
            MiniPay Streak
          </div>
        </div>
        {account ? (
          <div className='flex items-center gap-4'>
            <ThemeToggle />
            <NotificationCenter />
           <div className='px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium'>
            {formatAddress(account)}
          </div>
        </div>
        ) : (
          <Button variant='secondary' size='sm' leftIcon={<Wallet className='w-4 h-4' />}>
            Connect
          </Button>
        )}
      </Container>
    </nav>
  );
};
