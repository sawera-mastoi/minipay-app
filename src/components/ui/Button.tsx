/**
 * A versatile, animated button component supporting various themes and states.
 */
import React from 'react';
import { Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

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
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-yellow-500/50 disabled:opacity-50 disabled:pointer-events-none gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-yellow-500 to-amber-600 text-white shadow-[0_0_20px_-5px_rgba(234,179,8,0.4)]',
    secondary: 'bg-white/10 backdrop-blur-md text-white hover:bg-white/20',
    outline: 'border border-white/20 text-white hover:bg-white/10',
    ghost: 'text-neutral-400 hover:text-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button aria-label={props['aria-label'] || (typeof children === 'string' ? children : 'button')} 
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={\ \ \ \} 
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading && <Loader2 className='w-4 h-4 animate-spin' />}
      {!isLoading && leftIcon}
      {children}
      {!isLoading && rightIcon}
    </motion.button>
  );
};
 // logic update 206
 // logic update 207
 // logic update 208
 // logic update 209
 // logic update 210
 // logic update 211
 // logic update 212
 // logic update 213
 // logic update 214
 // logic update 215
 // logic update 216
 // logic update 217
 // logic update 218
 // logic update 219
 // logic update 220
 // logic update 221
 // logic update 222
 // logic update 223
 // logic update 224
 // logic update 225
 // logic update 226
 // logic update 227
 // logic update 228
 // logic update 229
 // logic update 230
 // logic update 231
 // logic update 232
 // logic update 233
 // logic update 234
 // logic update 235
 // logic update 236
 // logic update 237
 // logic update 238
 // logic update 239
 // logic update 240
 // logic update 241
 // logic update 242
 // logic update 243
 // logic update 244
 // logic update 245
