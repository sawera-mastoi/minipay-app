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
