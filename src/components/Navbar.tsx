
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-standard',
        scrolled ? 'bg-white/90 backdrop-blur shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container-centered flex justify-between items-center h-20 px-6 md:px-12">
        <a href="#" className="flex items-center space-x-2">
          <span className="font-bold text-xl">TechMaster</span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-10">
          {['Home', 'Courses', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-foreground/80 hover:text-foreground transition-standard text-sm font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="rounded-full px-6">Enroll Now</Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'md:hidden fixed inset-0 z-40 bg-white transform transition-standard pt-20',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="flex flex-col p-8 space-y-8">
          {['Home', 'Courses', 'About', 'Testimonials', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-foreground/80 hover:text-foreground transition-standard text-lg font-medium"
            >
              {item}
            </a>
          ))}
          <Button className="rounded-full w-full mt-6">Enroll Now</Button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
