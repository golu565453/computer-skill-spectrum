
import React, { useEffect, useRef } from 'react';
import { CheckCircle, Users, Award, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect: IntersectionObserverCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counters = document.querySelectorAll('.counter-value');
          counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-target') || '0', 10);
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 60fps

            let current = 0;
            const updateCounter = () => {
              current += increment;
              if (current < target) {
                counter.textContent = Math.ceil(current).toString();
                requestAnimationFrame(updateCounter);
              } else {
                counter.textContent = target.toString();
              }
            };
            updateCounter();
          });
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container-centered">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute top-4 left-4 w-full h-full bg-blue-100 rounded-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
              alt="Students collaborating" 
              className="rounded-xl relative z-10 w-full shadow-md animate-fade-in-left"
              loading="lazy"
            />
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl p-6 shadow-lg max-w-xs animate-fade-in animation-delay-300">
              <div className="flex space-x-4 items-center">
                <span className="text-4xl font-bold text-primary">10+</span>
                <p className="text-sm text-foreground/70">Years of excellence in technology education</p>
              </div>
            </div>
          </div>
          
          <div>
            <span className="inline-block py-1 px-4 text-sm font-medium bg-blue-50 text-primary rounded-full mb-4 animate-fade-in">
              About TechMaster
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in animation-delay-100">
              Transforming Tech Education Since 2013
            </h2>
            <p className="text-foreground/70 mb-6 animate-fade-in animation-delay-200">
              TechMaster Institute was founded with a singular mission: to make high-quality technology education accessible, practical, and relevant for today's digital economy. We believe in learning by doing, which is why our curriculum is designed around real-world projects and practical applications.
            </p>
            <p className="text-foreground/70 mb-8 animate-fade-in animation-delay-300">
              Our instructors come from leading technology companies and bring their industry experience directly to the classroom. With small class sizes, personalized attention, and lifetime career support, we're committed to your success beyond graduation.
            </p>
            
            <div className="space-y-3 mb-10">
              {[
                'Hands-on learning with practical projects',
                'Industry-experienced instructors',
                'Small class sizes for personalized attention',
                'Career services and job placement assistance'
              ].map((item, index) => (
                <div key={index} className={`flex items-start space-x-3 animate-fade-in animation-delay-${index + 4}00`}>
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/80">{item}</span>
                </div>
              ))}
            </div>
            
            <Button className="rounded-full px-8 animate-fade-in animation-delay-500">Our Story</Button>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center">
          {[
            { icon: <Users className="h-8 w-8 mb-3 mx-auto text-primary" />, value: 15000, label: 'Students Trained' },
            { icon: <Award className="h-8 w-8 mb-3 mx-auto text-primary" />, value: 98, label: 'Industry Partnerships' },
            { icon: <Calendar className="h-8 w-8 mb-3 mx-auto text-primary" />, value: 200, label: 'Courses Offered' },
            { icon: <CheckCircle className="h-8 w-8 mb-3 mx-auto text-primary" />, value: 92, label: 'Job Placement Rate' },
          ].map((stat, index) => (
            <div 
              key={index}
              className={`bg-blue-50 p-8 rounded-xl animate-fade-in animation-delay-${index + 1}00`}
            >
              {stat.icon}
              <div className="flex items-center justify-center">
                <span 
                  className="counter-value text-3xl font-bold" 
                  data-target={stat.value}
                >
                  0
                </span>
                {stat.label === 'Job Placement Rate' && <span className="text-3xl font-bold">%</span>}
              </div>
              <p className="text-foreground/70 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
