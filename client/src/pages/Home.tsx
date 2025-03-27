import React from 'react';
import Hero from '@/components/Hero';
import { rooms } from '@/lib/rooms';
import { reviews } from '@/lib/reviews';
import { attractions } from '@/lib/attractions';
import RoomCard from '@/components/RoomCard';
import ReviewCard from '@/components/ReviewCard';
import AttractionCard from '@/components/AttractionCard';
import BookingWidget from '@/components/BookingWidget';
import { Link } from 'wouter';
import { Bed, Utensils, MapPin, Check, Star, Award, Clock, MapPinned } from 'lucide-react';
import businessCardFront from '@assets/Number5_business_card_v5_FRONT.png';
import frontHouseImage from '@assets/Front of house for business card.jpeg';
import drivewayImage from '@assets/Driveway from Front Door 03.02.2025 for Business Card.jpeg';

const Home: React.FC = () => {
  return (
    <>
      <Hero 
        backgroundImage={frontHouseImage} 
        title={<>Welcome to <span className="text-[#E63946]">Number 5</span></>}
        subtitle="Seaside Bed and Breakfast"
        showRating={true}
        showButtons={true}
      />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#F1FAEE] rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Bed className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Luxury Rooms</h3>
              <p className="text-[#293241]">Three beautifully appointed en-suite rooms, two with panoramic sea views and one with a peaceful garden view.</p>
            </div>
            
            {/* Feature 2 */}
            <div className="bg-[#F1FAEE] rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Utensils className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Gourmet Breakfast</h3>
              <p className="text-[#293241]">Start your day with our delicious homemade breakfast featuring local ingredients and customized to your preferences.</p>
            </div>
            
            {/* Feature 3 */}
            <div className="bg-[#F1FAEE] rounded-lg p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="text-2xl text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Prime Location</h3>
              <p className="text-[#293241]">Perfectly situated on the stunning Causeway Coast with easy access to beaches, attractions, and the NW200 race route.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] text-primary">
                Your Home Away From Home
              </h2>
              <p className="text-lg mb-6">
                Number 5 is a charming bed and breakfast nestled on the picturesque Portrush Road in Portstewart, offering an idyllic escape on the Causeway Coast of Northern Ireland.
              </p>
              <p className="text-lg mb-6">
                Our boutique accommodation features three beautifully appointed en-suite rooms, with two offering spectacular panoramic sea views that stretch across the Atlantic.
              </p>
              <p className="text-lg mb-6">
                Hosted by Maureen, we pride ourselves on warm hospitality, attention to detail, and creating a welcoming atmosphere that keeps our guests coming back year after year.
              </p>
              <div className="flex items-center space-x-4 mt-8">
                <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200">
                  <div className="w-full h-full bg-[#457B9D]/20 flex items-center justify-center">
                    <span className="text-[#457B9D] font-bold">M</span>
                  </div>
                </div>
                <div>
                  <p className="font-['Playfair_Display'] italic text-xl">Hosted by Maureen</p>
                  <div className="flex items-center mt-1">
                    <Star className="text-yellow-500 mr-1 h-4 w-4" />
                    <span>9.8 Exceptional Host Rating</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src={drivewayImage} 
                  alt="Driveway view from Number 5" 
                  className="w-full h-[500px] object-cover rounded-lg shadow-lg"
                />
                <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-lg shadow-lg max-w-xs">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="text-[#E63946]" />
                    <span className="font-bold">NITB Approved</span>
                  </div>
                  <p className="text-sm">Certified by the Northern Ireland Tourist Board for exceptional quality and service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Preview Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">Our Rooms</h2>
            <p className="text-lg max-w-3xl mx-auto">Experience comfort and elegance in our beautifully appointed en-suite rooms, each offering a unique perspective of our stunning surroundings.</p>
          </div>
          
          {/* Room Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {rooms.map(room => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/rooms">
              <a className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-bold transition duration-150">
                View All Room Details
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display']">Book Your Stay</h2>
              <p className="text-lg mb-8">
                Experience the beauty of the Causeway Coast from the comfort of Number 5. Check availability and book your stay directly through our Booking.com integration.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Best Rate Guarantee</h4>
                    <p>Get the best available rates when booking through our official channels.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Flexible Cancellation</h4>
                    <p>Our flexible cancellation policy gives you peace of mind when booking.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mt-1">
                    <Check className="text-white h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Special Requests</h4>
                    <p>Have special requirements? Let us know when booking and we'll do our best to accommodate.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <a 
                  href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-6 py-3 rounded-md font-bold transition duration-150"
                >
                  Book on Booking.com
                </a>
                <p className="mt-4 text-sm">
                  Prefer to book directly? Call us at <a href="tel:07811389458" className="underline">07811 389458</a> or email <a href="mailto:Number5AtlanticView@gmail.com" className="underline">Number5AtlanticView@gmail.com</a>
                </p>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <BookingWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">What Our Guests Say</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-lg">9.8/10 Exceptional based on 83 reviews</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map(review => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
          
          <div className="mt-8 flex justify-center">
            <a 
              href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center text-primary hover:text-[#E63946] transition duration-150"
            >
              <span className="font-bold">Read all reviews on Booking.com</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Attractions Preview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">Explore the Causeway Coast</h2>
            <p className="text-lg max-w-3xl mx-auto">Discover stunning landscapes, historic sites, and vibrant local culture, all within easy reach of Number 5.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {attractions.slice(0, 3).map(attraction => (
              <AttractionCard key={attraction.id} attraction={attraction} />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/attractions">
              <a className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-bold transition duration-150">
                View All Attractions
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">Find Us</h2>
            <p className="text-lg max-w-3xl mx-auto">Conveniently located on the Portrush Road in Portstewart, with easy access to the coastline and local attractions.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-start mb-4">
                  <MapPinned className="w-6 h-6 text-[#E63946] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold font-['Playfair_Display']">Our Address</h3>
                    <p className="mt-2">5 Portrush Road, Portstewart, BT55 7DB</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-4">
                  <Clock className="w-6 h-6 text-[#E63946] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-bold font-['Playfair_Display']">Check-in & Check-out</h3>
                    <p className="mt-2">Check-in: 3:00 PM - 8:00 PM</p>
                    <p>Check-out: By 11:00 AM</p>
                    <p className="text-sm mt-1">(Early/late check-in by arrangement)</p>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link href="/contact">
                    <a className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-md font-bold transition duration-150">
                      Contact Us
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.0731799423455!2d-6.723361223387166!3d55.18532797928239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDExJzA3LjIiTiA2wrA0Myc0My4zIlc!5e0!3m2!1sen!2sus!4v1616682936358!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  title="Number 5 B&B location map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Card Display */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <img 
              src={businessCardFront} 
              alt="Number 5 B&B Business Card" 
              className="max-w-md w-full rounded-lg shadow-lg mb-8" 
            />
            <div className="text-center max-w-xl">
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display'] text-primary">Ready to experience Number 5?</h3>
              <p className="text-lg mb-6">Book your stay today and discover why our guests keep coming back to our seaside retreat.</p>
              <a 
                href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-150"
              >
                Book Your Stay
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
