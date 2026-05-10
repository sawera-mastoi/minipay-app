import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '../components/Providers';

export const metadata: Metadata = {
  title: {
    default: 'MiniPay Warrior | Celo NFT PFP',
    template: '%s | MiniPay Warrior',
  },
  description: 'Mint your unique AI-generated Warrior PFP on the Celo blockchain. Join the elite community of Celo builders.',
  keywords: ['Celo', 'MiniPay', 'NFT', 'PFP', 'AI Generation', 'Blockchain', 'DApp', 'Warrior'],
  authors: [{ name: 'MiniPay Warrior Team' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: 'MiniPay Warrior | Celo NFT PFP',
    description: 'Mint your unique AI-generated Warrior PFP on Celo. 5 CELO for a lifetime of prestige.',
    type: 'website',
    url: 'https://minipay-warrior.vercel.app',
    siteName: 'MiniPay Warrior',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MiniPay Warrior | Celo NFT PFP',
    description: 'Mint your unique AI-generated Warrior PFP on Celo. 5 CELO for a lifetime of prestige.',
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
      <body className='antialiased bg-neutral-950'>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}

