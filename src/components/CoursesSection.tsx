
import React, { useRef, useState } from 'react';
import CourseCard from './CourseCard';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CoursesSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.8;
    
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth'
    });
  };

  const courses = [
    {
      title: 'Full Stack Web Development',
      description: 'Master HTML, CSS, JavaScript, React, Node.js, and MongoDB to build complete web applications.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      duration: '12 weeks',
      students: 3500,
      rating: 4.8,
      price: '$1,499',
      level: 'Beginner' as const,
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Learn to protect systems, networks and data from digital attacks with practical defensive techniques.',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
      duration: '8 weeks',
      students: 2200,
      rating: 4.7,
      price: '$1,299',
      level: 'Intermediate' as const,
    },
    {
      title: 'Data Science & Machine Learning',
      description: 'Analyze complex data sets and build predictive models using Python, Pandas, and TensorFlow.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      duration: '10 weeks',
      students: 2800,
      rating: 4.9,
      price: '$1,599',
      level: 'Advanced' as const,
    },
    {
      title: 'Mobile App Development',
      description: 'Create iOS and Android applications using React Native and deploy them to app stores.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6',
      duration: '9 weeks',
      students: 1900,
      rating: 4.6,
      price: '$1,399',
      level: 'Intermediate' as const,
    },
    {
      title: 'Cloud Computing with AWS',
      description: 'Master cloud infrastructure, deployment, scaling, and management using Amazon Web Services.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      duration: '8 weeks',
      students: 1750,
      rating: 4.7,
      price: '$1,299',
      level: 'Advanced' as const,
    },
    {
      title: 'UI/UX Design Fundamentals',
      description: 'Create beautiful, functional user interfaces with Figma, Adobe XD, and design principles.',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7',
      duration: '7 weeks',
      students: 2100,
      rating: 4.8,
      price: '$1,199',
      level: 'Beginner' as const,
    },
  ];

  return (
    <section id="courses" className="section-padding bg-gradient-to-b from-blue-50 to-white">
      <div className="container-centered">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div className="max-w-2xl">
            <span className="inline-block py-1 px-4 text-sm font-medium bg-blue-50 text-primary rounded-full mb-4 animate-fade-in">
              Learning Paths
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in animation-delay-100">
              Industry-Focused Courses
            </h2>
            <p className="text-foreground/70 text-balance animate-fade-in animation-delay-200">
              From coding to cybersecurity, our courses are designed with input from industry leaders to ensure you're learning skills that matter in today's job market.
            </p>
          </div>
          
          <div className="flex space-x-2 mt-6 md:mt-0 animate-fade-in animation-delay-300">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full"
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex space-x-6 overflow-x-auto pb-6 scrollbar-hide snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {courses.map((course, index) => (
            <div 
              key={index} 
              className="min-w-[320px] md:min-w-[350px] snap-start"
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <CourseCard {...course} />
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12 animate-fade-in animation-delay-500">
          <Button className="rounded-full px-8">View All Courses</Button>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
