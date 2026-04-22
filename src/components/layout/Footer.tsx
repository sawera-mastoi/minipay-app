/**
 * Footer component for layout structure.
 */
import React from 'react';
import { Container } from './Container';
import { SocialLinks } from './SocialLinks';

export const Footer = () => {
  return (
    <footer className='border-t border-white/5 bg-neutral-950 py-12'>
      <Container className='flex flex-col items-center gap-6'>
        <SocialLinks />
        <div className='text-neutral-500 text-sm'>
          © 2026 MiniPay Streak. Built for Celo Proof of Ship.
        </div>
      </Container>
    </footer>
  );
};
