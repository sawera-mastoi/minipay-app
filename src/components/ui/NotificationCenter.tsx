import React, { useState } from 'react';
import { Bell, X } from 'lucide-react';
import { Card, CardHeader, CardBody } from './Card';
import { NotificationItem } from './NotificationItem';
import { motion, AnimatePresence } from 'framer-motion';

export const NotificationCenter = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
      <button onClick={() => setIsOpen(!isOpen)} className='p-2 rounded-full hover:bg-white/10 text-neutral-400 hover:text-white transition-colors relative'>
        <Bell className='w-5 h-5' />
        <span className='absolute top-1 right-1 w-2 h-2 bg-yellow-500 rounded-full border-2 border-neutral-950' />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className='absolute right-0 mt-2 w-72 z-[110]'
          >
            <Card>
              <CardHeader className='flex justify-between items-center py-3'>
                <span className='text-sm font-bold'>Notifications</span>
                <button onClick={() => setIsOpen(false)}><X className='w-4 h-4' /></button>
              </CardHeader>
              <CardBody className='p-2 space-y-1'>
                <NotificationItem title='Streak maintained! 5 days' time='2 hours ago' />
                <NotificationItem title='Daily reward available' time='10 hours ago' />
              </CardBody>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
