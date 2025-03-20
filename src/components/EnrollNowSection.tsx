
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const EnrollNowSection = () => {
  return (
    <section id="enroll" className="section-padding bg-gradient-to-b from-white to-blue-50">
      <div className="container-centered">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white rounded-xl p-8 border border-border card-shadow">
              <h3 className="text-2xl font-bold mb-6">Start Your Tech Journey Today</h3>
              
              <div className="space-y-4 mb-8">
                {[
                  'Access to all beginner-friendly courses',
                  'One-on-one mentorship sessions',
                  'Real-world project experience',
                  'Job placement assistance',
                  'Lifetime access to course materials'
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-1 gap-3">
                <Button className="w-full py-6 text-base rounded-lg">
                  Enroll Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <p className="text-center text-sm text-muted-foreground">
                  No credit card required. Start with a free consultation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="space-y-4">
              <span className="inline-block py-1 px-4 text-sm font-medium bg-blue-50 text-primary rounded-full animate-fade-in">
                Limited Time Offer
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-balance animate-fade-in animation-delay-100">
                Transform Your Career with <span className="text-gradient">25% Off</span> Your First Course
              </h2>
              
              <p className="text-foreground/70 text-balance animate-fade-in animation-delay-200">
                Take the next step in your technology career with our industry-recognized training programs. Flexible payment options and job placement support available.
              </p>
              
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-100 mt-6 animate-fade-in animation-delay-300">
                <p className="text-sm font-medium">
                  "Investing in my education at TechMaster was the best career decision I've made. Within 3 months, I landed a job that doubled my previous salary."
                </p>
                <p className="text-sm text-primary mt-2">— Jamie Williams, Software Engineer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnrollNowSection;
