
import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Architecture Design',
    description: 'Crafting innovative, sustainable architectural solutions that blend form and function to create inspiring spaces.',
    icon: (
      <svg
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
        <rect width="16" height="20" x="4" y="2" rx="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h8" />
        <path d="M8 10h8" />
        <path d="M8 14h8" />
      </svg>
    ),
  },
  {
    title: 'Learning Management',
    description: 'Comprehensive LMS solutions designed to streamline education delivery, enhance engagement, and optimize learning outcomes.',
    icon: (
      <svg
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
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        <path d="M8 7h6" />
        <path d="M8 11h8" />
      </svg>
    ),
  },
  {
    title: 'Human Resource Management',
    description: 'Strategic HRM services that help organizations attract, develop, and retain top talent while optimizing workforce performance.',
    icon: (
      <svg
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
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: 'Photography',
    description: 'Professional photography services that capture moments, tell stories, and create visual narratives with precision and artistry.',
    icon: (
      <svg
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
        <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
        <circle cx="12" cy="13" r="3" />
      </svg>
    ),
  },
  {
    title: 'Art Services',
    description: 'Creative art solutions that elevate your brand, express your vision, and connect with your audience through visual excellence.',
    icon: (
      <svg
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
        <circle cx="13.5" cy="6.5" r="2.5" />
        <circle cx="17.5" cy="10.5" r="2.5" />
        <circle cx="8.5" cy="7.5" r="2.5" />
        <circle cx="6.5" cy="12.5" r="2.5" />
        <path d="M12 22v-7.3"/>
        <path d="m7 8-2.2 2.2"/>
        <path d="m17 11 2.5 2.5"/>
        <path d="M9.5 14h5"/>
      </svg>
    ),
  },
];

const ServicesGrid: React.FC = () => {
  return (
    <section id="services" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary animate-fade-in">
            Services Offered
          </span>
          <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-6 animate-fade-in delay-100">
            Transforming visions into realities
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in delay-200">
            A comprehensive suite of creative and technical services designed to elevate your projects and bring your ideas to life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
