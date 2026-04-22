import React from 'react';

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className='px-2 py-1 text-xs font-semibold rounded-full'>
    {children}
  </span>
);
