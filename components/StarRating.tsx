
import React from 'react';
import { ICONS } from '../constants';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = maxRating - fullStars - (halfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <span key={`full-${i}`}>{ICONS.star_filled}</span>
      ))}
      {/* Note: Simplified to only show full or empty stars for this implementation */}
      {[...Array(emptyStars)].map((_, i) => (
        <span key={`empty-${i}`}>{ICONS.star_empty}</span>
      ))}
    </div>
  );
};

export default StarRating;
