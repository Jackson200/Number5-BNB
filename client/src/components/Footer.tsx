import { Link } from 'wouter';
import { Facebook, Instagram, Phone, Mail, MapPin, Award } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Number 5</h3>
            <p className="mb-4">A luxury bed and breakfast experience on the beautiful Causeway Coast of Northern Ireland.</p>
            <div className="flex items-center">
              <div className="mr-2">
                <Award className="h-5 w-5 text-[#E63946]" />
              </div>
              <span>NITB Approved Accommodation</span>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-[#E63946] transition duration-150">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/rooms">
                  <a className="hover:text-[#E63946] transition duration-150">Our Rooms</a>
                </Link>
              </li>
              <li>
                <Link href="/breakfast">
                  <a className="hover:text-[#E63946] transition duration-150">Breakfast</a>
                </Link>
              </li>
              <li>
                <Link href="/nw200">
                  <a className="hover:text-[#E63946] transition duration-150">NW200</a>
                </Link>
              </li>
              <li>
                <Link href="/attractions">
                  <a className="hover:text-[#E63946] transition duration-150">Local Attractions</a>
                </Link>
              </li>
              <li>
                <a 
                  href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-[#E63946] transition duration-150"
                >
                  Book Now
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                <span>5 Portrush Road, Portstewart, BT55 7DB</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:07811389458" className="hover:text-[#E63946]">07811 389458</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:Number5AtlanticView@gmail.com" className="hover:text-[#E63946]">Number5AtlanticView@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              <a 
                href="https://www.instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition duration-150"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition duration-150"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://api.whatsapp.com/send?phone=07811389458" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition duration-150"
                aria-label="WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
            <div className="flex items-center space-x-3">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#003580"/>
                <path d="M18.5 7.5L12 15L5.5 7.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>9.8 Exceptional (83 reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} Number 5 Bed and Breakfast. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy">
              <a className="text-sm hover:text-[#E63946] transition duration-150">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="text-sm hover:text-[#E63946] transition duration-150">Terms of Service</a>
            </Link>
            <Link href="/cookies">
              <a className="text-sm hover:text-[#E63946] transition duration-150">Cookie Policy</a>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
