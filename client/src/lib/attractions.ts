import { Attraction } from './types';
import giantsCausewayImage from '@assets/patrick-metzdorf-xyQnsGRmeNQ-unsplash.jpg';
import ropeImage from '@assets/k-mitch-hodge-kRZF4n8Eeyw-unsplash.jpg';
import bushmillsImage from '@assets/k-mitch-hodge-ehwSXFRfeVQ-unsplash.jpg';
import golfImage from '@assets/matt-aylward-Nmh-pEBRt2Y-unsplash.jpg';
import portstewartStrandImage from '@assets/premium_photo-1742560561466-c2c5f1854930.avif';
import frontHouseImage from '@assets/Front of house for business card.jpeg';
import sunsetBeachImage from '@assets/sunset_beach_view.png';

export const attractions: Attraction[] = [
  {
    id: '1',
    name: "Giant's Causeway",
    description: "This UNESCO World Heritage site features 40,000 interlocking basalt columns, the result of an ancient volcanic eruption.",
    image: giantsCausewayImage,
    distance: "25 km",
    travelTime: "25 min drive",
    url: "https://www.nationaltrust.org.uk/visit/northern-ireland/giants-causeway"
  },
  {
    id: '2',
    name: "Carrick-a-Rede Rope Bridge",
    description: "Test your nerve on this famous rope bridge suspended almost 100ft above sea level, connecting the mainland to Carrick Island.",
    image: ropeImage,
    distance: "30 km",
    travelTime: "30 min drive",
    url: "https://www.nationaltrust.org.uk/visit/northern-ireland/carrick-a-rede"
  },
  {
    id: '3',
    name: "Bushmills Distillery",
    description: "Visit the world's oldest licensed whiskey distillery for guided tours and tastings of their award-winning Irish whiskey.",
    image: bushmillsImage,
    distance: "18 km",
    travelTime: "20 min drive",
    url: "https://bushmills.com/"
  },
  {
    id: '4',
    name: "Dunluce Castle",
    description: "Explore the dramatic ruins of this medieval castle perched on the edge of a cliff, with breathtaking coastal views.",
    image: sunsetBeachImage,
    distance: "12 km",
    travelTime: "15 min drive",
    url: "https://www.communities-ni.gov.uk/articles/dunluce-castle"
  },
  {
    id: '5',
    name: "Portstewart Strand",
    description: "A stunning two-mile stretch of golden sand and rolling dunes, perfect for relaxing walks and beach activities.",
    image: portstewartStrandImage,
    distance: "3 km",
    travelTime: "5 min drive",
    url: "https://www.nationaltrust.org.uk/visit/northern-ireland/portstewart-strand"
  },
  {
    id: '6',
    name: "Royal Portrush Golf Club",
    description: "World-renowned links golf course that hosted The Open Championship, offering challenging play in a stunning coastal setting.",
    image: golfImage,
    distance: "8 km",
    travelTime: "10 min drive",
    url: "https://www.royalportrushgolfclub.com/"
  }
];