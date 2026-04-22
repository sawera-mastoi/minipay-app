import React from 'react';
import { Sun, Moon } from 'lucide-react';

export const ThemeToggle = () => (
  <button className='p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors'>
    <Sun className='w-5 h-5 block dark:hidden' />
    <Moon className='w-5 h-5 hidden dark:block' />
  </button>
);
