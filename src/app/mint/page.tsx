'use client';

import React, { useState } from 'react';
import { Navbar, Footer, Section, Container } from '../../components/layout';
import { Card, Glow, FadeIn, Badge } from '../../components/ui';
import { Button } from '../../components/ui/Button';
import { Wand, Shield, Zap, Sparkles, Crown, Gem, Image as ImageIcon, Package } from 'lucide-react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useToast } from '../../hooks/useToast';
import { useConfetti } from '../../hooks/useConfetti';
import Link from 'next/link';
import Image from 'next/image';

const WARRIOR_NFT_ADDRESS = '0x60f8833cd724979952a3FA66Abd867B7B603272E';

// Tier configuration
const TIERS = [
  {
    id: 0,
    name: 'Bronze',
    price: '0.5',
    rarity: 'Common',
    color: 'from-amber-700 to-amber-900',
    border: 'border-amber-700/30 hover:border-amber-600/60',
    glow: 'bg-amber-700/20',
    badge: 'bg-amber-800/30 text-amber-500 border-amber-700/30',
    icon: Shield,
    prompt: 'Simple warrior portrait, basic armor, clean design',
    description: 'Entry-level warrior for new builders',
  },
  {
    id: 1,
    name: 'Silver',
    price: '2',
    rarity: 'Uncommon',
    color: 'from-slate-300 to-slate-500',
    border: 'border-slate-400/30 hover:border-slate-300/60',
    glow: 'bg-slate-400/20',
    badge: 'bg-slate-500/20 text-slate-300 border-slate-400/30',
    icon: Shield,
    prompt: 'Detailed warrior portrait, silver armor with engravings, atmospheric lighting',
    description: 'Enhanced details & armor design',
  },
  {
    id: 2,
    name: 'Gold',
    price: '5',
    rarity: 'Rare',
    color: 'from-yellow-400 to-amber-600',
    border: 'border-yellow-500/30 hover:border-yellow-400/60',
    glow: 'bg-yellow-500/20',
    badge: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    icon: Zap,
    prompt: 'Premium high-quality 3D portrait of a warrior, intricate golden armor, epic lighting, cinematic, 8k resolution',
    description: 'Premium armor & epic effects',
  },
  {
    id: 3,
    name: 'Diamond',
    price: '10',
    rarity: 'Epic',
    color: 'from-cyan-400 to-blue-600',
    border: 'border-cyan-400/30 hover:border-cyan-300/60',
    glow: 'bg-cyan-400/20',
    badge: 'bg-cyan-500/20 text-cyan-400 border-cyan-400/30',
    icon: Gem,
    prompt: 'Ultra-detailed legendary warrior portrait, diamond crystalline armor, magical aura, volumetric lighting, unreal engine quality, 8k',
    description: 'Legendary design with magical aura',
  },
  {
    id: 4,
    name: 'Mythic',
    price: '50',
    rarity: 'Mythic',
    color: 'from-purple-400 via-pink-500 to-red-500',
    border: 'border-purple-500/30 hover:border-purple-400/60',
    glow: 'bg-purple-500/20',
    badge: 'bg-purple-500/20 text-purple-400 border-purple-400/30',
    icon: Crown,
    prompt: 'Masterpiece godlike warrior portrait, mythic celestial armor with flowing energy tendrils, galaxy background, divine radiance, concept art, award-winning, 16k ultra resolution',
    description: 'Ultra-rare godlike warrior',
  },
];

export default function MintPage() {
  const { isConnected } = useAccount();
  const [selectedTier, setSelectedTier] = useState(2); // Default to Gold
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [warriorName, setWarriorName] = useState('');
  const { showToast } = useToast();
  const { fire: fireConfetti } = useConfetti();

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const tier = TIERS[selectedTier];

  const generateWarrior = async () => {
    setIsGenerating(true);
    const seed = Math.floor(Math.random() * 1000000);
    const warriorTypes = ['Cyberpunk', 'Ethereal', 'Gothic', 'Frost', 'Magmatic', 'Ancient', 'Celestial', 'Shadow', 'Storm', 'Void'];
    const selectedType = warriorTypes[Math.floor(Math.random() * warriorTypes.length)];
    const prompt = `${tier.prompt}, ${selectedType} theme, profile picture style`;
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&seed=${seed}&nologo=true`;
    
    setTimeout(() => {
      setGeneratedImage(imageUrl);
      setWarriorName(`${selectedType} ${tier.name} Warrior #${seed % 9999}`);
      setIsGenerating(false);
      showToast(`${tier.name} Warrior generated!`);
    }, 2500);
  };

  const handleMint = async () => {
    if (!isConnected) {
      showToast('Please connect your wallet first', 'error');
      return;
    }
    if (!generatedImage) {
      showToast('Please generate a warrior first', 'error');
      return;
    }

    try {
      writeContract({
        address: WARRIOR_NFT_ADDRESS as `0x${string}`,
        abi: [
          {
            inputs: [
              { internalType: 'string', name: 'uri', type: 'string' },
              { internalType: 'uint8', name: 'tier', type: 'uint8' },
            ],
            name: 'mintWarrior',
            outputs: [],
            stateMutability: 'payable',
            type: 'function',
          },
        ],
        functionName: 'mintWarrior',
        args: [generatedImage, selectedTier],
        value: parseEther(tier.price),
      });
    } catch (err) {
      showToast(err instanceof Error ? err.message : 'Minting failed', 'error');
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      fireConfetti();
      showToast(`${tier.name} Warrior minted! Check your inventory.`, 'success');
      // Save to localStorage for inventory
      const minted = JSON.parse(localStorage.getItem('mintedWarriors') || '[]');
      minted.push({
        image: generatedImage,
        name: warriorName,
        tier: selectedTier,
        tierName: tier.name,
        rarity: tier.rarity,
        hash,
        timestamp: Date.now(),
      });
      localStorage.setItem('mintedWarriors', JSON.stringify(minted));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <Section className="pt-32 pb-20 relative z-10">
        <Container>
          {/* Header */}
          <FadeIn className="text-center mb-16 space-y-6">
            <Badge variant="warning" className="px-5 py-1.5 text-xs font-black uppercase tracking-[0.2em] bg-yellow-500/10 border-yellow-500/20 text-yellow-500">
              <Sparkles className="w-3 h-3 mr-2 inline animate-pulse" />
              Choose Your Tier
            </Badge>
            <h1 className="text-5xl lg:text-7xl font-black tracking-tighter leading-[0.85]">
              FORGE YOUR{' '}
              <span className={`bg-clip-text text-transparent bg-gradient-to-r ${tier.color}`}>
                {tier.name.toUpperCase()}
              </span>
              {' '}WARRIOR
            </h1>
            <p className="text-lg text-neutral-400 max-w-2xl mx-auto font-medium">
              Select a tier, summon your warrior, and mint it on-chain. Higher tiers unlock rarer designs.
            </p>
          </FadeIn>

          {/* Tier Selector */}
          <FadeIn delay={0.1} className="mb-16">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {TIERS.map((t) => {
                const TierIcon = t.icon;
                const isSelected = selectedTier === t.id;
                return (
                  <button
                    key={t.id}
                    onClick={() => { setSelectedTier(t.id); setGeneratedImage(null); }}
                    className={`relative p-5 rounded-2xl border-2 text-center transition-all duration-300 cursor-pointer group ${
                      isSelected
                        ? `${t.border} bg-white/10 scale-[1.03] shadow-lg`
                        : 'border-white/5 bg-white/[0.02] hover:bg-white/5'
                    }`}
                  >
                    {isSelected && (
                      <div className={`absolute -inset-1 ${t.glow} blur-xl rounded-2xl -z-10 animate-pulse`} />
                    )}
                    <TierIcon className={`w-7 h-7 mx-auto mb-3 ${isSelected ? 'scale-110' : 'text-neutral-500'} transition-all`}
                      style={isSelected ? { color: t.badge.includes('yellow') ? '#facc15' : t.badge.includes('cyan') ? '#22d3ee' : t.badge.includes('purple') ? '#c084fc' : t.badge.includes('slate') ? '#94a3b8' : '#d97706' } : {}}
                    />
                    <div className="font-black text-sm uppercase tracking-wider mb-1">{t.name}</div>
                    <div className={`text-2xl font-black mb-1 ${isSelected ? 'text-white' : 'text-neutral-400'}`}>
                      {t.price}
                    </div>
                    <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mb-2">CELO</div>
                    <span className={`inline-block text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded-full border ${t.badge}`}>
                      {t.rarity}
                    </span>
                    {isSelected && (
                      <p className="text-[11px] text-neutral-400 mt-3 leading-tight">{t.description}</p>
                    )}
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
            {/* Left: Actions */}
            <FadeIn delay={0.2} className="space-y-8">
              <Card variant="glass" className="p-8 border-white/10 rounded-3xl space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-black tracking-tight">Summon & Mint</h2>
                  <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 rounded-full border ${tier.badge}`}>
                    {tier.rarity}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-lg font-black">{tier.price}</div>
                    <div className="text-[9px] uppercase font-bold text-neutral-500 tracking-widest">CELO</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-lg font-black">MAINNET</div>
                    <div className="text-[9px] uppercase font-bold text-neutral-500 tracking-widest">Network</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 text-center">
                    <div className="text-lg font-black">AI</div>
                    <div className="text-[9px] uppercase font-bold text-neutral-500 tracking-widest">Generated</div>
                  </div>
                </div>

                {!isConnected ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                      <p className="text-sm text-yellow-500/80 font-bold uppercase tracking-wider">Awaiting Connection...</p>
                    </div>
                    <ConnectButton label="Connect Wallet" />
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Button 
                      size="lg" 
                      onClick={generateWarrior} 
                      isLoading={isGenerating}
                      leftIcon={<Wand className="w-5 h-5" />}
                      className="w-full py-6 text-lg font-black rounded-2xl shadow-[0_0_20px_rgba(251,191,36,0.2)] hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] transition-all"
                    >
                      {generatedImage ? 'Re-Summon' : `Summon ${tier.name} Warrior`}
                    </Button>
                    {generatedImage && (
                      <Button 
                        variant="outline"
                        size="lg" 
                        onClick={handleMint} 
                        isLoading={isPending || isConfirming}
                        disabled={isGenerating}
                        className="w-full py-6 text-lg font-black rounded-2xl border-white/10 hover:bg-white/5"
                      >
                        Mint for {tier.price} CELO
                      </Button>
                    )}
                  </div>
                )}
              </Card>

              {/* Inventory Link */}
              <Link href="/inventory">
                <Card variant="glass" className="p-6 border-white/10 rounded-2xl flex items-center justify-between group hover:border-yellow-500/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <Package className="w-6 h-6 text-yellow-500" />
                    <div>
                      <div className="font-bold">Your Inventory</div>
                      <div className="text-sm text-neutral-500">View & manage your minted warriors</div>
                    </div>
                  </div>
                  <div className="text-yellow-500 font-bold group-hover:translate-x-1 transition-transform">→</div>
                </Card>
              </Link>

              {hash && (
                <FadeIn>
                  <div className="p-5 rounded-2xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500" />
                      </div>
                      <span className="text-sm font-black text-yellow-500 uppercase tracking-widest">Forging on-chain...</span>
                    </div>
                    <a 
                      href={`https://celoscan.io/tx/${hash}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs font-black text-white hover:text-yellow-500 transition-colors uppercase tracking-widest underline decoration-yellow-500 underline-offset-4"
                    >
                      Explorer
                    </a>
                  </div>
                </FadeIn>
              )}
            </FadeIn>

            {/* Right: Preview */}
            <FadeIn delay={0.3} className="relative group">
              <div className={`absolute -inset-10 bg-gradient-to-tr ${tier.color} blur-[100px] opacity-20 group-hover:opacity-40 transition-all duration-1000 rounded-full animate-pulse`} />
              <Card variant="glass" className="relative aspect-square p-6 border-white/10 overflow-hidden shadow-2xl rounded-[3rem] group">
                <Glow className="bottom-0 right-0 w-1/2 h-1/2 bg-amber-500/10" />
                
                {generatedImage ? (
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-inner">
                    <Image 
                      src={generatedImage} 
                      alt="Generated Warrior" 
                      width={512}
                      height={512}
                      unoptimized
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 space-y-2">
                      <div className="text-2xl lg:text-3xl font-black tracking-tighter uppercase italic">{warriorName}</div>
                      <div className="flex items-center gap-2">
                        <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${tier.badge}`}>
                          {tier.rarity}
                        </span>
                        <span className={`inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/70`}>
                          {tier.price} CELO
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center space-y-6 bg-white/5 rounded-[2rem] border-2 border-dashed border-white/10 group-hover:border-yellow-500/30 transition-all duration-500">
                    {isGenerating ? (
                      <div className="flex flex-col items-center gap-6">
                        <div className="relative">
                          <div className="w-24 h-24 border-4 border-yellow-500/10 border-t-yellow-500 rounded-full animate-spin" />
                          <Wand className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 text-yellow-500 animate-pulse" />
                        </div>
                        <div className="text-yellow-500 font-black uppercase tracking-[0.3em] text-sm animate-pulse">
                          Forging {tier.name}...
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="p-8 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                          <ImageIcon className="w-16 h-16 text-neutral-700" />
                        </div>
                        <div className="text-center space-y-2 px-8">
                          <div className="text-neutral-300 font-black text-2xl uppercase tracking-tighter">Select & Summon</div>
                          <p className="text-sm text-neutral-500 font-medium">Choose a tier above, then summon your warrior</p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </Card>
            </FadeIn>
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
