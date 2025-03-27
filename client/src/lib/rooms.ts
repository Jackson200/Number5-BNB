import { Room } from './types';
import seaViewRoom1 from '@assets/Double from Walk in wardrobe.jpg';
import seaViewRoom2 from '@assets/King Room for Business Card.jpeg';
import gardenViewRoom from '@assets/Back Bedroom with SK Bed.jpeg';

export const rooms: Room[] = [
  {
    id: 'sea-view-1',
    name: 'Panoramic Sea View Room 1',
    type: 'sea-view',
    description: 'Enjoy breathtaking views of the Atlantic Ocean from this beautifully appointed room with a comfortable double bed and modern en-suite bathroom.',
    price: 95,
    image: seaViewRoom1,
    features: ['Sea View', 'Smart TV', 'WiFi', 'Tea/Coffee', 'En-suite Bathroom', 'Luxury Toiletries'],
    size: '20m²',
    capacity: 2,
    bedType: 'Double Bed',
  },
  {
    id: 'sea-view-2',
    name: 'Panoramic Sea View Room 2',
    type: 'sea-view',
    description: 'Wake up to stunning sea views in this elegant room featuring a comfortable double bed, modern amenities, and a stylish en-suite bathroom.',
    price: 95,
    image: seaViewRoom2,
    features: ['Sea View', 'Smart TV', 'WiFi', 'Tea/Coffee', 'En-suite Bathroom', 'Luxury Toiletries'],
    size: '22m²',
    capacity: 2,
    bedType: 'Double Bed',
  },
  {
    id: 'garden-view',
    name: 'Garden View Room',
    type: 'garden-view',
    description: 'A peaceful retreat overlooking our tranquil garden, this comfortable room offers a quiet space to relax with all modern amenities and en-suite facilities.',
    price: 85,
    image: gardenViewRoom,
    features: ['Garden View', 'Smart TV', 'WiFi', 'Tea/Coffee', 'En-suite Bathroom', 'Luxury Toiletries'],
    size: '18m²',
    capacity: 2,
    bedType: 'Double Bed',
  }
];
