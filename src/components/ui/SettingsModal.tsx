/**
 * SettingsModal.tsx UI component.
 */
import React from 'react';
import { Card, CardHeader, CardBody } from './Card';
import { X } from 'lucide-react';

export const SettingsModal = ({ onClose }: { onClose: () => void }) => (
  <div className='fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm'>
    <Card className='max-w-md w-full'>
      <CardHeader className='flex justify-between items-center'>
        <span>Settings</span>
        <button onClick={onClose}><X className='w-5 h-5' /></button>
      </CardHeader>
      <CardBody>
        <p className='text-neutral-500 text-sm'>Notification settings coming soon.</p>
      </CardBody>
    </Card>
  </div>
);
