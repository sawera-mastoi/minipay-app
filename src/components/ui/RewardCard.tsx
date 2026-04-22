/**
 * RewardCard.tsx UI component.
 */
import React from 'react';
import { Card, CardBody } from './Card';
import { Gift } from 'lucide-react';

export const RewardCard = ({ title, amount, description }: { title: string, amount: string, description: string }) => (
  <Card className='group hover:border-yellow-500/30 transition-colors'>
    <CardBody className='flex items-center gap-4'>
      <div className='p-3 rounded-2xl bg-yellow-500/10 text-yellow-500 group-hover:scale-110 transition-transform'>
        <Gift className='w-6 h-6' />
      </div>
      <div>
        <div className='text-xs text-neutral-500 font-medium'>{title}</div>
        <div className='text-xl font-bold text-yellow-500'>{amount}</div>
        <div className='text-xs text-neutral-400'>{description}</div>
      </div>
    </CardBody>
  </Card>
);
