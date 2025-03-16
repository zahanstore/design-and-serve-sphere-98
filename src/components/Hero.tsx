
import React, { useEffect, useRef } from 'react';
import CTAButton from './CTAButton';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-text-reveal');
        }
      },
      { threshold: 0.1 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-24">
      {/* Background design element */}
      <div className="absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 rounded-full bg-primary/20 filter blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-blue-300/20 filter blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
      </div>
      
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-16 items-center">
          <div className="md:col-span-3 space-y-8">
            <div className="overflow-hidden">
              <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary animate-fade-in">
                Elevating Ideas to Reality
              </span>
            </div>
            
            <div className="overflow-hidden">
              <h1 
                ref={titleRef}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-balance opacity-0"
              >
                Creating exceptional designs that inspire and endure
              </h1>
            </div>
            
            <div className="overflow-hidden">
              <p className="text-lg text-muted-foreground animate-fade-in delay-300 max-w-xl">
                I blend art, science, and emotion to craft experiences that elevate your brand and captivate your audience.
              </p>
            </div>
            
            <div className="space-x-4 pt-4 animate-fade-in delay-500">
              <CTAButton href="#services" primary>
                Explore Services
              </CTAButton>
              <CTAButton href="#contact">
                Get in Touch
              </CTAButton>
            </div>
          </div>
          
          <div className="md:col-span-2 animate-fade-in delay-300">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1473177104440-ffee2f376098"
                alt="Architectural design showcase" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium py-0.5 px-2 rounded-full bg-white/20 backdrop-blur-sm text-white inline-block mb-2">
                  Featured Work
                </span>
                <h3 className="text-white text-lg font-medium">Architectural Excellence</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
