
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  image,
  duration,
  students,
  rating,
  price,
  level
}) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner':
        return 'bg-green-50 text-green-600';
      case 'Intermediate':
        return 'bg-blue-50 text-blue-600';
      case 'Advanced':
        return 'bg-purple-50 text-purple-600';
      default:
        return 'bg-gray-50 text-gray-600';
    }
  };

  const handleEnroll = () => {
    // Create a course object with the same structure as in CourseSelectionList
    const course = {
      title,
      description,
      image,
      duration,
      students,
      rating,
      price,
      level,
    };

    // Find enroll section and directly trigger course enrollment
    const enrollSection = document.getElementById('enroll');
    if (enrollSection) {
      const enrollEvent = new CustomEvent('enrollCourse', { 
        detail: { course }
      });
      document.dispatchEvent(enrollEvent);
      
      // Scroll to the enrollment section
      enrollSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-white rounded-xl overflow-hidden border border-border transition-standard transform hover:translate-y-[-5px] hover:shadow-lg card-shadow group animate-scale-in">
      <div className="relative overflow-hidden h-48">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-standard duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className={`absolute top-4 right-4 py-1 px-3 rounded-full text-xs font-semibold ${getLevelColor(level)}`}>
          {level}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl mb-2 line-clamp-1">{title}</h3>
        <p className="text-foreground/70 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex justify-between items-center mb-5 text-sm">
          <div className="flex items-center text-foreground/60">
            <Clock className="h-4 w-4 mr-1" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center text-foreground/60">
            <Users className="h-4 w-4 mr-1" />
            <span>{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center text-amber-500">
            <Star className="h-4 w-4 mr-1 fill-amber-500" />
            <span>{rating.toFixed(1)}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{price}</span>
          <Button variant="outline" className="rounded-full" onClick={handleEnroll}>Enroll Now</Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
