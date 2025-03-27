import React from 'react';
import Hero from '@/components/Hero';
import { Link } from 'wouter';
import { MapPin, Calendar, AlertTriangle, CheckCircle2, Clock } from 'lucide-react';

const NW200: React.FC = () => {
  return (
    <>
      <Hero 
        backgroundImage="https://images.unsplash.com/photo-1590128969775-e31770596f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
        title="NW200 Race Accommodation"
        subtitle="Perfect Base for Race Spectators"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">
              North West 200 Motorcycle Race
            </h2>
            <p className="text-lg max-w-3xl mx-auto">
              Experience the thrill of one of the world's premier motorcycle road racing events from the comfort of Number 5, perfectly situated for easy access to the circuit.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1590128969775-e31770596f74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80" 
                alt="NW200 motorcycle race" 
                className="rounded-lg shadow-lg w-full object-cover max-h-[500px]"
              />
            </div>
            
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 font-['Playfair_Display'] text-primary">
                Ideal Location for Race Spectators
              </h3>
              <p className="mb-6">
                Number 5 is perfectly situated for the NW200 motorcycle road race, offering convenient access to the circuit while providing a comfortable retreat after an exciting day of racing.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="text-primary h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Prime Viewing Location</h4>
                    <p>Just minutes from key viewing spots along the NW200 circuit.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <Calendar className="text-primary h-4 w-4" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">2025 NW200 Race Week</h4>
                    <p>May 11-17, 2025 – Book early to secure your accommodation for this popular event!</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M10.5 11.3V11.2C10.5 10.2 11.2 9.60001 12 9.20001C12.8 8.80001 13.5 8.4 13.5 7.5C13.5 6.6 12.8 6 12 6C11.2 6 10.5 6.6 10.5 7.5V7.6" />
                      <path d="M10.5 16.3V16.2C10.5 15.2 11.2 14.6 12 14.2C12.8 13.8 13.5 13.4 13.5 12.5C13.5 11.6 12.8 11 12 11C11.2 11 10.5 11.6 10.5 12.5V12.6" />
                      <path d="M12 16V16" />
                      <path d="M12 3H19L15 7" />
                      <path d="M17 21H7L9.5 13" />
                      <path d="M14.5 13.5L17 8" />
                      <path d="M5 8L9.5 13" />
                      <circle cx="5" cy="6" r="2" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Motorcycle Parking</h4>
                    <p>Secure parking available for motorcycles and vehicles during your stay.</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-[#F1FAEE] p-6 rounded-lg shadow-md">
                <h4 className="font-bold text-xl mb-2">Early Booking Recommended</h4>
                <p className="mb-4">Our rooms fill quickly during race week. Book now to avoid disappointment!</p>
                <a 
                  href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block bg-[#E63946] hover:bg-[#E63946]/90 text-white px-6 py-3 rounded-md font-bold transition duration-150"
                >
                  Check NW200 Availability
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Playfair_Display'] text-center">
              NW200 Visitor Information
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Clock className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold font-['Playfair_Display']">Race Schedule</h3>
                </div>
                <ul className="space-y-2">
                  <li>
                    <span className="font-bold">Tuesday:</span> Arrivals and setup day
                  </li>
                  <li>
                    <span className="font-bold">Wednesday:</span> Technical inspections and rider briefings
                  </li>
                  <li>
                    <span className="font-bold">Thursday:</span> Practice sessions and qualifying
                  </li>
                  <li>
                    <span className="font-bold">Friday:</span> Final practice and evening races
                  </li>
                  <li>
                    <span className="font-bold">Saturday:</span> Main race day with full program of events
                  </li>
                </ul>
                <p className="mt-4 text-sm italic">
                  Schedule subject to change. Please check the <a href="https://www.northwest200.org" target="_blank" rel="noopener noreferrer" className="underline">official NW200 website</a> for current information.
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold font-['Playfair_Display']">Viewing Locations</h3>
                </div>
                <p className="mb-4">
                  Number 5 is ideally located near several prime viewing spots along the NW200 circuit:
                </p>
                <ul className="space-y-2">
                  <li>
                    <span className="font-bold">Start/Finish Line:</span> 10 min drive
                  </li>
                  <li>
                    <span className="font-bold">York Corner:</span> 5 min drive
                  </li>
                  <li>
                    <span className="font-bold">University Corner:</span> 8 min drive
                  </li>
                  <li>
                    <span className="font-bold">Mill Road:</span> 12 min drive
                  </li>
                  <li>
                    <span className="font-bold">Metropole:</span> 7 min drive
                  </li>
                </ul>
                <p className="mt-4 text-sm">
                  Ask us for local insights on the best viewing spots!
                </p>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold font-['Playfair_Display']">Road Closures</h3>
                </div>
                <p>
                  During race days, several roads in the area will be closed to accommodate the circuit. We provide our guests with:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Detailed maps of road closures and alternate routes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Timing information for when roads are closed/open</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Advice on planning your movements during race days</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3">
                    <path d="M15 5H9m0 0C5.46244 5 2.58356 7.5499 2.16796 10.9169A1.0001 1.0001 0 0 0 3.16748 12h17.66504a1.0001 1.0001 0 0 0 .99951-1.0831C21.41644 7.5499 18.53756 5 15 5H9Z" />
                    <path d="M4 12s.00004 6.4736 0 7c-.00012 1.3565 1.14708 2 2.5 2h11c1.35292 0 2.50012-.6435 2.5-2-.00004-.5264 0-7 0-7" />
                    <path d="M15 19v-5c0-.6667-.4-1-1-1h-4c-.6.0001-1 .3333-1 1v5" />
                  </svg>
                  <h3 className="text-xl font-bold font-['Playfair_Display']">Spectator Facilities</h3>
                </div>
                <p className="mb-4">
                  Information about facilities available at the race:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Food and beverage vendors around the circuit</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Portable toilets at designated viewing areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>Merchandise stalls for race memorabilia</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                    <span>First aid stations around the course</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] text-primary">
              Book Your NW200 Accommodation Now
            </h2>
            <p className="text-lg mb-8">
              Don't miss out on the perfect location to experience the North West 200. Our rooms book up quickly for race week, so we recommend securing your accommodation well in advance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-[#E63946] hover:bg-[#E63946]/90 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-150"
              >
                Book NW200 Accommodation
              </a>
              <Link href="/contact">
                <a className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md font-bold text-lg transition duration-150">
                  Contact Us About NW200
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NW200;
