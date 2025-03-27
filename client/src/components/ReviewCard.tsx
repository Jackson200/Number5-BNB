import React from 'react';
import { Review } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';

interface ReviewCardProps {
  review: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ review }) => {
  return (
    <Card className="bg-white p-6 rounded-lg shadow-md">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mr-4">
              <span className="font-bold text-primary">{review.avatarInitial}</span>
            </div>
            <div>
              <h4 className="font-bold">{review.author}</h4>
              <p className="text-sm text-gray-600">{review.country}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-bold">{review.rating}</span>
          </div>
        </div>
        <p className="italic mb-4">{review.content}</p>
        <p className="text-sm text-gray-600">Stayed: {review.date}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
