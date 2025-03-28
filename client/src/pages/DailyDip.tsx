import React from 'react';
import Hero from '@/components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import seaViewImg from '@assets/k-mitch-hodge-ehwSXFRfeVQ-unsplash.jpg';
import halloweenDippersImg from '@assets/k-mitch-hodge-kRZF4n8Eeyw-unsplash.jpg';
import christmasDippersImg from '@assets/matt-aylward-Nmh-pEBRt2Y-unsplash.jpg';
import stPatricksDayImg from '@assets/k-mitch-hodge-ehwSXFRfeVQ-unsplash.jpg';
import sunriseDipImg from '@assets/patrick-metzdorf-xyQnsGRmeNQ-unsplash.jpg';
import wavesActionImg from '@assets/k-mitch-hodge-kRZF4n8Eeyw-unsplash.jpg';

const DailyDip: React.FC = () => {
  return (
    <>
      <Hero 
        backgroundImage={seaViewImg} 
        title="Daily Dip"
        subtitle="Experience the Exhilaration of Cold Water Swimming"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] text-primary">The Daily Dip Experience</h2>
              <p className="text-lg mb-6">
                Join us for a refreshing early morning dip in the North Atlantic, just 2 miles away at Portstewart Beach. 
                Our host will accompany you and provide gloves, shoes, dry robe, and towels - just bring your own costume or trunks!
              </p>
              <p className="text-lg mb-6">
                It's a perfect way to kick-start your day before returning to Number 5 for a hearty breakfast.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={stPatricksDayImg} 
                    alt="St. Patrick's Day sea dipping group" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">St. Patrick's Day Dip</h3>
                  <p>Embrace the Irish spirit with our St. Patrick's Day themed dip - green costumes, great craic, and the bracing Atlantic to wake you up!</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={sunriseDipImg} 
                    alt="Sunrise sea dipping group" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Sunrise Dipping</h3>
                  <p>Experience the magic of dawn with our sunrise dips - watch the town lights twinkle as you embrace the refreshing morning waves.</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={halloweenDippersImg} 
                    alt="Halloween sea dipping group" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Our Halloween Dip</h3>
                  <p>Combining the thrill of cold water swimming with the fun of Halloween costumes - just one of our many themed dips throughout the year!</p>
                </CardContent>
              </Card>

              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={wavesActionImg} 
                    alt="Dippers in the Atlantic waves" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Braving the Waves</h3>
                  <p>Feel the exhilaration as you plunge into the Atlantic waves, a truly invigorating experience that will awaken all your senses!</p>
                </CardContent>
              </Card>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <Card className="overflow-hidden shadow-lg">
                <div className="aspect-w-16 aspect-h-9 relative h-64">
                  <img 
                    src={christmasDippersImg} 
                    alt="Christmas sea dipping group" 
                    className="object-cover w-full h-full"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Festive Dipping</h3>
                  <p>Our Christmas dippers braving the North Atlantic waters - a refreshing way to celebrate the festive season!</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-[#F1FAEE] p-8 rounded-lg shadow-md mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 font-['Playfair_Display'] text-primary">Benefits of Cold Water Swimming</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Improved Circulation</h3>
                  <p>Cold water immersion causes blood to rush to your vital organs, improving circulation and helping to flush toxins from your system.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Boosted Immune System</h3>
                  <p>Regular cold water exposure has been shown to increase white blood cell count, strengthening your body's natural defenses.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Mental Health Benefits</h3>
                  <p>Cold water swimming triggers the release of endorphins, providing a natural high and helping to combat stress, anxiety, and depression.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Increased Energy</h3>
                  <p>The shock of cold water activates your sympathetic nervous system, giving you an instant energy boost that can last throughout the day.</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Community Connection</h3>
                  <p>Our daily dips create a sense of camaraderie and shared experience, often leading to lasting friendships among our guests.</p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display'] text-primary">
                Ready to Take the Plunge?
              </h3>
              <p className="text-lg mb-6">
                The Daily Dip is available to all guests staying at Number 5. 
                Simply let us know when you arrive if you'd like to join the next morning's dip.
              </p>
              <p className="italic text-gray-600">
                "The sea, once it casts its spell, holds one in its net of wonder forever." — Jacques Cousteau
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DailyDip;