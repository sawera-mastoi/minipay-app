import React, { useEffect, useState } from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { Trophy, Loader2 } from 'lucide-react';

interface Ranking {
  rank: number;
  address: string;
  streak: number;
}

const MOCK_RANKINGS: Ranking[] = [
  { rank: 1, address: '0x1234...5678', streak: 45 },
  { rank: 2, address: '0xabcd...efgh', streak: 38 },
  { rank: 3, address: '0x9876...5432', streak: 32 },
  { rank: 4, address: '0x5555...9999', streak: 28 },
  { rank: 5, address: '0xeeee...aaaa', streak: 21 },
];

export const Leaderboard = () => {
  const [rankings, setRankings] = useState<Ranking[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching leaderboard data
    const timer = setTimeout(() => {
      setRankings(MOCK_RANKINGS);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Card className='mt-8 overflow-hidden'>
      <CardHeader className='flex items-center justify-between'>
        <div className='flex items-center gap-2'>
          <Trophy className='w-5 h-5 text-yellow-500' />
          <span className="font-bold">Global Leaderboard</span>
        </div>
        {isLoading && <Loader2 className="w-4 h-4 animate-spin text-neutral-500" />}
      </CardHeader>
      <CardBody className='p-0'>
        {isLoading ? (
          <div className="p-8 flex flex-col gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between animate-pulse">
                <div className="flex items-center gap-4">
                  <div className="w-6 h-6 bg-white/10 rounded" />
                  <div className="w-32 h-4 bg-white/10 rounded" />
                </div>
                <div className="w-16 h-4 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        ) : (
          rankings.map((user) => (
            <div key={user.rank} className='flex items-center justify-between p-4 border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors'>
              <div className='flex items-center gap-4'>
                <span className={`w-6 text-center font-bold ${
                  user.rank === 1 ? 'text-yellow-500' : 
                  user.rank === 2 ? 'text-neutral-300' : 
                  user.rank === 3 ? 'text-amber-700' : 
                  'text-neutral-500'
                }`}>
                  {user.rank}
                </span>
                <span className='text-sm text-neutral-300 font-mono'>{user.address}</span>
              </div>
              <span className='font-bold text-yellow-500'>{user.streak} days</span>
            </div>
          ))
        )}
      </CardBody>
    </Card>
  );
};
