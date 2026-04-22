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
    <div className={ounded-3xl overflow-hidden transition-all duration-500 \ \}>
      {children}
    </div>
  );
};
