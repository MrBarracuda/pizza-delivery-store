import { useState } from 'react'

export const Rating = ({ rating }: { rating: number }) => {
  const [selectedStarIndex, setSelectedStarIndex] = useState(rating)

  return (
    <div className="rating mt-1 mb-3">
      {[1, 2, 3, 4, 5].map((index) => (
        <input
          key={index}
          type="radio"
          name="rating-1"
          className="mask mask-star"
          checked={index === selectedStarIndex}
          onClick={() => setSelectedStarIndex(index)}
        />
      ))}
    </div>
  )
}
