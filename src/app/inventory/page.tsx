'use client';

import React, { useState, useEffect } from 'react';
import { Navbar, Footer, Section, Container } from '../../components/layout';
import { Card, FadeIn } from '../../components/ui';
import { Button } from '../../components/ui/Button';
import { Package, User, Check, Sparkles, Image as ImageIcon, Trash2 } from 'lucide-react';
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useToast } from '../../hooks/useToast';
import Link from 'next/link';
import Image from 'next/image';

interface MintedWarrior {
  image: string;
  name: string;
  tier: number;
  tierName: string;
  rarity: string;
  hash?: string;
  timestamp: number;
}

const TIER_STYLES: Record<number, { badge: string; border: string; glow: string }> = {
  0: { badge: 'bg-amber-800/30 text-amber-500 border-amber-700/30', border: 'border-amber-700/40', glow: 'shadow-amber-900/20' },
  1: { badge: 'bg-slate-500/20 text-slate-300 border-slate-400/30', border: 'border-slate-400/40', glow: 'shadow-slate-500/20' },
  2: { badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30', border: 'border-yellow-500/40', glow: 'shadow-yellow-500/20' },
  3: { badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30', border: 'border-cyan-400/40', glow: 'shadow-cyan-500/20' },
  4: { badge: 'bg-purple-500/20 text-purple-400 border-purple-400/30', border: 'border-purple-400/40', glow: 'shadow-purple-500/20' },
};

export default function InventoryPage() {
  const { isConnected } = useAccount();
  const { showToast } = useToast();
  const [warriors, setWarriors] = useState<MintedWarrior[]>([]);
  const [selectedPFP, setSelectedPFP] = useState<number | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem('mintedWarriors');
    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setWarriors(JSON.parse(stored));
    }
    const pfp = localStorage.getItem('selectedPFP');
    if (pfp !== null) {
      setSelectedPFP(Number(pfp));
    }
  }, []);

  const setAsPFP = (index: number) => {
    setSelectedPFP(index);
    localStorage.setItem('selectedPFP', String(index));
    localStorage.setItem('pfpImage', warriors[index].image);
    showToast('PFP updated! Your warrior is now your profile picture.');
  };

  const removeWarrior = (index: number) => {
    const updated = warriors.filter((_, i) => i !== index);
    setWarriors(updated);
    localStorage.setItem('mintedWarriors', JSON.stringify(updated));
    if (selectedPFP === index) {
      setSelectedPFP(null);
      localStorage.removeItem('selectedPFP');
      localStorage.removeItem('pfpImage');
    } else if (selectedPFP !== null && selectedPFP > index) {
      setSelectedPFP(selectedPFP - 1);
      localStorage.setItem('selectedPFP', String(selectedPFP - 1));
    }
    showToast('Warrior removed from inventory.');
  };

  const currentPFP = selectedPFP !== null && warriors[selectedPFP] ? warriors[selectedPFP] : null;

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <Navbar />

      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-yellow-500/5 rounded-full blur-[120px]" />
      </div>

      <Section className="pt-32 pb-20 relative z-10">
        <Container>
          {/* Header */}
          <FadeIn className="mb-12">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Package className="w-8 h-8 text-yellow-500" />
                  <h1 className="text-4xl lg:text-5xl font-black tracking-tighter">Your Inventory</h1>
                </div>
                <p className="text-neutral-400 text-lg font-medium">
                  {warriors.length} warrior{warriors.length !== 1 ? 's' : ''} in your collection
                </p>
              </div>
              <Link href="/mint">
                <Button leftIcon={<Sparkles className="w-4 h-4" />} className="rounded-xl px-6 py-3 font-bold">
                  Mint More Warriors
                </Button>
              </Link>
            </div>
          </FadeIn>

          {!isConnected ? (
            <FadeIn>
              <Card variant="glass" className="p-16 text-center border-white/10 rounded-3xl space-y-6">
                <User className="w-16 h-16 text-neutral-600 mx-auto" />
                <h2 className="text-2xl font-black">Connect Your Wallet</h2>
                <p className="text-neutral-400 max-w-md mx-auto">
                  Connect your wallet to view your minted warrior collection and set your PFP.
                </p>
                <ConnectButton label="Connect Wallet" />
              </Card>
            </FadeIn>
          ) : warriors.length === 0 ? (
            <FadeIn>
              <Card variant="glass" className="p-16 text-center border-white/10 rounded-3xl space-y-6">
                <ImageIcon className="w-16 h-16 text-neutral-600 mx-auto" />
                <h2 className="text-2xl font-black">No Warriors Yet</h2>
                <p className="text-neutral-400 max-w-md mx-auto">
                  You haven&apos;t minted any warriors yet. Head to the mint page to forge your first warrior!
                </p>
                <Link href="/mint">
                  <Button leftIcon={<Sparkles className="w-4 h-4" />} className="rounded-xl px-8 py-4 font-bold text-lg">
                    Mint Your First Warrior
                  </Button>
                </Link>
              </Card>
            </FadeIn>
          ) : (
            <div className="space-y-12">
              {/* Current PFP Display */}
              {currentPFP && (
                <FadeIn>
                  <Card variant="glass" className="p-6 border-yellow-500/20 rounded-3xl">
                    <div className="flex items-center gap-6">
                      <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-amber-600 rounded-full blur-sm opacity-60" />
                        <Image 
                          src={currentPFP.image} 
                          alt="Current PFP" 
                          width={80}
                          height={80}
                          unoptimized
                          className="relative w-20 h-20 rounded-full object-cover border-2 border-yellow-500"
                        />
                      </div>
                      <div>
                        <div className="text-xs font-black uppercase tracking-widest text-yellow-500 mb-1">Active PFP</div>
                        <div className="text-xl font-black">{currentPFP.name}</div>
                        <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border mt-1 ${TIER_STYLES[currentPFP.tier]?.badge}`}>
                          {currentPFP.rarity}
                        </span>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              )}

              {/* Warriors Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {warriors.map((warrior, index) => {
                  const style = TIER_STYLES[warrior.tier] || TIER_STYLES[0];
                  const isActivePFP = selectedPFP === index;
                  return (
                    <FadeIn key={index} delay={index * 0.05}>
                      <Card 
                        variant="glass" 
                        className={`p-3 rounded-3xl overflow-hidden transition-all duration-300 group ${
                          isActivePFP 
                            ? `border-2 ${style.border} shadow-lg ${style.glow}` 
                            : 'border-white/5 hover:border-white/10'
                        }`}
                      >
                        {/* Image */}
                        <div className="relative aspect-square rounded-2xl overflow-hidden mb-4">
                          <Image 
                            src={warrior.image} 
                            alt={warrior.name} 
                            width={400}
                            height={400}
                            unoptimized
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          {isActivePFP && (
                            <div className="absolute top-3 right-3 bg-yellow-500 text-black rounded-full p-1.5">
                              <Check className="w-4 h-4" strokeWidth={3} />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                            <div className="flex gap-2 w-full">
                              <button
                                onClick={() => setAsPFP(index)}
                                className={`flex-1 text-xs font-black uppercase tracking-wider py-2 px-3 rounded-xl transition-all ${
                                  isActivePFP 
                                    ? 'bg-yellow-500 text-black' 
                                    : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
                                }`}
                              >
                                {isActivePFP ? '✓ Active PFP' : 'Set as PFP'}
                              </button>
                              <button
                                onClick={() => removeWarrior(index)}
                                className="p-2 rounded-xl bg-red-500/20 hover:bg-red-500/40 text-red-400 backdrop-blur-sm transition-all"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Info */}
                        <div className="px-2 pb-2 space-y-2">
                          <div className="font-bold text-sm truncate">{warrior.name}</div>
                          <div className="flex items-center justify-between">
                            <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${style.badge}`}>
                              {warrior.rarity}
                            </span>
                            <span className="text-[10px] text-neutral-500 font-bold">
                              {new Date(warrior.timestamp).toLocaleDateString()}
                            </span>
                          </div>
                          {warrior.hash && (
                            <a 
                              href={`https://celoscan.io/tx/${warrior.hash}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] text-yellow-500/60 hover:text-yellow-500 font-bold uppercase tracking-wider transition-colors"
                            >
                              View on CeloScan →
                            </a>
                          )}
                        </div>
                      </Card>
                    </FadeIn>
                  );
                })}
              </div>
            </div>
          )}
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
