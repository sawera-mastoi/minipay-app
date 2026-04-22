import React from 'react';

export const Glow = ({ className = '' }: { className?: string }) => (
  <div className={`absolute -z-10 blur-[100px] rounded-full pointer-events-none ${className}`} />
);
