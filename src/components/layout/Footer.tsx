import React from 'react';
import { Container } from './Container';
import { SocialLinks } from './SocialLinks';
import { Zap, Shield, Cpu, Globe } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className='border-t border-white/5 bg-neutral-950 pt-20 pb-10 overflow-hidden relative'>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-500/5 blur-[120px] pointer-events-none" />
      
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 mb-20'>
          <div className='col-span-1 md:col-span-2 space-y-6'>
            <div className='flex items-center gap-2'>
              <Zap className='w-8 h-8 text-yellow-500 fill-yellow-500' />
              <span className='text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600 uppercase tracking-tighter'>
                MiniPay Warrior
              </span>
            </div>
            <p className='text-neutral-400 max-w-sm text-lg leading-relaxed'>
              The premier platform for Celo builders to showcase their on-chain reputation through AI-generated warrior PFPs and daily activity tracking.
            </p>
            <SocialLinks />
          </div>

          <div className='space-y-6'>
            <h4 className='text-white font-bold uppercase tracking-widest text-xs'>Platform</h4>
            <ul className='space-y-4 text-neutral-400 font-medium'>
              <li><Link href="/" className="hover:text-yellow-500 transition-colors">Home</Link></li>
              <li><Link href="/mint" className="hover:text-yellow-500 transition-colors">Mint PFP</Link></li>
              <li><Link href="/#leaderboard" className="hover:text-yellow-500 transition-colors">Leaderboard</Link></li>
              <li><Link href="/#streak" className="hover:text-yellow-500 transition-colors">Daily Streak</Link></li>
            </ul>
          </div>

          <div className='space-y-6'>
            <h4 className='text-white font-bold uppercase tracking-widest text-xs'>Ecosystem</h4>
            <ul className='space-y-4 text-neutral-400 font-medium'>
              <li><a href="https://celo.org" target="_blank" className="hover:text-yellow-500 transition-colors">Celo Foundation</a></li>
              <li><a href="https://minipay.to" target="_blank" className="hover:text-yellow-500 transition-colors">MiniPay Wallet</a></li>
              <li><a href="https://celoscan.io" target="_blank" className="hover:text-yellow-500 transition-colors">CeloScan</a></li>
              <li><a href="https://talent.app" target="_blank" className="hover:text-yellow-500 transition-colors">Talent Protocol</a></li>
            </ul>
          </div>
        </div>

        <div className='pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6'>
          <div className='flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-500'>
            <div className='flex items-center gap-2'><Shield className='w-3 h-3' /> Secure</div>
            <div className='flex items-center gap-2'><Cpu className='w-3 h-3' /> Optimized</div>
            <div className='flex items-center gap-2'><Globe className='w-3 h-3' /> Global</div>
          </div>
          <div className='text-neutral-500 text-xs font-medium'>
            &copy; 2026 MiniPay Warrior. Built with ❤️ for Celo Proof of Ship.
          </div>
        </div>
      </Container>
    </footer>
  );
};
