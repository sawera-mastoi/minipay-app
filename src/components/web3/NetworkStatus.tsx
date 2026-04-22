import React from 'react';
import { Badge } from '../ui';

export const NetworkStatus = ({ isMiniPay }: { isMiniPay: boolean }) => {
  if (!isMiniPay) return null;
  return (
    <Badge variant='success' dot>
      MiniPay Detected
    </Badge>
  );
};
