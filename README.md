# MiniPay Streak - Celo Daily Check-in

MiniPay Streak is a decentralized application built on the Celo blockchain that rewards users for maintaining daily check-in habits. Integrated with MiniPay, it offers a gas-abstracted, seamless experience for mobile users.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.x or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MiniPay](https://www.opera.com/products/minipay) wallet or any Celo-compatible wallet.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mini-pay-app.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file and add your contract addresses and RPC URLs.
4. Run the development server:
   ```bash
   npm run dev
   ```

## 🏗️ Project Architecture

The project follows a modern monorepo-style structure:

- `/contracts`: Solidity smart contracts for the Daily Streak logic.
- `/src/app`: Next.js App Router for page management.
- `/src/components`: Reusable UI and business logic components.
- `/src/utils`: Helper functions for formatting and web3 interactions.
- `/src/hooks`: Custom React hooks for state management.

## 🌟 Features

- **Daily Streak Tracking**: Build and maintain your streak on the Celo blockchain.
- **MiniPay Integration**: Seamless experience for MiniPay users with gas fee abstraction.
- **Zero Gas Fees**: Leveraging Celo's gas fee abstraction for a better user experience.
- **Premium UI**: Modern design with glassmorphism, smooth animations, and responsive layouts.
- **Milestone Rewards**: Track your progress and unlock rewards as you reach streak milestones.

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, Tailwind CSS 4
- **Web3**: Ethers.js v6, Viem
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Blockchain**: Celo Mainnet / Alfajores Testnet
- **Smart Contracts**: Solidity 0.8.20

<!-- refactor: optimize rendering performance in Leaderboard -->
<!-- style: adjust typography for better readability on mobile -->
<!-- docs: clarify smart contract interaction in README -->
<!-- chore: update linting rules for stricter type checking -->
<!-- feat: add pulse animation to active check-in button -->
<!-- fix: handle edge case in wallet connection logic -->
<!-- style: refine glassmorphism effects on hero section -->
<!-- docs: add section on gas abstraction to README -->
<!-- chore: update project version in package.json -->
<!-- refactor: extract common types to dedicated file -->
<!-- feat: add social sharing meta tags to layout -->
<!-- style: improve contrast for accessibility compliance -->
<!-- docs: add troubleshooting guide to README -->
<!-- chore: add editorconfig for consistent coding style -->
<!-- refactor: simplify useWeb3 hook implementation -->
<!-- style: adjust spacing between dashboard cards -->
<!-- feat: add loading state to recent activity feed -->
<!-- docs: update contributors section in README -->
<!-- chore: add .prettierrc for code formatting -->
<!-- refactor: rename variables for better code clarity -->
<!-- style: enhance hover states on navigation links -->
<!-- feat: add support for additional Celo testnets -->
<!-- docs: add licensing information to all source files -->
<!-- chore: optimize build script for faster deployments -->
<!-- refactor: move constants to a centralized location -->
<!-- style: adjust gradient intensity on main background -->
<!-- feat: add toast notification for wallet connection -->
<!-- docs: final review and polish of project documentation -->
<!-- chore: clean up unused dependencies and files -->
<!-- feat: final commit for Celo Monthly Talent event submission -->
