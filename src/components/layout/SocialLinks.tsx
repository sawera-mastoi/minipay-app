import React from 'react';
import { Github, Twitter, MessageCircle } from 'lucide-react';

export const SocialLinks = () => (
  <div className='flex gap-6'>
    <a href='#' className='text-neutral-500 hover:text-white transition-all duration-300 hover:-translate-y-1'><Github className='w-5 h-5' /></a>
    <a href='#' className='text-neutral-500 hover:text-white transition-all duration-300 hover:-translate-y-1'><Twitter className='w-5 h-5' /></a>
    <a href='#' className='text-neutral-500 hover:text-white transition-all duration-300 hover:-translate-y-1'><MessageCircle className='w-5 h-5' /></a>
  </div>
);
