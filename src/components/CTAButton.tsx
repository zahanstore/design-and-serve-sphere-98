
import React from 'react';
import { cn } from '@/lib/utils';

interface CTAButtonProps {
  children: React.ReactNode;
  href: string;
  primary?: boolean;
  className?: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ 
  children, 
  href, 
  primary = false, 
  className,
  onClick 
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={cn(
        'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all',
        'relative overflow-hidden group',
        primary 
          ? 'bg-primary text-primary-foreground shadow-lg hover:shadow-xl hover:shadow-primary/20' 
          : 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        'after:absolute after:inset-0 after:bg-white/20 after:opacity-0 after:transition-opacity',
        'hover:after:opacity-100',
        className
      )}
    >
      {children}
      <svg 
        className={cn(
          "ml-2 h-4 w-4 transition-transform duration-300 ease-out",
          "group-hover:translate-x-1"
        )}
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M5 12h14"></path>
        <path d="m12 5 7 7-7 7"></path>
      </svg>
    </a>
  );
};

export default CTAButton;
