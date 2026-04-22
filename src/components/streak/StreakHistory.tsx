/**
 * StreakHistory component for streak-related features.
 */
import React from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { TransactionList } from './TransactionList';

const mockTransactions = [
  { hash: '0x1234567890abcdef1234567890abcdef12345678', timestamp: Date.now(), status: 'confirmed' },
  { hash: '0xabcdef1234567890abcdef1234567890abcdef', timestamp: Date.now() - 86400000, status: 'confirmed' },
];

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
