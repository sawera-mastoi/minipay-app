import { BrowserProvider, Contract } from 'ethers';
import { CONTRACT_ADDRESS } from './constants';
import ABI from '../../contracts/ABI.json';

export const getContract = (provider: any) => {
  const ethersProvider = new BrowserProvider(provider);
  return new Contract(CONTRACT_ADDRESS, ABI, ethersProvider);
};
