import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  /** The content of the button */
  children?: React.ReactNode;
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass';
  /** Size of the button */
  size?: 'sm' | 'md' | 'lg';
  /** Shows a loading spinner and disables the button */
  isLoading?: boolean;
  /** Icon to display before children */
  leftIcon?: React.ReactNode;
  /** Icon to display after children */
  rightIcon?: React.ReactNode;
}

/**
 * A premium, highly customizable Button component built with Framer Motion.
 * Supports multiple visual variants, sizes, loading states, and icon integration.
 * Optimized for touch interactions on the MiniPay mobile wallet.
 * 
 * @param {ButtonProps} props - The component props.
 */
export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  leftIcon,
  rightIcon,
  className = '', 
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-2xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500/50 disabled:opacity-50 disabled:pointer-events-none gap-2 select-none';
  
  const variants = {
    primary: 'bg-gradient-to-br from-yellow-400 via-yellow-500 to-amber-600 text-black shadow-[0_4px_20px_-5px_rgba(234,179,8,0.5)] active:shadow-none',
    secondary: 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20 border border-white/10',
    outline: 'border-2 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/10',
    ghost: 'text-neutral-400 hover:text-white hover:bg-white/5',
    glass: 'bg-white/5 backdrop-blur-2xl border border-white/10 text-white shadow-xl hover:bg-white/10',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <motion.button 
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98, y: 0 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <Loader2 className='w-5 h-5 animate-spin' />
      ) : (
        <>
          {leftIcon && <span className="opacity-90">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="opacity-90">{rightIcon}</span>}
        </>
      )}
    </motion.button>
  );
};
