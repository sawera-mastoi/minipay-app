import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { celo, celoAlfajores } from 'wagmi/chains';
import { http } from 'viem';

export const config = getDefaultConfig({
  appName: 'Celo Warrior PFP',
  projectId: 'YOUR_PROJECT_ID', // Usually users provide this, I'll use a placeholder or let them use a default
  chains: [celo, celoAlfajores],
  transports: {
    [celo.id]: http(),
    [celoAlfajores.id]: http(),
  },
  ssr: true, // Next.js SSR support
});
