import React from 'react';
import { Link } from 'wouter';

interface HeroProps {
  backgroundImage: string;
  title: React.ReactNode;
  subtitle?: string;
  showRating?: boolean;
  showButtons?: boolean;
}

const Hero: React.FC<HeroProps> = ({
  backgroundImage,
  title,
  subtitle,
  showRating = false,
  showButtons = false
}) => {
  return (
    <section className="relative h-[80vh] bg-gray-900">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center px-4 md:px-8 max-w-4xl">
          <div className="mb-8 inline-block bg-white/90 px-6 py-4 rounded-lg">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary font-['Playfair_Display']">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-2 text-xl md:text-2xl text-[#457B9D] font-['Playfair_Display']">{subtitle}</p>
            )}
          </div>

          <p className="text-lg md:text-xl text-white mb-8 drop-shadow-lg">
            Luxurious accommodation with breathtaking sea views in Portstewart, Northern Ireland
          </p>

          {showButtons && (
            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${showRating ? 'pb-24 md:pb-0' : ''}`}>
              <a
                href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-150"
              >
                Check Availability
              </a>
              <Link href="/rooms" className="bg-white hover:bg-gray-100 text-primary px-8 py-3 rounded-md font-bold text-lg transition duration-150">
                  View Our Rooms
              </Link>
            </div>
          )}
        </div>
      </div>

      {showRating && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="flex items-center space-x-4 bg-white/90 px-4 py-2 rounded-full">
            <div className="flex items-center space-x-1">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-bold">9.8</span>
            </div>
            <span className="text-sm">Exceptional</span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
