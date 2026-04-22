import React from 'react';
import { Card, CardBody } from '../ui/Card';

export const NewsSection = () => (
  <Card className='mt-8 bg-blue-500/10 border-blue-500/20'>
    <CardBody>
      <div className='text-xs font-bold text-blue-400 uppercase mb-2'>Latest Update</div>
      <div className='text-sm text-neutral-300'>Celo Mainnet integration is now live! Start building your streak today.</div>
    </CardBody>
  </Card>
);
