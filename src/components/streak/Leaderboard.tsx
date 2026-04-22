/**
 * Leaderboard.tsx component for streak-related features.
 */
import React from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Trophy } from 'lucide-react';

const rankings = [
  { rank: 1, address: '0x1234...5678', streak: 45 },
  { rank: 2, address: '0xabcd...efgh', streak: 38 },
  { rank: 3, address: '0x9876...5432', streak: 32 },
];

export const Leaderboard = () => (
  <Card className='mt-8'>
    <CardHeader className='flex items-center gap-2'>
      <Trophy className='w-5 h-5 text-yellow-500' />
      Global Leaderboard
    </CardHeader>
    <CardBody className='p-0'>
      {rankings.map((user) => (
        <div key={user.rank} className='flex items-center justify-between p-4 border-b border-white/5 last:border-0'>
          <div className='flex items-center gap-4'>
            <span className={w-6 text-center font-bold \}>
              {user.rank}
            </span>
            <span className='text-sm text-neutral-300'>{user.address}</span>
          </div>
          <span className='font-bold text-yellow-500'>{user.streak} days</span>
        </div>
      ))}
    </CardBody>
  </Card>
);
