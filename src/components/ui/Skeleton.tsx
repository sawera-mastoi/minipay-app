/**
 * Skeleton.tsx UI component.
 */
import React from 'react';

export const Skeleton = ({ className = '' }: { className?: string }) => (
  <div className={`bg-white/5 animate-pulse rounded-lg ${className}`} />
);
