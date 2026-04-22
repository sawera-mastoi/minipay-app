import React from 'react';
import { Container } from './Container';

export const Navbar = () => {
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl'>
      <Container className='flex justify-between h-20 items-center'>
        <div className='text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600'>
          MiniPay Streak
        </div>
      </Container>
    </nav>
  );
};
