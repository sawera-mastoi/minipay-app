import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'MiniPay Streak | Celo Daily Check-In',
  description: 'Build your daily streak on Celo with MiniPay. Zero gas fees, seamless experience.',
  keywords: ['Celo', 'MiniPay', 'Blockchain', 'DApp', 'Streak', 'Crypto'],
  authors: [{ name: 'MiniPay Streak Team' }],
  openGraph: {
    title: 'MiniPay Streak',
    description: 'Build your daily streak on Celo',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='antialiased bg-neutral-950'>{children}</body>
    </html>
  );
}
