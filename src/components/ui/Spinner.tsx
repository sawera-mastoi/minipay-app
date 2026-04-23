import React from 'react';
import { Loader2 } from 'lucide-react';

interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  color?: string;
}

/**
 * A consistent loading spinner component.
 */
export const Spinner = ({ 
  size = 'md', 
  className = '', 
  color = 'text-yellow-500' 
}: SpinnerProps) => {
  const sizes = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <Loader2 className={`${sizes[size]} ${color} animate-spin`} />
    </div>
  );
};

/**
 * A full-screen or container-filling overlay with a spinner.
 */
export const LoadingOverlay = ({ message = 'Loading...' }: { message?: string }) => (
  <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-50 flex flex-col items-center justify-center rounded-3xl animate-in fade-in duration-300">
    <Spinner size="lg" />
    {message && <p className="mt-4 text-sm font-medium text-white/80">{message}</p>}
  </div>
);
