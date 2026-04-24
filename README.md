# MiniPay Streak 🚀

[![Celo Mainnet](https://img.shields.io/badge/Network-Celo%20Mainnet-35D07F?style=for-the-badge&logo=celo)](https://celoscan.io/address/0xc8b20FD2C23f2Db1d7f27736B0E20bdaFbF2672c)
[![Next.js](https://img.shields.io/badge/Built%20with-Next.js%2015-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![MiniPay](https://img.shields.io/badge/Platform-MiniPay-blueviolet?style=for-the-badge)](https://www.opera.com/products/minipay)

**MiniPay Streak** is a premium decentralized application built on the **Celo blockchain** that incentivizes daily user engagement through a gamified check-in system. Designed specifically for the **MiniPay** mobile wallet, it leverages gas fee abstraction and a sleek, modern UI to provide a seamless Web3 experience.

---

## 🌟 Key Features

- **Daily Check-In Engine**: Maintain your streak by interacting with our audited smart contract.
- **Gas Abstraction**: Powered by Celo's native gas fee abstraction, ensuring users never worry about gas tokens.
- **Real-time Leaderboard**: Compete with the global community and track top performers.
- **Social Sharing**: Share your achievements directly to X (Twitter) or via native mobile sharing.
- **Premium UX/UI**: Built with Framer Motion for smooth transitions and a glassmorphism design language.

## 🏗️ Technical Architecture

The project is architected for scalability and maintainability:

- **Smart Contracts**: Solidity 0.8.20 implementation of streak logic with efficient state management.
- **Frontend**: Next.js 15 (App Router) for optimized rendering and SEO.
- **Blockchain Interface**: Ethers.js v6 for robust interaction with the Celo network.
- **Styling**: Tailwind CSS 4 for a modern, responsive design system.

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

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Built with ❤️ for the **Celo Monthly Talent** event.
