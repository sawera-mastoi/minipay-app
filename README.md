# 🌟 MiniPay Warrior: Forge Your On-Chain Identity on Celo

[![Celo Mainnet](https://img.shields.io/badge/Network-Celo%20Mainnet-35D07F?style=for-the-badge&logo=celo)](https://celoscan.io/)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MiniPay](https://img.shields.io/badge/Platform-MiniPay-blueviolet?style=for-the-badge)](https://www.opera.com/products/minipay)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

> **Status**: 🚀 Season 2 Active - Optimized for Celo Proof of Ship

---

## 📖 Table of Contents
1. [About The Project](#-about-the-project)
2. [Key Features](#-key-features)
3. [The Warrior Tier System](#-the-warrior-tier-system)
4. [User Flow & How It Works](#-user-flow--how-it-works)
5. [Technical Architecture](#-technical-architecture)
6. [Smart Contract Details](#-smart-contract-details)
7. [Getting Started (Local Development)](#-getting-started)
8. [Technology Stack](#-technology-stack)
9. [Contributing](#-contributing)
10. [License](#-license)

---

## 🚀 About The Project

**MiniPay Warrior** is a world-class decentralized application (dApp) engineered specifically for the **Celo ecosystem** and the **Opera MiniPay** wallet. It transforms daily blockchain interactions into a premium, Gamified experience. 

Instead of just tracking abstract numbers, builders and users can now **forge their on-chain identity** by generating unique, AI-powered Warrior Profile Pictures (PFPs) and minting them directly to the Celo Mainnet. By maintaining your daily streak and holding a Warrior PFP, you signal your active participation, consistency, and reputation in the global Celo community.

---

## ✨ Key Features

- **🤖 AI PFP Summoning Engine**
  Integrated with Pollinations AI, users can dynamically generate high-quality, unique warrior portraits. Each generation uses a randomized seed and theme to ensure no two warriors look alike.
- **🔥 Daily Check-In & Streak Engine**
  Build your on-chain reputation. Our smart contracts track your daily interactions, rewarding consistency and powering the global Proof of Ship leaderboard.
- **🎒 Warrior Inventory System**
  A dedicated space to view all your minted warriors. Users can seamlessly set their favorite minted NFT as their active Profile Picture, which synchronizes across the entire platform.
- **📱 MiniPay Native Optimization**
  Built with mobile-first principles and lightweight interactions, ensuring a flawless experience for the 14M+ users on Opera MiniPay.
- **👛 Multi-Wallet Support**
  Native, seamless connection integration for MetaMask, OKX, Bitget, and WalletConnect via RainbowKit.
- **🎨 Premium UI/UX**
  A state-of-the-art dark mode design featuring glassmorphism, dynamic gradients, Framer Motion animations, and responsive layouts that give a true "Game-Fi" feel.

---

## 💎 The Warrior Tier System

Users can mint warriors across 5 distinct tiers, each offering different aesthetics, rarities, and on-chain prestige:

| Tier | Price (CELO) | Rarity | Visual Characteristics |
| :--- | :--- | :--- | :--- |
| **Bronze** | 0.5 | Common | Simple warrior portrait, basic armor, clean design. |
| **Silver** | 2.0 | Uncommon | Detailed portrait, silver armor with engravings, atmospheric lighting. |
| **Gold** | 5.0 | Rare | Premium 3D portrait, intricate golden armor, cinematic epic lighting. |
| **Diamond**| 10.0 | Epic | Ultra-detailed legendary warrior, crystalline armor, magical aura. |
| **Mythic** | 50.0 | Mythic | Masterpiece godlike warrior, celestial armor, flowing energy, divine radiance. |

---

## 🕹️ User Flow & How It Works

1. **Connect & Authenticate**: The user lands on the app and connects their wallet. The app detects if they are using MiniPay and optimizes the interface.
2. **Summon a Warrior**: Navigate to the **Mint** page. The user selects a tier and clicks "Summon". The AI engine generates a completely unique portrait based on the tier's prompt metadata.
3. **Mint on Celo**: If the user loves the design, they mint it directly to the Celo Mainnet paying the tier's CELO price.
4. **Equip in Inventory**: The user visits their **Inventory**, views their collection, and equips a warrior as their active PFP.
5. **Maintain the Streak**: The user returns daily to the home page to click **Check In**, incrementing their on-chain streak counter and securing their spot on the leaderboard.

---

## 🏗️ Technical Architecture

MiniPay Warrior is built for speed, security, and a premium user experience.

- **Frontend Core**: Built on **Next.js 15 (App Router)** and **React 19**, utilizing Server Components for fast initial loads and Client Components for rich interactivity.
- **Web3 Layer**: Uses **Wagmi v2** and **Viem** for type-safe, ultra-fast smart contract reads/writes. **RainbowKit** handles the wallet connection modal.
- **State Management**: React Query handles caching and asynchronous state for blockchain data, while `localStorage` is used to persist UI preferences (like the active PFP) across sessions without requiring continuous blockchain reads.
- **Styling**: **Tailwind CSS v4** handles the utility-first styling, combined with custom CSS for glassmorphism effects and **Framer Motion** for page transitions and micro-animations.

---

## 📜 Smart Contract Details

The application interacts with several smart contracts deployed on the **Celo Mainnet**.

- **Network**: Celo Mainnet (Chain ID: `42220`)
- **WarriorNFT Contract**: `0x60f8833cd724979952a3FA66Abd867B7B603272E`
  - *Handles the minting, tier verification, and URI storage for the AI-generated PFPs.*
- **Daily Streak Contract**: `0xc8b20FD2C23f2Db1d7f27736B0E20bdaFbF2672c`
  - *Handles time-based activity tracking, ensuring users can only check in once per day.*

---

## 💻 Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites
- **Node.js** (v18.17 or newer)
- **npm**, **yarn**, or **pnpm**
- A Celo-compatible Web3 wallet (MetaMask, MiniPay, etc.) funded with testnet/mainnet CELO for testing transactions.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/sawera-mastoi/minipay-app.git
   cd minipay-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## 🛠️ Technology Stack

| Category | Technology |
| :--- | :--- |
| **Framework** | Next.js 15, React 19 |
| **Web3/Blockchain** | Wagmi, Viem, RainbowKit, Solidity |
| **Styling** | Tailwind CSS 4, Framer Motion, Lucide React |
| **AI Generation** | Pollinations AI |
| **Tooling** | TypeScript, ESLint, PostCSS |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  <br>
  Built with 💛 for the <b>Celo Proof of Ship</b> program.
  <br>
</p>
