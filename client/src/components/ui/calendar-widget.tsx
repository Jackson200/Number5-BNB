import React from 'react';

interface Day {
  date: number;
  status: 'available' | 'booked';
}

// This component simulates a calendar widget that would be connected to Booking.com API
// In a real implementation, this data would come from the API
const CalendarWidget: React.FC = () => {
  // Sample data for display purposes
  const days: Day[] = [
    { date: 1, status: 'available' },
    { date: 2, status: 'available' },
    { date: 3, status: 'available' },
    { date: 4, status: 'booked' },
    { date: 5, status: 'booked' },
    { date: 6, status: 'booked' },
    { date: 7, status: 'available' },
    { date: 8, status: 'available' },
    { date: 9, status: 'available' },
    { date: 10, status: 'available' },
    { date: 11, status: 'available' },
    { date: 12, status: 'available' },
    { date: 13, status: 'booked' },
    { date: 14, status: 'booked' },
  ];

  return (
    <div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {/* Calendar Headers */}
        <div className="font-bold">Mon</div>
        <div className="font-bold">Tue</div>
        <div className="font-bold">Wed</div>
        <div className="font-bold">Thu</div>
        <div className="font-bold">Fri</div>
        <div className="font-bold">Sat</div>
        <div className="font-bold">Sun</div>
        
        {/* Calendar Days */}
        {days.map((day, index) => (
          <div 
            key={index} 
            className={`p-2 ${day.status === 'available' ? 'bg-[#98c1d9]' : 'bg-[#ee6c4d] text-white'}`}
          >
            {day.date}
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-xs">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#98c1d9] rounded-sm mr-1"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#ee6c4d] rounded-sm mr-1"></div>
          <span>Booked</span>
        </div>
      </div>
    </div>
  );
};

export default CalendarWidget;
