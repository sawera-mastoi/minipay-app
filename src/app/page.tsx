"use client";

import { useEffect, useState } from "react";
import { BrowserProvider, Contract, type Eip1193Provider } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";
import ABI from "../../contracts/ABI.json";
import { Share2 } from "lucide-react";
import { shareStreakNative } from "../utils/share";
import { Button } from "../components/ui/Button";

// Import modular components
import { Navbar, Footer, Section, Container, FAQSection, Newsletter } from '../components/layout';
import { Card, Glow, FadeIn, Badge } from '../components/ui';
import { StreakCounter, CheckInButton, StreakHistory, Leaderboard } from '../components/streak';

// Import custom hooks
import { useToast } from '../hooks/useToast';
import { useConfetti } from '../hooks/useConfetti';

interface EthereumProvider extends Eip1193Provider {
  isMiniPay?: boolean;
}

const CELO_PARAMS = {
  chainId: "0xa4ec", // 42220
  chainName: "Celo Mainnet",
  nativeCurrency: { name: "CELO", symbol: "CELO", decimals: 18 },
  rpcUrls: ["https://forno.celo.org"],
  blockExplorerUrls: ["https://celoscan.io/"],
};

export default function Home() {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [activeProvider, setActiveProvider] = useState<EthereumProvider | null>(null);
  const [showWallets, setShowWallets] = useState(false);

  // Modular hooks
  const { showToast } = useToast();
  const { fire: fireConfetti } = useConfetti();

  useEffect(() => {
    if (typeof window !== "undefined") {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const eth = (window as any).ethereum as EthereumProvider | undefined;
      if (eth?.isMiniPay) {
        setTimeout(() => setIsMiniPay(true), 0);
      }
    }
  }, []);

  const switchToCelo = async (provider: EthereumProvider) => {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CELO_PARAMS.chainId }],
      });
    } catch (switchError: unknown) {
      const error = switchError as { code: number };
      if (error.code === 4902) {
        try {
          await provider.request({
            method: "wallet_addEthereumChain",
            params: [CELO_PARAMS],
          });
        } catch (addError) {
          console.error("Failed to add Celo network", addError);
        }
      } else {
        console.error("Failed to switch to Celo network", switchError);
      }
    }
  };

  const connectSpecificWallet = async (walletType: string) => {
    let targetProvider: EthereumProvider | null = null;
    
    if (typeof window !== "undefined") {
      const win = window as unknown as { 
        okxwallet?: EthereumProvider; 
        bitkeep?: { ethereum: EthereumProvider }; 
        ethereum?: EthereumProvider 
      };
      if (walletType === "OKX" && win.okxwallet) {
        targetProvider = win.okxwallet;
      } else if (walletType === "BITGET" && win.bitkeep?.ethereum) {
        targetProvider = win.bitkeep.ethereum;
      } else if (walletType === "METAMASK" && win.ethereum) {
        targetProvider = win.ethereum;
      }
    }

    if (!targetProvider) {
      showToast(`${walletType} Wallet extension not detected!`, 'error');
      return;
    }

    try {
      const accounts = await targetProvider.request({ method: "eth_requestAccounts" }) as string[];
      if (accounts.length > 0) {
        await switchToCelo(targetProvider);
        setActiveProvider(targetProvider);
        setAccount(accounts[0]);
        
        const ethersProvider = new BrowserProvider(targetProvider);
        const contract = new Contract(CONTRACT_ADDRESS, ABI, ethersProvider);
        const currentStreak = await contract.getFunction("streaks")(accounts[0]);
        setStreak(Number(currentStreak));
        setShowWallets(false);
        showToast('Wallet connected successfully!');
      }
    } catch (error) {
      console.error("Connection failed", error);
      showToast('Failed to connect wallet', 'error');
    }
  };

  const handleCheckIn = async () => {
    if (!account || !activeProvider) return;
    setIsLoading(true);
    try {
      await switchToCelo(activeProvider);
      
      const ethersProvider = new BrowserProvider(activeProvider);
      const signer = await ethersProvider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
      
      const tx = await contract.getFunction("checkIn")();
      await tx.wait();
      
      setStreak((prev) => prev + 1);
      fireConfetti();
      showToast('Successfully checked in!');
    } catch (err: unknown) {
      console.error(err);
      const error = err as { reason?: string; message?: string };
      showToast(error.reason || error.message || "Transaction failed", 'error');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500/30">
      <Navbar account={account} />
      
      <Section className="flex flex-col items-center justify-center min-h-screen pt-20">
        <Container className="max-w-md">
          <FadeIn>
            <Card variant="glass" className="relative p-8 text-center space-y-6">
              <Glow className="top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-500/20" />
              
              <div className="space-y-2">
                <h2 className="text-4xl font-extrabold tracking-tight">Daily Check-In</h2>
                <p className="text-neutral-400 text-sm">Build your streak on Celo with zero fees.</p>
              </div>

              {isMiniPay && (
                <div className="flex justify-center">
                  <Badge variant="success" dot>MiniPay Detected</Badge>
                </div>
              )}

              <StreakCounter count={streak} />

              <div className="space-y-4">
                <CheckInButton 
                  isLoading={isLoading} 
                  onClick={account ? handleCheckIn : () => setShowWallets(!showWallets)} 
                  account={account} 
                />
                
                {account && streak > 0 && (
                  <FadeIn delay={0.1}>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => shareStreakNative({ streak, address: account })}
                      leftIcon={<Share2 className="w-4 h-4" />}
                    >
                      Share Streak
                    </Button>
                  </FadeIn>
                )}
                
                {!account && showWallets && (
                  <FadeIn>
                    <div className="grid gap-2 mt-4 p-4 bg-white/5 rounded-2xl border border-white/10">
                      <button onClick={() => connectSpecificWallet('OKX')} className="w-full py-3 text-sm font-semibold hover:bg-white/10 rounded-xl transition-colors border border-white/5">OKX Wallet</button>
                      <button onClick={() => connectSpecificWallet('BITGET')} className="w-full py-3 text-sm font-semibold hover:bg-white/10 rounded-xl transition-colors border border-white/5">Bitget Wallet</button>
                      <button onClick={() => connectSpecificWallet('METAMASK')} className="w-full py-3 text-sm font-semibold hover:bg-white/10 rounded-xl transition-colors border border-white/5">MetaMask / MiniPay</button>
                    </div>
                  </FadeIn>
                )}
              </div>

              <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                Celo Proof of Ship submission. MiniPay gas fee abstraction enables seamless daily check-ins for the global Celo community.
              </p>
            </Card>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <StreakHistory />
          </FadeIn>

          <FadeIn delay={0.3}>
            <Leaderboard />
          </FadeIn>
        </Container>
      </Section>

      <Section className="flex justify-center border-t border-white/5 bg-neutral-900/30">
        <Newsletter />
      </Section>

      <FAQSection />

      <Footer />
    </main>
  );
}
