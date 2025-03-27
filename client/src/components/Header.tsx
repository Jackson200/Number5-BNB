import { useState } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [location] = useLocation();

  const isActive = (path: string) => {
    return location === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-primary font-['Playfair_Display']">
              Number <span className="text-[#E63946]">5</span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className={`font-medium transition duration-150 ${isActive('/') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              Home
            </Link>
            <Link href="/rooms" className={`font-medium transition duration-150 ${isActive('/rooms') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              Rooms
            </Link>
            <Link href="/breakfast" className={`font-medium transition duration-150 ${isActive('/breakfast') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              Breakfast
            </Link>
            <Link href="/daily-dip" className={`font-medium transition duration-150 ${isActive('/daily-dip') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              Daily Dip
            </Link>
            <Link href="/nw200" className={`font-medium transition duration-150 ${isActive('/nw200') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              NW200
            </Link>
            <Link href="/attractions" className={`font-medium transition duration-150 ${isActive('/attractions') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              Local Area
            </Link>
            <Link href="/contact" className={`font-medium transition duration-150 ${isActive('/contact') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}>
              Contact
            </Link>
          </nav>
          
          {/* Book Now Button */}
          <a 
            href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-6 py-2 rounded-md font-bold transition duration-150"
          >
            Book Now
          </a>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-primary" 
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className={`font-medium ${isActive('/') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                Home
              </Link>
              <Link 
                href="/rooms" 
                className={`font-medium ${isActive('/rooms') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                Rooms
              </Link>
              <Link 
                href="/breakfast" 
                className={`font-medium ${isActive('/breakfast') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                Breakfast
              </Link>
              <Link 
                href="/daily-dip" 
                className={`font-medium ${isActive('/daily-dip') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                Daily Dip
              </Link>
              <Link 
                href="/nw200" 
                className={`font-medium ${isActive('/nw200') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                NW200
              </Link>
              <Link 
                href="/attractions" 
                className={`font-medium ${isActive('/attractions') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                Local Area
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium ${isActive('/contact') ? 'text-[#E63946]' : 'text-primary hover:text-[#E63946]'}`}
                onClick={closeMenu}
              >
                Contact
              </Link>
              <a 
                href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#E63946] text-white px-4 py-2 rounded-md font-bold text-center"
                onClick={closeMenu}
              >
                Book Now
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
