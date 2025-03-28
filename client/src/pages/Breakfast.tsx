import React from 'react';
import Hero from '@/components/Hero';
import { Link } from 'wouter';
import { Check } from 'lucide-react';
import breakfastCouple from '@assets/image_1743112809328.png';
import breakfastImage from '@assets/breakfast2.jpg';

interface BreakfastOption {
  title: string;
  description: string;
}

const Breakfast: React.FC = () => {
  const breakfastOptions: BreakfastOption[] = [
    {
      title: 'Full Irish Breakfast',
      description: 'Traditional Irish breakfast with local sausages, bacon, eggs, soda and potato bread, and beans.'
    },
    {
      title: 'Continental Options',
      description: 'Pastries, cereals, yogurts, and seasonal fruits for a lighter start to your day.'
    },
    {
      title: 'Vegetarian Breakfast',
      description: 'Delicious alternatives including vegetarian sausages, and eggs prepared to your preference.'
    },
    {
      title: 'Specialty Dietary Options',
      description: 'Gluten-free, vegan, and other dietary requirements catered for with advance notice.'
    }
  ];

  return (
    <>
      <Hero
        backgroundImage={breakfastImage}
        title="Breakfast Experience"
        subtitle="Start Your Day Deliciously"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 font-['Playfair_Display'] text-primary">A Breakfast to Remember</h2>
            <p className="text-lg max-w-3xl mx-auto">
              At Number 5, we believe that breakfast is the most important meal of the day. That's why we put extra care into preparing a delicious, hearty breakfast using locally sourced ingredients to fuel your adventures on the Causeway Coast.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 order-2 md:order-1">
                <div className="grid grid-cols-2 gap-4">
                <img
                  src={breakfastCouple}
                  alt="Breakfast at Number 5"
                  className="rounded-lg shadow-lg w-full h-full object-cover aspect-square md:h-auto col-span-2"
                />
                </div>
            </div>

            <div className="md:w-1/2 order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] text-primary">
                Delicious Breakfast Experience
              </h2>
              <p className="text-lg mb-6">
                Start your day with our delicious homemade breakfast, featuring locally sourced ingredients and prepared with care to suit your preferences and dietary requirements.
              </p>

              <div className="space-y-4 mb-8">
                {breakfastOptions.map((option, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#457B9D]/20 rounded-full flex items-center justify-center mt-1">
                      <Check className="text-[#457B9D]" />
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">{option.title}</h4>
                      <p>{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 font-['Playfair_Display']">Breakfast Preferences</h3>
                <p className="mb-4">Let us know your preferences when you book or complete our breakfast request form upon arrival.</p>
                <Link href="/contact">
                  <a className="text-[#E63946] hover:underline font-bold flex items-center">
                    <span>Inform us about dietary requirements</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Playfair_Display'] text-primary text-center">
              Breakfast Service Information
            </h2>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">Breakfast Hours</h3>
                <p className="mb-2"><span className="font-bold">Weekdays:</span> 7:30 AM - 9:30 AM</p>
                <p><span className="font-bold">Weekends:</span> 8:00 AM - 10:00 AM</p>
                <p className="text-sm mt-2 italic">(Earlier breakfast times can be arranged for guests with early departure plans)</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">Breakfast Location</h3>
                <p>Breakfast is served in our bright and airy sun room with a relaxing garden, making it the perfect way to start your day.</p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">Special Dietary Requirements</h3>
                <p>We're happy to accommodate special dietary needs. Please inform us of any requirements when booking or at least 24 hours before your stay.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-3 font-['Playfair_Display']">Local Produce</h3>
                <p>We take pride in using locally sourced ingredients wherever possible, supporting local farmers and producers while ensuring the freshest, highest quality breakfast for our guests.</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/contact">
                <a className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-bold transition duration-150">
                  Contact Us About Dietary Requirements
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Breakfast;
