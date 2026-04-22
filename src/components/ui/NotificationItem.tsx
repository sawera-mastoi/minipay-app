import React from 'react';
import { Bell } from 'lucide-react';

export const NotificationItem = ({ title, time }: { title: string, time: string }) => (
  <div className='flex items-start gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors'>
    <div className='p-2 rounded-lg bg-yellow-500/10 text-yellow-500'>
      <Bell className='w-4 h-4' />
    </div>
    <div>
      <div className='text-xs font-bold'>{title}</div>
      <div className='text-[10px] text-neutral-500'>{time}</div>
    </div>
  </div>
);
