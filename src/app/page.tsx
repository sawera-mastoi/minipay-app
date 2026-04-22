"use client";

import { useEffect, useState } from "react";
import { BrowserProvider, Contract } from "ethers";
import { CONTRACT_ADDRESS } from "../utils/constants";
import ABI from "../../contracts/ABI.json";

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
  const [activeProvider, setActiveProvider] = useState<any>(null);
  const [showWallets, setShowWallets] = useState(false);

  useEffect(() => {
    // Check if injected provider is MiniPay wallet environment
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const switchToCelo = async (provider: any) => {
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: CELO_PARAMS.chainId }],
      });
    } catch (switchError: any) {
      // 4902 error code means the chain hasn't been added to the wallet yet
      if (switchError.code === 4902) {
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
    let targetProvider = null;
    
    if (typeof window !== "undefined") {
      if (walletType === "OKX" && (window as any).okxwallet) {
        targetProvider = (window as any).okxwallet;
      } else if (walletType === "BITGET" && (window as any).bitkeep?.ethereum) {
        targetProvider = (window as any).bitkeep.ethereum;
      } else if (walletType === "METAMASK" && (window as any).ethereum) {
        targetProvider = (window as any).ethereum;
      }
    }

    if (!targetProvider) {
      alert(`${walletType} Wallet extension is not installed or detected!`);
      return;
    }

    try {
      // Request accounts first
      const accounts = await targetProvider.request({ method: "eth_requestAccounts" });
      if (accounts.length > 0) {
        // Force switch to Celo BEFORE creating the ethers provider instance
        await switchToCelo(targetProvider);
        
        setActiveProvider(targetProvider);
        setAccount(accounts[0]);
        
        // Fetch initial streak using the connected provider
        const ethersProvider = new BrowserProvider(targetProvider);
        const contract = new Contract(CONTRACT_ADDRESS, ABI, ethersProvider);
        const currentStreak = await contract.streaks(accounts[0]);
        setStreak(Number(currentStreak));
        setShowWallets(false);
      }
    } catch (error) {
      console.error("Connection failed", error);
    }
  };

  const handleCheckIn = async () => {
    if (!account || !activeProvider) return;
    setIsLoading(true);
    try {
      // Ensure we are STILL on Celo before transmitting to avoid wrong-chain errors
      await switchToCelo(activeProvider);
      
      const ethersProvider = new BrowserProvider(activeProvider);
      const signer = await ethersProvider.getSigner();
      const contract = new Contract(CONTRACT_ADDRESS, ABI, signer);
      
      const tx = await contract.checkIn();
      await tx.wait(); // wait for block confirmation
      
      setStreak((prev) => prev + 1);
      fireConfetti();
      showToast('Successfully checked in!');
      alert("Successfully checked in! Transaction Confirmed on Celo!");
    } catch (error: any) {
      console.error(error);
      alert(error.reason || error.message || "Transaction failed or rejected.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/40 via-neutral-950 to-neutral-950">
      
      <nav className="absolute top-0 w-full flex justify-between p-6 items-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
          MiniPay Streak
        </h1>
        {account ? (
          <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium">
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
        ) : (
          <div className="relative">
            <button 
              onClick={() => setShowWallets(!showWallets)}
              className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Connect Wallet
            </button>
            {showWallets && (
              <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-white/10 rounded-xl shadow-2xl overflow-hidden flex flex-col z-50">
                <button onClick={() => connectSpecificWallet('OKX')} className="px-4 py-3 text-left text-sm hover:bg-white/10 border-b border-white/5">OKX Wallet</button>
                <button onClick={() => connectSpecificWallet('BITGET')} className="px-4 py-3 text-left text-sm hover:bg-white/10 border-b border-white/5">Bitget Wallet</button>
                <button onClick={() => connectSpecificWallet('METAMASK')} className="px-4 py-3 text-left text-sm hover:bg-white/10">MetaMask / MiniPay</button>
              </div>
            )}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="max-w-md w-full rounded-3xl overflow-hidden glass-panel border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl relative p-8 text-center space-y-6">
        
        {/* Glow effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-yellow-500/20 blur-[100px] -z-10 rounded-full pointer-events-none" />

        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold tracking-tight">Daily Check-In</h2>
          <p className="text-neutral-400">Build your streak on Celo with zero fees.</p>
        </div>

        {isMiniPay && (
          <div className="inline-flex items-center space-x-2 px-3 py-1 bg-green-500/10 text-green-400 rounded-full text-xs font-semibold border border-green-500/20">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span>MiniPay Detected</span>
          </div>
        )}

        <div className="py-6 space-y-3">
          <div className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-300 to-orange-500 drop-shadow-sm">
            {streak}
          </div>
          <div className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
            Day Streak
          </div>
        </div>

        <button
          onClick={account ? handleCheckIn : () => setShowWallets(true)}
          disabled={isLoading}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-500 shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] 
            ${isLoading ? 'bg-neutral-800 text-neutral-400 scale-90' : 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:to-amber-500 text-white hover:scale-[1.02] active:scale-[0.98]'}`}
        >
          {isLoading ? "Confirming Request..." : account ? "Check In Now" : "Connect to Check In"}
        </button>

        <p className="text-xs text-neutral-500 mt-4 px-4">
          Celo Proof of Ship submission. MiniPay gas fee abstraction enables seamless daily check-ins.
        </p>
      </div>

    </main>
  );
}
