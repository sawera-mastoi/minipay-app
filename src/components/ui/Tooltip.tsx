import React from 'react';

export const Tooltip = ({ text, children }: { text: string, children: React.ReactNode }) => (
  <div className='group relative inline-block'>
    {children}
    <div className='absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-neutral-900 text-white text-[10px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-white/10'>
      {text}
    </div>
  </div>
);
