import React from 'react';
import Hero from '@/components/Hero';
import { rooms } from '@/lib/rooms';
import RoomCard from '@/components/RoomCard';
import { Bed, Bath, Wifi, Tv, Coffee, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import sunsetHeroImage from '@assets/sunset_rooms_hero.png';

const Rooms: React.FC = () => {
  return (
    <>
      <Hero
        backgroundImage={sunsetHeroImage}
        title="Our Rooms"
        subtitle="Comfort & Elegance by the Sea"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">Luxury Accommodations</h2>
            <p className="text-lg max-w-3xl mx-auto">
              Experience the perfect blend of comfort and style in our beautifully appointed rooms, each designed to provide a relaxing retreat after a day exploring the stunning Causeway Coast.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>

          <div className="bg-[#F1FAEE] rounded-lg p-8 shadow-md">
            <h3 className="text-2xl font-bold mb-6 font-['Playfair_Display'] text-primary text-center">All Rooms Include</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Bed className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Comfortable Beds</h4>
                  <p>Quality mattresses and premium bedding for a peaceful night's sleep.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Bath className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">En-suite Bathrooms</h4>
                  <p>Modern private bathrooms with complimentary toiletries and fresh towels.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Wifi className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Free Wi-Fi</h4>
                  <p>Complimentary high-speed wireless internet access throughout your stay.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Tv className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Smart TV</h4>
                  <p>Flat-screen smart TVs with access to streaming services.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <Coffee className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Tea & Coffee Facilities</h4>
                  <p>In-room tea and coffee making facilities with local treats.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                  <CheckCircle2 className="text-primary" />
                </div>
                <div className="ml-4">
                  <h4 className="font-bold">Daily Housekeeping</h4>
                  <p>Daily room service to ensure your space remains clean and comfortable.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display']">Ready to Book Your Stay?</h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Check availability and secure your preferred dates through our Booking.com integration for the best rates and flexible cancellation options.
            </p>
            <a
              href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-150"
            >
              Check Availability
            </a>
            <p className="mt-4">
              Have questions? <a href="tel:07811389458" className="underline">Call us</a> or <a href="mailto:Number5AtlanticView@gmail.com" className="underline">email</a> for personalized assistance.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Rooms;
