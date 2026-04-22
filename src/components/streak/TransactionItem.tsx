import React from 'react';
import { CheckCircle2, Clock, XCircle } from 'lucide-react';
import { formatAddress } from '../../utils/format';

export const TransactionItem = ({ hash, timestamp, status }: { hash: string, timestamp: number, status: 'confirmed' | 'pending' | 'failed' }) => (
  <div className='flex items-center justify-between p-4 border-b border-white/5 last:border-0'>
    <div className='flex flex-col gap-1'>
      <span className='text-xs font-mono text-neutral-500'>{formatAddress(hash)}</span>
      <span className='text-[10px] text-neutral-600'>{new Date(timestamp).toLocaleDateString()}</span>
    </div>
    <div className={\lex items-center gap-1.5 text-xs font-bold \\}>
      {status === 'confirmed' ? <CheckCircle2 className='w-4 h-4' /> : status === 'pending' ? <Clock className='w-4 h-4 animate-pulse' /> : <XCircle className='w-4 h-4' />}
      {status.toUpperCase()}
    </div>
  </div>
);
