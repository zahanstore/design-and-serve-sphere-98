
import React from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  // Calculate animation delay based on index
  const delayClass = `delay-${(index % 5) * 100 + 100}`;
  
  return (
    <div 
      className={cn(
        "group relative p-6 md:p-8 rounded-2xl",
        "border border-border/50 bg-card hover:bg-card/80",
        "transition-all duration-300 ease-in-out",
        "hover:shadow-xl hover:-translate-y-1",
        "flex flex-col h-full",
        "animate-scale-in opacity-0",
        delayClass
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
        </div>
        
        <div className="mt-auto pt-4">
          <a 
            href="#contact" 
            className="group inline-flex items-center text-sm font-medium text-primary"
          >
            Learn more
            <svg 
              className="ml-1 h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
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
        </div>
      </div>
      
      {/* Hover decoration */}
      <div className="absolute -z-10 inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default ServiceCard;
