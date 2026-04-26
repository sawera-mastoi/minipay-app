'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnimationProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

/**
 * A standard Fade-In animation with a subtle upward slide.
 * Perfect for entry sections and text elements.
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
 * A horizontal Slide-In animation from the left.
 * Ideal for sidebar elements or staggered list items.
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
 * A pop-in Scale animation with an organic back-out easing.
 * Best used for buttons, icons, and small UI highlights.
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
 * A comprehensive Page Transition wrapper that ensures smooth exits and entries.
 * Leverages Framer Motion's AnimatePresence for state-aware transitions.
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
