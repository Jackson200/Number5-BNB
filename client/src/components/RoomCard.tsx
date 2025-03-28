import React from 'react';
import { Room } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Bath } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface RoomCardProps {
  room: Room;
}

const RoomCard: React.FC<RoomCardProps> = ({ room }) => {
  return (
    <Card className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 transition-transform duration-300 hover:scale-[1.02]">
      <div className="relative pb-[66.25%]">
        <img
          src={room.image}
          alt={room.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
          {room.type === 'sea-view' ? 'Sea View' : 'Garden View'}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold font-['Playfair_Display']">{room.name}</h3>
          <span className="text-[#E63946] font-bold hidden">£{room.price}/night</span>
        </div>
        <div className="flex items-center space-x-4 mb-4 text-sm">
          <div className="flex items-center">
            <Bed className="mr-1 text-[#457B9D] h-4 w-4" />
            <span>{room.bedType}</span>
          </div>
          <div className="flex items-center">
            <Bath className="mr-1 text-[#457B9D] h-4 w-4" />
            <span>En-suite</span>
          </div>
        </div>
        <p className="mb-4">{room.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {room.features.map((feature, index) => (
            <Badge key={index} variant="secondary" className="bg-[#F1FAEE] text-[#457B9D] px-2 py-1 rounded-md text-sm">
              {feature}
            </Badge>
          ))}
        </div>
        <a
          href="https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html"
          target="_blank"
          rel="noopener noreferrer"
          className="block text-center bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md font-bold transition duration-150"
        >
          Check Availability
        </a>
      </CardContent>
    </Card>
  );
};

export default RoomCard;
