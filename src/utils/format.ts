/**
 * Formats a blockchain address to a shorter version with ellipsis.
 * @param address The address to format.
 * @returns A formatted string (e.g., "0x1234...abcd").
 */
export const formatAddress = (address: string): string => {
  if (!address) return '';
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
};

/**
 * Validates if a string is a valid Ethereum/Celo address.
 * @param address The address to validate.
 * @returns True if valid, false otherwise.
 */
export const isValidAddress = (address: string): boolean => {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
};

/**
 * Formats a number as a currency string.
 * @param value The value to format.
 * @param currency The currency symbol (default: "CELO").
 * @returns A formatted currency string.
 */
export const formatCurrency = (value: number | string, currency: string = 'CELO'): string => {
  const amount = typeof value === 'string' ? parseFloat(value) : value;
  if (isNaN(amount)) return `0.00 ${currency}`;
  return `${amount.toFixed(2)} ${currency}`;
};

/**
 * Formats a value as a CELO currency string with optional symbol.
 * @param value The value in wei or nominal units.
 * @param showSymbol Whether to append the CELO symbol.
 * @returns Formatted string.
 */
export const formatCelo = (value: bigint | string | number, showSymbol: boolean = true): string => {
  const nominalValue = typeof value === 'bigint' 
    ? Number(value) / 1e18 
    : Number(value);
    
  const formatted = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(nominalValue);

  return showSymbol ? `${formatted} CELO` : formatted;
};

/**
 * Copies a string to the user's clipboard.
 * @param text The text to copy.
 * @returns A promise that resolves when the text is copied.
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy text: ', error);
    return false;
  }
};
