/**
 * Card container for grouping related information with glassmorphism support.
 */
import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'glass';
}

export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-neutral-900 border border-white/10',
    glass: 'bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl',
  };

  return (
    <div className={`rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-yellow-500/5 ${variants[variant]} ${className}`}>
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 border-b border-white/5 ${className}`}>{children}</div>
);

export const CardBody = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 border-t border-white/5 bg-white/[0.02] ${className}`}>{children}</div>
);
