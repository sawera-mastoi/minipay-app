import React from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { TransactionList } from './TransactionList';
import { type TransactionItemProps } from './TransactionItem';

const mockTransactions: TransactionItemProps[] = [
  { hash: '0x1234567890abcdef1234567890abcdef12345678', timestamp: Date.now(), status: 'confirmed' },
  { hash: '0xabcdef1234567890abcdef1234567890abcdef', timestamp: Date.now() - 86400000, status: 'confirmed' },
];

/**
 * A detailed history of user check-in transactions.
 * Currently uses mock data for visual demonstration.
 */
export const StreakHistory = () => {
  return (
    <Card className='mt-8'>
      <CardHeader>Check-In History</CardHeader>
      <CardBody className='p-0'>
        <TransactionList transactions={mockTransactions} />
      </CardBody>
    </Card>
  );
};
