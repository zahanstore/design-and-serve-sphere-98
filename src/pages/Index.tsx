
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Footer from '@/components/Footer';

const Index: React.FC = () => {
  // Initialize intersection observer for animations
  useEffect(() => {
    const animatedElements = document.querySelectorAll('.animate-fade-in, .animate-scale-in, .animate-slide-up, .animate-slide-left');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('opacity-0');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
    
    return () => {
      animatedElements.forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <ServicesGrid />
        
        {/* About Me Section */}
        <section className="py-20 px-6 bg-background">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in opacity-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1593720213428-28a5b9e94613"
                    alt="Zayed Fox - Senior Architect"
                    className="w-full aspect-[3/4] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary animate-fade-in opacity-0">
                    About Me
                  </span>
                  <h2 className="text-3xl font-semibold animate-fade-in opacity-0 delay-100">
                    Zayed Fox
                  </h2>
                  <div className="space-y-4">
                    <p className="text-muted-foreground animate-fade-in opacity-0 delay-200">
                      Zayed is a Senior Architect, Entrepreneur & businessman. He has 15+ years of experience in Architecture, he specializes in, Leisure Housing, Luxury Holiday homes, Villas, Hotels, Resorts, Cottages & Corporate Spaces.
                    </p>
                    <p className="text-muted-foreground animate-fade-in opacity-0 delay-300">
                      Spanning over 15 years of immersive experience across diverse sectors, his journey commenced with a deep-rooted passion for architecture. Within this realm, Zayed has carved a niche for himself, specializing in the design and execution of leisure housing, opulent holiday residences, bespoke villas, luxurious hotels, expansive resorts, and cutting-edge corporate spaces.
                    </p>
                    <p className="text-muted-foreground animate-fade-in opacity-0 delay-400">
                      An illustrious alumnus of the esteemed Rizvi College of Architecture, Zayed honed his craft meticulously during a seven-year apprenticeship at The First group, in Dubai, UAE, a renowned architectural firm. This invaluable experience served as a pivotal springboard, empowering him to establish his own architectural practice under the banner of FiveSpace Chartered Realty.
                    </p>
                    <p className="text-muted-foreground animate-fade-in opacity-0 delay-500">
                      Not one to rest on past accomplishments, Zayed's entrepreneurial spirit continued to soar as he ventured into various business domains. He stands as the visionary founder of FiveSpace 3D Studio, a forward-thinking enterprise that amalgamates technology with design, pushing the boundaries of architectural visualization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Project Section */}
        <section className="py-20 px-6 bg-secondary/50">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="space-y-6">
                  <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary animate-fade-in opacity-0">
                    Featured Project
                  </span>
                  <h2 className="text-3xl font-semibold animate-fade-in opacity-0 delay-100">
                    Innovative Design Solutions
                  </h2>
                  <p className="text-muted-foreground animate-fade-in opacity-0 delay-200">
                    A showcase of our commitment to excellence, this project demonstrates our ability to solve complex design challenges with elegant, functional solutions.
                  </p>
                  <ul className="space-y-3 animate-fade-in opacity-0 delay-300">
                    {['User-centered approach', 'Sustainable materials', 'Cutting-edge technology', 'Award-winning design'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg 
                          className="h-5 w-5 text-primary mt-0.5 mr-2" 
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
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-2 animate-fade-in opacity-0 delay-400">
                    <a 
                      href="#projects" 
                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                    >
                      View project details
                      <svg 
                        className="ml-1 h-4 w-4"
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
              </div>
              <div className="order-1 md:order-2 animate-fade-in opacity-0">
                <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334"
                    alt="Featured project showcase"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 hover:scale-105"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <span className="inline-block text-sm font-medium py-1 px-3 rounded-full bg-primary/10 text-primary animate-fade-in opacity-0">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-semibold mt-4 mb-16 animate-fade-in opacity-0 delay-100">
              What clients are saying
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence resulted in a design that exceeded all our expectations.",
                  author: "Sarah Johnson",
                  role: "CEO, Innovate Inc."
                },
                {
                  quote: "The creativity and technical skill demonstrated throughout our project were outstanding. They transformed our vision into a reality that perfectly captures our brand essence.",
                  author: "Michael Chen",
                  role: "Marketing Director, Design Co."
                },
                {
                  quote: "I was impressed by how quickly they understood our needs and delivered solutions that addressed our unique challenges. A truly exceptional creative partner.",
                  author: "Emma Rodriguez",
                  role: "Project Manager, Build Group"
                }
              ].map((testimonial, index) => (
                <div 
                  key={index} 
                  className={`bg-card p-8 rounded-2xl border animate-scale-in opacity-0`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <svg 
                    className="h-8 w-8 text-primary/20 mb-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path>
                  </svg>
                  <p className="mb-6 text-muted-foreground">{testimonial.quote}</p>
                  <div>
                    <p className="font-medium">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
