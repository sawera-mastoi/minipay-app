import React from 'react';
import { TransactionItem, type TransactionItemProps } from './TransactionItem';

/**
 * A list component for displaying recent blockchain transactions.
 * Staggered rendering of TransactionItem components.
 */
export const TransactionList = ({ transactions }: { transactions: TransactionItemProps[] }) => (
  <div className='divide-y divide-white/5'>
    {transactions.length === 0 ? (
      <div className='p-8 text-center text-neutral-500 text-sm'>No transactions found.</div>
    ) : (
      transactions.map((tx) => <TransactionItem key={tx.hash} {...tx} />)
    )}
  </div>
);
