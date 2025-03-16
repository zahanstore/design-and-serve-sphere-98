
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 py-4 px-8 transition-all duration-300 ease-in-out',
        scrolled 
          ? 'glass py-3' 
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg md:text-xl font-medium">
            <span className="font-semibold">Zayed Fox</span>
          </h1>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          {['Services', 'Projects', 'About', 'Contact'].map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={cn(
                'text-sm opacity-70 hover:opacity-100 transition-opacity relative',
                'after:absolute after:block after:w-full after:h-0.5 after:bottom-[-4px] after:left-0',
                'after:bg-primary after:scale-x-0 after:origin-right after:transition-transform',
                'hover:after:scale-x-100 hover:after:origin-left'
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {item}
            </a>
          ))}
        </nav>
        
        <button
          className="md:hidden text-foreground opacity-70 hover:opacity-100"
          aria-label="Menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
