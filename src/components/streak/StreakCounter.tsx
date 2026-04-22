import React from 'react';

export const StreakCounter = ({ count }: { count: number }) => {
  return (
    <div className='text-center py-8'>
      <div className='text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500'>
        {count}
      </div>
      <div className='text-sm font-medium text-neutral-500 uppercase tracking-widest mt-2'>
        Day Streak
      </div>
    </div>
  );
};
