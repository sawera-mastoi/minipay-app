import React from 'react';
import { Container } from './Container';
import { FAQItem } from '../ui/FAQItem';

const faqs = [
  { 
    question: 'What is MiniPay Streak?', 
    answer: 'MiniPay Streak is a decentralized application on the Celo blockchain that helps you build a daily habit of interacting with the blockchain.' 
  },
  { 
    question: 'Are there any fees?', 
    answer: "Thanks to Celo's gas fee abstraction, daily check-ins are virtually free for users." 
  },
  { 
    question: 'How do I build a streak?', 
    answer: "Simply connect your wallet and click 'Check In' once every 24 hours." 
  },
];

export const FAQSection = () => (
  <Container className='max-w-2xl py-20'>
    <h2 className='text-3xl font-bold mb-8 text-center'>Frequently Asked Questions</h2>
    <div className='bg-white/5 rounded-3xl p-8 border border-white/10'>
      {faqs.map((f, i) => <FAQItem key={i} {...f} />)}
    </div>
  </Container>
);
