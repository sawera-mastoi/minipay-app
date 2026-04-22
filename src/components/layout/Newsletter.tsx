import React from 'react';
import { Button, Input } from '../ui';

export const Newsletter = () => (
  <div className='bg-yellow-500/10 rounded-3xl p-8 border border-yellow-500/20 max-w-md w-full'>
    <h3 className='text-xl font-bold mb-2'>Stay Updated</h3>
    <p className='text-sm text-neutral-400 mb-6'>Get notified about new rewards and features.</p>
    <div className='flex gap-2'>
      <Input placeholder='your@email.com' />
      <Button size='sm'>Join</Button>
    </div>
  </div>
);
