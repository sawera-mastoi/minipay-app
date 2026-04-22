import React from 'react';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <div className={g-neutral-900 border border-white/10 rounded-3xl overflow-hidden \}>
      {children}
    </div>
  );
};
