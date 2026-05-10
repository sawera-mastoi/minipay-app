"use client";

import { useEffect, useState } from "react";
import { useAccount, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { CONTRACT_ADDRESS } from "../utils/constants";
import ABI from "../../contracts/ABI.json";
import { 
  Zap, 
  Share2, 
  ArrowRight, 
  Sparkles 
} from "lucide-react";
import { shareStreakNative } from "../utils/share";
import { Button } from "../components/ui/Button";
import Link from 'next/link';

// Import modular components
import { Navbar, Footer, Section, Container, FAQSection, Newsletter } from '../components/layout';
import { Card, Glow, FadeIn, Badge } from '../components/ui';
import { StreakCounter, CheckInButton, StreakHistory, Leaderboard } from '../components/streak';

// Import custom hooks
import { useToast } from '../hooks/useToast';
import { useConfetti } from '../hooks/useConfetti';

export default function Home() {
  const { address, isConnected } = useAccount();
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [streak, setStreak] = useState(0);

  // Modular hooks
  const { showToast } = useToast();
  const { fire: fireConfetti } = useConfetti();

  const { data: currentStreak } = useReadContract({
    address: CONTRACT_ADDRESS as `0x${string}`,
    abi: ABI,
    functionName: 'userStreakCount',
    args: [address],
    query: {
      enabled: !!address,
    }
  });

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const eth = (window as any).ethereum;
      if (eth?.isMiniPay) {
        setIsMiniPay(true);
      }
    }
  }, []);

  useEffect(() => {
    if (currentStreak !== undefined) {
      setStreak(Number(currentStreak));
    }
  }, [currentStreak]);

  useEffect(() => {
    if (isSuccess) {
      setStreak((prev) => prev + 1);
      fireConfetti();
      showToast('Successfully checked in!');
    }
  }, [isSuccess, fireConfetti, showToast]);

  const handleCheckIn = async () => {
    if (!address) return;
    try {
      writeContract({
        address: CONTRACT_ADDRESS as `0x${string}`,
        abi: ABI,
        functionName: 'performCheckIn',
      });
    } catch (err: any) {
      showToast(err.message || "Transaction failed", 'error');
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section */}
      <Section className="relative flex flex-col items-center justify-center min-h-[90vh] pt-20 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.05)_0%,transparent_70%)] pointer-events-none" />
        
        <Container className="max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
          <FadeIn className="space-y-10 text-center lg:text-left">
            <div className="space-y-6">
              <div className="flex justify-center lg:justify-start">
                <Badge variant="warning" className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider bg-yellow-500/10 border-yellow-500/20 text-yellow-500">
                  <Sparkles className="w-3 h-3 mr-2 inline" />
                  Season 2: Proof of Ship
                </Badge>
              </div>
              <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] lg:leading-[0.8]">
                SHIP FAST. <br/>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600">
                  EARN DAILY.
                </span>
              </h1>
              <p className="text-neutral-400 text-lg md:text-xl max-w-lg mx-auto lg:mx-0 leading-relaxed">
                The ultimate builder companion for the Celo ecosystem. Maintain your streak, mint unique PFPs, and climb the leaderboard.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/mint" className="w-full sm:w-auto">
                <Button size="lg" className="w-full px-10 py-7 text-lg font-bold rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all" leftIcon={<Sparkles className="w-5 h-5" />}>
                  Mint Your Warrior
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-7 text-lg font-bold rounded-2xl border-white/10 hover:bg-white/5 backdrop-blur-sm" rightIcon={<ArrowRight className="w-5 h-5" />}>
                Leaderboard
              </Button>
            </div>

            <div className="pt-4 flex items-center justify-center lg:justify-start gap-8 opacity-50">
              <div className="text-center">
                <div className="text-2xl font-black">14M+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold">MiniPay Users</div>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div className="text-center">
                <div className="text-2xl font-black">50k+</div>
                <div className="text-[10px] uppercase tracking-widest font-bold">Daily Ships</div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="relative group">
            <div className="absolute -inset-10 bg-yellow-500/10 blur-[100px] rounded-full group-hover:bg-yellow-500/20 transition-all duration-700" />
            <Card variant="glass" className="relative p-8 md:p-12 text-center space-y-8 border-white/10 backdrop-blur-2xl shadow-2xl rounded-[2.5rem]">
              <Glow className="top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-yellow-500/10" />
              
              <div className="space-y-3">
                <h2 className="text-4xl font-black tracking-tight">Daily Streak</h2>
                <p className="text-neutral-400 text-base font-medium">Don't break the chain. Stay active.</p>
              </div>

              {isMiniPay && (
                <div className="flex justify-center">
                  <Badge variant="success" className="bg-green-500/10 border-green-500/20 text-green-500 font-bold px-4 py-1">
                    <Zap className="w-3 h-3 mr-2 inline fill-current" />
                    MiniPay Optimized
                  </Badge>
                </div>
              )}

              <div className="py-4">
                <StreakCounter count={streak} />
              </div>

              <div className="space-y-4">
                <CheckInButton 
                  isLoading={isPending || isConfirming} 
                  onClick={handleCheckIn} 
                  account={address || null} 
                />
                
                {address && streak > 0 && (
                  <Button 
                    variant="outline" 
                    className="w-full py-4 border-white/5 hover:bg-white/5 rounded-2xl font-bold"
                    onClick={() => shareStreakNative({ streak, address })}
                    leftIcon={<Share2 className="w-4 h-4" />}
                  >
                    Share Your Progress
                  </Button>
                )}
              </div>

              <div className="pt-4 border-t border-white/5">
                <p className="text-[11px] text-neutral-500 leading-relaxed uppercase tracking-widest font-bold">
                  Verified On Celo Mainnet
                </p>
              </div>
            </Card>
          </FadeIn>
        </Container>
      </Section>

      {/* Featured Warriors Section */}
      <Section className="py-32 bg-neutral-900/30 border-y border-white/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="space-y-4 text-center md:text-left">
              <Badge variant="warning" className="bg-amber-500/10 text-amber-500 border-amber-500/20">The Collection</Badge>
              <h2 className="text-5xl font-black tracking-tighter">Legendary Warriors</h2>
              <p className="text-neutral-400 max-w-md text-lg">AI-generated masterpieces forged on-chain. Each unique, each powerful.</p>
            </div>
            <Link href="/mint">
              <Button variant="outline" className="border-white/10 hover:bg-white/5 px-8 py-4 font-bold rounded-xl">View All Collection</Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <Card variant="glass" className="p-3 border-white/5 group hover:border-yellow-500/30 transition-all duration-500 rounded-3xl overflow-hidden">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                    <img 
                      src={`https://pollinations.ai/p/Warrior%20Portrait%20Elite%20Character%20Design%20Epic%20Lighting?width=400&height=400&seed=${i * 777}&nologo=true`} 
                      alt="Warrior" 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                      <div className="text-sm font-bold text-yellow-500">MINTED BY @BUILDER</div>
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">Warrior #{1000 + i}</span>
                      <Badge className="bg-yellow-500/10 text-yellow-500 border-none text-[10px]">RARE</Badge>
                    </div>
                  </div>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.3}>
              <StreakHistory />
            </FadeIn>
            <FadeIn delay={0.4}>
              <Leaderboard />
            </FadeIn>
          </div>
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
