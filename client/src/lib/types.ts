export interface Room {
  id: string;
  name: string;
  type: 'sea-view' | 'garden-view';
  description: string;
  price: number;
  image: string;
  features: string[];
  size: string;
  capacity: number;
  bedType: string;
}

export interface Review {
  id: string;
  author: string;
  country: string;
  rating: number;
  content: string;
  date: string;
  avatarInitial: string;
}

export interface Attraction {
  id: string;
  name: string;
  description: string;
  image: string;
  distance: string;
  travelTime: string;
  url: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface BreakfastOption {
  id: string;
  name: string;
  description: string;
}

export interface BookingFormData {
  checkIn: Date | undefined;
  checkOut: Date | undefined;
  guests: number;
  roomType: string;
}
