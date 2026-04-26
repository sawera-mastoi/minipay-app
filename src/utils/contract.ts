import { BrowserProvider, Contract, type Eip1193Provider } from 'ethers';
import { CONTRACT_ADDRESS } from './constants';
import ABI from '../../contracts/ABI.json';

/**
 * Returns a typed instance of the DailyStreak smart contract.
 * @param provider - The EIP-1193 provider (e.g., window.ethereum).
 */
export const getContract = (provider: Eip1193Provider) => {
  const ethersProvider = new BrowserProvider(provider);
  return new Contract(CONTRACT_ADDRESS, ABI, ethersProvider);
};
