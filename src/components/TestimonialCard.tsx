
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  image: string;
  content: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  company,
  image,
  content,
  rating
}) => {
  return (
    <div className="bg-white rounded-xl p-8 shadow-md border border-border h-full flex flex-col animate-scale-in">
      <div className="flex justify-between items-start mb-6">
        <div className="flex space-x-4 items-center">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover"
            loading="lazy"
          />
          <div>
            <h4 className="font-semibold text-lg">{name}</h4>
            <p className="text-sm text-foreground/60">{role}, {company}</p>
          </div>
        </div>
        <div className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </div>
      
      <blockquote className="text-foreground/80 italic flex-grow">
        "{content}"
      </blockquote>
    </div>
  );
};

export default TestimonialCard;
