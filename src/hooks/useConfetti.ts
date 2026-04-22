import { useState } from 'react';

export const useConfetti = () => {
  const [isActive, setIsActive] = useState(false);
  const fire = () => {
    setIsActive(true);
    setTimeout(() => setIsActive(false), 3000);
  };
  return { isActive, fire };
};
