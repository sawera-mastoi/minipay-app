/**
 * Social sharing utilities for amplifying streak achievements.
 * These helpers facilitate community growth and user recognition within the Celo ecosystem.
 */

interface ShareOptions {
  streak: number;
  address: string;
}

/**
 * Generates a Twitter share URL for the user's streak achievement.
 */
export const getTwitterShareUrl = ({ streak, address }: ShareOptions): string => {
  const text = `I just reached a ${streak}-day check-in streak on MiniPay Streak! 🚀 

Maintaining my daily habits on the #Celo blockchain with @MiniPay. 

Check out my profile: https://minipay-streak.vercel.app/profile/${address}`;
  
  return `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
};

/**
 * Shares the streak achievement using the native Web Share API if available.
 */
export const shareStreakNative = async ({ streak, address }: ShareOptions): Promise<void> => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: 'My MiniPay Streak',
        text: `I've reached a ${streak}-day streak on MiniPay Streak! Join me on Celo.`,
        url: `https://minipay-streak.vercel.app/profile/${address}`,
      });
    } catch (error) {
      console.error('Error sharing:', error);
    }
  } else {
    // Fallback to Twitter
    window.open(getTwitterShareUrl({ streak, address }), '_blank');
  }
};
