import React from 'react';
import { Card, CardHeader, CardBody } from '../ui/Card';

export const StreakHistory = () => {
  return (
    <Card className='mt-8'>
      <CardHeader>Recent Activity</CardHeader>
      <CardBody className='text-neutral-500 text-sm'>
        No recent check-ins found.
      </CardBody>
    </Card>
  );
};
