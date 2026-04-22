import React from 'react';
import { TransactionItem } from './TransactionItem';

export const TransactionList = ({ transactions }: { transactions: any[] }) => (
  <div className='divide-y divide-white/5'>
    {transactions.length === 0 ? (
      <div className='p-8 text-center text-neutral-500 text-sm'>No transactions found.</div>
    ) : (
      transactions.map((tx) => <TransactionItem key={tx.hash} {...tx} />)
    )}
  </div>
);
