import React from 'react';
import { Code, Globe, MessageSquare } from 'lucide-react';

export const SocialLinks = () => (
  <div className='flex gap-6'>
    <a href='#' className='text-neutral-500 hover:text-white transition-all duration-300 hover:-translate-y-1'><Code className='w-5 h-5' /></a>
    <a href='#' className='text-neutral-500 hover:text-white transition-all duration-300 hover:-translate-y-1'><Globe className='w-5 h-5' /></a>
    <a href='#' className='text-neutral-500 hover:text-white transition-all duration-300 hover:-translate-y-1'><MessageSquare className='w-5 h-5' /></a>
  </div>
);
