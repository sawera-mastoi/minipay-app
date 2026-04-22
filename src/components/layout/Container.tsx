/**
 * Container.tsx component for layout structure.
 */
import React from 'react';

export const Container = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
    {children}
  </div>
);
