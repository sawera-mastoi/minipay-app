'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * FadeIn animation component.
 */
export const FadeIn = ({ children, delay = 0, className = '' }: AnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * SlideIn animation component.
 */
export const SlideIn = ({ children, delay = 0, className = '' }: AnimationProps) => (
  <motion.div
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.4, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * ScaleIn animation component for buttons and icons.
 */
export const ScaleIn = ({ children, delay = 0, className = '' }: AnimationProps) => (
  <motion.div
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3, delay, ease: 'backOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * PageTransition wrapper for smooth route changes.
 */
export const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <AnimatePresence mode="wait">
    <motion.div
      initial={{ opacity: 0, x: 5 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -5 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  </AnimatePresence>
);
