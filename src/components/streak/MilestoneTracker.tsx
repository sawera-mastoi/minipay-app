import React from 'react';
import { Milestone } from '@/types';

import { motion } from 'framer-motion';

const milestones: Milestone[] = [
  { id: '1', day: 7, reward: '0.1 CELO', isCompleted: false, title: 'Week 1' },
  { id: '2', day: 14, reward: '0.25 CELO', isCompleted: false, title: 'Bi-Weekly' },
  { id: '3', day: 30, reward: '1.0 CELO', isCompleted: false, title: 'Monthly' },
  { id: '4', day: 90, reward: '5.0 CELO', isCompleted: false, title: 'Quarterly' },
];

interface MilestoneTrackerProps {
  /** The current streak count */
  current: number;
}

/**
 * Visualizes the progress towards streak milestones.
 */
export const MilestoneTracker = ({ current }: MilestoneTrackerProps) => (
  <div className='mt-8 space-y-4'>
    <h3 className='text-sm font-bold text-neutral-400 uppercase tracking-widest'>Upcoming Milestones</h3>
    <div className='grid grid-cols-4 gap-2'>
      {milestones.map((m, index) => {
        const isCompleted = current >= m.day;
        return (
          <motion.div 
            key={m.id} 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`p-3 rounded-xl border text-center transition-all ${isCompleted ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-white/5 border-white/5 opacity-60'}`}
          >
            <div className={`text-lg font-black ${isCompleted ? 'text-yellow-500' : 'text-neutral-600'}`}>{m.day}</div>
            <div className='text-[10px] text-neutral-500 font-bold'>DAYS</div>
          </motion.div>
        );
      })}
    </div>
  </div>
);
