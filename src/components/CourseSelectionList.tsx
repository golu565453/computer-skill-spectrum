
import React from 'react';
import { Button } from '@/components/ui/button';
import { Clock, Users, Star } from 'lucide-react';

interface CourseSelectionListProps {
  onSelectCourse: (course: any) => void;
}

const CourseSelectionList: React.FC<CourseSelectionListProps> = ({ onSelectCourse }) => {
  // Using the same courses data from CoursesSection for consistency
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

  return (
    <div className="mt-6 space-y-6">
      {courses.map((course, index) => (
        <div 
          key={index} 
          className="flex flex-col sm:flex-row gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors cursor-pointer"
          onClick={() => onSelectCourse(course)}
        >
          <div className="w-full sm:w-1/4 h-32 rounded-md overflow-hidden">
            <img 
              src={course.image} 
              alt={course.title} 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{course.title}</h3>
              <span className={`py-1 px-2 rounded-full text-xs font-medium ${getLevelColor(course.level)}`}>
                {course.level}
              </span>
            </div>
            
            <p className="text-sm text-muted-foreground my-2 line-clamp-2">
              {course.description}
            </p>
            
            <div className="flex justify-between items-center mt-3">
              <div className="flex space-x-4 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 mr-1" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center text-amber-500">
                  <Star className="h-3.5 w-3.5 mr-1 fill-amber-500" />
                  <span>{course.rating.toFixed(1)}</span>
                </div>
              </div>
              <div className="font-bold">{course.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseSelectionList;
