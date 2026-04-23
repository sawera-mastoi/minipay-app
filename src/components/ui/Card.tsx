import React from 'react';

interface CardProps {
  /** The content of the card */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** The visual style of the card */
  variant?: 'default' | 'glass';
}

/**
 * Card component with glassmorphism and standard variants.
 * @example
 * <Card variant="glass">
 *   <CardHeader>Title</CardHeader>
 *   <CardBody>Content</CardBody>
 * </Card>
 */
export const Card = ({ children, className = '', variant = 'default' }: CardProps) => {
  const variants = {
    default: 'bg-neutral-900 border border-white/10',
    glass: 'bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl',
  };

  return (
    <div className={`
      rounded-3xl overflow-hidden transition-all duration-500 
      hover:shadow-[0_20px_50px_rgba(234,179,8,0.1)] 
      hover:-translate-y-1
      ${variants[variant]} ${className}
    `}>
      {children}
    </div>
  );
};

/**
 * Header section of the Card component.
 */
export const CardHeader = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 border-b border-white/5 ${className}`}>{children}</div>
);

/**
 * Body section of the Card component.
 */
export const CardBody = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

/**
 * Footer section of the Card component.
 */
export const CardFooter = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`p-6 border-t border-white/5 bg-white/[0.02] ${className}`}>{children}</div>
);
