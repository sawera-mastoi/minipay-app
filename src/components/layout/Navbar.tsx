import React from 'react';
import { Container } from './Container';
import { Zap, Wallet, Sparkles } from 'lucide-react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * The primary navigation component for the MiniPay Warrior application.
 * Features a glassmorphism design, brand logo, and RainbowKit wallet connection.
 */
export const Navbar = () => {
  const pathname = usePathname();
  
  return (
    <nav className='fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/50 backdrop-blur-xl'>
      <Container className='flex justify-between h-20 items-center'>
        <Link href="/" className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
          <Zap aria-label='MiniPay Warrior Logo' className='w-8 h-8 text-yellow-500 fill-yellow-500' />
          <div className='hidden sm:block text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600'>
            MiniPay Warrior
          </div>
        </Link>

        <div className='flex items-center gap-6'>
          <div className='hidden md:flex items-center gap-6 text-sm font-medium'>
            <Link 
              href="/" 
              className={`transition-colors ${pathname === '/' ? 'text-yellow-500' : 'text-neutral-400 hover:text-white'}`}
            >
              Home
            </Link>
            <Link 
              href="/mint" 
              className={`flex items-center gap-1.5 transition-colors ${pathname === '/mint' ? 'text-yellow-500' : 'text-neutral-400 hover:text-white'}`}
            >
              <Sparkles className="w-4 h-4" />
              Mint PFP
            </Link>
          </div>
          
          <ConnectButton 
            accountStatus="avatar"
            chainStatus="icon"
            showBalance={false}
          />
        </div>
      </Container>
    </nav>
  );
};
