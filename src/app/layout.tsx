import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'MiniPay Streak | Celo Daily Check-In',
    template: '%s | MiniPay Streak',
  },
  description: 'Maintain your daily check-in streak on the Celo blockchain. Optimized for MiniPay with zero gas fees and a seamless mobile experience.',
  keywords: ['Celo', 'MiniPay', 'Blockchain', 'DApp', 'Streak', 'Crypto', 'Web3', 'Daily Check-in'],
  authors: [{ name: 'MiniPay Streak Team' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MiniPay Streak | Celo Daily Check-In',
    description: 'Build and maintain your daily check-in streak on Celo. Zero fees, maximum rewards.',
    type: 'website',
    url: 'https://minipay-streak.vercel.app',
    siteName: 'MiniPay Streak',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniPay Streak | Celo Daily Check-In',
    description: 'Build your daily streak on Celo with MiniPay. Zero gas fees, seamless experience.',
    creator: '@minipay',
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
