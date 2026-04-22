/**
 * Footer.tsx component for layout structure.
 */
import React from 'react';
import { Container } from './Container';
import { Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className='border-t border-white/5 bg-neutral-950 py-12'>
      <Container className='flex flex-col items-center gap-6'>
        <div className='flex gap-6'>
          <a href='#' className='text-neutral-500 hover:text-white transition-colors'><Github className='w-5 h-5' /></a>
          <a href='#' className='text-neutral-500 hover:text-white transition-colors'><Twitter className='w-5 h-5' /></a>
        </div>
        <div className='text-neutral-500 text-sm'>
          © 2026 MiniPay Streak. Built for Celo Proof of Ship.
        </div>
      </Container>
    </footer>
  );
};
