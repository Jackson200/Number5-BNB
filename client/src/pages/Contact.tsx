import React from 'react';
import Hero from '@/components/Hero';
import ContactForm from '@/components/ContactForm';
import { MapPin, Phone, Mail, Globe, Instagram, Facebook } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <>
      <Hero 
        backgroundImage="/sea-view-room.png" 
        title="Contact Us"
        subtitle="Wake Up to Sea Views"
      />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-['Playfair_Display'] text-primary">Get in Touch</h2>
              <p className="text-lg mb-8">
                Have questions or special requests? We're here to help make your stay at Number 5 as perfect as possible. Feel free to reach out using any of the methods below.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <MapPin className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Address</h4>
                    <p>5 Portrush Road, Portstewart, BT55 7DB</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Phone className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Phone</h4>
                    <p><a href="tel:07811389458" className="hover:text-[#E63946]">07811 389458</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Mail className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Email</h4>
                    <p><a href="mailto:Number5AtlanticView@gmail.com" className="hover:text-[#E63946]">Number5AtlanticView@gmail.com</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                    <Globe className="text-primary" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-bold text-xl">Website</h4>
                    <p><a href="#" className="hover:text-[#E63946]">Number5AtlanticView.com</a></p>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition duration-150"
                  aria-label="Instagram"
                >
                  <Instagram className="text-primary" />
                </a>
                <a 
                  href="https://www.facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition duration-150"
                  aria-label="Facebook"
                >
                  <Facebook className="text-primary" />
                </a>
                <a 
                  href="https://api.whatsapp.com/send?phone=07811389458" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition duration-150"
                  aria-label="WhatsApp"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <ContactForm />
            </div>
          </div>
          
          <div className="mt-12">
            <div className="rounded-lg overflow-hidden h-[400px] shadow-lg">
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
      </section>

      <section className="py-16 bg-[#F1FAEE]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-['Playfair_Display'] text-primary text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">What are your check-in and check-out times?</h3>
                <p>Check-in is from 3:00 PM to 8:00 PM, and check-out is by 11:00 AM. Early or late check-in may be possible with prior arrangement.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Is breakfast included in the room rate?</h3>
                <p>Yes, a full breakfast is included in your room rate. Please let us know if you have any dietary requirements.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Do you have parking available?</h3>
                <p>Yes, we offer free parking for our guests at Number 5.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">Can I book directly or only through Booking.com?</h3>
                <p>You can book through Booking.com or contact us directly by phone or email. We're happy to accommodate your booking preferences.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">What is your cancellation policy?</h3>
                <p>Our standard cancellation policy allows free cancellation up to 48 hours before arrival. Please check your booking confirmation for specific details.</p>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <p className="text-lg">Still have questions? Feel free to <a href="mailto:Number5AtlanticView@gmail.com" className="text-[#E63946] font-bold hover:underline">contact us</a>.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
