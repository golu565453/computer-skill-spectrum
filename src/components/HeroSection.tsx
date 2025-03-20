
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronRight, GraduationCap, Code, Monitor } from 'lucide-react';
import { cn } from '@/lib/utils';

const HeroSection = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      const parallaxElements = heroRef.current.querySelectorAll('.parallax');
      parallaxElements.forEach((el) => {
        const intensity = Number((el as HTMLElement).dataset.intensity) || 5;
        const moveX = x * intensity;
        const moveY = y * intensity;
        (el as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden bg-gradient-to-b from-white to-blue-50"
    >
      <div className="container-centered section-padding flex flex-col items-center justify-center relative z-10">
        <div className="absolute -top-96 -right-32 w-[600px] h-[600px] bg-blue-100 rounded-full opacity-20 blur-3xl parallax" data-intensity="2"></div>
        <div className="absolute -bottom-96 -left-32 w-[600px] h-[600px] bg-blue-200 rounded-full opacity-20 blur-3xl parallax" data-intensity="3"></div>
        
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <span className="inline-block py-1 px-4 text-sm font-medium bg-blue-50 text-primary rounded-full mb-6 animate-fade-in">
            Transform Your Future With Technology
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-balance animate-fade-in animation-delay-100">
            Master Technology At <span className="text-gradient">TechMaster</span> Institute
          </h1>
          
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl text-balance animate-fade-in animation-delay-200">
            Unlock your potential with cutting-edge courses designed to turn beginners into industry-ready professionals in software development, cybersecurity, and AI.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-300">
            <Button size="lg" className="rounded-full px-8 py-6 text-base font-medium">
              Explore Courses <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-base font-medium">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full">
          {[
            {
              icon: <Code className="h-6 w-6 text-primary" />,
              title: 'Practical Coding',
              description: 'Learn by doing with real-world projects and hands-on exercises'
            },
            {
              icon: <GraduationCap className="h-6 w-6 text-primary" />,
              title: 'Expert Instructors',
              description: 'Learn from industry professionals with years of experience'
            },
            {
              icon: <Monitor className="h-6 w-6 text-primary" />,
              title: 'Modern Curriculum',
              description: 'Stay ahead with constantly updated course materials'
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className={cn(
                "bg-white/80 backdrop-blur p-6 rounded-xl border border-border card-shadow animate-fade-in",
                `animation-delay-${(index + 3) * 100}`
              )}
            >
              <div className="bg-blue-50 p-3 rounded-lg inline-block mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-foreground/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#courses" className="text-primary opacity-70 hover:opacity-100 transition-standard">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 5v14m0 0l-6-6m6 6l6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
