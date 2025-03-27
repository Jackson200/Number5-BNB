import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { BookingFormData } from '@/lib/types';
import { CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';
import CalendarWidget from './ui/calendar-widget';

const BookingWidget: React.FC = () => {
  const [bookingData, setBookingData] = useState<BookingFormData>({
    checkIn: undefined,
    checkOut: undefined,
    guests: 2,
    roomType: 'any',
  });

  const handleCheckInSelect = (date: Date | undefined) => {
    setBookingData({ ...bookingData, checkIn: date });
  };

  const handleCheckOutSelect = (date: Date | undefined) => {
    setBookingData({ ...bookingData, checkOut: date });
  };

  const handleGuestsChange = (value: string) => {
    setBookingData({ ...bookingData, guests: parseInt(value) });
  };

  const handleRoomTypeChange = (value: string) => {
    setBookingData({ ...bookingData, roomType: value });
  };

  const handleBookingSubmit = () => {
    // Redirect to Booking.com with the parameters
    const bookingUrl = "https://www.booking.com/hotel/gb/number-5-causeway-coast-and-glens.en-gb.html";
    window.open(bookingUrl, '_blank');
  };

  return (
    <div className="bg-white text-[#293241] p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 font-['Playfair_Display'] text-primary">Check Availability</h3>
      
      <div className="space-y-4">
        <div>
          <Label htmlFor="check-in" className="block text-sm font-bold mb-2">Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="check-in"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {bookingData.checkIn ? (
                  format(bookingData.checkIn, "PPP")
                ) : (
                  <span>Select check-in date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={bookingData.checkIn}
                onSelect={handleCheckInSelect}
                initialFocus
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="check-out" className="block text-sm font-bold mb-2">Check-out Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                id="check-out"
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {bookingData.checkOut ? (
                  format(bookingData.checkOut, "PPP")
                ) : (
                  <span>Select check-out date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={bookingData.checkOut}
                onSelect={handleCheckOutSelect}
                initialFocus
                disabled={(date) => 
                  date < new Date() || 
                  (bookingData.checkIn ? date <= bookingData.checkIn : false)
                }
              />
            </PopoverContent>
          </Popover>
        </div>

        <div>
          <Label htmlFor="guests" className="block text-sm font-bold mb-2">Guests</Label>
          <Select 
            defaultValue="2" 
            onValueChange={handleGuestsChange}
          >
            <SelectTrigger id="guests" className="w-full">
              <SelectValue placeholder="Select number of guests" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 Guest</SelectItem>
              <SelectItem value="2">2 Guests</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <Label htmlFor="room-type" className="block text-sm font-bold mb-2">Room Preference</Label>
          <Select 
            defaultValue="any" 
            onValueChange={handleRoomTypeChange}
          >
            <SelectTrigger id="room-type" className="w-full">
              <SelectValue placeholder="Select room type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any Room</SelectItem>
              <SelectItem value="sea-view-1">Sea View Room 1</SelectItem>
              <SelectItem value="sea-view-2">Sea View Room 2</SelectItem>
              <SelectItem value="garden-view">Garden View Room</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <Button 
          className="w-full bg-primary hover:bg-primary/90 text-white py-3 font-bold"
          onClick={handleBookingSubmit}
        >
          Check Availability
        </Button>
      </div>
      
      <div className="mt-8">
        <h4 className="font-bold mb-3">Upcoming Availability</h4>
        <CalendarWidget />
      </div>
    </div>
  );
};

export default BookingWidget;
