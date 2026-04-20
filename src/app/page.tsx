"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [isMiniPay, setIsMiniPay] = useState(false);
  const [account, setAccount] = useState<string | null>(null);
  const [streak, setStreak] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // MiniPay injection check
    if (typeof window !== "undefined" && (window as any).ethereum?.isMiniPay) {
      setIsMiniPay(true);
    }
  }, []);

  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({ method: "eth_requestAccounts" });
        if (accounts.length > 0) {
          setAccount(accounts[0]);
        }
      } catch (error) {
        console.error("Connection failed", error);
      }
    } else {
      alert("Please install a Celo-compatible wallet or open in MiniPay.");
    }
  };

  const handleCheckIn = async () => {
    if (!account) return;
    setIsLoading(true);
    try {
      // Stub for interacting with the DailyStreak.sol contract
      // Since we don't have viem/ethers installed yet, this is a simulated click for the UI demo.
      // In production, instantiate contract and call checkIn()
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStreak((prev) => prev + 1);
      alert("Successfully checked in using MiniPay fee abstraction!");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white flex flex-col items-center justify-center p-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-yellow-900/40 via-neutral-950 to-neutral-950">
      
      {/* Navbar Stub */}
      <nav className="absolute top-0 w-full flex justify-between p-6 items-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-amber-600">
          MiniPay Streak
        </h1>
        {account ? (
          <div className="px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-md text-sm font-medium">
            {account.slice(0, 6)}...{account.slice(-4)}
          </div>
        ) : (
          <button 
            onClick={connectWallet}
            className="px-6 py-2 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
          >
            Connect Wallet
          </button>
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
          onClick={account ? handleCheckIn : connectWallet}
          disabled={isLoading}
          className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 shadow-[0_0_40px_-10px_rgba(234,179,8,0.5)] 
            ${isLoading ? 'bg-neutral-800 text-neutral-400 scale-95' : 'bg-gradient-to-r from-yellow-500 to-amber-600 hover:to-amber-500 text-white hover:scale-[1.02] active:scale-[0.98]'}`}
        >
          {isLoading ? "Confirming..." : account ? "Check In Now" : "Connect to Check In"}
        </button>

        <p className="text-xs text-neutral-500 mt-4 px-4">
          Celo Proof of Ship submission. MiniPay gas fee abstraction enables seamless daily check-ins.
        </p>
      </div>

    </main>
  );
}
