/**
 * MilestoneTracker.tsx component for streak-related features.
 */
import React from 'react';

const milestones = [7, 14, 30, 90];

export const MilestoneTracker = ({ current }: { current: number }) => (
  <div className='mt-8 space-y-4'>
    <h3 className='text-sm font-bold text-neutral-400 uppercase tracking-widest'>Upcoming Milestones</h3>
    <div className='grid grid-cols-4 gap-2'>
      {milestones.map((m) => (
        <div 
          key={m} 
          className={`p-3 rounded-xl border text-center transition-all ${current >= m ? 'bg-yellow-500/20 border-yellow-500/50' : 'bg-white/5 border-white/5'}`}
        >
          <div className={`text-lg font-black ${current >= m ? 'text-yellow-500' : 'text-neutral-600'}`}>{m}</div>
          <div className='text-[10px] text-neutral-500'>DAYS</div>
        </div>
      ))}
    </div>
  </div>
);
