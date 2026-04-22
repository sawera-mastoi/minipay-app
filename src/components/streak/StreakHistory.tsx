import React from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';
import { CheckCircle2 } from 'lucide-react';

const activities = [
  { date: '2026-04-22', status: 'Success' },
  { date: '2026-04-21', status: 'Success' },
  { date: '2026-04-20', status: 'Success' },
];

export const StreakHistory = () => {
  return (
    <Card className='mt-8'>
      <CardHeader>Recent Activity</CardHeader>
      <CardBody className='p-0'>
        {activities.map((activity, i) => (
          <div key={i} className='flex items-center justify-between p-4 border-b border-white/5 last:border-0'>
            <span className='text-sm text-neutral-300'>{activity.date}</span>
            <div className='flex items-center gap-2 text-green-500 text-xs font-bold'>
              <CheckCircle2 className='w-4 h-4' />
              {activity.status}
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
