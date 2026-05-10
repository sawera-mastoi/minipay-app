'use client';

import React, { useState } from 'react';
import { Navbar, Footer, Section, Container } from '../../components/layout';
import { Card, Glow, FadeIn, Badge } from '../../components/ui';
import { Button } from '../../components/ui/Button';
import { Wand, Shield, Zap, Sparkles, Image as ImageIcon } from 'lucide-react';
import { useAccount, useWriteContract, useWaitForTransactionReceipt } from 'wagmi';
import { parseEther } from 'viem';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useToast } from '../../hooks/useToast';
import { useConfetti } from '../../hooks/useConfetti';

// WarriorNFT contract details (to be deployed or using a placeholder)
const WARRIOR_NFT_ADDRESS = '0x60f8833cd724979952a3FA66Abd867B7B603272E';
import WarriorABI from '../../contracts/WarriorNFT.json'; // I'll need to generate this JSON

export default function MintPage() {
  const { address, isConnected } = useAccount();
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [warriorName, setWarriorName] = useState('');
  const { showToast } = useToast();
  const { fire: fireConfetti } = useConfetti();

  const { writeContract, data: hash, isPending } = useWriteContract();
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash });

  const generateWarrior = async () => {
    setIsGenerating(true);
    // Use Pollinations AI for free generation
    const seed = Math.floor(Math.random() * 1000000);
    const warriorTypes = ['Cyberpunk', 'Ethereal', 'Gothic', 'Frost', 'Magmatic', 'Ancient'];
    const selectedType = warriorTypes[Math.floor(Math.random() * warriorTypes.length)];
    const prompt = `Premium high-quality 3D portrait of a ${selectedType} Warrior, intricate armor, epic lighting, cinematic, 8k resolution, profile picture style`;
    const imageUrl = `https://image.pollinations.ai/prompt/${encodeURIComponent(prompt)}?width=512&height=512&seed=${seed}&nologo=true`;
    
    // Simulate generation time for UX
    setTimeout(() => {
      setGeneratedImage(imageUrl);
      setWarriorName(`${selectedType} Warrior #${seed % 9999}`);
      setIsGenerating(false);
      showToast('Warrior PFP generated successfully!');
    }, 2000);
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
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "uri",
                        "type": "string"
                    }
                ],
                "name": "mintWarrior",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            }
        ],
        functionName: 'mintWarrior',
        args: [generatedImage],
        value: parseEther('5'),
      });
    } catch (err: any) {
      showToast(err.message || 'Minting failed', 'error');
    }
  };

  React.useEffect(() => {
    if (isSuccess) {
      fireConfetti();
      showToast('Warrior PFP Minted successfully!', 'success');
    }
  }, [isSuccess, fireConfetti, showToast]);

  return (
    <main className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-yellow-500/30 overflow-x-hidden">
      <Navbar />
      
      {/* Background Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-yellow-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-600/5 rounded-full blur-[120px]" />
      </div>

      <Section className="pt-32 pb-20 relative z-10">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <FadeIn className="space-y-10">
              <div className="space-y-6 text-center lg:text-left">
                <Badge variant="warning" className="px-5 py-1.5 text-xs font-black uppercase tracking-[0.2em] bg-yellow-500/10 border-yellow-500/20 text-yellow-500">
                  <Sparkles className="w-3 h-3 mr-2 inline animate-pulse" />
                  Limited Collection
                </Badge>
                <h1 className="text-6xl lg:text-8xl font-black tracking-tighter leading-[0.85]">
                  FORGE YOUR <br/>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-600">
                    DESTINY.
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-neutral-400 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                  Connect your soul (wallet), summon a unique AI warrior, and immortalize it on the Celo blockchain. 
                  Your PFP is your key to the elite builder ecosystem.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 lg:gap-8">
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center backdrop-blur-md group hover:border-yellow-500/30 transition-all duration-500">
                  <Zap className="w-6 h-6 text-yellow-500 mx-auto mb-3 group-hover:scale-125 transition-transform" />
                  <div className="text-xl font-black">5 CELO</div>
                  <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mt-1">Cost</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center backdrop-blur-md group hover:border-amber-500/30 transition-all duration-500">
                  <Shield className="w-6 h-6 text-amber-500 mx-auto mb-3 group-hover:scale-125 transition-transform" />
                  <div className="text-xl font-black text-white">MAINNET</div>
                  <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mt-1">Network</div>
                </div>
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 text-center backdrop-blur-md group hover:border-orange-500/30 transition-all duration-500">
                  <Sparkles className="w-6 h-6 text-orange-500 mx-auto mb-3 group-hover:scale-125 transition-transform" />
                  <div className="text-xl font-black">AI GEN</div>
                  <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest mt-1">Traits</div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {!isConnected ? (
                  <div className="space-y-6 w-full max-w-sm mx-auto lg:mx-0">
                    <div className="p-4 bg-yellow-500/5 border border-yellow-500/10 rounded-2xl flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full animate-ping" />
                      <p className="text-sm text-yellow-500/80 font-bold uppercase tracking-wider">Awaiting Soul Connection...</p>
                    </div>
                    <ConnectButton label="Connect Your Soul" />
                  </div>
                ) : (
                  <>
                    <Button 
                      size="lg" 
                      onClick={generateWarrior} 
                      isLoading={isGenerating}
                      leftIcon={<Wand className="w-6 h-6" />}
                      className="px-12 py-8 text-xl font-black rounded-3xl shadow-[0_0_20px_rgba(251,191,36,0.3)] hover:shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all"
                    >
                      {generatedImage ? 'Re-Summon' : 'Summon Warrior'}
                    </Button>
                    {generatedImage && (
                      <Button 
                        variant="outline"
                        size="lg" 
                        onClick={handleMint} 
                        isLoading={isPending || isConfirming}
                        disabled={isGenerating}
                        className="px-12 py-8 text-xl font-black rounded-3xl border-white/10 hover:bg-white/5 backdrop-blur-sm"
                      >
                        Mint NFT
                      </Button>
                    )}
                  </>
                )}
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="relative group">
              <div className="absolute -inset-10 bg-gradient-to-tr from-yellow-500/30 to-orange-600/30 blur-[100px] opacity-40 group-hover:opacity-60 transition-all duration-1000 rounded-full animate-pulse" />
              <Card variant="glass" className="relative aspect-square p-6 border-white/10 overflow-hidden shadow-2xl rounded-[3rem] group">
                <Glow className="bottom-0 right-0 w-1/2 h-1/2 bg-amber-500/10" />
                
                {generatedImage ? (
                  <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-inner">
                    <img 
                      src={generatedImage} 
                      alt="Generated Warrior" 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent flex flex-col justify-end p-8 space-y-2">
                      <div className="text-3xl lg:text-4xl font-black tracking-tighter uppercase italic">{warriorName}</div>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-yellow-500 text-black border-none font-black text-[10px] px-3">READY TO MINT</Badge>
                        <div className="text-white/50 text-[10px] font-bold uppercase tracking-[0.2em]">Celo Mainnet</div>
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
                        <div className="text-yellow-500 font-black uppercase tracking-[0.3em] text-sm animate-pulse">Summoning...</div>
                      </div>
                    ) : (
                      <>
                        <div className="p-8 rounded-full bg-white/5 border border-white/10 group-hover:scale-110 transition-transform">
                          <ImageIcon className="w-16 h-16 text-neutral-700" />
                        </div>
                        <div className="text-center space-y-2 px-8">
                          <div className="text-neutral-300 font-black text-2xl uppercase tracking-tighter">Portal Closed</div>
                          <p className="text-sm text-neutral-500 font-medium">Summon your warrior to open the gateway to Celo Mainnet</p>
                        </div>
                      </>
                    )}
                  </div>
                )}
              </Card>

              {hash && (
                <FadeIn className="mt-8">
                  <div className="p-5 rounded-3xl bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-between backdrop-blur-xl">
                    <div className="flex items-center gap-4">
                      <div className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500"></span>
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
          </div>
        </Container>
      </Section>

      <Footer />
    </main>
  );
}
