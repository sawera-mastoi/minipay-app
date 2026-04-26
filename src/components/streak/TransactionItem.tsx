import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { formatAddress } from '../../utils/format';

export interface TransactionItemProps {
  hash: string;
  timestamp: number;
  status: 'confirmed' | 'pending' | 'failed';
}

/**
 * A detailed transaction item display for the streak history.
 * Shows hash, timestamp, and status with semantic icons.
 */
export const TransactionItem = ({ hash, timestamp, status }: TransactionItemProps) => (
  <div className='flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors'>
    <div className='flex flex-col gap-1'>
      <span className='text-xs font-mono text-neutral-400'>{formatAddress(hash)}</span>
      <span className='text-[10px] text-neutral-600'>{new Date(timestamp).toLocaleDateString()}</span>
    </div>
    <div className={`flex items-center gap-1.5 text-xs font-bold ${status === 'confirmed' ? 'text-green-500' : status === 'pending' ? 'text-yellow-500' : 'text-red-500'}`}>
      {status === 'confirmed' ? <CheckCircle2 className='w-4 h-4' /> : status === 'pending' ? <Clock className='w-4 h-4 animate-pulse' /> : <XCircle className='w-4 h-4' />}
      {status.toUpperCase()}
    </div>
  </div>
);
