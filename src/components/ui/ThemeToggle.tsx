'use client';

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../ThemeProvider';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Animated theme toggle button to switch between light and dark modes.
 */
export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className='p-2.5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 text-neutral-400 hover:text-white transition-all active:scale-95'
      aria-label="Toggle Theme"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ y: -20, opacity: 0, rotate: -45 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 45 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'dark' ? (
            <Moon className='w-5 h-5' />
          ) : (
            <Sun className='w-5 h-5' />
          )}
        </motion.div>
      </AnimatePresence>
    </button>
  );
};
