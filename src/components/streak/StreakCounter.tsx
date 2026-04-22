import { motion } from 'framer-motion';
import { ShareButton } from '../ui/ShareButton';
/**
 * StreakCounter.tsx component for streak-related features.
 */
import React from 'react';

export const StreakCounter = ({ count }: { count: number }) => {
  return (
    <div className='text-center py-8'>
      <motion.div key={count} initial={{ scale: 1.5, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className='text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500'>
        {count}
      </div>
      <div className='text-sm font-medium text-neutral-500 uppercase tracking-widest mt-2'>
        Day Streak
      </div>
      <div className='mt-4'><ShareButton text={\I\\'ve built a \ day streak on MiniPay! Join me on Celo.\} /></div>
    </div>
  );
};
