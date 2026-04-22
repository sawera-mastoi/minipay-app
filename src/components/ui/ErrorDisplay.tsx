import React from 'react';
import { AlertCircle } from 'lucide-react';

export const ErrorDisplay = ({ message }: { message: string }) => (
  <div className='flex items-center gap-2 p-4 bg-red-500/10 text-red-500 border border-red-500/20 rounded-xl text-sm'>
    <AlertCircle className='w-4 h-4' />
    {message}
  </div>
);
