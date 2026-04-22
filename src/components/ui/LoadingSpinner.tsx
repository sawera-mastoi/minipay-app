import React from 'react';
import { Loader2 } from 'lucide-react';

export const LoadingSpinner = ({ size = 24 }: { size?: number }) => (
  <Loader2 className='animate-spin text-yellow-500' style={{ width: size, height: size }} />
);
