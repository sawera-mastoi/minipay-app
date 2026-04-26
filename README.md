# 🌟 MiniPay Streak: Elevating Celo Engagement

[![Celo Mainnet](https://img.shields.io/badge/Network-Celo%20Mainnet-35D07F?style=for-the-badge&logo=celo)](https://celoscan.io/address/0xc8b20FD2C23f2Db1d7f27736B0E20bdaFbF2672c)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MiniPay](https://img.shields.io/badge/Platform-MiniPay-blueviolet?style=for-the-badge)](https://www.opera.com/products/minipay)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)

> **Status**: 🚀 Active Development - Optimized for Celo Monthly Talent

**MiniPay Streak** is a world-class decentralized application engineered for the **Celo ecosystem**. It transforms daily blockchain interaction into a premium, gamified experience, specifically optimized for the **MiniPay** mobile wallet. By leveraging Celo's revolutionary gas abstraction and high-performance infrastructure, we've created a seamless bridge between habit-building and Web3.

## 🌍 Why Celo? (An Appreciation)

MiniPay Streak is built on Celo because we believe in their mission of **prosperity for everyone**. Celo provides the perfect foundation for our application through:

- **Mobile-First DNA**: Celo's ultra-lightweight sync and phone number mapping (Social Connect) make it the only logical choice for MiniPay.
- **Gas Abstraction**: The ability to pay for gas in stablecoins or have it abstracted away entirely allows us to reach the next billion users without the friction of "native tokens."
- **Eco-Friendly**: As a carbon-negative blockchain, Celo aligns with our values of sustainable innovation.
- **Fast & Reliable**: Sub-second block times ensure that "Checking In" is instantaneous and satisfying.

---

## 🌟 Key Features

- **Daily Check-In Engine**: Maintain your streak by interacting with our audited smart contract.
- **Gas Abstraction**: Powered by Celo's native gas fee abstraction, ensuring users never worry about gas tokens.
- **Real-time Leaderboard**: Compete with the global community and track top performers.
- **Social Sharing**: Share your achievements directly to X (Twitter) or via native mobile sharing.
- **Premium UX/UI**: Built with Framer Motion for smooth transitions and a glassmorphism design language.

## 🏗️ Technical Architecture

Our architecture is built for **speed**, **security**, and **premium user experience**:

- **Frontend**: [Next.js 15 (App Router)](https://nextjs.org/) with React 19, utilizing Server Components for lightning-fast initial loads and Client Components for interactive Web3 states.
- **Smart Contracts**: Solidity 0.8.20 with optimized storage slots to minimize gas costs and rigorous state validation.
- **Blockchain Interface**: [Ethers.js v6](https://docs.ethers.org/v6/) providing a robust, type-safe interface to the Celo Mainnet.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) + [Framer Motion](https://www.framer.com/motion/) for a state-of-the-art Design System featuring glassmorphism and fluid animations.
- **State Persistence**: Custom `useLocalStorage` hooks with cross-tab synchronization and error resilience.

### Contract Information
- **Network**: Celo Mainnet
- **Address**: `0xc8b20FD2C23f2Db1d7f27736B0E20bdaFbF2672c`
- **ABI**: Found in `contracts/ABI.json`

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

## 📜 How it Works (Technical Deep-Dive)

1. **Wallet Connection**: The app detects the `window.ethereum` provider, specifically checking for the `isMiniPay` flag to tailor the UI.
2. **Streak Logic**: When a user clicks "Check In", a transaction is sent to the `DailyStreak` contract. The contract checks if 24 hours have passed since the last check-in but less than 48 hours (to maintain the streak).
3. **Gas Abstraction**: For MiniPay users, the gas fees are abstracted at the wallet level, providing a "Zero Gas" feel.
4. **State Management**: React hooks manage the local state, while `ethers.js` ensures real-time synchronization with onchain data.

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with 💛 by the <b>MiniPay Streak Team</b> for the <b>Celo Monthly Talent</b> event.
</p>
