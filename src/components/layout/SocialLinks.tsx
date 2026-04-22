import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export const SocialLinks = () => (
  <div className='flex gap-6'>
    <a href='#' className='text-neutral-500 hover:text-white transition-colors'><Github className='w-5 h-5' /></a>
    <a href='#' className='text-neutral-500 hover:text-white transition-colors'><Twitter className='w-5 h-5' /></a>
    <a href='#' className='text-neutral-500 hover:text-white transition-colors'><MessageCircle className='w-5 h-5' /></a>
  </div>
);
