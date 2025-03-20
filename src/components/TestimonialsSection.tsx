
import React, { useState, useEffect } from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials = [
    {
      name: 'Alex Johnson',
      role: 'Software Engineer',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
      content: 'The Full Stack Development course completely transformed my career. Within three months of graduating, I received multiple job offers and doubled my previous salary.',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Data Scientist',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      content: 'The hands-on approach to learning machine learning algorithms gave me practical skills that I use daily in my job. The instructors were knowledgeable and supportive throughout.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      role: 'Cybersecurity Analyst',
      company: 'Financial Security Inc.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
      content: 'After completing the Cybersecurity program, I was able to transition from IT support to a specialized security role. The curriculum was challenging but incredibly rewarding.',
      rating: 4
    },
    {
      name: 'Emma Wilson',
      role: 'UX Designer',
      company: 'Shopify',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop',
      content: 'The UI/UX course provided me with a solid foundation in design principles and practical skills with industry tools. I created a portfolio that helped me land my dream job.',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Mobile Developer',
      company: 'Uber',
      image: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&h=400&fit=crop',
      content: "Learning React Native at TechMaster was one of the best decisions I've made. The project-based curriculum helped me build a portfolio that impressed my current employer.",
      rating: 4
    },
    {
      name: 'Olivia Martinez',
      role: 'Cloud Architect',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&h=400&fit=crop',
      content: "The AWS certification course was comprehensive and well-structured. The instructors had deep industry knowledge and provided insights beyond what's covered in standard materials.",
      rating: 5
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % (testimonials.length / 3));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section id="testimonials" className="section-padding bg-blue-50">
      <div className="container-centered">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block py-1 px-4 text-sm font-medium bg-white text-primary rounded-full mb-4 animate-fade-in">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in animation-delay-100">
            What Our Students Say
          </h2>
          <p className="text-foreground/70 animate-fade-in animation-delay-200">
            Hear from our graduates who have transformed their careers through our training programs and are now thriving in the tech industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className={`transition-all duration-500 ease-in-out ${index >= activeIndex * 3 && index < activeIndex * 3 + 3 ? 'opacity-100' : 'hidden md:block opacity-0'}`}
              style={{ animationDelay: `${(index % 3) * 100}ms` }}
            >
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 space-x-2">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${activeIndex === index ? 'bg-primary w-6' : 'bg-gray-300'}`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
