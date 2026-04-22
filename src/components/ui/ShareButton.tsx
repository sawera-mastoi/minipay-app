import React from 'react';
import { Share2 } from 'lucide-react';
import { Button } from './Button';

export const ShareButton = ({ text }: { text: string }) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: 'MiniPay Streak', text, url: window.location.href });
    } else {
      alert('Sharing not supported on this browser.');
    }
  };
  return (
    <Button variant='ghost' size='sm' onClick={handleShare} leftIcon={<Share2 className='w-4 h-4' />}>
      Share
    </Button>
  );
};
