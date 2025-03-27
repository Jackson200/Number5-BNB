import React from 'react';
import Hero from '@/components/Hero';
import { attractions } from '@/lib/attractions';
import AttractionCard from '@/components/AttractionCard';
import { Link } from 'wouter';
import { MapPin } from 'lucide-react';
import sunriseImage from '@assets/Back Bedroom Sunrise 16.01.2025.jpeg';
import kingRoomImage from '@assets/King Room for Business Card.jpeg';
import frontHouseImage from '@assets/Front of house for business card.jpeg';

const Attractions: React.FC = () => {
  return (
    <>
      <Hero 
        backgroundImage={frontHouseImage}
        title="Explore the Causeway Coast"
        subtitle="Discover Northern Ireland's Treasures"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">
              Local Attractions & Activities
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Number 5 is ideally situated to explore the stunning Causeway Coast. From historic castles to natural wonders, there's something for everyone within easy reach of our bed and breakfast.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.map(attraction => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] text-primary">
                The Perfect Base for Exploration
              </h2>
              <p className="text-lg mb-6">
                With its prime location in Portstewart, Number 5 offers the ideal starting point for exploring the Causeway Coastal Route, widely regarded as one of the world's most scenic drives.
              </p>
              <p className="text-lg mb-6">
                The dramatic coastline stretches for 120 miles, featuring rugged cliffs, golden beaches, historic castles, and charming seaside villages.
              </p>
              
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Need Recommendations?</h3>
                <p className="mb-4">Our host Maureen is a local expert and can help you plan the perfect itinerary based on your interests, whether you're seeking adventure, history, or relaxation.</p>
                <Link href="/contact">
                  <a className="text-[#E63946] hover:underline font-bold flex items-center">
                    <span>Contact us for personalized recommendations</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={kingRoomImage} 
                  alt="King Room at Number 5" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src={sunriseImage} 
                  alt="Bedroom with sunrise view" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src={frontHouseImage} 
                  alt="Number 5 Front View" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
                <img 
                  src={kingRoomImage} 
                  alt="King Room at Number 5" 
                  className="rounded-lg shadow-lg w-full h-48 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Playfair_Display'] text-primary text-center">
              Seasonal Activities
            </h2>
            
            <div className="space-y-8">
              <div className="bg-[#F1FAEE] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Spring & Summer</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-[#E63946] flex-shrink-0" />
                    <div>
                      <span className="font-bold">Beach Days</span>
                      <p>Enjoy the golden sands of Portstewart Strand and Downhill Beach, both Blue Flag beaches perfect for swimming, walking, and water sports.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-[#E63946] flex-shrink-0" />
                    <div>
                      <span className="font-bold">Golf</span>
                      <p>Play a round at the world-famous Royal Portrush Golf Club, host of The Open Championship, or one of the other excellent courses in the area.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-[#E63946] flex-shrink-0" />
                    <div>
                      <span className="font-bold">NW200</span>
                      <p>Experience the thrill of the North West 200 motorcycle race, one of the world's fastest road races (May).</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="bg-[#F1FAEE] p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Autumn & Winter</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-[#E63946] flex-shrink-0" />
                    <div>
                      <span className="font-bold">Coastal Walks</span>
                      <p>Experience the dramatic beauty of the coastline in the crisp autumn air, with stunning views and fewer crowds.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-[#E63946] flex-shrink-0" />
                    <div>
                      <span className="font-bold">Whiskey Tasting</span>
                      <p>Visit the Old Bushmills Distillery for a warming tour and tasting of Ireland's oldest whiskey.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="mt-1 mr-3 text-[#E63946] flex-shrink-0" />
                    <div>
                      <span className="font-bold">Local Cuisine</span>
                      <p>Explore the vibrant food scene with seasonal menus at local restaurants showcasing the best of Northern Irish produce.</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <a 
                href="https://discovernorthernireland.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-bold transition duration-150"
              >
                Discover More on Tourism Ireland
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display']">
              Ready to Explore the Causeway Coast?
            </h2>
            <p className="text-lg max-w-3xl mx-auto mb-8">
              Book your stay at Number 5 and experience the perfect base for discovering all that Northern Ireland's stunning coastline has to offer.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-150"
              >
                Book Your Stay
              </a>
              <Link href="/contact">
                <a className="bg-white hover:bg-white/90 text-primary px-8 py-3 rounded-md font-bold text-lg transition duration-150">
                  Ask About Local Attractions
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Attractions;
