import React from 'react';
import { Container } from './Container';
import { Zap } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl'>
      <Container className='flex justify-between h-20 items-center'>
        <div className='flex items-center gap-2'>
          <Zap className='w-6 h-6 text-yellow-500 fill-yellow-500' />
          <div className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600'>
            MiniPay Streak
          </div>
        </div>
      </Container>
    </nav>
  );
};
