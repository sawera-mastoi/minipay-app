import React from 'react';

interface SkeletonProps {
  className?: string;
  variant?: 'rectangular' | 'circular' | 'text';
}

/**
 * Skeleton component for loading states.
 */
export const Skeleton = ({ className = '', variant = 'rectangular' }: SkeletonProps) => {
  const variants = {
    rectangular: 'rounded-xl',
    circular: 'rounded-full',
    text: 'rounded-md h-4 w-full',
  };

  return (
    <div 
      className={`
        bg-white/5 animate-pulse 
        ${variants[variant]} 
        ${className}
      `} 
    />
  );
};

/**
 * Pre-defined skeleton for Card content.
 */
export const CardSkeleton = () => (
  <div className="space-y-4 w-full p-4">
    <Skeleton variant="circular" className="w-12 h-12" />
    <div className="space-y-2">
      <Skeleton variant="text" className="w-3/4" />
      <Skeleton variant="text" className="w-1/2" />
    </div>
    <Skeleton className="h-32 w-full" />
  </div>
);
