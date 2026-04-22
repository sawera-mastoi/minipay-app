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
        <div key={m} className={\p-3 rounded-xl border \ text-center\}>
          <div className={\	ext-lg font-black \\}>{m}</div>
          <div className='text-[10px] text-neutral-500'>DAYS</div>
        </div>
      ))}
    </div>
  </div>
);
