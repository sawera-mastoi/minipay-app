import React from 'react';
import { Card } from './Card';

export const StatCard = ({ label, value, icon: Icon }: { label: string, value: string | number, icon: any }) => (
  <Card className='p-4 flex flex-col gap-2'>
    <div className='flex items-center gap-2 text-neutral-500 text-xs font-medium'>
      <Icon className='w-4 h-4' />
      {label}
    </div>
    <div className='text-2xl font-bold'>{value}</div>
  </Card>
);
