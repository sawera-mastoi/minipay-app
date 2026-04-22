import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='border-b border-white/5'>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className='w-full flex justify-between items-center py-4 text-left hover:text-yellow-500 transition-colors'
      >
        <span className='font-medium'>{question}</span>
        {isOpen ? <ChevronUp className='w-4 h-4' /> : <ChevronDown className='w-4 h-4' />}
      </button>
      {isOpen && <div className='pb-4 text-sm text-neutral-500 leading-relaxed'>{answer}</div>}
    </div>
  );
};
