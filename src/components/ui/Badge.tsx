/**
 * Badge component for displaying status or labels.
 */
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
  dot?: boolean;
}

export const Badge = ({ children, variant = 'neutral', className = '', dot }: BadgeProps) => {
  const variants = {
    primary: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
    success: 'bg-green-500/10 text-green-500 border border-green-500/20',
    warning: 'bg-orange-500/10 text-orange-500 border border-orange-500/20',
    error: 'bg-red-500/10 text-red-500 border border-red-500/20',
    neutral: 'bg-white/10 text-white/70 border border-white/10',
  };

  const dotColors = {
    primary: 'bg-yellow-500',
    success: 'bg-green-500',
    warning: 'bg-orange-500',
    error: 'bg-red-500',
    neutral: 'bg-white/50',
  };

  return (
    <span className={inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-bold rounded-full \ \}>
      {dot && <span className={w-1.5 h-1.5 rounded-full \ animate-pulse} />}
      {children}
    </span>
  );
};
