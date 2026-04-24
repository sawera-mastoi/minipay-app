import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Whether the container should be centered vertically */
  centered?: boolean;
}

/**
 * Main container component for layout consistency.
 */
export const Container = ({ children, className = '', centered = false }: ContainerProps) => (
  <div className={`
    max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 
    ${centered ? 'flex flex-col items-center justify-center min-h-[60vh]' : ''}
    ${className}
  `}>
    {children}
  </div>
);


