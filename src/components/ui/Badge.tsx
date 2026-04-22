import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'success' | 'warning' | 'error' | 'neutral';
  className?: string;
}

export const Badge = ({ children, variant = 'neutral', className = '' }: BadgeProps) => {
  const variants = {
    primary: 'bg-yellow-500/10 text-yellow-500 border border-yellow-500/20',
    success: 'bg-green-500/10 text-green-500 border border-green-500/20',
    warning: 'bg-orange-500/10 text-orange-500 border border-orange-500/20',
    error: 'bg-red-500/10 text-red-500 border border-red-500/20',
    neutral: 'bg-white/10 text-white/70 border border-white/10',
  };

  return (
    <span className={px-2.5 py-0.5 text-xs font-bold rounded-full \ \}>
      {children}
    </span>
  );
};
