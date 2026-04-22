import React from 'react';
import { Container } from './Container';

export const Footer = () => {
  return (
    <footer className='border-t border-white/5 bg-neutral-950 py-12'>
      <Container className='text-center text-neutral-500 text-sm'>
        © 2026 MiniPay Streak. Built for Celo Proof of Ship.
      </Container>
    </footer>
  );
};
