import React from 'react';
import { Card } from './Card';
import { type LucideIcon } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  icon: LucideIcon;
}

/**
 * A compact statistical card for displaying key metrics like streaks and savings.
 */
export const StatCard = ({ label, value, icon: Icon }: StatCardProps) => (
  <Card className='p-4 flex flex-col gap-2'>
    <div className='flex items-center gap-2 text-neutral-500 text-xs font-medium uppercase tracking-wider'>
      <Icon className='w-4 h-4' />
      {label}
    </div>
    <div className='text-2xl font-bold'>{value}</div>
  </Card>
);
