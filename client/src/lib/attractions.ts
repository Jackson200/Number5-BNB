import { Attraction } from './types';
import sunriseImage from '@assets/Back Bedroom Sunrise 16.01.2025.jpeg';
import kingRoomImage from '@assets/King Room for Business Card.jpeg';
import frontHouseImage from '@assets/Front of house for business card.jpeg';
import drivewayImage from '@assets/Driveway from Front Door 03.02.2025 for Business Card.jpeg';
import doubleRoomImage from '@assets/Double from Walk in wardrobe.jpg';
import breakfastImage from '@assets/Breakfast in sunroom 10.01.2025.jpeg';

export const attractions: Attraction[] = [
  {
    id: '1',
    name: "Giant's Causeway",
    description: "This UNESCO World Heritage site features 40,000 interlocking basalt columns, the result of an ancient volcanic eruption.",
    image: kingRoomImage,
    distance: "25 km",
    travelTime: "25 min drive",
    url: "https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway"
  },
  {
    id: '2',
    name: "Carrick-a-Rede Rope Bridge",
    description: "Test your nerve on this famous rope bridge suspended almost 100ft above sea level, connecting the mainland to Carrick Island.",
    image: doubleRoomImage,
    distance: "30 km",
    travelTime: "30 min drive",
    url: "https://www.nationaltrust.org.uk/visit/northern-ireland/carrick-a-rede"
  },
  {
    id: '3',
    name: "Bushmills Distillery",
    description: "Visit the world's oldest licensed whiskey distillery for guided tours and tastings of their award-winning Irish whiskey.",
    image: breakfastImage,
    distance: "18 km",
    travelTime: "20 min drive",
    url: "https://bushmills.com/"
  },
  {
    id: '4',
    name: "Dunluce Castle",
    description: "Explore the dramatic ruins of this medieval castle perched on the edge of a cliff, with breathtaking coastal views.",
    image: frontHouseImage,
    distance: "12 km",
    travelTime: "15 min drive",
    url: "https://www.communities-ni.gov.uk/articles/dunluce-castle"
  },
  {
    id: '5',
    name: "Portstewart Strand",
    description: "A stunning two-mile stretch of golden sand and rolling dunes, perfect for relaxing walks and beach activities.",
    image: sunriseImage,
    distance: "3 km",
    travelTime: "5 min drive",
    url: "https://www.nationaltrust.org.uk/visit/northern-ireland/portstewart-strand"
  },
  {
    id: '6',
    name: "Royal Portrush Golf Club",
    description: "World-renowned links golf course that hosted The Open Championship, offering challenging play in a stunning coastal setting.",
    image: drivewayImage,
    distance: "8 km",
    travelTime: "10 min drive",
    url: "https://www.royalportrushgolfclub.com/"
  }
];
