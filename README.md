# 🌟 MiniPay Warrior: Forge Your On-Chain Identity on Celo

[![Celo Mainnet](https://img.shields.io/badge/Network-Celo%20Mainnet-35D07F?style=for-the-badge&logo=celo)](https://celoscan.io/address/0x60f8833cd724979952a3FA66Abd867B7B603272E)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MiniPay](https://img.shields.io/badge/Platform-MiniPay-blueviolet?style=for-the-badge)](https://www.opera.com/products/minipay)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Status**: 🚀 Season 2 Active - Optimized for Celo Proof of Ship

**MiniPay Warrior** is a world-class decentralized application engineered for the **Celo ecosystem**. It transforms daily blockchain interaction into a premium, gamified experience. Beyond simple streak tracking, builders can now **forge their on-chain identity** by minting unique, AI-generated Warrior PFPs directly to the Celo Mainnet.

## ⚔️ Forge Your Destiny
MiniPay Warrior is more than a tool—it's a credential. By maintaining your daily streak and holding a Warrior PFP, you signal your active participation and reputation in the global Celo builder community.

### 🌟 Key Features
- **AI PFP Summoning**: Use our integrated AI engine to generate unique Warrior portraits before minting.
- **Daily Check-In Engine**: Build your on-chain reputation with daily interactions.
- **Multi-Wallet Support**: Native integration for **MiniPay**, **MetaMask**, **OKX**, and **Bitget** via RainbowKit.
- **Leaderboard Prestige**: Rank among the top builders and showcase your rarity.
- **Premium UX/UI**: A state-of-the-art dark mode design featuring glassmorphism and fluid animations.

---

## 🏗️ Technical Architecture
Our architecture is built for **speed**, **security**, and **premium user experience**:

- **Frontend**: [Next.js 15](https://nextjs.org/) with React 19.
- **Smart Contracts**: 
    - `DailyStreak.sol`: Handles time-based activity tracking.
    - `WarriorNFT.sol`: ERC721 contract with URI storage for unique PFPs (Deployed at `0x60f8...272E`).
- **Web3 Stack**: [Wagmi](https://wagmi.sh/), [Viem](https://viem.sh/), and [RainbowKit](https://www.rainbowkit.com/) for a robust, modern connection layer.
- **AI Integration**: Powered by Pollinations AI for dynamic, high-quality image generation.
- **Styling**: Tailwind CSS 4 + Framer Motion for a premium "Game-Fi" feel.

### Contract Information
- **Network**: Celo Mainnet
- **NFT Address**: `0x60f8833cd724979952a3FA66Abd867B7B603272E`
- **Streak Address**: `0xc8b20FD2C23f2Db1d7f27736B0E20bdaFbF2672c`

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- A Celo-compatible wallet (MiniPay recommended)

### Installation
1. Clone the repo:
   ```bash
   git clone https://github.com/sawera-mastoi/minipay-app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run development server:
   ```bash
   npm run dev
   ```

---

## 📜 How it Works
1. **Wallet Connection**: RainbowKit detects your wallet and ensures you are on Celo Mainnet.
2. **Summoning**: The "Mint" page allows you to generate AI portraits. Once you find your warrior, you can mint it for **5 CELO**.
3. **Streaking**: Visit daily to "Check In" and build your streak count.
4. **Reputation**: Your streak and NFT ownership are tracked on-chain, contributing to your global Proof of Ship ranking.

---

<p align="center">
  Built with 💛 for the <b>Celo Proof of Ship</b> program.
</p>
