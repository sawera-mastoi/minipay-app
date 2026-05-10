import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export const SocialLinks = () => (
  <div className='flex gap-4'>
    {[
      { icon: <Github className='w-5 h-5' />, href: '#', label: 'GitHub' },
      { icon: <Twitter className='w-5 h-5' />, href: '#', label: 'Twitter' },
      { icon: <MessageCircle className='w-5 h-5' />, href: 'https://t.me/proofofship', label: 'Telegram' },
    ].map((social, idx) => (
      <a 
        key={idx}
        href={social.href} 
        aria-label={social.label}
        className='p-3 rounded-xl bg-white/5 border border-white/10 text-neutral-400 hover:text-yellow-500 hover:border-yellow-500/50 hover:bg-yellow-500/5 transition-all duration-300 hover:-translate-y-1'
      >
        {social.icon}
      </a>
    ))}
  </div>
);
