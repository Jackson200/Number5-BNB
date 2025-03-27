import React from 'react';
import { Attraction } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface AttractionCardProps {
  attraction: Attraction;
}

const AttractionCard: React.FC<AttractionCardProps> = ({ attraction }) => {
  return (
    <Card className="bg-[#F1FAEE] rounded-lg overflow-hidden shadow-md">
      <img 
        src={attraction.image} 
        alt={attraction.name} 
        className="w-full h-48 object-cover"
      />
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2 font-['Playfair_Display']">{attraction.name}</h3>
        <p className="mb-4">{attraction.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-[#457B9D] flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {attraction.travelTime}
          </span>
          <a 
            href={attraction.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-[#E63946] hover:underline font-bold"
          >
            Learn more
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default AttractionCard;
