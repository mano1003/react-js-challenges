import React, { useState } from 'react';
import PropTypes from 'prop-types';

const StarRating = ({ totalStars = 5, onRatingChange, 
    allowHalf = true, size = 24, color = 'gold', className = '' }) => {
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoverRating(index);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  const handleClick = (index) => {
    const newRating = allowHalf && index % 1 !== 0 ? index : Math.ceil(index);
    setRating(newRating);
    if (onRatingChange) onRatingChange(newRating);
  };

  const renderStars = () => {
    return Array.from({ length:  (allowHalf ? (totalStars * 2 - 1) : totalStars * 1) }, (_, i) => {
      const index = allowHalf ? (i + 2) / 2 : i + 1;
      const isFilled = hoverRating >= index || (!hoverRating && rating >= index);

      return (
        <span
          key={index}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(index)}
          tabIndex={0}
          role="button"
          aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
          onKeyDown={(e) => e.key === 'Enter' && handleClick(index)}
          className={`cursor-pointer inline-flex ${className}`}
          style={{ fontSize: size, color: isFilled ? color : '#ccc', transition: 'color 0.3s' }}
        >
          {allowHalf && index % 1 !== 0 ? <>&#x272E;</> : <>&#x2605;</>} {/* Full or half star */}
        </span>
      );
    });
  };

  return (
    <div className="flex gap-1" role="radiogroup" aria-label="Star rating">
      {renderStars()}
    </div>
  );
};

StarRating.propTypes = {
  totalStars: PropTypes.number,
  onRatingChange: PropTypes.func,
  allowHalf: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default StarRating;
