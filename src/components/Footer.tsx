
import React from 'react';
import { ChevronRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gradient-to-b from-white to-blue-50 pt-20 pb-10">
      <div className="container-centered px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-4">
            <h3 className="font-bold text-xl mb-6">TechMaster</h3>
            <p className="text-foreground/70 text-sm">
              We're dedicated to providing world-class technology education that prepares students for successful careers in the digital economy.
            </p>
            <div className="flex space-x-4 pt-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-white p-2 rounded-full text-primary hover:bg-primary hover:text-white transition-standard shadow-sm"
                  aria-label={`Follow us on ${social}`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Courses</h3>
            <ul className="space-y-3">
              {[
                'Full Stack Web Development',
                'Cybersecurity Fundamentals',
                'Data Science & Machine Learning', 
                'Mobile App Development',
                'Cloud Computing with AWS',
                'UI/UX Design'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-standard flex items-center text-sm">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Resources</h3>
            <ul className="space-y-3">
              {[
                'Student Portal',
                'Career Services',
                'Industry Partners',
                'Blog & Tutorials',
                'Alumni Network',
                'Learning Resources'
              ].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/70 hover:text-primary transition-standard flex items-center text-sm">
                    <ChevronRight className="h-3 w-3 mr-2" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-3">
              <li className="text-foreground/70 text-sm">
                123 Tech Avenue, Suite 200<br />
                San Francisco, CA 94107
              </li>
              <li className="text-foreground/70 text-sm">
                <strong>Phone:</strong> (123) 456-7890
              </li>
              <li className="text-foreground/70 text-sm">
                <strong>Email:</strong> info@techmasterinstitute.com
              </li>
              <li className="text-foreground/70 text-sm">
                <strong>Hours:</strong> Mon-Fri: 9am-6pm<br />
                Sat: 10am-4pm
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} TechMaster Institute. All rights reserved.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-foreground/60 hover:text-primary transition-standard">
              Privacy Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-standard">
              Terms of Service
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-standard">
              Cookie Policy
            </a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-standard">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
